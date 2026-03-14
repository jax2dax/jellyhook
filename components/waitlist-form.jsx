"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {Loading, Congrats} from "@/components/Loading"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("slimehook_waitlist")) setBlocked(true)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (blocked) return
    if (!email || !name || !company) return

    setLoading(true)
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, company }),
      })
      if (res.ok) {
        setSuccess(true)
        setEmail("")
        setName("")
        setCompany("")
        localStorage.setItem("slimehook_waitlist", "true")
        setBlocked(true)
      }
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  // === TEMP DEV MODE BUTTON ===
  function resetLocalStorage() {
    localStorage.removeItem("slimehook_waitlist")
    setBlocked(false)
    setSuccess(false)
  }

  if (blocked) {
    return (
      <div className="text-lime-400 font-medium flex flex-col items-center gap-2">
        You're already on the waitlist 🚀
        <Congrats />
        {/* TEMP RESET BUTTON */}
        <Button
          onClick={resetLocalStorage}
          className="bg-red-500 hover:bg-red-400 text-black text-sm"
        >
          Dev Reset Waitlist Lock
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full max-w-md bg-zinc-900 border border-lime-500/30 rounded-xl p-4 shadow-[0_0_20px_rgba(132,255,0,0.15)] hover:shadow-[0_0_40px_rgba(132,255,0,0.3)] transition"
    >
      <Field>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </Field>
      <Field>
        <Input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Field>
      <Field>
        <Input
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </Field>
      <Button
        disabled={loading}
        className="bg-lime-400 text-black hover:bg-lime-300"
      >
        {loading ? <Loading /> : "Join Waitlist"}
      </Button>
      {success && <span className="text-lime-400 text-sm text-center">You're in 🚀<Congrats /></span>}
    </form>
  )
}
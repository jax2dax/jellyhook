"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function SignInPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleGoogleLogin = async () => {
    setLoading(true)
    setErrorMessage("")
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    })

    if (error) {
      setErrorMessage(error.message)
    }
    setLoading(false)
  }

  return (
    <main className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col gap-6 w-80 p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold">Sign In</h1>

        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
        >
          {loading ? "Redirecting..." : "Sign in with Google"}
        </button>
      </div>
    </main>
  )
}
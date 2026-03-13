"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function SettingsPage() {
  const [businesses, setBusinesses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchBusinesses = async () => {
      setLoading(true)
      const { data, error } = await supabase.from("businesses").select("id, business_name")
      setLoading(false)
      if (error) return setError(error.message)
      setBusinesses(data)
    }
    fetchBusinesses()
  }, [])

  if (loading) return <p className="p-10">Loading businesses...</p>
  if (error) return <p className="p-10 text-red-500">{error}</p>

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      {businesses.length === 0 && <p>No businesses found.</p>}
      {businesses.map((b) => (
        <div key={b.id} className="border p-4 mb-2 rounded bg-white shadow">
          <p><strong>Business Name:</strong> {b.business_name}</p>
        </div>
      ))}
    </main>
  )
}
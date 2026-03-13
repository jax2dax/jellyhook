"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Dashboard() {
  const [user, setUser] = useState({ email: "dev@example.com", id: "dev-user-uuid" })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // DEV MODE: instantly load dashboard
    setLoading(false)
  }, [])

  if (loading) return <p className="p-10">Loading dashboard...</p>

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p>Welcome, {user.email}</p>
      <p className="text-gray-700 mt-4">
        DEV MODE: You can now test businesses, reviews, and replies directly.
      </p>
    </main>
  )
}
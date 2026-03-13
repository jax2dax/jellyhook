"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignInPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleDevLogin = async () => {
    setLoading(true)

    // DEV ONLY: Mock a user session
    const devUser = {
      id: "dev-user-id",
      email: "dev@example.com",
      role: "authenticated",
    }

    // Store user in localStorage (or any state) for testing
    localStorage.setItem("dev_user", JSON.stringify(devUser))

    // Wait a tiny bit to simulate login
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
    }, 500)
  }

  return (
    <main className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col gap-6 w-80 p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center">DEV LOGIN</h1>
        <p className="text-gray-600 text-sm text-center">
          Click below to bypass signup/login and access the app for testing.
        </p>
        <button
          onClick={handleDevLogin}
          disabled={loading}
          className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
        >
          {loading ? "Logging in..." : "Dev Login"}
        </button>
      </div>
    </main>
  )
}
"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true)
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false })
      setLoading(false)
      if (error) return setError(error.message)
      setReviews(data)
    }
    fetchReviews()
  }, [])

  if (loading) return <p className="p-10">Loading reviews...</p>
  if (error) return <p className="p-10 text-red-500">{error}</p>

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">Reviews</h1>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map((r) => (
        <div key={r.id} className="border p-4 mb-2 rounded bg-white shadow">
          <p><strong>Author:</strong> {r.author}</p>
          <p><strong>Rating:</strong> {r.rating}</p>
          <p><strong>Comment:</strong> {r.comment}</p>
          <p><strong>Status:</strong> {r.status}</p>
        </div>
      ))}
    </main>
  )
}
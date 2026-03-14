// app/api/waitlist/route.js
import { supabaseServer } from "@/lib/supabase-server" // ✅ use server-only client

export async function POST(req) {

  const { email, name, company } = await req.json()

  if (!email || !name || !company) {
    return Response.json({ error: "Missing fields" }, { status: 400 })
  }

  const { error } = await supabaseServer
    .from("waitlist")
    .insert([{ email, name, company }])

  if (error) {
    if (error.code === "23505") {
      return Response.json({ error: "Email already joined waitlist" }, { status: 409 })
    }
    return Response.json({ error: "Database error" }, { status: 500 })
  }

  return Response.json({ success: true })
}
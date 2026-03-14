import { Badge } from "@/components/ui/badge"

export default function ReviewCard({ name, role, review }) {

  return (
    <div className="bg-zinc-900 border border-lime-500/20 rounded-xl p-6">

      <p className="text-gray-300 mb-6">
        "{review}"
      </p>

      <div className="flex items-center justify-between">

        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>

        <Badge className="bg-lime-500 text-black">
          Verified
        </Badge>

      </div>

    </div>
  )
}
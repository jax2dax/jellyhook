export default function FeatureCard({ title, description }) {

  return (
    <div className="p-6 rounded-xl border border-lime-500/20 bg-zinc-900 hover:border-lime-400 transition">

      <h3 className="text-xl font-semibold text-lime-400 mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm">
        {description}
      </p>

    </div>
  )
}
import WaitlistForm from "@/components/waitlist-form"
import FeatureCard from "@/components/feature-card"
import ReviewCard from "@/components/review-card"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#84ff0015,transparent_60%)]"/>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(132,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(132,255,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <section className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center relative z-10">

        <Badge className="bg-lime-500 text-black mb-6">
          AI Sales Intelligence
        </Badge>

        <h1 className="text-6xl font-bold leading-tight">
          Turn Every Lead Into  
          <span className="text-lime-400"> Sales Intelligence</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Slimehook analyzes behavior, enriches data, and predicts which leads
          actually close — then tells your sales team exactly who to contact.
        </p>

        <div className="mt-10 flex justify-center">
          <WaitlistForm />
        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <FeatureCard
          title="Lead Enrichment"
          description="Automatically expand every lead into a full company profile."
        />

        <FeatureCard
          title="Behavior Tracking"
          description="See exactly how prospects interact with your website."
        />

        <FeatureCard
          title="AI Deal Prediction"
          description="Predict deal probability and expected revenue."
        />

        <FeatureCard
          title="CRM Intelligence Layer"
          description="Push insights directly into HubSpot or Salesforce."
        />

      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Sales Teams Love It
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <ReviewCard
            name="Daniel Ross"
            role="Head of Sales @ SaaSify"
            review="Slimehook shows us which leads will actually close. It's like having an AI sales analyst."
          />

          <ReviewCard
            name="Maya Chen"
            role="Growth Lead @ Nimbus"
            review="Our reps stopped wasting time chasing bad leads. Conversion rates jumped immediately."
          />

          <ReviewCard
            name="Alex Rivera"
            role="Founder @ LaunchLabs"
            review="The intent tracking alone is insane. You instantly know who is ready to buy."
          />

        </div>

      </section>

      <section className="py-28 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Join the Slimehook Waitlist
        </h2>

        <p className="text-gray-400 mb-10">
          Early users get lifetime founder pricing.
        </p>

        <div className="flex justify-center">
          <WaitlistForm />
        </div>

      </section>

      <footer className="border-t border-lime-500/20 py-8 text-center text-gray-500">
        © {new Date().getFullYear()} Slimehook
      </footer>

    </main>
  )
}
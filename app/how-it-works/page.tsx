import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'See exactly how Urban Werkz embeds as your sales team — from discovery call to closed deals, in a transparent 6-step process.',
}

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'The Urban Werkz team spends time understanding your product, ideal customer profile (ICP), target market, competitive landscape, and revenue goals. No generic templates — we build a picture of exactly who you sell to and why.',
  },
  {
    num: '02',
    title: 'Partner Onboarding',
    desc: 'We build your sales playbook from scratch — objection handling, value propositions, pricing talk tracks, and demo scripts. CRM is configured to your pipeline stages. Your brand standards are briefed to the entire team.',
  },
  {
    num: '03',
    title: 'Team Deployment',
    desc: 'Your Urban Werkz sales pod begins prospecting and outbound outreach. We use a multi-channel approach — email, LinkedIn, phone — targeting only vetted, ICP-matched prospects.',
  },
  {
    num: '04',
    title: 'Pipeline Building',
    desc: 'Qualified leads enter your CRM with full context — company size, decision-maker contact, meeting notes, and deal stage. Regular partner check-ins keep you fully informed without drowning in detail.',
  },
  {
    num: '05',
    title: 'Close & Report',
    desc: 'Deals are closed, commissions tracked, and weekly reports delivered. You see every metric — conversion rate, pipeline velocity, activity numbers, and revenue generated.',
  },
  {
    num: '06',
    title: 'Scale',
    desc: 'As results prove out, we expand. More reps, new territories, additional services. Urban Werkz scales with your ambition — no long ramp times, no recruitment overhead.',
  },
]

const faqs = [
  {
    q: 'How do you learn our product fast enough?',
    a: "Our onboarding process is designed for speed. We run structured product briefings, shadow your existing team (if any), and build a comprehensive internal knowledge base within the first two weeks. Our reps are trained sales professionals who pick up products quickly — and we never go live until we're confident.",
  },
  {
    q: 'Do we retain control over our brand?',
    a: 'Absolutely. Urban Werkz operates as an extension of your team, not a separate entity. All outreach, collateral, and communications are reviewed and approved by you before going live. Your brand voice is our brand voice.',
  },
  {
    q: 'What CRM do you use?',
    a: "We work with your existing CRM — HubSpot, Salesforce, Pipedrive, or others. If you don't have one, we'll recommend and set up the right tool for your stage and budget. We manage the CRM on your behalf.",
  },
  {
    q: 'How long before we see results?',
    a: 'Most partners see their first qualified meetings within 2–3 weeks of deployment. Revenue timelines depend on your sales cycle — typically 6–12 weeks from first meeting to close for B2B products. We set realistic targets during onboarding.',
  },
  {
    q: 'What happens if targets are not met?',
    a: "We're committed to performance. If agreed targets are consistently missed, we conduct a joint review — strategy, messaging, ICP, and market conditions. Our hybrid and commission models align our incentives with yours: we don't win unless you win.",
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="section-label text-orange mb-4">The Process</div>
            <h1 className="font-display text-[clamp(48px,7vw,80px)] text-white leading-none max-w-3xl">
              FROM FIRST CALL TO CLOSED DEALS
            </h1>
            <p className="text-white/60 font-body mt-6 text-lg max-w-2xl leading-relaxed">
              A transparent, six-step process that embeds Urban Werkz as your revenue engine — from day one to scale.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Steps */}
      <section className="py-section bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-orange/20 hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <AnimateOnScroll key={step.num} delay={i * 0.08}>
                  <div className="flex gap-10 items-start">
                    {/* Number */}
                    <div className="relative flex-shrink-0 hidden md:flex">
                      <div className="w-16 h-16 rounded-full bg-orange flex items-center justify-center z-10">
                        <span className="font-display text-xl text-white">{step.num}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 card">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="md:hidden font-display text-3xl text-orange">{step.num}</span>
                        <h3 className="font-display text-2xl text-ink tracking-wide">{step.title}</h3>
                      </div>
                      <p className="text-muted font-body text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-section-sm bg-navy">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <AnimateOnScroll direction="left">
            <h2 className="font-display text-display-sm text-white">READY TO START?</h2>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Book a Discovery Call →
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-label mb-3">Common Questions</div>
              <h2 className="font-display text-display-sm text-ink">FREQUENTLY ASKED</h2>
            </div>
          </AnimateOnScroll>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <details className="card group">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                    <span className="font-semibold text-ink font-body text-sm pr-4">{faq.q}</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cream flex items-center justify-center text-orange font-bold transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-muted text-sm font-body leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </p>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

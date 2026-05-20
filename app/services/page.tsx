import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Urban Werkz offers outsourced B2B sales services — from field sales teams to CRM management, lead generation, analytics, and go-to-market strategy.',
}

const services = [
  {
    title: 'Outsourced Sales Team',
    desc: 'Dedicated field and inside sales reps, trained on your product, managed by Urban Werkz, reporting to you. Your brand, our muscle.',
    icon: '01',
  },
  {
    title: 'CRM & Pipeline Management',
    desc: 'Full CRM setup, pipeline hygiene, follow-up sequences, and deal stage tracking. We make sure no opportunity falls through the cracks.',
    icon: '02',
  },
  {
    title: 'Quality Lead Generation',
    desc: 'Vetted, ICP-matched leads delivered directly to your CRM. No cold lists. Every lead is researched and qualified before it hits your pipeline.',
    icon: '03',
  },
  {
    title: 'Sales Reporting & Analytics',
    desc: 'Weekly and monthly KPI dashboards. Partner-facing reports on conversion rates, pipeline velocity, and revenue attribution.',
    icon: '04',
  },
  {
    title: 'Sales Training & Onboarding',
    desc: 'Rapid ramp-up of new sales reps to your product, ICP, and objection handling. Your playbook, built and executed by our team.',
    icon: '05',
  },
  {
    title: 'Go-to-Market Strategy',
    desc: 'Market entry planning, competitive positioning, and territory mapping for new product launches or geographic expansion.',
    icon: '06',
  },
]

const models = [
  {
    name: 'Retainer Model',
    tagline: 'Predictable monthly investment',
    desc: 'A monthly fixed fee for a dedicated Urban Werkz sales pod. Full team embedded in your business — predictable cost, predictable capacity.',
    best: 'Best for companies that want consistent sales activity with budget certainty.',
    highlight: false,
  },
  {
    name: 'Hybrid Model',
    tagline: 'The most popular choice',
    desc: 'A base retainer plus performance commission. Skin in the game on both sides — you get committed capacity, we get rewarded for results.',
    best: 'Best for companies that want alignment without full performance risk.',
    highlight: true,
  },
  {
    name: 'Commission Model',
    tagline: 'Pure performance, zero fixed cost',
    desc: 'A percentage of closed revenue. Zero upfront commitment — you only pay when Urban Werkz closes deals.',
    best: 'Best for early-stage companies or high-velocity products with strong close rates.',
    highlight: false,
  },
]

const comparisonRows = [
  { label: 'Monthly Fixed Cost', retainer: '✓ Yes', hybrid: '✓ Partial', commission: '✗ None' },
  { label: 'Performance Commission', retainer: '✗ No', hybrid: '✓ Yes', commission: '✓ Yes' },
  { label: 'Team Commitment', retainer: 'Full pod', hybrid: 'Full pod', commission: 'Flex' },
  { label: 'Budget Predictability', retainer: 'High', hybrid: 'Medium', commission: 'Low' },
  { label: 'UW Skin in the Game', retainer: 'Moderate', hybrid: 'High', commission: 'Maximum' },
  { label: 'Best for', retainer: 'Established cos', hybrid: 'Most companies', commission: 'Startups / high-velocity' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="section-label text-orange mb-4">What We Offer</div>
            <h1 className="font-display text-[clamp(48px,7vw,80px)] text-white leading-none max-w-3xl">
              YOUR COMPLETE OUTSOURCED SALES FUNCTION
            </h1>
            <p className="text-white/60 font-body mt-6 text-lg max-w-2xl leading-relaxed">
              Six integrated services that together replace — or augment — your entire sales team.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-section bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.08}>
                <div className="card h-full flex flex-col gap-4">
                  <div className="font-display text-[56px] text-orange/20 leading-none">{s.icon}</div>
                  <h3 className="font-display text-xl text-ink tracking-wide">{s.title}</h3>
                  <p className="text-muted text-sm font-body leading-relaxed flex-1">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-label mb-3">Flexible Arrangements</div>
              <h2 className="font-display text-display-sm text-ink">ENGAGEMENT MODELS</h2>
              <p className="text-muted font-body mt-4 max-w-xl mx-auto">
                We work the way that makes sense for your business. Three models, one outcome — more revenue.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {models.map((m, i) => (
              <AnimateOnScroll key={m.name} delay={i * 0.1}>
                <div
                  className={`rounded-card p-8 h-full flex flex-col gap-4 ${
                    m.highlight
                      ? 'bg-navy text-white'
                      : 'bg-cream border border-border'
                  }`}
                >
                  {m.highlight && (
                    <div className="text-orange text-xs font-semibold tracking-widest uppercase">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`font-display text-xl tracking-wide ${m.highlight ? 'text-white' : 'text-ink'}`}>
                    {m.name}
                  </h3>
                  <p className={`text-xs font-semibold tracking-widest uppercase ${m.highlight ? 'text-orange' : 'text-orange'}`}>
                    {m.tagline}
                  </p>
                  <p className={`text-sm font-body leading-relaxed flex-1 ${m.highlight ? 'text-white/70' : 'text-muted'}`}>
                    {m.desc}
                  </p>
                  <div className={`text-xs font-body leading-relaxed border-t pt-4 ${m.highlight ? 'border-white/10 text-white/50' : 'border-border text-muted'}`}>
                    {m.best}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Comparison table */}
          <AnimateOnScroll>
            <div className="overflow-x-auto rounded-card shadow-card">
              <table className="w-full bg-white text-sm font-body">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold">Retainer</th>
                    <th className="text-center px-6 py-4 font-semibold text-orange">Hybrid</th>
                    <th className="text-center px-6 py-4 font-semibold">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-cream/50' : 'bg-white'}>
                      <td className="px-6 py-3 font-medium text-ink">{row.label}</td>
                      <td className="px-6 py-3 text-center text-muted">{row.retainer}</td>
                      <td className="px-6 py-3 text-center text-ink font-medium">{row.hybrid}</td>
                      <td className="px-6 py-3 text-center text-muted">{row.commission}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-orange">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-display-sm text-white mb-4">NOT SURE WHICH MODEL SUITS YOU?</h2>
            <p className="text-white/80 font-body mb-8 max-w-lg mx-auto">
              Book a free 30-minute discovery call. We'll analyse your current sales motion and recommend the right engagement.
            </p>
            <Link href="/contact" className="btn-ghost px-8 py-4">
              Enquire Now →
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

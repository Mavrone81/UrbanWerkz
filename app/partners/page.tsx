import type { Metadata } from 'next'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { PartnerEnquiryForm } from './PartnerClient'

export const metadata: Metadata = {
  title: 'Our Partners',
  description: 'See the results Urban Werkz has delivered for partner companies across Southeast Asia. View case studies and become a partner.',
}

const caseStudies = [
  {
    industry: 'SaaS Platform',
    result: '40% faster pipeline fill',
    metric: '3-month ramp to revenue',
    tag: 'Technology',
  },
  {
    industry: 'Fintech Startup',
    result: '2× qualified meetings',
    metric: 'in the first 30 days',
    tag: 'Financial Services',
  },
  {
    industry: 'B2B Services Firm',
    result: 'SGD 1.2M pipeline',
    metric: 'built in 90 days',
    tag: 'Professional Services',
  },
  {
    industry: 'HR Tech Platform',
    result: '18 enterprise meetings',
    metric: 'closed in month 2',
    tag: 'HR Technology',
  },
  {
    industry: 'Logistics Tech',
    result: '3 countries entered',
    metric: 'simultaneously',
    tag: 'Supply Chain',
  },
  {
    industry: 'Green Technology',
    result: '60% shorter sales cycle',
    metric: 'via playbook optimisation',
    tag: 'Green Tech',
  },
]

const testimonials = [
  {
    quote: "Within 6 weeks of onboarding Urban Werkz, we had a full pipeline of enterprise prospects. The quality of leads — actual decision-makers — was unlike anything we'd generated ourselves.",
    name: 'CEO',
    company: 'SaaS Platform, Singapore',
  },
  {
    quote: "They understood our product faster than any hire we'd made internally. The weekly reports are genuinely useful — not vanity metrics.",
    name: 'Founder',
    company: 'Fintech Startup, Malaysia',
  },
]

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="section-label text-orange mb-4">Our Partners</div>
            <h1 className="font-display text-[clamp(48px,7vw,80px)] text-white leading-none max-w-3xl">
              COMPANIES THAT TRUST US WITH THEIR REVENUE
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-section bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-label mb-3">Results</div>
              <h2 className="font-display text-display-sm text-ink">PARTNER CASE STUDIES</h2>
              <p className="text-muted font-body mt-4 max-w-lg mx-auto text-sm">
                Anonymised to protect partner confidentiality. Real numbers, real outcomes.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <div className="card h-full flex flex-col gap-4">
                  <span className="text-xs font-semibold text-orange tracking-widest uppercase">{cs.tag}</span>
                  <h3 className="font-display text-lg text-ink">{cs.industry}</h3>
                  <div className="flex-1">
                    <div className="font-display text-3xl text-navy">{cs.result}</div>
                    <div className="text-muted text-sm mt-1">{cs.metric}</div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-label text-orange mb-3">Partner Voices</div>
              <h2 className="font-display text-display-sm text-white">WHAT THEY SAY</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="rounded-card border border-white/10 p-8 flex flex-col gap-4">
                  <p className="text-white/70 font-body text-sm leading-relaxed italic flex-1">"{t.quote}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs mt-0.5">{t.company}</div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner Form */}
      <section id="become-partner" className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <div className="section-label mb-3">Work With Us</div>
              <h2 className="font-display text-display-sm text-ink">BECOME A PARTNER</h2>
              <p className="text-muted font-body mt-4 text-sm">
                Tell us about your business. We respond within 1 business day.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <PartnerEnquiryForm />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

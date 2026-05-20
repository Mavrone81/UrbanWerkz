import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'About Us',
  description: "Learn about Urban Werkz — our origin, mission, values, and the team behind Southeast Asia's partner-first sales outsourcing firm.",
}

const values = [
  {
    title: 'Partner First',
    desc: 'Your growth is our KPI. Every decision we make is measured against the impact it has on your pipeline and revenue.',
  },
  {
    title: 'Radical Transparency',
    desc: 'No black boxes. You see every lead, every call, every report. We operate in full daylight.',
  },
  {
    title: 'Performance Culture',
    desc: "We're a team of closers. We celebrate results, learn from misses, and never settle for average.",
  },
  {
    title: 'Quality Over Quantity',
    desc: "We'd rather deliver 10 qualified opportunities than 100 cold contacts. Your brand matters to us.",
  },
]

const milestones = [
  { year: '2022', event: 'Urban Werkz founded in Singapore with one founding partner.' },
  { year: '2023', event: 'First 10 client partnerships closed. CRM methodology formalised.' },
  { year: '2024', event: 'Expanded into Malaysia and Indonesia. Team grew to 20 sales reps.' },
  { year: '2025', event: '50+ active partners. Multi-million SGD in partner revenue attributed. Series A discussions.' },
  { year: '2026', event: 'Regional HQ established. Digital presence launch. Talent programme scaled.' },
]

const team = [
  { name: 'Vincent Lim', title: 'Founder & Managing Director', initials: 'VL', photo: '/team/vincent-lim.png' },
  { name: 'Samuel Fu', title: 'Head of Sales', initials: 'SF', photo: '/team/samuel-fu.png' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="section-label text-orange mb-4">About Urban Werkz</div>
            <h1 className="font-display text-[clamp(48px,7vw,80px)] text-white leading-none max-w-3xl">
              THE SALES ARM YOUR BUSINESS DESERVES
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-section bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="left">
              <div className="section-label mb-4">Our Story</div>
              <h2 className="font-display text-display-sm text-ink mb-6">WHY WE EXIST</h2>
              <div className="space-y-4 text-muted font-body leading-relaxed">
                <p>
                  Urban Werkz was born from a simple observation: great products fail in the market not because they're bad, but because their founders don't have the time, expertise, or bandwidth to build a proper sales function.
                </p>
                <p>
                  We built Urban Werkz to close that gap. Not as a vendor, but as a genuine extension of our partners' teams — embedded, accountable, and invested in their growth.
                </p>
                <p>
                  Today, we operate across Singapore, Malaysia, and Indonesia, serving over 50 partner companies across SaaS, fintech, professional services, and B2B products.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right">
              <div className="bg-navy rounded-card p-10 text-white">
                <div className="font-display text-display-md text-orange mb-4">MISSION</div>
                <p className="font-body text-lg text-white/80 leading-relaxed italic">
                  "To become Southeast Asia's most trusted third-party sales partner — by delivering real results with radical transparency."
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-label mb-3">What We Stand For</div>
              <h2 className="font-display text-display-sm text-ink">OUR CORE VALUES</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 0.1}>
                <div className="card flex gap-5">
                  <div className="w-1 flex-shrink-0 bg-orange rounded-full" />
                  <div>
                    <h3 className="font-display text-lg text-ink tracking-wide mb-2">{v.title}</h3>
                    <p className="text-muted text-sm font-body leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-section bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-label mb-3">Meet the Team</div>
              <h2 className="font-display text-display-sm text-ink">LEADERSHIP</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 0.1}>
                <div className="card text-center">
                  <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center mx-auto mb-5 overflow-hidden">
                    {member.photo ? (
                      <Image src={member.photo} alt={member.name} width={96} height={96} className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-display text-2xl text-orange">{member.initials}</span>
                    )}
                  </div>
                  <h3 className="font-semibold text-ink font-body">{member.name}</h3>
                  <p className="text-muted text-sm mt-1 mb-4">{member.title}</p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-orange transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-section bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-label text-orange mb-3">Our Journey</div>
              <h2 className="font-display text-display-sm text-white">MILESTONES</h2>
            </div>
          </AnimateOnScroll>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <AnimateOnScroll key={m.year} delay={i * 0.1}>
                  <div className="flex gap-8 items-start">
                    <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-orange flex items-center justify-center z-10">
                      <span className="font-display text-sm text-white leading-none">{m.year}</span>
                    </div>
                    <div className="pt-4">
                      <p className="text-white/70 font-body text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="py-section-sm bg-orange">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-display-sm text-white mb-4">WE'RE HIRING</h2>
            <p className="text-white/80 font-body mb-8 max-w-lg mx-auto">
              Join a fast-growing sales team where performance is celebrated and careers are built.
            </p>
            <Link href="/join-us" className="btn-ghost px-8 py-4">
              View Open Roles →
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

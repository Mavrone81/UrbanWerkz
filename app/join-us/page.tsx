import type { Metadata } from 'next'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { ApplicationFormComponent, TalentCommunity } from './JoinUsClient'

const roles = [
  {
    title: 'Sales Executive — B2B',
    type: 'Full-time',
    location: 'Singapore',
    desc: 'Own a partner account end-to-end. Prospect, qualify, demo, and close. Strong base + commission.',
  },
  {
    title: 'Business Development Representative',
    type: 'Full-time',
    location: 'Hybrid',
    desc: 'Drive top-of-funnel. Multi-channel outbound — email, LinkedIn, calls. Fast track to AE.',
  },
  {
    title: 'Senior Sales Consultant',
    type: 'Full-time',
    location: 'Singapore',
    desc: 'Lead complex enterprise deals and mentor junior reps. 5+ years B2B sales experience required.',
  },
  {
    title: 'Commission-Based Sales Agent',
    type: 'Flexible',
    location: 'Remote',
    desc: 'Pure performance. Work on your terms, earn on your results. Experienced closers only.',
  },
]

export const metadata: Metadata = {
  title: 'Careers — Join Us',
  description: 'Build your sales career at Urban Werkz. View open roles, apply, or join our talent community. Uncapped earnings, real mentorship, fast growth.',
}

const benefits = [
  {
    title: 'Uncapped Earnings',
    desc: 'OTE that reflects your output. Top performers earn significantly above base — no arbitrary caps.',
    icon: '💰',
  },
  {
    title: 'Real Mentorship',
    desc: 'Direct access to senior sales leadership. Structured coaching, weekly role-plays, deal strategy sessions.',
    icon: '🎯',
  },
  {
    title: 'Career Growth',
    desc: 'Fast promotion cycles tied to results, not tenure. We build sales leaders from within.',
    icon: '📈',
  },
  {
    title: 'Modern Tools',
    desc: 'Best-in-class CRM, sales engagement platforms, and prospecting tools. No spreadsheet nonsense.',
    icon: '⚡',
  },
]

export default function JoinUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="section-label text-orange mb-4">Careers at Urban Werkz</div>
            <h1 className="font-display text-[clamp(48px,7vw,80px)] text-white leading-none max-w-3xl">
              BUILD YOUR SALES CAREER HERE
            </h1>
            <p className="text-white/60 font-body mt-6 text-lg max-w-2xl leading-relaxed">
              Performance-driven. Fast-growing. Team-oriented. If you close deals and want to be rewarded for it, you belong here.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why UW */}
      <section className="py-section bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-label mb-3">Why Join Us</div>
              <h2 className="font-display text-display-sm text-ink">THE URBAN WERKZ DIFFERENCE</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 0.1}>
                <div className="card text-center h-full flex flex-col gap-4">
                  <div className="text-4xl">{b.icon}</div>
                  <h3 className="font-display text-lg text-ink">{b.title}</h3>
                  <p className="text-muted text-sm font-body leading-relaxed flex-1">{b.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="roles" className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-label mb-3">Now Hiring</div>
              <h2 className="font-display text-display-sm text-ink">OPEN ROLES</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role, i) => (
              <AnimateOnScroll key={role.title} delay={i * 0.08}>
                <div className="card flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-orange/10 text-orange font-semibold px-3 py-1 rounded-full">
                      {role.type}
                    </span>
                    <span className="text-xs bg-navy/5 text-navy font-semibold px-3 py-1 rounded-full">
                      {role.location}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-ink">{role.title}</h3>
                  <p className="text-muted text-sm font-body leading-relaxed flex-1">{role.desc}</p>
                  <a
                    href="#apply"
                    className="btn-primary self-start text-xs px-5 py-2.5"
                  >
                    Apply Now →
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-section bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <div className="section-label mb-3">Apply Now</div>
              <h2 className="font-display text-display-sm text-ink">YOUR APPLICATION</h2>
              <p className="text-muted font-body mt-4 text-sm">
                We review every application personally. No ATS ghosting — real humans, real feedback.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <ApplicationFormComponent />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Talent Community */}
      <section id="talent" className="py-section-sm bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-display-sm text-white mb-4">
              DON'T SEE A ROLE THAT FITS?
            </h2>
            <p className="text-white/60 font-body mb-8">
              Join our talent community. When the right role opens, you'll be first to know.
            </p>
            <TalentCommunity />
            <p className="text-white/30 text-xs mt-4">
              By joining, you consent to Urban Werkz storing your details per PDPA guidelines.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

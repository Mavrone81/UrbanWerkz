'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import CountUp from '@/components/CountUp'

const trustStats = [
  { value: 50, suffix: '+', label: 'Partners Served' },
  { value: 3, suffix: '', label: 'Countries' },
  { value: 98, suffix: '%', label: 'Partner Retention' },
]

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'We Are Your Sales Team',
    desc: 'Embed Urban Werkz as your dedicated external sales arm. Trained reps, proven playbooks, zero overhead.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'We Bring the Leads',
    desc: 'Proprietary lead generation with CRM pipeline management. Vetted, ICP-matched prospects delivered to your inbox.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'We Report Everything',
    desc: 'Full transparency with weekly KPI dashboards, pipeline reviews, and conversion analytics. No guessing.',
  },
]

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We learn your product, ICP, and goals.' },
  { num: '02', title: 'Partner Onboarding', desc: 'Sales playbook built, CRM configured.' },
  { num: '03', title: 'Team Deployment', desc: 'Reps begin prospecting immediately.' },
  { num: '04', title: 'Results & Scale', desc: 'Deals close, reports land, we expand.' },
]

const testimonials = [
  {
    quote: 'Urban Werkz gave us a full sales function in 3 weeks. We went from zero pipeline to 40 qualified conversations in the first month.',
    name: 'Marcus T.',
    company: 'SaaS Platform, Singapore',
  },
  {
    quote: "The transparency is unlike anything we've experienced with an outsourced team. Weekly reports, real numbers, no fluff.",
    name: 'Priya S.',
    company: 'Fintech Startup, Malaysia',
  },
  {
    quote: 'Our revenue team was overwhelmed. UW stepped in and handled the entire outbound motion while we focused on closing.',
    name: 'James L.',
    company: 'B2B Services, Singapore',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
        {/* Background gradient animation */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(ellipse at 20% 50%, #E8500A 0%, transparent 60%)',
              'radial-gradient(ellipse at 80% 20%, #E8500A 0%, transparent 60%)',
              'radial-gradient(ellipse at 50% 80%, #E8500A 0%, transparent 60%)',
              'radial-gradient(ellipse at 20% 50%, #E8500A 0%, transparent 60%)',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label text-orange mb-4"
            >
              B2B Sales Outsourcing · Singapore & Southeast Asia
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[clamp(52px,8vw,88px)] text-white leading-none mb-6"
            >
              YOUR SALES.
              <br />
              <span className="text-orange">MANAGED.</span>
              <br />
              SCALED. CLOSED.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg font-body leading-relaxed max-w-2xl mb-10"
            >
              Urban Werkz embeds as your dedicated outsourced revenue team — delivering qualified leads, managing your CRM, and closing deals while you focus on building your product.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                Get a Free Sales Audit
              </Link>
              <Link href="/how-it-works" className="btn-ghost px-8 py-4 text-base">
                See How It Works
              </Link>
            </motion.div>
          </div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 pt-10 border-t border-white/10"
          >
            <div className="flex flex-wrap gap-10 md:gap-16">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-[44px] text-orange leading-none">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/50 text-sm font-body mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition — 3 Pillars */}
      <section className="py-section bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-label mb-3">Why Urban Werkz</div>
              <h2 className="font-display text-display-sm text-ink">THE 3 PILLARS</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 0.12}>
                <div className="card flex flex-col gap-5 h-full">
                  <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center text-orange">
                    {p.icon}
                  </div>
                  <h3 className="font-display text-xl text-ink tracking-wide">{p.title}</h3>
                  <p className="text-muted text-sm font-body leading-relaxed flex-1">{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Mini */}
      <section className="py-section bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-label text-orange mb-3">The Process</div>
              <h2 className="font-display text-display-sm text-white">HOW IT WORKS</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 0.1}>
                <div className="relative text-center">
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-white/10" />
                  )}
                  <div className="font-display text-[56px] text-orange leading-none mb-3">{step.num}</div>
                  <h3 className="font-display text-base text-white tracking-wide mb-2">{step.title}</h3>
                  <p className="text-white/50 text-xs font-body leading-relaxed">{step.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll delay={0.4}>
            <div className="text-center mt-12">
              <Link href="/how-it-works" className="btn-ghost px-8 py-3">
                See the Full Process
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-section bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-label mb-3">Partner Stories</div>
              <h2 className="font-display text-display-sm text-ink">WHAT OUR PARTNERS SAY</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 0.1}>
                <div className="card flex flex-col gap-4 h-full">
                  <div className="text-orange text-3xl leading-none font-display">"</div>
                  <p className="text-ink text-sm font-body leading-relaxed flex-1 italic">
                    {t.quote}
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-ink text-sm">{t.name}</div>
                    <div className="text-muted text-xs mt-0.5">{t.company}</div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Teaser */}
      <section className="py-section-sm bg-orange">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <AnimateOnScroll direction="left" className="max-w-xl">
              <h2 className="font-display text-display-sm text-white leading-none mb-4">
                JOIN A HIGH-PERFORMANCE SALES TEAM
              </h2>
              <p className="text-white/80 font-body text-base leading-relaxed">
                Uncapped earnings. Real mentorship. Career growth in one of SEA's fastest-growing sales outfits.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right">
              <Link href="/join-us" className="btn-ghost whitespace-nowrap px-8 py-4 text-base">
                View Open Roles →
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-section bg-navy">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <div className="section-label text-orange mb-4">Ready to scale?</div>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] text-white leading-none mb-6">
              READY TO HAND OFF YOUR SALES?
            </h2>
            <p className="text-white/60 font-body text-base max-w-xl mx-auto mb-10">
              Book a free 30-minute call. We'll review your current sales motion and show you exactly how Urban Werkz can accelerate your revenue.
            </p>
            <Link href="/contact" className="btn-primary px-10 py-4 text-base">
              Book a Free Call
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

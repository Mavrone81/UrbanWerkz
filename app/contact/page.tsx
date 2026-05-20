import type { Metadata } from 'next'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { ContactFormComponent } from './ContactClient'

const contactDetails = [
  {
    label: 'Email',
    value: 'urbanwerkz@gmail.com',
    href: 'mailto:urbanwerkz@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Office',
    value: '61 Kaki Bukit Ave 1, #06-18, Singapore',
    href: null as string | null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Business Hours',
    value: 'Mon–Fri, 9 AM – 6 PM SGT',
    href: null as string | null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Response Time',
    value: 'Within 1 business day',
    href: null as string | null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Urban Werkz. Book a free sales audit, enquire about a partnership, or reach out for any other reason.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="section-label text-orange mb-4">Get in Touch</div>
            <h1 className="font-display text-[clamp(48px,7vw,80px)] text-white leading-none max-w-3xl">
              LET'S TALK ABOUT YOUR SALES
            </h1>
            <p className="text-white/60 font-body mt-6 text-lg max-w-xl leading-relaxed">
              Whether you're exploring a partnership, an existing client, or a potential team member — we want to hear from you.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="py-section bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact details */}
            <div className="lg:col-span-2">
              <AnimateOnScroll direction="left">
                <h2 className="font-display text-display-sm text-ink mb-8">CONTACT DETAILS</h2>
                <div className="space-y-6">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-orange flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-muted uppercase tracking-widest mb-0.5">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-ink font-body text-sm hover:text-orange transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-ink font-body text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="mt-10 rounded-card overflow-hidden h-48">
                  <iframe
                    src="https://www.google.com/maps?q=61+Kaki+Bukit+Ave+1,+Singapore&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Urban Werkz Office"
                  />
                </div>

                {/* LinkedIn */}
                <div className="mt-8">
                  <a
                    href="https://linkedin.com/company/urban-werkz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-orange transition-colors"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Follow us on LinkedIn
                  </a>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateOnScroll direction="right">
                <h2 className="font-display text-display-sm text-ink mb-8">SEND A MESSAGE</h2>
                <ContactFormComponent />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

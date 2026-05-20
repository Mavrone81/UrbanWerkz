import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Urban Werkz Privacy Policy — how we collect, use, and protect your personal data in accordance with Singapore PDPA.',
}

const lastUpdated = '1 May 2026'

export default function PrivacyPage() {
  return (
    <div className="pt-40 pb-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="section-label mb-3">Legal</div>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] text-ink leading-none mb-4">
            PRIVACY POLICY
          </h1>
          <p className="text-muted font-body text-sm">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none font-body text-ink space-y-8">
          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">1. Introduction</h2>
            <p className="text-muted leading-relaxed">
              Urban Werkz Pte. Ltd. ("Urban Werkz", "we", "our", "us") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or engage our services, in accordance with Singapore's Personal Data Protection Act 2012 (PDPA).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">2. Data We Collect</h2>
            <p className="text-muted leading-relaxed mb-3">We may collect the following categories of personal data:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted">
              <li>Contact information: name, email address, phone number, company name</li>
              <li>Professional information: job title, industry, LinkedIn profile URL</li>
              <li>Business information: revenue range, website URL, sales challenge descriptions</li>
              <li>Communication data: enquiry type, messages, and correspondence</li>
              <li>Technical data: IP address, browser type, and usage data collected via cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">3. How We Use Your Data</h2>
            <p className="text-muted leading-relaxed mb-3">We use collected data for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted">
              <li>Responding to enquiries and providing our services</li>
              <li>Processing partnership and employment applications</li>
              <li>Communicating updates, reports, and business information relevant to your engagement</li>
              <li>Improving our website and service delivery</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">4. Data Retention</h2>
            <p className="text-muted leading-relaxed">
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Contact enquiries are retained for up to 2 years. Recruitment data is retained for up to 1 year unless you are engaged by Urban Werkz.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">5. Disclosure of Data</h2>
            <p className="text-muted leading-relaxed">
              We do not sell, trade, or rent your personal data to third parties. We may share data with trusted service providers (e.g., CRM platforms, email providers) strictly to operate our services, under confidentiality obligations. We may disclose data when required by law or to protect the rights and safety of Urban Werkz or others.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">6. Cookies</h2>
            <p className="text-muted leading-relaxed">
              Our website uses essential cookies to ensure basic functionality. We do not use tracking or advertising cookies without your consent. You may disable cookies in your browser settings, though some site features may be affected.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">7. Your Rights</h2>
            <p className="text-muted leading-relaxed mb-3">Under the PDPA, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted">
              <li>Access personal data we hold about you</li>
              <li>Correct inaccurate or incomplete personal data</li>
              <li>Withdraw consent for certain processing activities</li>
              <li>Request deletion of your data, subject to legal retention requirements</li>
            </ul>
            <p className="text-muted leading-relaxed mt-3">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:hello@urbanwerkzsg.com" className="text-orange hover:underline">
                hello@urbanwerkzsg.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">8. Security</h2>
            <p className="text-muted leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">9. Changes to This Policy</h2>
            <p className="text-muted leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date. Continued use of our website after changes constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">10. Contact Us</h2>
            <p className="text-muted leading-relaxed">
              For any privacy-related questions or concerns, contact our Data Protection Officer at:{' '}
              <a href="mailto:hello@urbanwerkzsg.com" className="text-orange hover:underline">
                hello@urbanwerkzsg.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/" className="text-sm text-muted hover:text-orange transition-colors font-body">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

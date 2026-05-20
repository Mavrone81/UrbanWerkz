import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Urban Werkz Terms of Service — the terms governing use of our website and engagement of our B2B sales outsourcing services.',
}

const lastUpdated = '1 May 2026'

export default function TermsPage() {
  return (
    <div className="pt-40 pb-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="section-label mb-3">Legal</div>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] text-ink leading-none mb-4">
            TERMS OF SERVICE
          </h1>
          <p className="text-muted font-body text-sm">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none font-body text-ink space-y-8">
          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted leading-relaxed">
              By accessing or using the Urban Werkz website (urbanwerkzsg.com) or engaging Urban Werkz Pte. Ltd. ("Urban Werkz") for any services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">2. Services</h2>
            <p className="text-muted leading-relaxed">
              Urban Werkz provides B2B sales outsourcing services including outsourced sales teams, lead generation, CRM management, sales reporting, and go-to-market strategy. The specific scope, deliverables, timelines, and commercial terms of any engagement are governed by a separate written agreement (Service Agreement) between Urban Werkz and the client.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">3. Website Use</h2>
            <p className="text-muted leading-relaxed mb-3">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted">
              <li>Use this website for any unlawful purpose or in violation of applicable regulations</li>
              <li>Attempt to gain unauthorised access to any systems or data</li>
              <li>Transmit spam, malware, or any harmful content</li>
              <li>Reproduce, distribute, or commercially exploit content from this site without written permission</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">4. Intellectual Property</h2>
            <p className="text-muted leading-relaxed">
              All content on this website — including text, design, logos, graphics, and code — is the property of Urban Werkz or its licensors and is protected by copyright and other intellectual property laws. You may not use our branding or content without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">5. Enquiries and Communications</h2>
            <p className="text-muted leading-relaxed">
              Submitting an enquiry form or contacting Urban Werkz does not create a contractual obligation on either party. Any engagement of services requires a signed Service Agreement. Urban Werkz reserves the right to decline any enquiry or application at its sole discretion.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">6. Disclaimer of Warranties</h2>
            <p className="text-muted leading-relaxed">
              This website and its content are provided "as is" without warranties of any kind, express or implied. Urban Werkz does not warrant that the website will be error-free, uninterrupted, or free of viruses. Case study results and testimonials represent past outcomes and are not a guarantee of future results.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">7. Limitation of Liability</h2>
            <p className="text-muted leading-relaxed">
              To the maximum extent permitted by law, Urban Werkz shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or reliance on any content herein. Our total liability in any event shall not exceed SGD 100.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">8. Third-Party Links</h2>
            <p className="text-muted leading-relaxed">
              Our website may contain links to third-party websites (e.g., LinkedIn). These are provided for convenience only. Urban Werkz has no control over and accepts no responsibility for the content or practices of linked sites.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">9. Governing Law</h2>
            <p className="text-muted leading-relaxed">
              These Terms of Service are governed by the laws of Singapore. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Singapore.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">10. Changes to Terms</h2>
            <p className="text-muted leading-relaxed">
              We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with the updated date. Continued use of the website after changes are posted constitutes your acceptance.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink tracking-wide mb-3">11. Contact</h2>
            <p className="text-muted leading-relaxed">
              For any questions regarding these terms, contact us at{' '}
              <a href="mailto:hello@urbanwerkzsg.com" className="text-orange hover:underline">
                hello@urbanwerkzsg.com
              </a>.
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

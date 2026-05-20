import Link from 'next/link'

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Our Partners', href: '/partners' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Outsourced Sales Team', href: '/services' },
    { label: 'CRM & Pipeline', href: '/services' },
    { label: 'Lead Generation', href: '/services' },
    { label: 'Sales Reporting', href: '/services' },
  ],
  Careers: [
    { label: 'Join Us', href: '/join-us' },
    { label: 'Open Roles', href: '/join-us#roles' },
    { label: 'Talent Community', href: '/join-us#talent' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="font-display text-2xl text-white tracking-wide leading-none">URBAN</span>
              <span className="font-display text-2xl text-orange tracking-wide leading-none">WERKZ</span>
            </Link>
            <p className="text-white/60 text-sm font-body leading-relaxed max-w-xs">
              Southeast Asia's partner-first B2B sales outsourcing firm. We manage your sales so you can focus on your product.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-orange hover:text-orange transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display text-sm tracking-[0.12em] text-white/40 uppercase mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm font-body hover:text-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-body">
            © {new Date().getFullYear()} Urban Werkz. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-white/30 text-xs font-body">
            urbanwerkz@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}

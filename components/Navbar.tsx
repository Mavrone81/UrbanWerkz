'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Our Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-1">
            <span className="font-display text-2xl text-ink tracking-wide leading-none">
              URBAN
            </span>
            <span className="font-display text-2xl text-orange tracking-wide leading-none">
              WERKZ
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors duration-200 hover:text-orange ${
                  pathname === link.href ? 'text-orange' : 'text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join-us"
              className={`btn-outline-nav text-xs px-3 py-1.5 ${
                pathname === '/join-us' ? 'bg-ink text-white' : ''
              }`}
            >
              Join Us
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block flex-shrink-0">
            <Link href="/contact" className="btn-primary text-xs px-5 py-2.5">
              Get a Free Sales Audit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-ink transition-transform duration-200 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-ink transition-opacity duration-200 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-ink transition-transform duration-200 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-[72px]"
          >
            <nav className="flex flex-col px-6 py-8 gap-1" aria-label="Mobile navigation">
              <Link href="/" className="py-3 font-body font-medium text-lg text-ink border-b border-border/50 hover:text-orange transition-colors">
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 font-body font-medium text-lg border-b border-border/50 hover:text-orange transition-colors ${
                    pathname === link.href ? 'text-orange' : 'text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/join-us" className="btn-secondary w-full justify-center">
                  Join Us
                </Link>
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Get a Free Sales Audit
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

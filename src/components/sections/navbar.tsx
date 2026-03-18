'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const anchorLinks = [
  { label: 'How It Works', hash: '#how-it-works' },
  { label: 'Why Us', hash: '#why-us' },
  { label: 'Solutions', hash: '#solutions' },
  { label: 'FAQ', hash: '#faq' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const resolveHash = (hash: string) => (isHome ? hash : `/${hash}`)
  const bookHref = isHome ? '#book' : '/#book'

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex cursor-pointer items-center gap-2">
          <div className="h-8 w-8 shrink-0">
            <Image
              src="/geoffrey-head-mark.svg"
              alt="Geoffrey robot head"
              width={32}
              height={32}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-white">Ask Geoffrey AI</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {anchorLinks.map((link) => (
            <a
              key={link.hash}
              href={resolveHash(link.hash)}
              className="cursor-pointer text-[17px] font-medium text-neutral-400 transition-colors duration-200 hover:text-white md:text-[18px]"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/services"
            className={`cursor-pointer text-[17px] font-medium transition-colors duration-200 md:text-[18px] ${
              pathname === '/services' ? 'text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Services
          </Link>
          <a
            href={bookHref}
            className="cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-[17px] font-semibold text-white transition-colors duration-200 hover:bg-indigo-500 md:text-[18px]"
          >
            Book Free Audit
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="cursor-pointer text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 pb-6">
              {anchorLinks.map((link) => (
                <a
                  key={link.hash}
                  href={resolveHash(link.hash)}
                  onClick={() => setMobileOpen(false)}
                  className="cursor-pointer text-[17px] font-medium text-neutral-400 transition-colors duration-200 hover:text-white md:text-[18px]"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className={`cursor-pointer text-[17px] font-medium transition-colors duration-200 md:text-[18px] ${
                  pathname === '/services' ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Services
              </Link>
              <a
                href={bookHref}
                onClick={() => setMobileOpen(false)}
                className="cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-[17px] font-semibold text-white transition-colors duration-200 hover:bg-indigo-500"
              >
                Book Free Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

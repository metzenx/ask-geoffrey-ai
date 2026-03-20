'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ExternalLink,
  Globe,
  Sparkles,
  BookOpen,
  Zap,
  BarChart3,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

type LinkItem = {
  label: string
  href: string
  description?: string
  icon: LucideIcon | typeof XIcon
  style: 'primary' | 'default' | 'muted'
  badge?: string
  external?: boolean
}

type LinkSection = {
  title: string
  links: LinkItem[]
}

const linkSections: LinkSection[] = [
  {
    title: 'Get Started',
    links: [
      {
        label: 'Book a Free AI Audit',
        href: '/#book',
        description: 'No cost. No pressure. Clear recommendations.',
        icon: Zap,
        style: 'primary',
      },
      {
        label: 'See How It Works',
        href: '/#how-it-works',
        icon: Sparkles,
        style: 'default',
      },
      {
        label: 'View Solutions & Pricing',
        href: '/#solutions',
        icon: BarChart3,
        style: 'default',
      },
    ],
  },
  {
    title: 'Explore',
    links: [
      {
        label: 'Homepage',
        href: '/',
        icon: Globe,
        style: 'default',
      },
      {
        label: 'AI Employee Services',
        href: '/services',
        icon: Sparkles,
        style: 'default',
      },
      {
        label: 'Blog',
        href: '#',
        icon: BookOpen,
        style: 'muted',
        badge: 'Coming Soon',
      },
    ],
  },
  {
    title: 'Connect',
    links: [
      {
        label: 'Follow on X',
        href: 'https://x.com/geoffreyai24934',
        icon: XIcon,
        style: 'default',
        external: true,
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

function LinkCard({ link }: { link: LinkItem }) {
  const Icon = link.icon
  const isMuted = link.style === 'muted'
  const isPrimary = link.style === 'primary'

  const baseClasses =
    'group flex w-full items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-200'

  const styleClasses = isPrimary
    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
    : isMuted
      ? 'border border-white/[0.04] bg-white/[0.01] text-neutral-500 cursor-default'
      : 'border border-white/[0.06] bg-white/[0.02] text-white hover:border-white/10 hover:bg-white/[0.04]'

  const content = (
    <>
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          isPrimary
            ? 'bg-white/15'
            : isMuted
              ? 'bg-white/[0.03]'
              : 'bg-indigo-500/10'
        }`}
      >
        <Icon
          className={`h-5 w-5 ${
            isPrimary ? 'text-white' : isMuted ? 'text-neutral-600' : 'text-indigo-400'
          }`}
        />
      </span>

      <span className="flex min-w-0 flex-1 flex-col">
        <span
          className={`text-[17px] font-medium leading-tight ${
            isMuted ? 'text-neutral-500' : 'text-white'
          }`}
        >
          {link.label}
        </span>
        {link.description && (
          <span
            className={`mt-0.5 text-sm ${isPrimary ? 'text-indigo-200' : 'text-neutral-500'}`}
          >
            {link.description}
          </span>
        )}
      </span>

      {link.badge ? (
        <span className="shrink-0 rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-neutral-500">
          {link.badge}
        </span>
      ) : link.external ? (
        <ExternalLink className="h-4 w-4 shrink-0 text-neutral-500 transition-colors group-hover:text-white" />
      ) : (
        !isMuted && (
          <ArrowRight className="h-4 w-4 shrink-0 text-neutral-500 transition-all group-hover:translate-x-0.5 group-hover:text-white" />
        )
      )}
    </>
  )

  if (isMuted) {
    return (
      <motion.div variants={itemVariants} className={`${baseClasses} ${styleClasses}`}>
        {content}
      </motion.div>
    )
  }

  return (
    <motion.a
      variants={itemVariants}
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      className={`${baseClasses} ${styleClasses}`}
    >
      {content}
    </motion.a>
  )
}

export default function LinksPage() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-md flex-col items-center px-6 py-12">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/geoffrey-avatar.jpg"
            alt="Geoffrey"
            width={96}
            height={96}
            className="h-24 w-24 rounded-full border-2 border-white/10"
            priority
          />
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
            Geoffrey
          </h1>
          <p className="mt-1 text-center text-base text-neutral-400">
            AI employees that work 24/7 — for a fraction of the cost
          </p>
        </motion.div>

        {/* Link sections */}
        {linkSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.15 + sectionIndex * 0.15 }}
            className="mt-8 w-full"
          >
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
              {section.title}
            </p>
            <div className="flex flex-col gap-3">
              {section.links.map((link) => (
                <LinkCard key={link.label} link={link} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Footer branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <Image
            src="/geoffrey-head-mark.svg"
            alt="Geoffrey"
            width={20}
            height={20}
            className="opacity-40"
          />
          <a
            href="/"
            className="text-xs text-neutral-600 transition-colors hover:text-neutral-400"
          >
            askgeoffreyai.com
          </a>
        </motion.div>
      </div>
    </main>
  )
}

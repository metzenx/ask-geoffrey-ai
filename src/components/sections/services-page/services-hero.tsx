'use client'

import { motion } from 'framer-motion'
import { Spotlight } from '@/components/ui/spotlight'

const stats = [
  { label: '24/7 Availability', value: 'Always On' },
  { label: 'Cost Reduction', value: 'Up to 90%' },
  { label: 'Improvement', value: 'Continuous' },
]

export function ServicesHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-black pt-28 pb-20">
      <Spotlight />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-[48px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[64px] lg:text-[80px]">
            Your AI Workforce.{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Always On. Always Improving.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
            Deploy managed AI agents that handle content, sales, support, and operations — at a fraction of the cost of traditional hires.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="#book"
              className="cursor-pointer rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-indigo-500 md:text-xl"
            >
              Get Started
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center"
            >
              <p className="font-heading text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-neutral-400 md:text-base">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

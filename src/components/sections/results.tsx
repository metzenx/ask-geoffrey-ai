'use client'

import { motion } from 'framer-motion'
import { DollarSign, BarChart3, Handshake, ArrowUpRight } from 'lucide-react'

const reasons = [
  {
    icon: DollarSign,
    title: 'Lower Upfront Commitment',
    description:
      'We keep the barrier to entry low so you can validate the opportunity before making a larger implementation investment.',
  },
  {
    icon: BarChart3,
    title: 'Clear Reporting',
    description:
      'Key metrics, qualified leads, and workflow outcomes are tracked clearly so you can understand what is working and where to improve.',
  },
  {
    icon: Handshake,
    title: 'Shared Accountability',
    description:
      'When performance-based pricing is part of the engagement, our incentives stay aligned with the outcomes that matter to your business.',
  },
  {
    icon: ArrowUpRight,
    title: 'Built to Scale',
    description:
      'Your systems are designed to support more follow-up, smoother operations, and stronger capacity as your business grows.',
  },
]

export function Results() {
  return (
    <section id="why-us" className="relative bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400 md:text-base">
            Why Us
          </p>
          <h2 className="font-heading text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]">
            Lower Upfront Cost. Clearer Accountability.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
            We start with a free audit, define the right automation opportunities in your business, and offer straightforward pricing. Performance-based options are available for qualified partners when it makes sense.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 transition-colors duration-200 hover:border-white/10 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                <reason.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="font-heading mb-3 text-[28px] font-bold tracking-tight text-white md:text-[34px]">
                {reason.title}
              </h3>
              <p className="text-[18px] leading-relaxed text-neutral-300 md:text-[20px]">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison strip */}
        <motion.div
          className="mt-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 md:text-base">
                Typical Agency Model
              </p>
              <ul className="space-y-3.5">
                {[
                  'Large setup fees are common',
                  'ROI can be hard to measure clearly',
                  'Longer commitments are often required',
                  'More upfront risk sits with the client',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[17px] text-neutral-500 md:text-[19px]">
                    <span className="h-1 w-1 rounded-full bg-neutral-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400 md:text-base">
                Our Approach
              </p>
              <ul className="space-y-3.5">
                {[
                  'Start with a free audit',
                  'Clear scope and transparent reporting',
                  'Flexible pricing based on fit',
                  'Performance options available for qualified partners',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[17px] text-neutral-300 md:text-[19px]">
                    <span className="h-1 w-1 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

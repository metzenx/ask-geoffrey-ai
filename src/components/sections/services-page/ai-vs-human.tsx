'use client'

import { motion } from 'framer-motion'

const rows = [
  { metric: 'Annual Cost', ai: '~$6,000', human: '$50–150K' },
  { metric: 'Weekly Hours', ai: '168 hrs', human: '40 hrs' },
  { metric: 'Ramp-up Time', ai: 'Days', human: 'Weeks–Months' },
  { metric: 'Consistency', ai: '100%', human: 'Variable' },
  { metric: 'Scalability', ai: 'Instant', human: 'Slow' },
  { metric: 'Downtime', ai: 'None', human: 'PTO / Sick Days' },
]

export function AiVsHuman() {
  return (
    <section className="relative bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400 md:text-base">
            The Numbers
          </p>
          <h2 className="font-heading text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]">
            AI Employees vs. Traditional Hiring
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
            See how AI agents stack up against traditional employees across the metrics that matter most.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/[0.06]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="p-5 md:p-6">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-500 md:text-base">
                Metric
              </span>
            </div>
            <div className="border-l border-indigo-500/30 bg-indigo-950/20 p-5 text-center md:p-6">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-400 md:text-base">
                AI Employee
              </span>
            </div>
            <div className="border-l border-white/[0.06] p-5 text-center md:p-6">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-500 md:text-base">
                Human Hire
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.metric}
              className={`grid grid-cols-3 ${i < rows.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
            >
              <div className="flex items-center p-5 md:p-6">
                <span className="text-[16px] font-medium text-neutral-300 md:text-[18px]">
                  {row.metric}
                </span>
              </div>
              <div className="flex items-center justify-center border-l border-indigo-500/30 bg-indigo-950/10 p-5 md:p-6">
                <span className="text-[16px] font-semibold text-indigo-300 md:text-[18px]">
                  {row.ai}
                </span>
              </div>
              <div className="flex items-center justify-center border-l border-white/[0.06] p-5 md:p-6">
                <span className="text-[16px] text-neutral-500 md:text-[18px]">
                  {row.human}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

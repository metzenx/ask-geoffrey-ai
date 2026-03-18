'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Intake',
    description: 'Discovery call, workflow audit, and goal alignment to understand your business inside and out.',
  },
  {
    number: '02',
    title: 'Setup',
    description: 'Infrastructure provisioning, tool integration, and agent configuration tailored to your stack.',
  },
  {
    number: '03',
    title: 'Training',
    description: 'AI model training on your data, workflows, and brand voice for accurate, on-brand output.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Go-live deployment with real-time monitoring and hands-on initial optimization.',
  },
  {
    number: '05',
    title: 'Ongoing Optimization',
    description: 'Continuous performance tracking, improvement cycles, and scaling as your needs evolve.',
  },
]

export function ImplementationTimeline() {
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
            How We Deploy
          </p>
          <h2 className="font-heading text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]">
            From Intake to Impact in 5 Steps
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
            A streamlined process designed to get your AI workforce operational fast.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent md:left-8" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative flex gap-8 md:gap-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* Step circle */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-950/50 md:h-16 md:w-16">
                  <span className="font-heading text-lg font-bold text-indigo-400 md:text-xl">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-colors duration-200 hover:border-white/10 md:p-10 flex-1">
                  <h3 className="font-heading mb-2 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
                    {step.title}
                  </h3>
                  <p className="text-[17px] leading-relaxed text-neutral-300 md:text-[19px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

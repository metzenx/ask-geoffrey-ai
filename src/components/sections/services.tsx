'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const steps = [
  {
    step: '01',
    title: 'Free Growth Audit',
    description:
      'We analyze your workflows, identify automation opportunities, and deliver a clear action plan before you spend a dollar.',
    features: [
      'Tailored to your business',
      'Workflow & opportunity review',
      'Prioritized action plan',
      'Zero cost to start',
    ],
    cta: 'Book Free Audit',
    ctaHref: '#book',
    highlight: true,
  },
  {
    step: '02',
    title: 'Custom Automation',
    description:
      'We design and deploy AI systems for lead response, follow-up, scheduling, and operations. Built around how you actually work.',
    features: [
      'Lead capture & response',
      'Automated follow-up',
      'Booking & intake flows',
      'Operational efficiency',
    ],
    cta: 'Why Choose Us',
    ctaHref: '#why-us',
    highlight: false,
  },
  {
    step: '03',
    title: 'Launch & Optimize',
    description:
      'We launch your system, track performance through clear reporting, and continuously optimize so your automation improves as your business grows.',
    features: [
      'Go-live deployment',
      'Real-time performance dashboards',
      'Ongoing optimization',
      'Transparent reporting',
    ],
    cta: 'See Solutions',
    ctaHref: '#solutions',
    highlight: false,
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Services() {
  return (
    <section id="how-it-works" className="relative bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400 md:text-base">
            How It Works
          </p>
          <h2 className="font-heading text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]">
            Three Steps. Zero Guesswork.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
            From audit to automation. A clear path to smarter operations.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((s) => (
            <motion.div key={s.step} variants={item}>
              <Card
                className={`group relative flex h-full flex-col p-10 transition-all duration-300 md:p-12 ${
                  s.highlight
                    ? 'border-indigo-500/30 bg-indigo-950/20 hover:border-indigo-500/50'
                    : 'border-white/[0.06] bg-white/[0.02] hover:border-white/10'
                }`}
              >
                {/* Step number */}
                <span className="font-heading mb-8 text-5xl font-bold tracking-tight text-white/[0.06]">
                  {s.step}
                </span>

                <h3 className="font-heading mb-3 text-[28px] font-bold tracking-tight text-white md:text-[34px]">
                  {s.title}
                </h3>

                <p className="mb-8 text-[18px] leading-relaxed text-neutral-300 md:text-[20px]">
                  {s.description}
                </p>

                <ul className="mb-10 flex-1 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[17px] text-neutral-300 md:text-[19px]">
                      <span className={`h-1 w-1 rounded-full ${s.highlight ? 'bg-indigo-400' : 'bg-neutral-600'}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={s.ctaHref}
                  className={`cursor-pointer inline-flex items-center justify-center rounded-full px-6 py-3.5 text-lg font-medium transition-all duration-200 md:text-xl ${
                    s.highlight
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                      : 'border border-white/[0.08] text-neutral-300 hover:border-white/15 hover:text-white'
                  }`}
                >
                  {s.cta}
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

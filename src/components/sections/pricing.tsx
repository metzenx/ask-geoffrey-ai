'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Card } from '@/components/ui/card'

const plans = [
  {
    eyebrow: 'Best for visibility',
    name: 'Content & Lead Capture',
    fitLine: 'For brands focused on awareness and inbound growth',
    description:
      'Build an AI-powered content and lead capture system that helps your business stay active, attract attention, and turn traffic into opportunities.',
    features: [
      'Content workflow setup',
      'Publishing automation',
      'Lead capture integration',
      'Monthly reporting',
      'Ongoing optimization',
    ],
    highlight: false,
  },
  {
    eyebrow: 'Best for sales',
    name: 'Sales Automation System',
    fitLine: 'Recommended starting point for most businesses',
    description:
      'Automate qualification, follow-up, and booking so your pipeline stays active and more leads move toward real conversations.',
    features: [
      'Lead qualification flows',
      'Follow-up sequences',
      'Booking automation',
      'CRM integration',
      'Pipeline reporting',
    ],
    highlight: true,
  },
  {
    eyebrow: 'Best for scale',
    name: 'Revenue Operations System',
    fitLine: 'For businesses ready to connect multiple workflows',
    description:
      'Unify marketing, sales, support, and operations into one automation system designed to save time and improve consistency as you grow.',
    features: [
      'Cross-team workflow automation',
      'Customer support automations',
      'Reporting dashboard',
      'Advanced integrations',
      'Ongoing system optimization',
    ],
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="solutions" className="relative bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400 md:text-base">
            Solutions
          </p>
          <h2 className="font-heading text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]">
            Choose the Right System for Your Business.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
            We start with a free AI audit, define the right automation opportunities, and recommend the best engagement based on your workflow, growth stage, and operational needs.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                className={`relative flex h-full flex-col p-10 transition-all duration-300 md:p-12 ${
                  plan.highlight
                    ? 'border-indigo-500/30 bg-indigo-950/20 hover:border-indigo-500/50'
                    : 'border-white/[0.06] bg-white/[0.02] hover:border-white/10'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                    Recommended
                  </div>
                )}

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-indigo-400 md:text-base">
                  {plan.eyebrow}
                </p>

                <h3 className="font-heading mb-2 text-[28px] font-bold tracking-tight text-white md:text-[34px]">
                  {plan.name}
                </h3>

                <p className="mb-6 text-sm text-neutral-500 md:text-base">
                  {plan.fitLine}
                </p>

                <p className="mb-8 text-[18px] leading-relaxed text-neutral-300 md:text-[20px]">
                  {plan.description}
                </p>

                <ul className="mb-10 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[17px] text-neutral-300 md:text-[19px]">
                      <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${plan.highlight ? 'text-indigo-400' : 'text-neutral-600'}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#book"
                  className={`cursor-pointer inline-flex items-center justify-center rounded-full px-6 py-3.5 text-lg font-medium transition-all duration-200 md:text-xl ${
                    plan.highlight
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                      : 'border border-white/[0.08] text-neutral-300 hover:border-white/15 hover:text-white'
                  }`}
                >
                  Book Free Audit
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

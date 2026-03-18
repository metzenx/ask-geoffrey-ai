'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How does the free AI audit work?',
    a: 'We start by reviewing your workflow, goals, and current bottlenecks. From there, we identify the best automation opportunities in your business and recommend the right next steps based on impact, complexity, and fit.',
  },
  {
    q: 'What kinds of businesses do you work with?',
    a: 'We work with businesses that want to improve follow-up, lead handling, scheduling, customer communication, or internal workflows. The best fit is usually a business with repeatable processes and clear growth goals.',
  },
  {
    q: 'Do I need to be technical to use this?',
    a: 'No. We design the system around your business, not around your technical ability. Our goal is to make the automation easy to use, easy to manage, and practical for day-to-day operations.',
  },
  {
    q: 'How is pricing determined?',
    a: 'Pricing depends on the scope of the system, the number of workflows involved, the tools being connected, and the level of support needed. For qualified partners, performance-based pricing may be available when tracking and fit make sense.',
  },
  {
    q: 'How soon can we get started?',
    a: 'Once we understand your workflow and goals, we can usually move quickly into scoping and planning. The first step is the free audit, which helps define the right implementation path.',
  },
  {
    q: 'What tools do you integrate with?',
    a: 'We can work with many common business tools, including CRMs, scheduling platforms, forms, email systems, and customer communication tools. The exact setup depends on your current stack and what needs to be automated.',
  },
  {
    q: 'Will this replace my team?',
    a: 'No. The goal is to reduce repetitive work, improve speed, and create consistency. Not to replace the people who make your business run. Good automation supports your team and frees them up for higher-value work.',
  },
  {
    q: 'What happens after the audit?',
    a: 'After the audit, we\'ll show you the best automation opportunities, explain the recommended system, and outline the next step if there\'s a strong fit to move forward.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="relative bg-black py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400 md:text-base">
            FAQ
          </p>
          <h2 className="font-heading text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]">
            Questions Before You Book?
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-8 py-6 text-left"
                aria-expanded={open === i}
              >
                <span className="text-xl font-medium text-white md:text-[22px]">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-8 pb-6 text-[18px] leading-relaxed text-neutral-300 md:text-[20px]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

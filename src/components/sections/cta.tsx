'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react'

export function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xojklkar', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        setSubmitError('Submission failed. Please try again or email geoffrey@askgeoffreyai.com.')
        return
      }

      setSubmitted(true)
    } catch {
      // Fallback: open mailto
      const name = String(data.get('name') ?? '')
      const email = String(data.get('email') ?? '')
      const business = String(data.get('business') ?? '')
      const message = String(data.get('message') ?? '')
      const subject = encodeURIComponent(`Free AI Audit Request - ${name}`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nBusiness: ${business}\n\n${message}`)

      setSubmitError('Network issue detected. Opening your email app as a fallback.')
      window.location.href = `mailto:geoffrey@askgeoffreyai.com?subject=${subject}&body=${body}`
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="book" className="relative bg-black py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/60 to-black p-10 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)]" />

          {submitted ? (
            <div className="relative flex flex-col items-center py-8 text-center">
              <CheckCircle className="mb-6 h-16 w-16 text-emerald-400" />
              <h2 className="font-heading text-[32px] font-bold text-white md:text-[42px]">
                We&apos;ll Be in Touch
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-neutral-300 md:text-xl">
                Thank you for your interest. We&apos;ll review your information and reach out within 24 hours to schedule your free audit.
              </p>
            </div>
          ) : (
            <>
              <div className="relative mb-10 text-center">
                <h2 className="font-heading text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]">
                  Start With a Free AI Audit
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
                  Tell us a little about your business and we&apos;ll identify the best automation opportunities for you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="relative mx-auto grid max-w-2xl gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[17px] text-white placeholder-neutral-600 outline-none transition-colors duration-200 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[17px] text-white placeholder-neutral-600 outline-none transition-colors duration-200 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="mb-2 block text-sm font-medium text-neutral-400">
                    Business Name
                    <span className="ml-1 text-neutral-600">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    placeholder="Your business or brand"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[17px] text-white placeholder-neutral-600 outline-none transition-colors duration-200 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-400">
                    What would you like to automate?
                    <span className="ml-1 text-neutral-600">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="e.g. lead follow-up, scheduling, content posting, customer intake..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[17px] text-white placeholder-neutral-600 outline-none transition-colors duration-200 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-indigo-500 hover:gap-3 disabled:cursor-not-allowed disabled:opacity-60 md:text-xl"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Book Free Audit
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-neutral-500">
                  No upfront consultation fee. Clear recommendations. No pressure.
                </p>
                {submitError && (
                  <p className="text-center text-sm text-rose-400" role="alert">
                    {submitError}
                  </p>
                )}
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}

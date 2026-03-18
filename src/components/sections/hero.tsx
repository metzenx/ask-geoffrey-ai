'use client'

import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black pt-24">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 lg:flex-row lg:gap-0">
        {/* Left content */}
        <motion.div
          className="relative z-10 flex-1 pt-12 lg:pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-sm font-medium text-indigo-300 md:text-base">
              AI Automation for Growing Businesses
            </span>
          </div>

          <h1 className="font-heading text-[42px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[52px] lg:text-[64px]">
            <span className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              Free AI Audit.
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Smarter Automation for Growth.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-xl leading-relaxed text-neutral-300 md:text-2xl">
            We identify the best automation opportunities in your business, then design practical systems to help you save time, improve follow-up, and support growth.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#book"
              className="group cursor-pointer inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold tracking-tight text-white transition-all duration-200 hover:bg-indigo-500 hover:gap-3 md:text-xl"
            >
              Book Free Audit
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="cursor-pointer inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/5 md:text-xl"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="font-heading text-2xl font-bold text-white">Free Audit</p>
              <p className="text-sm font-medium text-neutral-500">No cost to start</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="font-heading text-2xl font-bold text-white">Custom Plan</p>
              <p className="text-sm font-medium text-neutral-500">Automation roadmap</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="font-heading text-2xl font-bold text-white">Flexible</p>
              <p className="text-sm font-medium text-neutral-500">Pricing that fits</p>
            </div>
          </div>
        </motion.div>

        {/* Right - 3D Scene */}
        <motion.div
          className="relative h-[400px] flex-1 lg:h-[600px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </motion.div>
      </div>
    </section>
  )
}

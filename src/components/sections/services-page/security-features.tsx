'use client'

import { motion } from 'framer-motion'
import { Server, Lock, Database, Shield, Activity, FileCheck } from 'lucide-react'

const features = [
  {
    icon: Server,
    title: 'Isolated Infrastructure',
    description: 'Dedicated environments per client. Your data never co-mingles with another business.',
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard protocols.',
  },
  {
    icon: Database,
    title: 'Automated Backups',
    description: 'Regular snapshots and disaster recovery plans keep your data safe and recoverable.',
  },
  {
    icon: Shield,
    title: 'Permission Controls',
    description: 'Role-based access and detailed audit logging so you control who sees what.',
  },
  {
    icon: Activity,
    title: 'Continuous Monitoring',
    description: 'Real-time alerts and anomaly detection catch issues before they become problems.',
  },
  {
    icon: FileCheck,
    title: 'Privacy-First Design',
    description: 'Minimal data collection, strict access policies, and secure handling built into every deployment.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function SecurityFeatures() {
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
            Enterprise-Grade Security
          </p>
          <h2 className="font-heading text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]">
            Your Data. Protected at Every Layer.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
            Security is not an add-on. It is built into the foundation of every AI deployment.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 transition-colors duration-200 hover:border-white/10 md:p-12"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                <feature.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="font-heading mb-3 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
                {feature.title}
              </h3>
              <p className="text-[17px] leading-relaxed text-neutral-300 md:text-[19px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

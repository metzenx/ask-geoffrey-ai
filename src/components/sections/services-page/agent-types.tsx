'use client'

import { motion } from 'framer-motion'
import { PenTool, TrendingUp, Headphones, Code, Settings, Sparkles } from 'lucide-react'

const agents = [
  {
    icon: PenTool,
    title: 'Content Agent',
    description: 'Automate your content pipeline from ideation to publishing.',
    capabilities: [
      'Social media post creation',
      'Blog drafts & outlines',
      'Content calendar management',
      'Brand voice consistency',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Sales Agent',
    description: 'Qualify leads and nurture prospects around the clock.',
    capabilities: [
      'Lead qualification & scoring',
      'Follow-up sequences',
      'Pipeline management',
      'Meeting scheduling',
    ],
  },
  {
    icon: Headphones,
    title: 'Support Agent',
    description: 'Deliver instant, consistent customer support at scale.',
    capabilities: [
      'Ticket triage & routing',
      'FAQ & knowledge base responses',
      'Escalation management',
      'Multi-channel support',
    ],
  },
  {
    icon: Code,
    title: 'Development Agent',
    description: 'Accelerate your development workflow with AI assistance.',
    capabilities: [
      'Code review & feedback',
      'Bug triage & categorization',
      'Documentation generation',
      'Technical research',
    ],
  },
  {
    icon: Settings,
    title: 'Operations Agent',
    description: 'Streamline internal processes and reduce manual work.',
    capabilities: [
      'Workflow automation',
      'Data entry & processing',
      'Report generation',
      'System monitoring',
    ],
  },
  {
    icon: Sparkles,
    title: 'Custom Agent',
    description: 'A tailored AI employee built around your unique needs.',
    capabilities: [
      'Custom workflow design',
      'Industry-specific training',
      'Bespoke integrations',
      'Flexible scope',
    ],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function AgentTypes() {
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
            AI Agent Types
          </p>
          <h2 className="font-heading text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]">
            An AI Employee for Every Role
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
            Deploy specialized AI agents across your organization. Each one is trained, managed, and continuously optimized by our team.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {agents.map((agent) => (
            <motion.div
              key={agent.title}
              variants={item}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 transition-colors duration-200 hover:border-white/10 md:p-12"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                <agent.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="font-heading mb-3 text-[28px] font-bold tracking-tight text-white md:text-[34px]">
                {agent.title}
              </h3>
              <p className="mb-6 text-[18px] leading-relaxed text-neutral-300 md:text-[20px]">
                {agent.description}
              </p>
              <ul className="space-y-3">
                {agent.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-center gap-2.5 text-[17px] text-neutral-300 md:text-[19px]"
                  >
                    <span className="h-1 w-1 rounded-full bg-indigo-400" />
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const items = [
  {
    title: 'E-commerce Rebuild',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    metric: '+38% conversion',
  },
  { title: 'SaaS Marketing', tags: ['Remix', 'Framer'], metric: 'LCP 1.2s' },
  { title: '3D Product Configurator', tags: ['R3F', 'drei'], metric: '-45% bounce' },
]

export default function FeaturedWork() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">Featured case studies</h2>
        <a href="#" className="text-sm text-[#6C5CE7] hover:underline">View all</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((card, idx) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900"
          >
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-[#6C5CE7]/20 via-[#00D1FF]/10 to-transparent" />
            <div className="mt-4">
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white">{card.title}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {card.tags.map((t) => (
                  <span key={t} className="rounded-md bg-neutral-100 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">{t}</span>
                ))}
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{card.metric}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

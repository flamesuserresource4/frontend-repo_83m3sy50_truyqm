import { Code, Cpu, GaugeCircle, Layers } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'Design Systems',
    desc: 'Scalable UI kits with tokens, accessibility, and documentation.',
  },
  { icon: Code, title: 'Frontend', desc: 'Next.js apps optimized for speed, SEO, and conversions.' },
  { icon: Cpu, title: 'WebGL / 3D', desc: 'R3F scenes, Spline, and performant 3D interactions.' },
  { icon: GaugeCircle, title: 'Performance', desc: 'Audits, Core Web Vitals, caching, and edge rendering.' },
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-neutral-200 bg-white p-5 transition hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-tr from-[#6C5CE7]/20 to-[#00D1FF]/20 text-[#6C5CE7]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function CTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#6C5CE7] to-[#00D1FF] opacity-20 blur-3xl" />
      <div className="relative grid items-center gap-6 rounded-2xl border border-neutral-200 bg-white/80 p-8 backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/70">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">Ready to build something great?</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
            Tell us about your project timeline, budget, and goals. We’ll reply within 24 hours.
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center rounded-md bg-[#6C5CE7] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:bg-[#5a4ad9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C5CE7]"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-800 shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  )
}

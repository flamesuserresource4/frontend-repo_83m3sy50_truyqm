import { memo } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const MotionH1 = motion.h1
const MotionP = motion.p
const MotionDiv = motion.div

function Hero() {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-[#0B0F19]/70 dark:via-[#0B0F19]/40 dark:to-[#0B0F19]/95" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <MotionH1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 }}
            className="bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl dark:from-white dark:to-neutral-400"
          >
            We craft fast, beautiful web experiences.
          </MotionH1>
          <MotionP
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-base text-neutral-600 md:text-lg dark:text-neutral-300"
          >
            From concept to launch—3D, motion, and full-stack that converts.
          </MotionP>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
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
        </MotionDiv>

        <div className="mt-10 grid w-full grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-4">
          {['Stripe', 'Notion', 'Figma', 'Vercel'].map((name) => (
            <div key={name} className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)

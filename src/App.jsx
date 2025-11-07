import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-[#0B0F19] dark:text-neutral-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-neutral-900 focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main id="main">
        <Hero />
        <FeaturedWork />
        <Services />
        <CTA />
        <footer className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-500 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App

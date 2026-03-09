import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Microscope, Sun, Moon } from 'lucide-react'
import Home from './pages/Home'
import Research from './pages/Research'
import Contact from './pages/Contact'
import Experience from './pages/Experience'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])
  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      document.documentElement.classList.toggle('dark', saved === 'dark')
      setIsDark(saved === 'dark')
    }
  }, [])
  return (
    <button
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/60 bg-white/70 text-slate-700 shadow-sm backdrop-blur-md hover:bg-white dark:border-slate-600/60 dark:bg-slate-900/70 dark:text-slate-200"
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light' : 'Switch to dark'}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}

function Header() {
  const loc = useLocation()
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/50 backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-950/40">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3">
        <div className="h-9" />
        <nav className="flex items-center gap-1 rounded-full border border-slate-300/60 bg-white/70 p-1 shadow-sm backdrop-blur-md dark:border-slate-600/60 dark:bg-slate-900/70">
          <Link
            to="/"
            className={`px-4 py-2 text-sm font-medium rounded-full ${loc.pathname === '/' ? 'bg-trust-light/10 text-trust-blue' : 'text-slate-700 hover:text-trust-light dark:text-slate-300'}`}
          >
            Home
          </Link>
          <Link
            to="/experience"
            className={`px-4 py-2 text-sm font-medium rounded-full ${loc.pathname.startsWith('/experience') ? 'bg-trust-light/10 text-trust-blue' : 'text-slate-700 hover:text-trust-light dark:text-slate-300'}`}
          >
            Experience
          </Link>
          <Link
            to="/research"
            className={`px-4 py-2 text-sm font-medium rounded-full ${loc.pathname.startsWith('/research') ? 'bg-trust-light/10 text-trust-blue' : 'text-slate-700 hover:text-trust-light dark:text-slate-300'}`}
          >
            Research
          </Link>
          <Link
            to="/contact"
            className={`px-4 py-2 text-sm font-medium rounded-full ${loc.pathname.startsWith('/contact') ? 'bg-trust-light/10 text-trust-blue' : 'text-slate-700 hover:text-trust-light dark:text-slate-300'}`}
          >
            Contact
          </Link>
        </nav> 
        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 text-sm text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Kirti — Neuro-Innovation & AI Research</p>
        <div className="flex items-center gap-2">
          <Microscope className="h-4 w-4" />
          <span>
            BOTT 3rd-year · AI Healthcare Researcher ·{' '}
            <a className="hover:underline" href="mailto:kirtitanwar999@gmail.com">kirtitanwar999@gmail.com</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const location = useLocation()
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out' })
  }, [])
  useEffect(() => {
    AOS.refresh()
  }, [location])

  return (
    <div className="min-h-dvh bg-medical-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        {location.pathname === '/' && <Home />}
        {location.pathname.startsWith('/research') && <Research />}
        {location.pathname.startsWith('/contact') && <Contact />}
        {location.pathname.startsWith('/experience') && <Experience />}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Building2, Home, MessageCircle, LayoutGrid, UserRound } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/profile'

const dockLinks = [
  { label: 'Home', href: '#top', icon: Home },
  { label: 'About', href: '#about', icon: UserRound },
  { label: 'Services', href: '#services', icon: LayoutGrid },
  { label: 'Firm', href: '#firm', icon: Building2 },
  { label: 'Contact', href: '#contact', icon: MessageCircle },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#top')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['top', 'about', 'services', 'firm', 'journey', 'credentials', 'contact']

    const updateActive = () => {
      const marker = window.scrollY + window.innerHeight * 0.4
      let current = '#top'
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const top = el.getBoundingClientRect().top + window.scrollY
        if (top <= marker) current = `#${id}`
      })
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 140) {
        current = '#contact'
      }
      setActive(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b px-[5%] py-3 backdrop-blur-[22px] transition-[background-color,box-shadow,border-color] duration-500 lg:px-[6%] lg:py-3.5 ${
          scrolled
            ? 'border-[#0b1b3a]/[0.07] bg-white/90 shadow-[0_12px_34px_rgba(31,63,140,0.09)]'
            : 'border-[#0b1b3a]/[0.035] bg-white/60'
        }`}
      >
        <a href="#top" aria-label="Shalashian — back to top" className="inline-flex shrink-0 transition-transform duration-300 hover:scale-[1.02]">
          <Logo />
        </a>

        <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.06 }}
            >
              <a
                href={link.href}
                className={`nav-link inline-block text-[0.84rem] font-semibold transition-colors duration-300 hover:text-blue-soft ${
                  active === link.href ? 'is-active text-blue-soft' : 'text-ink/80'
                }`}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-primary btn-shine group hidden items-center gap-2 rounded-full px-5 py-2.5 text-[0.82rem] font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
        >
          Let’s talk
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <a
          href="#contact"
          aria-label="Contact"
          className="btn-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-transform active:scale-95 sm:w-auto sm:gap-1.5 sm:px-4 sm:text-xs sm:font-bold lg:hidden"
        >
          <MessageCircle size={17} />
          <span className="hidden sm:inline">Let’s talk</span>
        </a>
      </motion.nav>

      {/* Mobile bottom dock */}
      <motion.nav
        aria-label="Mobile navigation"
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 bottom-0 z-[100] lg:hidden"
        style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
      >
        <ul className="mx-3 flex items-stretch gap-0.5 rounded-[24px] border border-[#0b1b3a]/[0.08] bg-white/90 p-1.5 shadow-[0_18px_44px_rgba(31,63,140,0.18)] backdrop-blur-2xl">
          {dockLinks.map((link) => {
            const Icon = link.icon
            const isActive = active === link.href
            return (
              <li key={link.href} className="flex-1">
                <a
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={link.label}
                  className={`relative flex h-[52px] flex-col items-center justify-center rounded-[18px] transition-colors duration-300 ${
                    isActive ? 'text-blue' : 'text-muted'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="dock-active"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      className="absolute inset-0 rounded-[18px] border border-blue/20 bg-[linear-gradient(180deg,rgba(37,99,235,0.14),rgba(37,99,235,0.04))]"
                    />
                  )}
                  <span className="relative flex flex-col items-center gap-[3px]">
                    <Icon size={19} strokeWidth={isActive ? 2.3 : 1.8} />
                    <span className="text-[0.58rem] font-bold tracking-[0.01em]">{link.label}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </motion.nav>
    </>
  )
}

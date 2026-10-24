import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Calculator,
  ChartNoAxesCombined,
  FileSpreadsheet,
  GraduationCap,
  Landmark,
  MapPin,
  ReceiptText,
  Scale,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'
import { LogoMark } from './Logo'
import { socials } from './SocialIcons'
import { profile } from '../data/profile'

const focusAreas = [
  { icon: ReceiptText, label: 'Tax' },
  { icon: ShieldCheck, label: 'Audit' },
  { icon: TrendingUp, label: 'Advisory' },
  { icon: GraduationCap, label: 'Teaching' },
]

const heroBubbles = [
  { icon: Calculator, className: 'left-[1%] top-[32%] h-11 w-11 xl:h-12 xl:w-12', delay: '-1.2s' },
  { icon: Scale, className: 'right-[4%] top-[22%] h-10 w-10 xl:h-12 xl:w-12', delay: '-3.4s' },
  { icon: ChartNoAxesCombined, className: 'right-[19%] top-[13%] h-9 w-9 xl:h-10 xl:w-10', delay: '-5.1s' },
  { icon: FileSpreadsheet, className: 'bottom-[10%] left-[2%] h-10 w-10 xl:h-12 xl:w-12', delay: '-2.2s' },
  { icon: Landmark, className: 'bottom-[15%] right-[2%] h-11 w-11 xl:h-12 xl:w-12', delay: '-6.3s' },
]

export default function Hero() {
  const sceneRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const scene = sceneRef.current
    const card = cardRef.current
    if (!scene || !card) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return

    const handleMove = (event) => {
      const rect = scene.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -9
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 9
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleLeave = () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)'
    }

    scene.addEventListener('mousemove', handleMove)
    scene.addEventListener('mouseleave', handleLeave)
    return () => {
      scene.removeEventListener('mousemove', handleMove)
      scene.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  const availableSocials = socials.filter((item) => profile[item.key])

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-[5%] pb-24 pt-28 lg:px-[6%] lg:pb-24 lg:pt-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        {heroBubbles.map(({ icon: Icon, className, delay }) => (
          <span key={className} className={`hero-bubble ${className}`} style={{ animationDelay: delay }}>
            <Icon size={18} strokeWidth={1.8} />
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[540px] grid-cols-1 items-center gap-12 text-center lg:max-w-[1340px] lg:grid-cols-[1.06fr_0.94fr] lg:gap-16 lg:text-left xl:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/18 bg-white/85 px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-blue-soft shadow-[0_1px_0_#ffffff_inset,0_10px_26px_rgba(37,99,235,0.10)] backdrop-blur-lg lg:text-[0.7rem]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue" />
            </span>
            {profile.availability}
          </div>

          <p className="mb-2 flex items-center justify-center gap-3 text-[0.92rem] font-medium tracking-wide text-muted lg:justify-start lg:text-lg">
            <span aria-hidden="true" className="hidden h-px w-9 bg-gradient-to-r from-transparent to-[#7ea3ff]/70 lg:block" />
            Hi, I’m
          </p>

          <h1 className="font-display text-[clamp(2.55rem,11.5vw,3.45rem)] font-bold leading-[1.02] tracking-[-0.035em] lg:text-[clamp(3.4rem,5.4vw,5rem)]">
            <span className="shimmer-text name-glow">{profile.name}</span>
          </h1>

          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[0.64rem] font-extrabold uppercase tracking-[0.2em] text-blue-soft lg:mt-5 lg:justify-start lg:text-[0.74rem]">
            Tax &amp; Business Consultant
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-steel/50" />
            Tax · Audit · Advisory
          </p>

          <p className="mx-auto mt-5 max-w-[370px] text-[0.96rem] leading-[1.8] text-muted lg:mx-0 lg:mt-6 lg:max-w-[520px] lg:text-[1.08rem] lg:leading-[1.85]">
            {profile.intro}
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-[330px] flex-col gap-3 lg:mx-0 lg:mt-9 lg:w-auto lg:max-w-none lg:flex-row lg:gap-4">
            <a
              href="#contact"
              className="btn-primary btn-shine btn-glow group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[0.96rem] font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Let’s talk
              <ArrowUpRight size={19} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[0.96rem] font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              <ArrowDown size={18} />
              Explore services
            </a>
          </div>

          <div className="mx-auto mt-7 grid w-full max-w-[352px] grid-cols-4 gap-2 lg:mx-0 lg:mt-8 lg:max-w-[452px]">
            {focusAreas.map(({ icon: Icon, label }, i) => (
              <a
                key={label}
                href="#services"
                className="group flex flex-col items-center gap-2 rounded-2xl border border-[#0b1b3a]/[0.07] bg-white/60 px-1.5 py-3 shadow-[0_6px_18px_rgba(31,63,140,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:bg-white hover:shadow-[0_14px_30px_rgba(37,99,235,0.12)] lg:flex-row lg:justify-center lg:gap-2.5 lg:px-3 lg:py-2.5"
              >
                <span className="icon-bob" style={{ animationDelay: `${-0.7 * i}s` }}>
                  <span className="icon-tile h-8 w-8 rounded-[10px] lg:h-9 lg:w-9">
                    <Icon size={15} strokeWidth={2} />
                  </span>
                </span>
                <span className="text-[0.54rem] font-extrabold uppercase tracking-[0.1em] text-muted transition-colors duration-300 group-hover:text-ink lg:text-[0.6rem]">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted">Connect</span>
            <span aria-hidden="true" className="h-px w-6 bg-[#0b1b3a]/15" />
            {availableSocials.map(({ name, key, Icon, hover }) => (
              <a
                key={name}
                href={profile[key]}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                title={name}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#0b1b3a]/10 bg-white/75 text-ink/70 shadow-[0_6px_16px_rgba(31,63,140,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:bg-white hover:text-blue-soft ${hover}`}
              >
                <Icon size={18} />
              </a>
            ))}
            <span className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-[#0b1b3a]/10 bg-white/75 px-3 py-1.5 text-[0.62rem] font-semibold text-muted shadow-[0_6px_16px_rgba(31,63,140,0.05)]">
              <MapPin size={12} className="text-blue-soft" />
              {profile.location}
            </span>
          </div>
        </motion.div>

        {/* Brand card */}
        <motion.div
          ref={sceneRef}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex min-h-[420px] w-full max-w-[400px] items-center justify-center lg:min-h-[590px] lg:max-w-none"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue/20 via-blue/10 to-transparent blur-3xl lg:h-[500px] lg:w-[500px]"
          />

          <div className="orbit-ring r1">
            <div className="orbit-dot" />
          </div>
          <div className="orbit-ring r2">
            <div className="orbit-dot" />
          </div>
          <div className="orbit-ring r3">
            <div className="orbit-dot" />
          </div>

          <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
            <div
              ref={cardRef}
              className="brand-shell w-[300px] transition-transform duration-150 ease-out lg:w-[398px]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="brand-inner relative">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="/images/shalashian.jpg"
                    alt="Shalashian — S&C Business Consultants"
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050a1c]/55 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-[#050a1c]/55 px-2.5 py-1 text-[0.54rem] font-extrabold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md">
                    <BadgeCheck size={11} className="text-[#9bbdff]" />
                    Since 2018
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-[#070f26]/95 px-4 py-3.5 text-left lg:px-5 lg:py-4">
                  <div>
                    <p className="font-display text-[0.98rem] font-semibold leading-tight text-white lg:text-[1.1rem]">
                      {profile.name}
                    </p>
                    <p className="mt-1 text-[0.56rem] font-bold uppercase tracking-[0.15em] text-[#9bbdff] lg:text-[0.6rem]">
                      {profile.role}
                    </p>
                  </div>
                  <LogoMark size={34} />
                </div>
              </div>
            </div>

            <div
              className="float-soft absolute -left-4 top-[12%] z-[3] flex items-center gap-1.5 rounded-2xl border border-[#0b1b3a]/10 bg-white/92 px-3 py-2 text-[0.66rem] font-bold text-ink shadow-[0_16px_34px_rgba(31,63,140,0.16)] backdrop-blur-xl lg:-left-10 lg:top-[14%] lg:px-4 lg:py-2.5 lg:text-[0.78rem]"
              style={{ transform: 'translateZ(46px) rotateY(-7deg)' }}
            >
              <MapPin size={14} className="text-blue-soft lg:size-4" />
              Sri Lanka
            </div>
            <div
              className="float-soft delay absolute -right-4 bottom-[20%] z-[3] flex items-center gap-1.5 rounded-2xl border border-[#0b1b3a]/10 bg-white/92 px-3 py-2 text-[0.66rem] font-bold text-ink shadow-[0_16px_34px_rgba(31,63,140,0.16)] backdrop-blur-xl lg:-right-10 lg:bottom-[22%] lg:px-4 lg:py-2.5 lg:text-[0.78rem]"
              style={{ transform: 'translateZ(52px) rotateY(7deg)' }}
            >
              <BadgeCheck size={14} className="text-blue-soft lg:size-4" />
              8+ years
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted lg:flex">
        <ArrowDown size={18} className="animate-bounce" />
        Scroll to explore
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { BadgeCheck, Building2, CalendarClock, Presentation } from 'lucide-react'
import { profile } from '../data/profile'

const iconMap = { CalendarClock, Presentation, Building2, BadgeCheck }

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let frame

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-[2.15rem] font-bold leading-none tracking-[-0.03em] text-ink tabular-nums lg:text-[3.1rem]">
      {display}
      <span className="text-blue-soft">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  return (
    <section aria-label="Highlights" className="px-[5%] pt-12 lg:px-[6%] lg:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-[1340px] overflow-hidden rounded-[26px] border border-[#0b1b3a]/[0.07] bg-[linear-gradient(120deg,rgba(255,255,255,0.98),rgba(239,245,255,0.96))] px-5 py-8 shadow-[0_20px_55px_rgba(31,63,140,0.10)] lg:rounded-[30px] lg:px-12 lg:py-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-blue/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-36 left-1/4 h-72 w-72 rounded-full bg-blue-deep/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent"
        />

        <div className="relative grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-6">
          {profile.stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || BadgeCheck
            return (
              <div
                key={stat.label}
                className={`group flex flex-col items-center text-center lg:items-start lg:text-left ${
                  i !== 0 ? 'lg:border-l lg:border-[#0b1b3a]/10 lg:pl-8' : ''
                }`}
              >
                <span className="icon-bob mb-3 lg:mb-4" style={{ animationDelay: `${-0.8 * i}s` }}>
                  <span className="icon-tile h-9 w-9 rounded-xl lg:h-10 lg:w-10">
                    <Icon size={17} />
                  </span>
                </span>
                <Counter value={stat.value} suffix={stat.suffix} />
                <span className="mt-2 max-w-[130px] text-[0.64rem] font-bold uppercase leading-relaxed tracking-[0.14em] text-muted lg:mt-3 lg:max-w-none lg:text-[0.68rem]">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

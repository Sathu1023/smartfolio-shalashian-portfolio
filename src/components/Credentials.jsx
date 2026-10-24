import { motion } from 'framer-motion'
import { Award, BadgeCheck, GraduationCap, Landmark, School } from 'lucide-react'
import Eyebrow from './Eyebrow'
import { profile } from '../data/profile'

const iconMap = { Landmark, BadgeCheck, School, GraduationCap }

export default function Credentials() {
  return (
    <section id="credentials" className="relative px-[5%] pb-20 lg:px-[6%] lg:pb-28">
      <div className="mx-auto max-w-[1340px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <Eyebrow icon={Award}>Credentials</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.95rem,6.8vw,2.55rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink lg:text-[2.7rem]">
              Qualifications &amp; <span className="glow-text text-blue-soft">education</span>.
            </h2>
          </div>
          <p className="max-w-[300px] text-[0.88rem] leading-relaxed text-muted">
            A foundation in accounting, commerce and management — built professionally.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {profile.credentials.map((item, i) => {
            const Icon = iconMap[item.icon] || Landmark
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="panel panel-hover panel-shine panel-topline group relative overflow-hidden rounded-[22px] p-5 lg:p-6"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <Icon
                  aria-hidden="true"
                  strokeWidth={1}
                  className="pointer-events-none absolute -bottom-4 -right-3 h-24 w-24 text-blue/[0.06] transition-all duration-700 group-hover:-rotate-12 group-hover:scale-110 group-hover:text-blue/[0.11]"
                />
                <span className="icon-bob relative inline-flex" style={{ animationDelay: `${-0.7 * i}s` }}>
                  <span className="icon-tile h-11 w-11 rounded-xl">
                    <Icon size={20} />
                  </span>
                </span>
                <span className="relative mt-4 flex items-center gap-1.5 text-[0.54rem] font-extrabold uppercase tracking-[0.18em] text-blue-soft/80">
                  <BadgeCheck size={11} strokeWidth={2.4} className="text-blue-soft" />
                  {item.tag}
                </span>
                <h3 className="relative mt-1.5 font-display text-[0.98rem] font-semibold leading-snug text-ink">{item.title}</h3>
                <p className="relative mt-2 text-[0.78rem] leading-relaxed text-muted">{item.subtitle}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

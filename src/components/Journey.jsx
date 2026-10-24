import { motion } from 'framer-motion'
import { BriefcaseBusiness, GraduationCap, Landmark, Presentation, Quote, ReceiptText, Route } from 'lucide-react'
import Eyebrow from './Eyebrow'
import { profile } from '../data/profile'

const iconMap = { GraduationCap, Landmark, ReceiptText, Presentation, BriefcaseBusiness }

export default function Journey() {
  return (
    <section id="journey" className="relative px-[5%] py-20 lg:px-[6%] lg:py-28">
      <div className="mx-auto grid max-w-[1340px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <Eyebrow icon={Route}>My journey</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,7vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink lg:text-[2.9rem]">
            The road <span className="glow-text text-blue-soft">so far</span>.
          </h2>
          <p className="mt-5 max-w-[340px] text-[0.92rem] leading-[1.8] text-muted">
            From a classroom in Trincomalee to tax advisory, branch leadership and lecturing — the milestones that shaped the work.
          </p>
          <div className="mt-7 hidden items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted lg:flex">
            <span className="h-px w-10 bg-gradient-to-r from-blue/60 to-transparent" />
            Still building
          </div>

          <div className="panel panel-shine relative mt-8 hidden max-w-[320px] overflow-hidden rounded-2xl p-5 lg:block">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue/12 blur-2xl"
            />
            <Quote size={18} className="relative text-blue/45" />
            <p className="relative mt-3 font-display text-[0.9rem] font-medium leading-[1.7] text-ink/80">
              Eight years, four practices, one classroom — every step sharpened the advice.
            </p>
            <div className="relative mt-4 flex items-center gap-2.5 text-[0.56rem] font-extrabold uppercase tracking-[0.16em] text-blue-soft">
              <span className="h-px w-7 bg-gradient-to-r from-blue/60 to-transparent" />
              2011 → today
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <span
            aria-hidden="true"
            className="timeline-line absolute bottom-3 left-[15px] top-3 w-[2px] rounded-full lg:left-[19px]"
          />
          <ol className="space-y-6 lg:space-y-7">
            {profile.journey.map((item, i) => {
              const Icon = iconMap[item.icon] || Landmark
              return (
                <motion.li
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-12 lg:pl-16"
                >
                  <span className="timeline-node absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-blue/25 bg-white text-blue shadow-[0_8px_20px_rgba(37,99,235,0.14)] lg:h-10 lg:w-10">
                    <Icon size={14} strokeWidth={2} className="lg:hidden" />
                    <Icon size={16} strokeWidth={2} className="hidden lg:block" />
                  </span>
                  <div className="panel panel-hover panel-shine panel-topline group relative overflow-hidden rounded-[20px] p-5 lg:p-6">
                    <div className="relative flex items-center justify-between gap-3">
                      <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-blue-soft">{item.year}</span>
                      <span className="font-display text-[0.6rem] font-semibold tracking-[0.18em] text-ink/20">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="relative mt-2 font-display text-[1.02rem] font-semibold text-ink lg:text-[1.15rem]">{item.title}</h3>
                    <p className="relative mt-2 text-[0.86rem] leading-[1.8] text-muted lg:text-[0.92rem]">{item.text}</p>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

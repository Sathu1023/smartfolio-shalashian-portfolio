import { motion } from 'framer-motion'
import { ArrowUpRight, Check, GraduationCap, LayoutGrid, ReceiptText, ShieldCheck, TrendingUp } from 'lucide-react'
import Eyebrow from './Eyebrow'
import { profile } from '../data/profile'

const iconMap = { ReceiptText, ShieldCheck, TrendingUp, GraduationCap }

export default function Expertise() {
  return (
    <section id="services" className="relative px-[5%] py-20 lg:px-[6%] lg:py-28">
      <div className="mx-auto max-w-[1340px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <Eyebrow icon={LayoutGrid}>What I do</Eyebrow>
            <h2 className="mt-4 max-w-[560px] font-display text-[clamp(2rem,7vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink lg:text-[2.9rem]">
              Practical help, <span className="glow-text text-blue-soft">where it matters</span>.
            </h2>
          </div>
          <p className="max-w-[320px] text-[0.88rem] leading-relaxed text-muted lg:text-[0.94rem]">
            Tax, audit, advisory and teaching — four ways I work with businesses and people every week.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-5">
          {profile.expertise.map((item, i) => {
            const Icon = iconMap[item.icon] || ReceiptText
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="panel panel-hover panel-shine panel-topline group relative flex flex-col overflow-hidden rounded-[24px] p-6 lg:p-8"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <Icon
                  aria-hidden="true"
                  strokeWidth={1}
                  className="pointer-events-none absolute -bottom-5 -right-4 h-28 w-28 text-blue/[0.06] transition-all duration-700 group-hover:-rotate-12 group-hover:scale-110 group-hover:text-blue/[0.11] lg:h-36 lg:w-36"
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="icon-bob" style={{ animationDelay: `${-0.9 * i}s` }}>
                    <span className="icon-tile h-12 w-12 rounded-2xl lg:h-14 lg:w-14">
                      <Icon size={23} strokeWidth={1.9} />
                    </span>
                  </span>
                  <span className="font-display text-[0.72rem] font-semibold tracking-[0.2em] text-ink/30 transition-colors duration-300 group-hover:text-blue/55">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="relative mt-6 font-display text-lg font-semibold text-ink lg:text-[1.3rem]">{item.title}</h3>
                <p className="relative mt-2.5 text-[0.89rem] leading-[1.8] text-muted lg:text-[0.94rem]">{item.text}</p>

                <div className="relative mt-auto flex flex-wrap gap-2 pt-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full border border-[#0b1b3a]/[0.08] bg-[#f4f8ff] px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-ink/70 transition-colors duration-300 group-hover:border-blue/20 group-hover:bg-white group-hover:text-ink/85"
                    >
                      <Check size={10} className="text-blue-soft/80" strokeWidth={3} />
                      {tag}
                    </span>
                  ))}
                </div>

                <ArrowUpRight
                  size={20}
                  className="absolute bottom-6 right-6 text-blue-soft/0 transition-all duration-500 group-hover:text-blue-soft/80 lg:bottom-8 lg:right-8"
                />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

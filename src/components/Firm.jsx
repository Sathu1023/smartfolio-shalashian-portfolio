import { motion } from 'framer-motion'
import { ArrowUpRight, Building2, Compass, Sparkles, TrendingUp, Wrench } from 'lucide-react'
import Eyebrow from './Eyebrow'
import { profile } from '../data/profile'
import { FacebookIcon } from './SocialIcons'

const iconMap = { Compass, Wrench, TrendingUp }

export default function Firm() {
  const { company } = profile

  return (
    <section id="firm" className="relative px-[5%] py-20 lg:px-[6%] lg:py-28">
      <div className="mx-auto max-w-[1340px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[30px] border border-[#0b1b3a]/[0.07] bg-[linear-gradient(140deg,rgba(255,255,255,0.99),rgba(239,245,255,0.97))] px-6 py-10 shadow-[0_26px_64px_rgba(31,63,140,0.11)] lg:px-14 lg:py-14"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <span className="absolute -right-28 -top-32 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />
            <span className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-blue-deep/10 blur-3xl" />
            <span className="absolute right-10 top-10 h-64 w-64 rounded-full border border-blue/[0.09]" />
            <span className="absolute right-24 top-24 h-40 w-40 rounded-full border border-blue/[0.07]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <Eyebrow icon={Building2}>The firm</Eyebrow>
              <h2 className="mt-4 max-w-[560px] font-display text-[clamp(2rem,7vw,2.7rem)] font-bold leading-[1.06] tracking-[-0.03em] text-ink lg:text-[3rem]">
                One table. <span className="shimmer-text">Three promises</span>.
              </h2>
              <p className="mt-4 max-w-[460px] text-[0.94rem] leading-[1.85] text-muted lg:text-[1rem]">
                {company.description}
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl border border-[#0b1b3a]/[0.08] shadow-[0_1px_0_#ffffff_inset,0_20px_44px_rgba(31,63,140,0.14)]">
                <img
                  src="/images/sc-mark.jpg"
                  alt="S&C Business Consultants (Pvt) Ltd logo"
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <span className="rounded-full border border-[#0b1b3a]/10 bg-white/75 px-3 py-1.5 text-[0.6rem] font-extrabold uppercase tracking-[0.13em] text-ink/75 shadow-[0_4px_12px_rgba(31,63,140,0.05)]">
                  {company.name}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue/25 bg-blue/[0.09] px-3 py-1.5 text-[0.6rem] font-extrabold uppercase tracking-[0.13em] text-blue-soft">
                  <Sparkles size={11} className="animate-pulse" />
                  Since {company.since}
                </span>
              </div>
            </div>

            <div>
              <div className="grid gap-3">
                {company.pillars.map((pillar, i) => {
                  const Icon = iconMap[pillar.icon] || Compass
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex items-start gap-4 rounded-2xl border border-[#0b1b3a]/[0.07] bg-white/70 p-4 transition-all duration-300 hover:border-blue/30 hover:bg-white hover:shadow-[0_14px_34px_rgba(37,99,235,0.10)]"
                    >
                      <span className="icon-tile h-11 w-11 shrink-0">
                        <Icon size={20} />
                      </span>
                      <div>
                        <p className="font-display text-[0.95rem] font-semibold text-ink">{pillar.title}</p>
                        <p className="mt-1 text-[0.82rem] leading-relaxed text-muted">{pillar.text}</p>
                      </div>
                      <span className="ml-auto self-center font-display text-[0.66rem] font-semibold tracking-[0.18em] text-ink/20">
                        0{i + 1}
                      </span>
                    </motion.div>
                  )
                })}
              </div>

              <a
                href={profile.facebook}
                target="_blank"
                rel="noreferrer"
                className="btn-primary btn-shine btn-glow group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.9rem] font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                <FacebookIcon size={17} />
                Connect with S&amp;C
                <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

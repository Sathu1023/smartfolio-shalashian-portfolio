import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRound,
} from 'lucide-react'
import Eyebrow from './Eyebrow'
import { profile } from '../data/profile'

const factIcons = { MapPin, BadgeCheck, BriefcaseBusiness, GraduationCap }
const chipIcons = { ReceiptText, ShieldCheck, TrendingUp, GraduationCap }

export default function About() {
  return (
    <section id="about" className="relative px-[5%] py-20 lg:px-[6%] lg:py-28">
      <div className="mx-auto grid max-w-[1340px] items-start gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-20">
        {/* Firm / profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[390px] lg:sticky lg:top-28"
        >
          <div className="panel panel-shine relative overflow-hidden rounded-[28px] p-5 lg:p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue/12 blur-3xl"
            />

            <div className="brand-plate relative overflow-hidden">
              <img
                src="/images/sc-mark.jpg"
                alt="S&C Business Consultants logo"
                loading="lazy"
                decoding="async"
                className="h-[132px] w-full bg-[#050a1c] object-contain object-center lg:h-[146px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050a1c]/55 via-transparent to-transparent" />
            </div>

            <div className="relative mt-4">
              <p className="font-display text-[0.95rem] font-semibold leading-snug text-ink lg:text-base">
                {profile.company.name}
              </p>
              <p className="mt-1 text-[0.56rem] font-extrabold uppercase tracking-[0.18em] text-blue-soft">
                {profile.company.tagline} · Since {profile.company.since}
              </p>
            </div>

            <div className="relative mt-5 grid grid-cols-2 gap-2.5">
              {profile.about.facts.map((fact) => {
                const Icon = factIcons[fact.icon] || Sparkles
                return (
                  <div
                    key={fact.label}
                    className="group rounded-2xl border border-[#0b1b3a]/[0.06] bg-[#f4f8ff] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/25 hover:bg-white hover:shadow-[0_10px_24px_rgba(37,99,235,0.08)]"
                  >
                    <span className="flex items-center gap-1.5 text-[0.52rem] font-extrabold uppercase tracking-[0.13em] text-muted">
                      <span className="icon-tile h-[22px] w-[22px] rounded-[7px]">
                        <Icon size={11} strokeWidth={2.2} />
                      </span>
                      {fact.label}
                    </span>
                    <p className="mt-1.5 text-[0.76rem] font-semibold leading-snug text-ink">{fact.value}</p>
                  </div>
                )
              })}
            </div>

            <div className="relative mt-4 flex items-center justify-between gap-3 rounded-2xl border border-blue/20 bg-blue/[0.07] px-4 py-3">
              <div className="flex items-center gap-2 text-[0.68rem] font-bold text-blue-soft">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue" />
                </span>
                {profile.availability}
              </div>
              <a href="#contact" aria-label="Go to contact" className="text-blue-soft transition-transform hover:translate-x-0.5">
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow icon={UserRound}>About me</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,7vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink lg:text-[2.9rem]">
            {profile.about.title}
          </h2>
          <p className="mt-5 font-display text-[1.08rem] font-medium leading-snug text-blue-soft lg:text-[1.35rem]">
            “{profile.about.lead}”
          </p>

          <div className="mt-6 space-y-4 text-[0.94rem] leading-[1.85] text-muted lg:mt-7 lg:max-w-[640px] lg:text-[1.02rem]">
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {profile.about.chips.map((chip) => {
              const Icon = chipIcons[chip.icon] || Sparkles
              return (
                <span
                  key={chip.label}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-[#0b1b3a]/10 bg-white/80 px-3.5 py-1.5 text-[0.68rem] font-semibold text-ink/80 shadow-[0_1px_0_#ffffff_inset,0_5px_16px_rgba(31,63,140,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/30 hover:bg-white hover:text-ink"
                >
                  <Icon
                    size={12}
                    className="text-blue-soft transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125"
                  />
                  {chip.label}
                </span>
              )
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0b1b3a]/10 bg-white/70 px-4 py-2 text-[0.7rem] font-semibold text-muted shadow-[0_4px_14px_rgba(31,63,140,0.05)]">
              <BriefcaseBusiness size={14} className="text-blue-soft" />
              Currently — Associate, KPMG Sri Lanka
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0b1b3a]/10 bg-white/70 px-4 py-2 text-[0.7rem] font-semibold text-muted shadow-[0_4px_14px_rgba(31,63,140,0.05)]">
              <GraduationCap size={14} className="text-blue-soft" />
              Senior Lecturer, Cathay Academy
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

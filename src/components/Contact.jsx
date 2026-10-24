import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  CalendarClock,
  GraduationCap,
  MapPin,
  MessageCircle,
  ReceiptText,
  Send,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'
import Eyebrow from './Eyebrow'
import { profile } from '../data/profile'
import { FacebookIcon } from './SocialIcons'

const contactServices = [
  { icon: ReceiptText, label: 'Tax' },
  { icon: ShieldCheck, label: 'Audit' },
  { icon: TrendingUp, label: 'Advisory' },
  { icon: GraduationCap, label: 'Teaching' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative px-[5%] pb-16 pt-4 lg:px-[6%] lg:pb-24 lg:pt-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-[1340px] overflow-hidden rounded-[30px] border border-blue/15 bg-[linear-gradient(135deg,#eef5ff_0%,#f8fbff_48%,#ffffff_100%)] px-6 py-12 shadow-[0_30px_72px_rgba(37,99,235,0.14)] lg:px-14 lg:py-16"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />
          <span className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-blue-deep/10 blur-3xl" />
          <span className="absolute -right-10 top-1/2 h-64 w-64 rounded-full border border-blue/[0.09]" />
          <span className="absolute right-16 top-[38%] h-40 w-40 rounded-full border border-blue/[0.07]" />
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/35 to-transparent" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow icon={Send}>Get in touch</Eyebrow>
            <h2 className="mt-4 max-w-[620px] font-display text-[clamp(2.1rem,8vw,2.95rem)] font-bold leading-[1.04] tracking-[-0.035em] text-ink lg:text-[3.6rem]">
              Let’s talk <span className="glow-text italic text-[#2f66d0]">business</span>.
            </h2>
            <p className="mt-5 max-w-[450px] text-[0.94rem] leading-[1.85] text-muted lg:text-[1rem]">
              {profile.contact.text}
            </p>

            <div className="mt-5 grid max-w-[290px] grid-cols-2 gap-2">
              {contactServices.map(({ icon: Icon, label }, i) => (
                <span
                  key={label}
                  className="icon-bob inline-flex items-center justify-center gap-1.5 rounded-full border border-blue/15 bg-white/75 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink/70 shadow-[0_4px_12px_rgba(31,63,140,0.05)] backdrop-blur-md"
                  style={{ animationDelay: `${-0.6 * i}s` }}
                >
                  <Icon size={12} className="text-blue" />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={profile.facebook}
                target="_blank"
                rel="noreferrer"
                className="btn-primary btn-shine btn-glow group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.9rem] font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                <FacebookIcon size={17} />
                Message on Facebook
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#firm"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1b3a]/12 bg-white/70 px-6 py-3.5 text-[0.86rem] font-semibold text-ink/80 shadow-[0_8px_20px_rgba(31,63,140,0.06)] backdrop-blur-md transition-all duration-300 hover:border-blue/35 hover:bg-white hover:text-ink"
              >
                <ShieldCheck size={16} />
                About S&amp;C
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[24px] border border-[#0b1b3a]/[0.07] bg-[linear-gradient(165deg,rgba(255,255,255,0.95),rgba(244,249,255,0.88))] p-5 shadow-[0_1px_0_#ffffff_inset,0_20px_46px_rgba(31,63,140,0.09)] backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_1px_0_#ffffff_inset,0_26px_58px_rgba(37,99,235,0.13)] lg:p-6">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue/10 blur-2xl"
            />
            <div className="relative flex items-center gap-2.5 text-[0.58rem] font-extrabold uppercase tracking-[0.18em] text-muted">
              <MessageCircle size={14} className="text-blue" />
              Direct lines
            </div>

            <ul className="relative mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue/15 bg-blue/[0.06] text-blue transition-transform duration-300 hover:-rotate-6 hover:scale-110 hover:border-blue/30">
                  <FacebookIcon size={16} />
                </span>
                <div>
                  <p className="text-[0.54rem] font-extrabold uppercase tracking-[0.16em] text-muted/80">Facebook</p>
                  <a
                    href={profile.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-0.5 block text-[0.86rem] font-semibold text-ink transition-colors hover:text-blue"
                  >
                    Shalashian · S&amp;C
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue/15 bg-blue/[0.06] text-blue transition-transform duration-300 hover:-rotate-6 hover:scale-110 hover:border-blue/30">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="text-[0.54rem] font-extrabold uppercase tracking-[0.16em] text-muted/80">Based in</p>
                  <p className="mt-0.5 text-[0.86rem] font-semibold text-ink">{profile.location}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue/15 bg-blue/[0.06] text-blue transition-transform duration-300 hover:-rotate-6 hover:scale-110 hover:border-blue/30">
                  <CalendarClock size={16} />
                </span>
                <div>
                  <p className="text-[0.54rem] font-extrabold uppercase tracking-[0.16em] text-muted/80">Availability</p>
                  <p className="mt-0.5 text-[0.86rem] font-semibold text-ink">{profile.contact.note}</p>
                </div>
              </li>
            </ul>

            <div className="relative mt-5 border-t border-[#0b1b3a]/[0.08] pt-4">
              <p className="flex items-center gap-2 text-[0.66rem] font-semibold text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue/50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue" />
                </span>
                Usually replies within a day
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

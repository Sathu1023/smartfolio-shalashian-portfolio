import { Award, BadgeCheck, BriefcaseBusiness, Building2, GraduationCap, Landmark } from 'lucide-react'
import { profile } from '../data/profile'

const tickerIcons = {
  'KPMG Sri Lanka': BriefcaseBusiness,
  SCBC: Building2,
  'Kreston Sri Lanka': Landmark,
  'Cathay Academy': GraduationCap,
  'CA Sri Lanka': Award,
  'AAT Sri Lanka': BadgeCheck,
}

export default function Ticker() {
  return (
    <div className="relative border-y border-[#0b1b3a]/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(240,246,255,0.55))] backdrop-blur-sm">
      <div className="marquee py-4 lg:py-5">
        <div className="marquee-track items-center gap-8 lg:gap-12">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-8 lg:gap-12" aria-hidden={copy === 1}>
              {profile.ticker.map((item) => {
                const Icon = tickerIcons[item] || Building2
                return (
                  <span key={`${copy}-${item}`} className="flex items-center gap-8 lg:gap-12">
                    <span className="group flex items-center gap-2.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-blue/22 bg-white/80 text-blue shadow-[0_1px_0_#ffffff_inset,0_6px_14px_rgba(37,99,235,0.10)] transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-blue/40 group-hover:bg-blue/[0.08]">
                        <Icon size={12} strokeWidth={2.2} />
                      </span>
                      <span className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink/70 transition-colors duration-300 group-hover:text-blue-soft lg:text-[0.88rem]">
                        {item}
                      </span>
                    </span>
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-blue-soft/50" />
                  </span>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { ArrowUp, Building2, LayoutGrid, MessageCircle, Route, UserRound } from 'lucide-react'
import Logo from './Logo'
import { navLinks, profile } from '../data/profile'
import { FacebookIcon } from './SocialIcons'

const footerIcons = { About: UserRound, Services: LayoutGrid, Firm: Building2, Journey: Route, Contact: MessageCircle }

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[#0b1b3a]/[0.07] px-[5%] pb-8 pt-10 lg:px-[6%] lg:pb-10 lg:pt-12">
      <div className="mx-auto max-w-[1340px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col items-start gap-3">
            <a href="#top" aria-label="Back to top" className="inline-flex">
              <Logo />
            </a>
            <p className="max-w-[300px] text-[0.8rem] leading-relaxed text-muted">
              {profile.tagline}
            </p>
            <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-blue-soft/70">
              {profile.company.name} · Since {profile.company.since}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <p className="text-[0.54rem] font-extrabold uppercase tracking-[0.2em] text-muted">Explore</p>
              <ul className="mt-3 space-y-2">
                {navLinks.map((link) => {
                  const Icon = footerIcons[link.label] || ArrowUp
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-[0.8rem] font-semibold text-ink/75 transition-colors hover:text-blue-soft"
                      >
                        <Icon
                          size={13}
                          className="text-blue-soft/55 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-blue-soft"
                        />
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <p className="text-[0.54rem] font-extrabold uppercase tracking-[0.2em] text-muted">Connect</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={profile.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[0.8rem] font-semibold text-ink/75 transition-colors hover:text-blue-soft"
                  >
                    <FacebookIcon size={15} />
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 text-[0.8rem] font-semibold text-ink/75 transition-colors hover:text-blue-soft"
                  >
                    <MessageCircle size={14} className="text-blue-soft/55 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-blue-soft" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col items-center justify-between gap-4 border-t border-[#0b1b3a]/[0.07] pt-5 sm:flex-row">
          <p className="text-[0.66rem] font-medium text-muted">
            © {year} {profile.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-[#0b1b3a]/10 bg-white/70 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink/75 shadow-[0_4px_14px_rgba(31,63,140,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/35 hover:bg-white hover:text-blue"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

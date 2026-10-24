export function LogoMark({ size = 40, className = '' }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center rounded-[13px] border border-[#7ea3ff]/35 bg-[linear-gradient(150deg,#102a63_0%,#0a1738_55%,#050a1c_100%)] shadow-[0_8px_24px_rgba(20,60,170,0.45),inset_0_1px_0_rgba(255,255,255,0.14)] ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span
        className="font-display text-[0.78rem] font-extrabold leading-none tracking-[-0.04em]"
        style={{
          background: 'linear-gradient(125deg,#ffffff 5%,#c9dcff 45%,#5d92ff 95%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        S&amp;C
      </span>
      <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border border-[#dbe8ff]/70 bg-[#3d7bff] shadow-[0_0_10px_rgba(61,123,255,0.9)]" />
    </span>
  )
}

export default function Logo({ compact = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={40} />
      <span className={`flex-col leading-none ${compact ? 'hidden sm:flex' : 'flex'}`}>
        <span className="text-[0.9rem] font-extrabold uppercase tracking-[0.15em] text-ink">
          Shalashian
        </span>
        <span className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.22em] text-muted">
          Tax &amp; Business Consultant
        </span>
      </span>
    </span>
  )
}

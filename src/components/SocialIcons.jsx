export function FacebookIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21.9v-8.4h2.8l.42-3.26H13.5V8.16c0-.94.26-1.58 1.61-1.58h1.72V3.66A23 23 0 0 0 14.32 3.5c-2.48 0-4.18 1.51-4.18 4.29v2.4H7.3v3.26h2.84v8.45a9.9 9.9 0 0 0 3.36 0Z" />
    </svg>
  )
}

export function InstagramIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5.4" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.9" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedInIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.5v11.2H3.5V8.5h3.44Zm.2-3.3a1.87 1.87 0 1 1-3.74 0 1.87 1.87 0 0 1 3.74 0ZM20.5 13.05v6.65h-3.43v-6.2c0-1.56-.56-2.62-1.96-2.62-1.07 0-1.7.72-1.98 1.41-.1.25-.13.6-.13.95v6.46H9.57s.05-10.48 0-11.2h3.43v1.59c.46-.7 1.27-1.72 3.1-1.72 2.26 0 3.96 1.48 3.96 4.68Z" />
    </svg>
  )
}

export function WhatsAppIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.03 2.5a9.4 9.4 0 0 0-8.05 14.2L2.5 21.5l4.93-1.44a9.4 9.4 0 1 0 4.6-17.56Zm0 1.7a7.7 7.7 0 0 1 0 15.4 7.65 7.65 0 0 1-3.92-1.07l-.28-.17-2.92.85.86-2.85-.18-.29A7.7 7.7 0 0 1 12.03 4.2Zm-3.2 3.9c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.81.14.19 1.88 3.01 4.62 4.1 2.28.9 2.74.72 3.24.67.5-.04 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.49-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.4-.48.14-.16.19-.27.28-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.47-.83-2-.22-.52-.44-.45-.61-.46h-.55Z" />
    </svg>
  )
}

export const socials = [
  { name: 'Facebook', key: 'facebook', Icon: FacebookIcon, hover: 'hover:border-[#1877f2]/30 hover:bg-[#1877f2]/10 hover:text-[#1877f2]' },
  { name: 'Instagram', key: 'instagram', Icon: InstagramIcon, hover: 'hover:border-[#d62976]/30 hover:bg-[#d62976]/10 hover:text-[#d62976]' },
  { name: 'LinkedIn', key: 'linkedin', Icon: LinkedInIcon, hover: 'hover:border-[#0a66c2]/30 hover:bg-[#0a66c2]/10 hover:text-[#0a66c2]' },
]

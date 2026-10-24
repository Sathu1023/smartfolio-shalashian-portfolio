import { motion } from 'framer-motion'

export default function Eyebrow({ icon: Icon, children, className = '' }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`eyebrow ${className}`}
    >
      <span className="eyebrow-line" aria-hidden="true" />
      {Icon ? (
        <span className="eyebrow-icon" aria-hidden="true">
          <Icon size={11} strokeWidth={2.4} />
        </span>
      ) : null}
      {children}
    </motion.p>
  )
}

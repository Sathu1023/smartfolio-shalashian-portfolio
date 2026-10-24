import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Stats from './components/Stats'
import Expertise from './components/Expertise'
import Firm from './components/Firm'
import Journey from './components/Journey'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-hidden pb-[calc(96px_+_env(safe-area-inset-bottom))] lg:pb-0">
        <div className="bg-mesh" aria-hidden="true" />
        <div className="grid-lines" aria-hidden="true" />
        <div className="aurora" aria-hidden="true">
          <span className="aurora-blob a1" />
          <span className="aurora-blob a2" />
          <span className="aurora-blob a3" />
        </div>
        <div className="noise" aria-hidden="true" />

        <motion.div
          style={{ scaleX }}
          className="fixed inset-x-0 top-0 z-[110] h-[3px] origin-left bg-gradient-to-r from-blue-deep via-blue to-blue-soft shadow-[0_0_14px_rgba(61,123,255,0.7)]"
        />

        <Navbar />
        <main>
          <Hero />
          <Ticker />
          <About />
          <Stats />
          <Expertise />
          <Firm />
          <Journey />
          <Credentials />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App

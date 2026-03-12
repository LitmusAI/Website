import { useState, useEffect } from 'react'
import styles from './App.module.css'

function ScoreWidget() {
  const [score, setScore] = useState(0)
  const target = 847

  useEffect(() => {
    const duration = 2200
    const start = performance.now()
    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setScore(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className={styles.scoreWidget}>
      <div className={styles.widgetHeader}>
        <span className={styles.widgetLabel}>Agent Risk Profile</span>
        <div className={styles.widgetDots}>
          <span /><span /><span />
        </div>
      </div>
      <div className={styles.widgetName}>Litmus Demo Agent</div>
      <div className={styles.widgetDivider} />
      <div className={styles.widgetRows}>
        <div className={styles.widgetRow}>
          <span className={styles.widgetKey}>Risk Score</span>
          <span className={styles.widgetScore}>
            {score}<span className={styles.widgetScoreMax}> / 1000</span>
          </span>
        </div>
        <div className={styles.widgetRow}>
          <span className={styles.widgetKey}>Risk Tier</span>
          <span className={styles.widgetTierLow}>Low Risk</span>
        </div>
        <div className={styles.widgetRow}>
          <span className={styles.widgetKey}>Autonomy Level</span>
          <span className={styles.widgetValue}>High</span>
        </div>
        <div className={styles.widgetRow}>
          <span className={styles.widgetKey}>Reliability</span>
          <span className={styles.widgetValue}>99.2%</span>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className={styles.page}>
      {/* Background glow */}
      <div className={styles.glow} />

      {/* Nav */}
      <nav className={styles.nav}>
        <span className={styles.logo}>Litmus AI</span>
        <div className={styles.navRight}>
          <span className={styles.dot} />
          <span className={styles.navLabel}>In the lab</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <div className={styles.badge}>
            The credit score for AI agents is coming.
          </div>

          <h1 className={styles.headline}>LITMUS AI</h1>

          <p className={styles.tagline}>
            Dynamic risk scores for AI agents — enabling the underwriting of autonomous systems.
          </p>
        </div>

        <div className={styles.heroVisual}>
          <ScoreWidget />
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span className={styles.footerText}>© 2025 Litmus AI</span>
      </footer>
    </div>
  )
}

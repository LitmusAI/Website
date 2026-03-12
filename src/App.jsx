import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.page}>
      {/* Background */}
      <div className={styles.spotlight} />
      <div className={styles.grid} />

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

        <h1 className={styles.companyName}>LITMUS AI</h1>

        <div className={styles.comingSoon}>
          The credit score for AI agents is coming.
        </div>

        <p className={styles.tagline}>
          Dynamic risk scores for AI agents — enabling the underwriting of autonomous systems.
        </p>

        <div className={styles.pills}>
          <span className={styles.pill}>Agent Risk Scoring</span>
          <span className={styles.pill}>AI Underwriting</span>
          <span className={styles.pill}>Trust Infrastructure</span>
        </div>

      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span className={styles.footerText}>© 2025 Litmus AI</span>
      </footer>
    </div>
  )
}

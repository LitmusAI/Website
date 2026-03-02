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
          <span className={styles.navLabel}>v1 coming soon</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>

        <h1 className={styles.companyName}>LITMUS AI</h1>

        <div className={styles.comingSoon}>
          Something big is coming soon.
        </div>

        <p className={styles.tagline}>
          Agentic testing &amp; monitoring — built for the era where AI runs the show.
        </p>

        <div className={styles.pills}>
          <span className={styles.pill}>Agentic Testing</span>
          <span className={styles.pill}>Real-Time Monitoring</span>
          <span className={styles.pill}>AI Reliability</span>
        </div>

      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span className={styles.footerText}>© 2025 Litmus AI</span>
      </footer>
    </div>
  )
}

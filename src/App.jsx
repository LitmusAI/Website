import { useState } from 'react'
import styles from './App.module.css'

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div className={styles.page}>
      {/* Background */}
      <div className={styles.spotlight} />
      <div className={styles.grid} />

      {/* Panel */}
      <div className={styles.panel}>

        {/* Nav */}
        <nav className={styles.nav}>
          <span className={styles.logo}>Litmus AI</span>
          <div className={styles.navRight}>
            <span className={styles.dot} />
            <span className={styles.navLabel}>v1 coming soon</span>
          </div>
        </nav>

        <div className={styles.rule} />

        {/* Hero */}
        <section className={styles.hero}>

          <div className={styles.badge}>
            AI Testing &amp; Monitoring
          </div>

          <h1 className={styles.headline}>
            The AI-native way<br />
            to test &amp; monitor<br />
            <span className={styles.headlineAccent}>your agents.</span>
          </h1>

          <p className={styles.sub}>
            Test smarter. Monitor everything.<br />
            Built for the agentic era.
          </p>

          {/* Waitlist */}
          {submitted ? (
            <div className={styles.successMsg}>
              You&apos;re on the list — we&apos;ll be in touch.
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button className={styles.btn} type="submit">
                Join the waitlist
              </button>
            </form>
          )}

        </section>

        <div className={styles.rule} />

        {/* Footer */}
        <footer className={styles.footer}>
          <span className={styles.footerText}>© 2025 Litmus AI</span>
          <span className={styles.footerText}>Building in stealth</span>
        </footer>

      </div>
    </div>
  )
}

import { useNavigate } from 'react-router-dom'

const members = [
  { name: 'Jane Doe', role: 'Co-founder & CEO' },
  { name: 'John Smith', role: 'Co-founder & CTO' },
  { name: 'Alex Park', role: 'Head of Product' },
]

export default function Team() {
  const navigate = useNavigate()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#ffffff',
      gap: '3rem',
      padding: '2rem',
    }}>
      <button
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '1.75rem',
          left: '2rem',
          fontFamily: "'Satoshi', -apple-system, sans-serif",
          fontSize: '0.8rem',
          fontWeight: 600,
          color: '#888',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          letterSpacing: '0.01em',
        }}
      >
        ← Back
      </button>

      <h1 style={{
        fontFamily: "'Satoshi', -apple-system, sans-serif",
        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        color: '#111111',
      }}>
        Meet the team
      </h1>

      <div style={{
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {members.map(m => (
          <div key={m.name} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '2rem 2.5rem',
            border: '1px solid #e5e5e5',
            borderRadius: '16px',
            width: '200px',
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#f0f0f0',
            }} />
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: "'Satoshi', -apple-system, sans-serif",
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#111111',
                letterSpacing: '-0.01em',
              }}>{m.name}</p>
              <p style={{
                fontFamily: "'Satoshi', -apple-system, sans-serif",
                fontSize: '0.75rem',
                color: '#888',
                marginTop: '0.25rem',
              }}>{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

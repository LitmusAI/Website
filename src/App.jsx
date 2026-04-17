import { useNavigate } from 'react-router-dom'

const streaks = [
  { top: '8%',  left: '-10%', width: '55vw', height: '30vh', color: 'rgba(139, 92, 246, 0.18)', rotate: '-20deg' },
  { top: '55%', left: '60%',  width: '45vw', height: '28vh', color: 'rgba(236, 72, 153, 0.15)', rotate: '15deg'  },
  { top: '30%', left: '20%',  width: '40vw', height: '20vh', color: 'rgba(59, 130, 246, 0.12)', rotate: '5deg'   },
  { top: '70%', left: '-5%',  width: '35vw', height: '18vh', color: 'rgba(16, 185, 129, 0.12)', rotate: '-10deg' },
]

export default function App() {
  const navigate = useNavigate()
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      minHeight: '100vh',
      background: '#ffffff',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {streaks.map((s, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: s.top,
          left: s.left,
          width: s.width,
          height: s.height,
          background: s.color,
          borderRadius: '50%',
          filter: 'blur(60px)',
          transform: `rotate(${s.rotate})`,
          pointerEvents: 'none',
          zIndex: 0,
        }} />
      ))}
      <span style={{
        position: 'relative',
        zIndex: 1,
        fontFamily: "'Satoshi', -apple-system, sans-serif",
        fontSize: 'clamp(2rem, 6vw, 4rem)',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        color: '#111111',
      }}>
        Litmus AI
      </span>
      <button
        onClick={() => navigate('/team')}
        style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: "'Satoshi', -apple-system, sans-serif",
          fontSize: '0.85rem',
          fontWeight: 600,
          letterSpacing: '0.01em',
          color: '#111111',
          background: 'transparent',
          border: '1px solid #d1d1d1',
          borderRadius: '100px',
          padding: '0.6rem 1.4rem',
          cursor: 'pointer',
        }}
        onMouseEnter={e => e.target.style.borderColor = '#111111'}
        onMouseLeave={e => e.target.style.borderColor = '#d1d1d1'}
      >
        Meet the team
      </button>
    </div>
  )
}

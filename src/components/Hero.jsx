// Replace src/assets/hero.svg with hero.jpg (your outdoor selfie) and update this import to '../assets/hero.jpg'
import heroImg from '../assets/hero.jpg';
import { profile, stats } from '../data/portfolio';
import { GithubIcon, LinkedInIcon, MailIcon, ArrowDownIcon } from './Icon';

export default function Hero() {
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', paddingBlock: '7rem 5rem' }}>
      {/* Ornaments */}
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />
      <div className="glow glow-drift-a" style={{ width: 520, height: 520, background: 'var(--grad-1)', top: -160, left: -120, opacity: 0.35 }} />
      <div className="glow glow-drift-b" style={{ width: 420, height: 420, background: 'var(--grad-2)', top: 80, right: -120, opacity: 0.25 }} />

      <div className="container-page" style={{ position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left — text */}
          <div className="fade-up">
            <div className="pill" style={{ marginBottom: '1.25rem' }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: '#22c55e', boxShadow: '0 0 0 4px rgba(34,197,94,0.18)' }} />
              Available for freelance & full-time
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: '-0.035em',
                margin: 0,
              }}
            >
              Hi, I'm <span className="grad-text">Ashish More</span>.
              <br />
              <span style={{ color: 'var(--text-soft)', fontWeight: 500 }}>
                I build AI-powered products end-to-end.
              </span>
            </h1>

            <p
              style={{
                marginTop: '1.4rem',
                fontSize: '1.08rem',
                lineHeight: 1.65,
                color: 'var(--text-soft)',
                maxWidth: 560,
              }}
            >
              Full Stack Software Engineer at <strong style={{ color: 'var(--text)' }}>Skoolofcode</strong>, where I designed and ship Kenspark — an AI learning platform used daily by 280+ users.
              I work across React, Django, LangChain and AWS, and I care deeply about UX, performance, and reliability.
            </p>

            <div style={{ marginTop: '1.8rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="#projects" className="btn btn-primary">
                View my work
                <ArrowDownIcon size={16} />
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-ghost">
                <MailIcon size={16} /> Get in touch
              </a>
            </div>

            <div style={{ marginTop: '1.6rem', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" style={socialStyle}><GithubIcon /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={socialStyle}><LinkedInIcon /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" style={socialStyle}><MailIcon /></a>
              <span style={{ height: 18, width: 1, background: 'var(--border-strong)' }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-mute)', fontFamily: 'var(--font-mono)' }}>
                {profile.location}
              </span>
            </div>
          </div>

          {/* Right — image */}
          <div className="fade-up hero-photo" style={{ position: 'relative', display: 'grid', placeItems: 'center', width: '100%', maxWidth: 420, marginInline: 'auto' }}>
            <div
              className="float"
              style={{
                position: 'absolute',
                inset: -20,
                background: 'conic-gradient(from 180deg at 50% 50%, var(--grad-1), var(--grad-2), var(--grad-3), var(--grad-1))',
                filter: 'blur(40px)',
                opacity: 0.45,
                borderRadius: 24,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'relative',
                borderRadius: 24,
                overflow: 'hidden',
                border: '1px solid var(--border-strong)',
                boxShadow: 'var(--shadow-lg)',
                background: 'var(--bg-elev)',
                aspectRatio: '4 / 5',
                width: '100%',
                zIndex: 1,
              }}
            >
              <img
                src={heroImg}
                alt="Ashish More"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.55))',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 16, right: 16, bottom: 16,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'end',
                  color: '#fff',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', opacity: 0.8 }}>// currently</div>
                  <div style={{ fontWeight: 600 }}>Shipping Kenspark</div>
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    padding: '0.3rem 0.6rem',
                    borderRadius: 999,
                    background: 'rgba(255,255,255,0.16)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  v2026
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          style={{
            marginTop: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '1rem',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: '1.2rem',
            background: 'var(--bg-elev)',
            boxShadow: 'var(--shadow-sm)',
          }}
          className="stats-grid"
        >
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center', padding: '0.4rem' }}>
              <div className="num" style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', fontWeight: 600, letterSpacing: '-0.02em' }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-soft)', marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
          .hero-photo { margin-top: 1.5rem; max-width: 320px !important; }
          .hero-photo .float { animation: none !important; inset: -10px !important; }
          .glow-drift-a, .glow-drift-b { animation: none !important; }
        }
        @media (max-width: 430px) {
          .hero-photo { max-width: 380px !important; }
        }
      `}</style>
    </section>
  );
}

const socialStyle = {
  width: 38,
  height: 38,
  borderRadius: 10,
  display: 'grid',
  placeItems: 'center',
  border: '1px solid var(--border)',
  color: 'var(--text-soft)',
  transition: 'all 0.2s',
};

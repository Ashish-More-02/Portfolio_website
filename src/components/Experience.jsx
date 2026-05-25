import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container-page">
        <div className="section-head">
          <div className="eyebrow">// where I've worked</div>
          <h2>Experience</h2>
          <p>Owning products end-to-end — from architecture to release notes.</p>
        </div>

        <div style={{ position: 'relative', maxWidth: 880, marginInline: 'auto' }}>
          {/* vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 18,
              top: 8,
              bottom: 8,
              width: 2,
              background: 'linear-gradient(180deg, var(--accent), transparent)',
              opacity: 0.5,
              borderRadius: 2,
            }}
          />

          {experiences.map((exp, i) => (
            <div key={i} style={{ position: 'relative', paddingLeft: '3rem', paddingBottom: '1.5rem' }}>
              <div
                style={{
                  position: 'absolute',
                  left: 10,
                  top: 8,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: 'var(--bg)',
                  border: '3px solid var(--accent)',
                  boxShadow: '0 0 0 4px var(--accent-soft)',
                }}
              />
              <div className="card" style={{ padding: '1.5rem 1.6rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.8rem', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 700 }}>{exp.role}</div>
                    <div style={{ color: 'var(--accent)', fontWeight: 600, marginTop: 2 }}>
                      {exp.company} <span style={{ color: 'var(--text-mute)', fontWeight: 400 }}>· {exp.type}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-mute)',
                      padding: '0.3rem 0.7rem',
                      borderRadius: 999,
                      border: '1px solid var(--border)',
                    }}
                  >
                    {exp.period}
                  </div>
                </div>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.1rem', color: 'var(--text-soft)', lineHeight: 1.65 }}>
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

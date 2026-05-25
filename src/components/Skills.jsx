import { skillGroups } from '../data/portfolio';

export default function Skills() {
  const all = skillGroups.flatMap((g) => g.items);
  const loop = [...all, ...all];

  return (
    <section id="skills" className="section">
      <div className="container-page">
        <div className="section-head">
          <div className="eyebrow">// what I use</div>
          <h2>Tools & technologies</h2>
          <p>From idea to production — frontend, backend, data, cloud, and AI.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1.25rem' }} className="skills-grid">
          {skillGroups.map((g) => (
            <div key={g.title} className="card" style={{ padding: '1.4rem' }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: 'var(--accent-soft)',
                  color: 'var(--accent)',
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '0.9rem',
                }}
              >
                {g.title.charAt(0)}
              </div>
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>{g.title}</h3>
              <div style={{ marginTop: '0.9rem', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {g.items.map((it) => (
                  <span
                    key={it}
                    style={{
                      padding: '0.35rem 0.7rem',
                      borderRadius: 999,
                      background: 'var(--bg-soft)',
                      border: '1px solid var(--border)',
                      fontSize: '0.82rem',
                      color: 'var(--text-soft)',
                    }}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div
          style={{
            marginTop: '3rem',
            overflow: 'hidden',
            position: 'relative',
            maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
          }}
        >
          <div className="marquee-track" style={{ display: 'flex', gap: '1rem', width: 'max-content' }}>
            {loop.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '0.55rem 1rem',
                  border: '1px solid var(--border)',
                  borderRadius: 999,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--text-soft)',
                  background: 'var(--bg-elev)',
                  whiteSpace: 'nowrap',
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

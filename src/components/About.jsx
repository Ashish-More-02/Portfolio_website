// Replace src/assets/profile.svg with profile.jpg (white-background headshot) and update this import to '../assets/profile.jpg'
import profileImg from '../assets/profile.jpg';
import { profile, education } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container-page">
        <div className="section-head">
          <div className="eyebrow">// about me</div>
          <h2>Engineer. Builder. Product thinker.</h2>
          <p>I enjoy owning products from architecture to release notes.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 320px) 1fr', gap: '3rem', alignItems: 'start' }} className="about-grid">
          {/* Profile photo */}
          <div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: 320,
                aspectRatio: '1',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid var(--bg)',
                boxShadow: 'var(--shadow-lg), 0 0 0 1px var(--border-strong)',
                background: 'linear-gradient(135deg, var(--grad-1), var(--grad-2))',
                margin: '0 auto',
              }}
            >
              <img
                src={profileImg}
                alt="Ashish More"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.2rem' }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{profile.name}</div>
              <div style={{ color: 'var(--text-soft)', fontSize: '0.92rem' }}>{profile.title}</div>
            </div>
          </div>

          {/* Bio + Education */}
          <div>
            <div style={{ color: 'var(--text-soft)', fontSize: '1.02rem', lineHeight: 1.7 }}>
              <p style={{ marginTop: 0 }}>
                I'm a full stack engineer with a strong product mindset. Over the past two years at
                <strong style={{ color: 'var(--text)' }}> Skoolofcode</strong>, I've been the sole engineer behind
                <strong style={{ color: 'var(--text)' }}> Kenspark</strong> — an AI-powered learning platform that handles
                authoring, assessments, and personalised learning workflows for teachers and students.
              </p>
              <p>
                I'm comfortable across the stack — React/Vite on the frontend, Django/Python on the backend,
                MongoDB and SQL for data, and AWS (EC2, S3) in production. I integrate LLMs with
                <strong style={{ color: 'var(--text)' }}> LangChain</strong> and the Gemini API to ship
                features that actually move metrics.
              </p>
              <p>
                Outside of shipping code, I write release notes, record demo videos, and work directly with
                stakeholders to close the loop between engineering and the people who use what we build.
              </p>
            </div>

            <h3 style={{ marginTop: '2.5rem', fontSize: '1.05rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)' }}>
              Education
            </h3>
            <div style={{ marginTop: '1rem', display: 'grid', gap: '0.85rem' }}>
              {education.map((e) => (
                <div key={e.school} className="card" style={{ padding: '1rem 1.1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ fontWeight: 600 }}>{e.school}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-mute)', fontFamily: 'var(--font-mono)' }}>
                      {e.period}
                    </div>
                  </div>
                  <div style={{ marginTop: 4, color: 'var(--text-soft)', fontSize: '0.92rem' }}>
                    {e.degree} <span style={{ color: 'var(--text-mute)' }}>· {e.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

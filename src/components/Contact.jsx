import { profile } from '../data/portfolio';
import { MailIcon, GithubIcon, LinkedInIcon, TwitterIcon, ExternalIcon } from './Icon';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--border)' }}>
      <div className="container-page">
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 24,
            padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 4vw, 3rem)',
            border: '1px solid var(--border-strong)',
            background:
              'linear-gradient(135deg, color-mix(in oklab, var(--accent) 12%, var(--bg-elev)) 0%, var(--bg-elev) 60%)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div className="glow" style={{ width: 360, height: 360, background: 'var(--grad-1)', top: -160, left: -120, opacity: 0.25 }} />
          <div className="glow" style={{ width: 320, height: 320, background: 'var(--grad-2)', bottom: -160, right: -120, opacity: 0.22 }} />

          <div style={{ position: 'relative' }}>
            <div className="eyebrow" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.14em' }}>
              // GET IN TOUCH
            </div>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.6rem, 3.2vw, 2.3rem)', fontWeight: 600, letterSpacing: '-0.02em', margin: '0.5rem 0 0.8rem' }}>
              Let's build something <span className="grad-text">together</span>.
            </h2>
            <p style={{ color: 'var(--text-soft)', maxWidth: 580, marginInline: 'auto', fontSize: '1.05rem' }}>
              Have an idea, a role, or a product you want help shipping? I'm always open to interesting conversations.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <MailIcon size={16} /> {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <GithubIcon size={16} /> GitHub <ExternalIcon size={12} />
              </a>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '0.8rem' }}>
              {[
                { href: `mailto:${profile.email}`, label: 'Email', icon: <MailIcon /> },
                { href: profile.github, label: 'GitHub', icon: <GithubIcon /> },
                { href: profile.linkedin, label: 'LinkedIn', icon: <LinkedInIcon /> },
                { href: profile.twitter, label: 'Twitter', icon: <TwitterIcon /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: 'grid',
                    placeItems: 'center',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-elev)',
                    color: 'var(--text-soft)',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'var(--text-soft)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div style={{ marginTop: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-mute)' }}>
              {profile.phone} · {profile.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

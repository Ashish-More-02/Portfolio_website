import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon, GithubIcon } from './Icon';
import { profile } from '../data/portfolio';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
  { href: '#resume', label: 'Resume' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'saturate(150%) blur(12px)',
        WebkitBackdropFilter: 'saturate(150%) blur(12px)',
        background: scrolled ? 'color-mix(in oklab, var(--bg) 80%, transparent)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.25s ease',
      }}
    >
      <div className="container-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, letterSpacing: '-0.01em' }}>
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              display: 'grid',
              placeItems: 'center',
              background: 'linear-gradient(135deg, var(--grad-1), var(--grad-2))',
              color: '#fff',
              fontWeight: 800,
              boxShadow: 'var(--shadow-md)',
            }}
          >
            A
          </span>
          <span style={{ fontSize: '1.05rem' }}>
            Ashish<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </a>

        <nav className="nav-desktop" style={{ alignItems: 'center', gap: 8 }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                padding: '0.5rem 0.8rem',
                borderRadius: 8,
                fontSize: '0.92rem',
                color: 'var(--text-soft)',
                fontWeight: 500,
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--text)';
                e.currentTarget.style.background = 'var(--accent-soft)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--text-soft)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="nav-github"
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              border: '1px solid var(--border)',
              placeItems: 'center',
              color: 'var(--text-soft)',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-soft)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            <GithubIcon size={17} />
          </a>
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              border: '1px solid var(--border)',
              background: 'transparent',
              cursor: 'pointer',
              display: 'grid',
              placeItems: 'center',
              color: 'var(--text)',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            {theme === 'dark' ? <SunIcon size={17} /> : <MoonIcon size={17} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            className="nav-burger"
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              border: '1px solid var(--border)',
              background: 'transparent',
              cursor: 'pointer',
              placeItems: 'center',
              color: 'var(--text)',
            }}
          >
            {open ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="nav-mobile-menu"
          style={{
            background: 'var(--bg-elev)',
            borderTop: '1px solid var(--border)',
            padding: '0.6rem 1.5rem 1.2rem',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                padding: '0.7rem 0.5rem',
                borderBottom: '1px solid var(--border)',
                color: 'var(--text-soft)',
                fontSize: '0.95rem',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex; }
        .nav-burger { display: none; }
        .nav-mobile-menu { display: flex; }
        .nav-github { display: inline-grid; }
        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .nav-burger { display: grid; }
          .nav-github { display: none; }
        }
      `}</style>
    </header>
  );
}

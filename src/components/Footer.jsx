import { profile } from '../data/portfolio';
import { GithubIcon, LinkedInIcon, TwitterIcon, MailIcon } from './Icon';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 0', background: 'var(--bg)' }}>
      <div
        className="container-page"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: '0.88rem', color: 'var(--text-mute)' }}>
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite & a lot of coffee.
        </div>
        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <a href={`mailto:${profile.email}`} aria-label="Email" style={iconLink}><MailIcon size={16} /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" style={iconLink}><GithubIcon size={16} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={iconLink}><LinkedInIcon size={16} /></a>
          <a href={profile.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" style={iconLink}><TwitterIcon size={16} /></a>
        </div>
      </div>
    </footer>
  );
}

const iconLink = {
  width: 34,
  height: 34,
  borderRadius: 8,
  display: 'grid',
  placeItems: 'center',
  border: '1px solid var(--border)',
  color: 'var(--text-soft)',
};

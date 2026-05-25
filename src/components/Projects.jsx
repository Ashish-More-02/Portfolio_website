import { useEffect, useState } from 'react';
import { featuredProjects, profile } from '../data/portfolio';
import { GithubIcon, ExternalIcon, StarIcon, ForkIcon } from './Icon';

const langColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  EJS: '#a91e50',
  Swift: '#F05138',
  Java: '#b07219',
  'C++': '#f34b7d',
  'Jupyter Notebook': '#DA5B0B',
};

function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="card"
      style={{
        padding: '1.3rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.7rem',
        textDecoration: 'none',
        color: 'inherit',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 8,
            background: 'var(--accent-soft)',
            color: 'var(--accent)',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <GithubIcon size={16} />
        </div>
        <div style={{ fontWeight: 700, fontSize: '1.02rem', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {repo.name}
        </div>
        <ExternalIcon size={14} />
      </div>
      <p
        style={{
          color: 'var(--text-soft)',
          fontSize: '0.9rem',
          lineHeight: 1.55,
          margin: 0,
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {repo.description || 'No description provided.'}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.78rem', color: 'var(--text-mute)' }}>
        {repo.language && (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: langColors[repo.language] || 'var(--accent)',
              }}
            />
            {repo.language}
          </span>
        )}
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <StarIcon size={12} /> {repo.stargazers_count}
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <ForkIcon size={12} /> {repo.forks_count}
        </span>
      </div>
    </a>
  );
}

function FeaturedCard({ p }) {
  return (
    <div className="card" style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '1rem' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.15rem' }}>{p.name}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-mute)', marginTop: 4 }}>
            {p.note}
          </div>
        </div>
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            aria-label="View project"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              border: '1px solid var(--border)',
              display: 'grid',
              placeItems: 'center',
              color: 'var(--text-soft)',
              flexShrink: 0,
            }}
          >
            <ExternalIcon size={14} />
          </a>
        )}
      </div>
      <p style={{ color: 'var(--text-soft)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
        {p.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {p.stack.map((s) => (
          <span key={s} className="pill" style={{ fontSize: '0.72rem' }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=100`,
        );
        if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
        const data = await res.json();
        if (cancelled) return;
        const filtered = data
          .filter((r) => !r.fork && r.description)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6);
        setRepos(filtered);
      } catch (e) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container-page">
        <div className="section-head">
          <div className="eyebrow">// selected work</div>
          <h2>Featured projects</h2>
          <p>Production work and side projects across React, Django, AI, and more.</p>
        </div>

        {/* Featured */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '4rem',
          }}
        >
          {featuredProjects.map((p) => (
            <FeaturedCard key={p.name} p={p} />
          ))}
        </div>

        {/* GitHub */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', marginBottom: '1.5rem', gap: '1rem' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.14em' }}>
              // FROM GITHUB
            </div>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.3rem', fontWeight: 600, margin: '0.4rem 0 0' }}>Recent repositories</h3>
            <p style={{ color: 'var(--text-soft)', margin: '0.3rem 0 0' }}>Live from{' '}
              <a href={profile.github} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
                @{profile.githubUser}
              </a>
            </p>
          </div>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <GithubIcon size={16} /> View all on GitHub
          </a>
        </div>

        {loading && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: '1.3rem',
                  height: 180,
                  background: 'linear-gradient(90deg, var(--bg-elev) 0%, var(--bg-soft) 50%, var(--bg-elev) 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.6s linear infinite',
                }}
              />
            ))}
            <style>{`@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
          </div>
        )}

        {error && (
          <div className="card" style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-soft)' }}>
            Couldn't fetch GitHub repos right now. <a href={profile.github} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>View them on GitHub →</a>
          </div>
        )}

        {!loading && !error && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {repos.map((r) => (
              <RepoCard key={r.id} repo={r} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

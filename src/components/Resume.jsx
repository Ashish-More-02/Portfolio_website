import { profile } from '../data/portfolio';
import { DownloadIcon, FileIcon, ExternalIcon } from './Icon';

export default function Resume() {
  const fileName = `${profile.name.replace(/\s+/g, '_')}_Resume.pdf`;

  return (
    <section id="resume" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-page">
        <div className="section-head">
          <div className="eyebrow">// the full picture</div>
          <h2>Resume</h2>
          <p>Preview my resume below, or grab a copy to keep.</p>
        </div>

        <div style={{ maxWidth: 720, marginInline: 'auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.9rem 1.1rem',
              border: '1px solid var(--border)',
              borderBottom: 'none',
              borderRadius: '14px 14px 0 0',
              background: 'var(--bg-elev)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  display: 'grid',
                  placeItems: 'center',
                  background: 'var(--accent-soft)',
                  color: 'var(--accent)',
                }}
              >
                <FileIcon size={18} />
              </span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{fileName}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-mute)' }}>
                  PDF · {profile.name}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                aria-label="Open resume in a new tab"
              >
                Open <ExternalIcon size={12} />
              </a>
              <a
                href={profile.resumeUrl}
                download={fileName}
                className="btn btn-primary"
                aria-label="Download resume"
              >
                <DownloadIcon size={16} /> Download
              </a>
            </div>
          </div>

          <div
            style={{
              border: '1px solid var(--border)',
              borderRadius: '0 0 14px 14px',
              overflow: 'hidden',
              background: 'var(--bg-soft)',
              boxShadow: 'var(--shadow-md)',
              aspectRatio: '8.5 / 11',
              width: '100%',
            }}
          >
            <object
              data={`${profile.resumeUrl}#view=Fit&toolbar=1&navpanes=0`}
              type="application/pdf"
              width="100%"
              height="100%"
              aria-label="Resume preview"
              style={{ display: 'block' }}
            >
              <div style={{ padding: '2.5rem 1.5rem', textAlign: 'center', color: 'var(--text-soft)' }}>
                <p style={{ marginBottom: '1rem' }}>
                  Your browser can't display the PDF inline.
                </p>
                <a href={profile.resumeUrl} download={fileName} className="btn btn-primary">
                  <DownloadIcon size={16} /> Download resume
                </a>
              </div>
            </object>
          </div>
        </div>
      </div>
    </section>
  );
}

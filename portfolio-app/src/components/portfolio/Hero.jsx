import React from 'react'

/* ─── constants ─────────────────────────────────────────────── */
const ACCENT = '#2b4fbe'   /* blue, print-safe */

/* ─── tiny helpers ───────────────────────────────────────────── */

function hex2rgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

const tintBg     = hex2rgba(ACCENT, 0.055)
const tintBorder = hex2rgba(ACCENT, 0.30)

/* ─── section label ─────────────────────────────────────────── */
function SectionLabel({ children, style = {} }) {
  return (
    <p style={{
      fontSize: '0.56rem',
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: ACCENT,
      marginBottom: '7px',
      ...style,
    }}>
      {children}
    </p>
  )
}

/* ─── hairline rule (full width) ────────────────────────────── */
function Rule({ style = {} }) {
  return (
    <div style={{
      borderTop: `1px solid ${tintBorder}`,
      marginBottom: '14px',
      ...style,
    }} />
  )
}

/* ─── experience block ──────────────────────────────────────── */
function ExpBlock({ role, company, period, location, bullets }) {
  return (
    <div style={{ marginBottom: '13px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px' }}>
        <div>
          <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#0f172a' }}>{role}</span>
          <span style={{ color: '#94a3b8', margin: '0 6px', fontSize: '0.68rem' }}>|</span>
          <span style={{ fontSize: '0.73rem', fontWeight: 600, color: '#334155' }}>{company}</span>
        </div>
        <span style={{ fontSize: '0.68rem', color: '#94a3b8', whiteSpace: 'nowrap', flexShrink: 0 }}>
          {period}{location ? `  ·  ${location}` : ''}
        </span>
      </div>
      <ul style={{ margin: '5px 0 0 0', padding: '0 0 0 14px', listStyle: 'disc' }}>
        {bullets.map((b, i) => (
          <li key={i} style={{
            fontSize: '0.73rem',
            lineHeight: 1.6,
            color: '#475569',
            marginBottom: i < bullets.length - 1 ? '2px' : 0,
          }}>
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ─── education item ────────────────────────────────────────── */
function EduItem({ degree, institution, period }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1e293b', marginBottom: '1px' }}>{degree}</p>
      <p style={{ fontSize: '0.68rem', color: '#475569' }}>{institution}</p>
      <p style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{period}</p>
    </div>
  )
}

/* ─── cert item ─────────────────────────────────────────────── */
function CertItem({ name, year }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '6px', marginBottom: '6px', alignItems: 'baseline' }}>
      <p style={{ fontSize: '0.68rem', color: '#334155', lineHeight: 1.45 }}>{name}</p>
      <span style={{ fontSize: '0.63rem', color: '#94a3b8', whiteSpace: 'nowrap', flexShrink: 0 }}>{year}</span>
    </div>
  )
}

/* ─── contact row item ──────────────────────────────────────── */
function ContactPiece({ value, href }) {
  const inner = (
    <span style={{ fontSize: '0.71rem', color: '#334155', lineHeight: 1 }}>
      {value}
    </span>
  )
  /* Always wrap in a span so every item shares identical display/alignment */
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      {href
        ? <a href={href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center' }}>{inner}</a>
        : inner
      }
    </span>
  )
}

/* ─── main component ────────────────────────────────────────── */

/**
 * Hero  –  Summary Page (Page 1)  –  full A4 resume layout
 *
 * Zones:
 *   Gradient accent bar
 *   Header   photo ║ name / role / contact URLs
 *   Tagline  tinted block
 *   Rule
 *   Professional Summary
 *   Rule
 *   Professional Experience   (3 jobs, 2–3 bullets each)
 *   Rule
 *   Bottom strip [Education | Skills & Tools | Certifications + Languages]
 */
export default function Hero({ profile, summary, experience, education, certifications, languages, skills }) {
  const {
    name, title, email, phone,
    github, githubDisplay,
    homepage, homepageDisplay,
    location,
  } = profile

  return (
    <header
      className="portfolio-hero"
      style={{
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
      }}
    >
      {/* ── Multi-colour accent bar ──────────────────── */}
      <div style={{
        height: '5px',
        background: 'linear-gradient(90deg, #3b82f6 0%, #22c55e 33%, #a855f7 66%, #f97316 100%)',
        flexShrink: 0,
      }} />

      {/* ── Page content ────────────────────────────── */}
      <div style={{
        padding: '30px 50px 0',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* ── HEADER: photo + name/contact ──────────── */}
        <div style={{
          display: 'flex',
          gap: '26px',
          alignItems: 'flex-start',
          marginBottom: '18px',
        }}>
          {/* Photo */}
          <img
            src="/profile.jpg"
            alt={name}
            style={{
              width: '86px',
              height: '108px',
              objectFit: 'cover',
              objectPosition: 'center top',
              flexShrink: 0,
              border: '1px solid #e2e8f0',
              display: 'block',
            }}
          />

          {/* Name / role / contact */}
          <div style={{ flex: 1 }}>
            {/* Eyebrow */}
            <p style={{
              fontSize: '0.54rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#94a3b8',
              marginBottom: '6px',
            }}>
              Portfolio · 2026
            </p>

            {/* Name */}
            <h1 style={{
              fontSize: '2.3rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              color: '#0f172a',
              marginBottom: '5px',
            }}>
              {name}
            </h1>

            {/* Role */}
            <p style={{
              fontSize: '0.88rem',
              fontWeight: 600,
              color: ACCENT,
              letterSpacing: '0.01em',
              marginBottom: '11px',
            }}>
              {title}
            </p>

            {/* Contact info — all plain-text URLs for PDF legibility */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              columnGap: '18px',
              rowGap: '4px',
            }}>
              {email && (
                <ContactPiece value={email} href={`mailto:${email}`} />
              )}
              {phone && (
                <ContactPiece value={phone} />
              )}
              {homepageDisplay && (
                <ContactPiece value={homepageDisplay} href={homepage} />
              )}
              {githubDisplay && (
                <ContactPiece value={githubDisplay} href={github} />
              )}
              {location && (
                <ContactPiece value={location} />
              )}
            </div>
          </div>
        </div>

        {/* ── TAGLINE ───────────────────────────────── */}
        <div style={{
          backgroundColor: tintBg,
          borderLeft: `3px solid ${hex2rgba(ACCENT, 0.45)}`,
          padding: '10px 16px',
          marginBottom: '16px',
        }}>
          <p style={{
            fontSize: '0.82rem',
            lineHeight: 1.65,
            color: '#1e3a6e',
            fontStyle: 'italic',
            margin: 0,
          }}>
            "I design solutions that not only work technically,
            but solve real problems people actually face."
          </p>
        </div>

        {/* ── PROFESSIONAL SUMMARY ──────────────────── */}
        <div style={{ marginBottom: '16px' }}>
          <SectionLabel>Professional Summary</SectionLabel>
          <Rule style={{ marginBottom: '10px' }} />
          <p style={{
            fontSize: '0.75rem',
            lineHeight: 1.72,
            color: '#475569',
            margin: 0,
          }}>
            {summary}
          </p>
        </div>

        {/* ── PROFESSIONAL EXPERIENCE ───────────────── */}
        <div className="exp-zone" style={{ marginBottom: '14px', flex: 1 }}>
          <SectionLabel>Professional Experience</SectionLabel>
          <Rule style={{ marginBottom: '10px' }} />
          {experience.map((exp) => (
            <ExpBlock key={exp.id} {...exp} />
          ))}
        </div>

        {/* ── BOTTOM STRIP: 3 columns ───────────────── */}
        <div className="bottom-strip" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr 1.1fr',
          borderTop: `1px solid ${tintBorder}`,
          backgroundColor: '#f8fafc',
          marginLeft: '-50px',
          marginRight: '-50px',
          paddingLeft: '50px',
          paddingRight: '50px',
        }}>

          {/* Col 1: Education */}
          <div style={{ padding: '14px 20px 16px 0', borderRight: `1px solid ${tintBorder}` }}>
            <SectionLabel>Education</SectionLabel>
            {education.map((edu) => (
              <EduItem key={edu.id} {...edu} />
            ))}
          </div>

          {/* Col 2: Skills & Tools */}
          <div style={{ padding: '14px 20px 16px 20px', borderRight: `1px solid ${tintBorder}` }}>
            <SectionLabel>Skills &amp; Tools</SectionLabel>
            {Object.entries(skills).map(([key, val]) => (
              <div key={key} style={{ marginBottom: '7px' }}>
                <p style={{ fontSize: '0.63rem', fontWeight: 700, color: '#334155', textTransform: 'capitalize', marginBottom: '2px' }}>
                  {key}
                </p>
                <p style={{ fontSize: '0.67rem', color: '#64748b', lineHeight: 1.5 }}>{val}</p>
              </div>
            ))}
          </div>

          {/* Col 3: Certifications + Languages */}
          <div style={{ padding: '14px 0 16px 20px' }}>
            <SectionLabel>Certifications</SectionLabel>
            {certifications.map((c) => (
              <CertItem key={c.id} name={c.name} year={c.year} />
            ))}

            <SectionLabel style={{ marginTop: '10px' }}>Languages</SectionLabel>
            {languages.map((l) => (
              <div key={l.id} style={{ marginBottom: '4px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#334155' }}>{l.language}: </span>
                <span style={{ fontSize: '0.68rem', color: '#64748b' }}>{l.level}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </header>
  )
}

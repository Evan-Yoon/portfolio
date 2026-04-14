import React from 'react'

/* ─── icons (inline SVG, no extra deps) ────────────────────── */

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
        0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
        -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
        .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
        -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0
        0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028
        1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012
        2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

/* ─── contact item ──────────────────────────────────────────── */

function ContactItem({ icon, label, href }) {
  const inner = (
    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.75rem' }}>
      <span style={{ opacity: 0.65, display: 'flex' }}>{icon}</span>
      <span>{label}</span>
    </span>
  )

  if (!href) return inner

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {inner}
    </a>
  )
}

/* ─── strength bullet ───────────────────────────────────────── */

function StrengthBullet({ category, detail }) {
  return (
    <div style={{
      display: 'flex',
      gap: '12px',
      padding: '10px 0',
      borderBottom: '1px solid #f1f5f9',
    }}>
      {/* Dot */}
      <div style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: '#3b82f6',
        marginTop: '5px',
        flexShrink: 0,
      }} />
      <div>
        <p style={{
          fontSize: '0.68rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#1e293b',
          marginBottom: '3px',
        }}>
          {category}
        </p>
        <p style={{ fontSize: '0.76rem', color: '#64748b', lineHeight: 1.5 }}>
          {detail}
        </p>
      </div>
    </div>
  )
}

/* ─── section label ─────────────────────────────────────────── */

function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize: '0.58rem',
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: '#3b82f6',
      marginBottom: '14px',
    }}>
      {children}
    </p>
  )
}

/* ─── main component ────────────────────────────────────────── */

/**
 * Hero  –  Summary Page (Page 1)
 *
 * Layout zones:
 *   Accent bar (multi-color gradient)
 *   Name block  – eyebrow / name / role / tagline
 *   Hairline divider
 *   Middle      – Professional Summary (left 3fr) | Key Strengths (right 2fr)
 *   Hairline divider
 *   Contact row – email · github · linkedin
 */
export default function Hero({ profile, about, strengths }) {
  const { name, title, email, linkedin, github } = profile

  /* Strength bullets: one bullet per category */
  const bullets = strengths
    ? strengths.map((s) => ({
        category: s.category,
        detail: s.items.slice(0, 2).join(' · '),
      }))
    : []

  /* Split the about intro into its paragraph blocks */
  const summaryParas = about?.intro
    ? about.intro
        .trim()
        .split(/\n\n+/)
        .map((p) => p.trim())
        .filter(Boolean)
    : []

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
      {/* ── Multi-color accent bar ──────────────────────── */}
      <div
        style={{
          height: '5px',
          background:
            'linear-gradient(90deg, #3b82f6 0%, #22c55e 33%, #a855f7 66%, #f97316 100%)',
          flexShrink: 0,
        }}
      />

      {/* ── Main content ────────────────────────────────── */}
      <div style={{ padding: '44px 56px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* ── Name block ──────────────────────────────── */}
        <div style={{ marginBottom: '28px' }}>

          {/* Eyebrow */}
          <p style={{
            fontSize: '0.56rem',
            fontWeight: 600,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#94a3b8',
            marginBottom: '14px',
          }}>
            Portfolio · 2026
          </p>

          {/* Name — visually dominant */}
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.0,
            color: '#0f172a',
            marginBottom: '8px',
          }}>
            {name}
          </h1>

          {/* Role */}
          <p style={{
            fontSize: '0.98rem',
            fontWeight: 600,
            color: '#3b82f6',
            letterSpacing: '0.015em',
            marginBottom: '20px',
          }}>
            {title}
          </p>

          {/* Tagline — exact, tinted block */}
          <div style={{
            backgroundColor: 'rgba(59,130,246,0.06)',
            borderLeft: '3px solid rgba(59,130,246,0.45)',
            padding: '12px 18px',
            maxWidth: '600px',
          }}>
            <p style={{
              fontSize: '0.85rem',
              lineHeight: 1.7,
              color: '#334155',
              fontStyle: 'italic',
              margin: 0,
            }}>
              "I design solutions that not only work technically,<br />
              but solve real problems people actually face."
            </p>
          </div>
        </div>

        {/* ── Divider ─────────────────────────────────── */}
        <div style={{ borderTop: '1px solid #e2e8f0', marginBottom: '28px' }} />

        {/* ── Summary + Strengths ─────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
          gap: '52px',
          flex: 1,
        }}>

          {/* Left: Professional Summary */}
          <div>
            <SectionLabel>Professional Summary</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {summaryParas.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: '0.82rem',
                    lineHeight: 1.75,
                    color: '#475569',
                    margin: 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Key Strengths */}
          <div>
            <SectionLabel>Key Strengths</SectionLabel>
            <div>
              {bullets.map((b) => (
                <StrengthBullet
                  key={b.category}
                  category={b.category}
                  detail={b.detail}
                />
              ))}
            </div>
          </div>

        </div>

        {/* ── Divider ─────────────────────────────────── */}
        <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '28px' }} />

        {/* ── Contact row ─────────────────────────────── */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '24px',
          padding: '18px 0',
        }}>
          {email && (
            <ContactItem icon={<MailIcon />} label={email} href={`mailto:${email}`} />
          )}
          {github && (
            <ContactItem icon={<GithubIcon />} label="GitHub" href={github} />
          )}
          {linkedin && (
            <ContactItem icon={<LinkedinIcon />} label="LinkedIn" href={linkedin} />
          )}
        </div>

      </div>
    </header>
  )
}

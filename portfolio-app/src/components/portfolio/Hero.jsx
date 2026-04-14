import React from 'react'

/* ─── icons (inline SVG, no extra deps) ────────────────────── */

function MailIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
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
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

/* ─── strength chip ─────────────────────────────────────────── */

function StrengthChip({ label, detail }) {
  return (
    <div
      className="flex flex-col px-4 py-3 rounded-lg"
      style={{
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
      }}
    >
      <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-0.5">
        {label}
      </span>
      <span className="text-[0.78rem] font-medium text-slate-700 leading-snug">
        {detail}
      </span>
    </div>
  )
}

/* ─── contact item ──────────────────────────────────────────── */

function ContactItem({ icon, label, href }) {
  const inner = (
    <span className="flex items-center gap-1.5 text-slate-500">
      <span className="opacity-60">{icon}</span>
      <span>{label}</span>
    </span>
  )

  if (!href) return inner

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="no-print-url hover:text-slate-800 transition-colors"
    >
      {inner}
    </a>
  )
}

/* ─── main component ────────────────────────────────────────── */

/**
 * Hero
 * Portfolio cover page. Editorial style matching project pages.
 *
 * Layout:
 *   Multi-color accent bar (top)
 *   Name + role
 *   Tagline
 *   Three strength chips
 *   Contact row (bottom)
 */
export default function Hero({ profile, strengths }) {
  const { name, title, tagline, email, linkedin, github, location } = profile

  /* Derive three concise display phrases from the strengths data */
  const chips = strengths
    ? strengths.slice(0, 3).map((s) => ({
        label: s.category,
        detail: s.items[0],
      }))
    : []

  return (
    <header
      style={{
        backgroundColor: '#ffffff',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
      }}
    >
      {/* ── Multi-color accent bar ──────────────────────── */}
      {/* Mirrors the per-project accent bars; shows portfolio range */}
      <div
        style={{
          height: '5px',
          background:
            'linear-gradient(90deg, #3b82f6 0%, #22c55e 33%, #a855f7 66%, #f97316 100%)',
        }}
      />

      {/* ── Main content ────────────────────────────────── */}
      <div className="px-10 pt-10 pb-9">

        {/* Name + role block */}
        <div className="mb-6">
          {/* Eyebrow label */}
          <p
            className="text-[0.58rem] font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: '#94a3b8' }}
          >
            Portfolio · 2025
          </p>

          <h1 className="text-[2.2rem] font-bold tracking-tight leading-none text-slate-900">
            {name}
          </h1>

          <p
            className="text-[0.95rem] font-semibold mt-2 tracking-wide"
            style={{ color: '#3b82f6' }}
          >
            {title}
          </p>
        </div>

        {/* Tagline – tinted block matching project summary style */}
        {tagline && (
          <div
            className="mb-8 px-4 py-3 rounded-lg max-w-xl"
            style={{
              backgroundColor: 'rgba(59,130,246,0.06)',
              borderLeft: '3px solid rgba(59,130,246,0.4)',
            }}
          >
            <p className="text-[0.82rem] leading-relaxed text-slate-600">
              {tagline}
            </p>
          </div>
        )}

        {/* Strength chips */}
        {chips.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-9">
            {chips.map((c) => (
              <StrengthChip key={c.label} label={c.label} detail={c.detail} />
            ))}
          </div>
        )}

        {/* Divider */}
        <div
          style={{ borderTop: '1px solid #e2e8f0', marginBottom: '1.25rem' }}
        />

        {/* Contact row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.75rem]">
          {email && (
            <ContactItem
              icon={<MailIcon />}
              label={email}
              href={`mailto:${email}`}
            />
          )}
          {github && (
            <ContactItem
              icon={<GithubIcon />}
              label="GitHub"
              href={github}
            />
          )}
          {linkedin && (
            <ContactItem
              icon={<LinkedinIcon />}
              label="LinkedIn"
              href={linkedin}
            />
          )}
          {location && (
            <span className="text-slate-400 text-[0.73rem]">{location}</span>
          )}
        </div>
      </div>
    </header>
  )
}

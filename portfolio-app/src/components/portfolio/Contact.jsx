import React from 'react'

/* ─── accent ────────────────────────────────────────────────── */
const BLUE = '#3b82f6'

function hex2rgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

/* ─── inline icons ──────────────────────────────────────────── */

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

/* ─── contact row item ──────────────────────────────────────── */

function ContactRow({ icon, label, href, sublabel }) {
  const content = (
    <div
      className="flex items-center gap-4 px-6 py-4 rounded-lg transition-colors"
      style={{
        backgroundColor: hex2rgba(BLUE, 0.05),
        border: `1px solid ${hex2rgba(BLUE, 0.18)}`,
      }}
    >
      <span style={{ color: BLUE }} className="shrink-0">{icon}</span>
      <div className="flex flex-col">
        <span className="text-[0.8rem] font-medium text-slate-800">{label}</span>
        {sublabel && (
          <span className="text-[0.7rem] text-slate-400 mt-0.5">{sublabel}</span>
        )}
      </div>
    </div>
  )

  if (!href) return content

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="no-print-url block"
    >
      {content}
    </a>
  )
}

/* ─── main component ────────────────────────────────────────── */

/**
 * Contact
 * Final closing page. Minimal, centered composition.
 *
 * Zones:
 *   Accent bar (multi-color — mirrors Hero, bookends the portfolio)
 *   Centered closing block – eyebrow, statement, availability note
 *   Contact cards
 *   Footer rule + name + location
 */
export default function Contact({ profile, contact }) {
  const { name, email, linkedin, github, location } = profile

  return (
    <div
      className="print-break-before flex flex-col"
      style={{
        backgroundColor: '#ffffff',
        minHeight: '920px',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
      }}
    >
      {/* ── Multi-color accent bar — mirrors the Hero ───── */}
      <div
        style={{
          height: '5px',
          background: 'linear-gradient(90deg, #3b82f6 0%, #22c55e 33%, #a855f7 66%, #f97316 100%)',
        }}
      />

      {/* ── Main content — vertically centred in the page ── */}
      <div className="flex flex-col flex-1 justify-center px-10 py-14">

        {/* Closing statement block */}
        <div className="max-w-lg mb-12">
          <p
            className="text-[0.58rem] font-semibold tracking-[0.22em] uppercase mb-5"
            style={{ color: '#94a3b8' }}
          >
            Let's Connect
          </p>

          <h2 className="text-[1.55rem] font-bold leading-tight tracking-tight text-slate-900 mb-4">
            Open to Sales Engineer opportunities.
          </h2>

          <p className="text-[0.82rem] leading-relaxed text-slate-600 mb-3">
            I'm looking for a role where I can apply both technical understanding and
            business context to help customers solve real problems.
          </p>

          <p className="text-[0.82rem] leading-relaxed text-slate-500">
            If you're building a team that values clear thinking as much as technical
            depth, I'd be glad to talk.
          </p>
        </div>

        {/* Contact cards */}
        <div className="flex flex-col gap-3 max-w-sm">
          {email && (
            <ContactRow
              icon={<MailIcon />}
              label={email}
              sublabel="Preferred contact"
              href={`mailto:${email}`}
            />
          )}
          {github && (
            <ContactRow
              icon={<GithubIcon />}
              label="GitHub"
              sublabel="Project code and repositories"
              href={github}
            />
          )}
          {linkedin && (
            <ContactRow
              icon={<LinkedinIcon />}
              label="LinkedIn"
              sublabel="Professional profile"
              href={linkedin}
            />
          )}
        </div>
      </div>

      {/* ── Footer rule ─────────────────────────────────── */}
      <div
        className="px-10 py-6 flex items-center justify-between"
        style={{ borderTop: `1px solid ${hex2rgba(BLUE, 0.15)}` }}
      >
        <span className="text-[0.72rem] font-semibold text-slate-400 tracking-wide">
          {name}
        </span>
        <span className="text-[0.7rem] text-slate-400">{location}</span>
      </div>
    </div>
  )
}

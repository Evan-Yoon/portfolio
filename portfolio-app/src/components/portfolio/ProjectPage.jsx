import React from 'react'

/* ─── small helpers ──────────────────────────────────────── */

function Label({ children }) {
  return (
    <p
      className="text-[0.6rem] font-semibold tracking-[0.14em] uppercase mb-2.5"
      style={{ color: 'rgba(255,255,255,0.5)' }}
    >
      {children}
    </p>
  )
}

function Body({ children }) {
  return (
    <p className="text-[0.82rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.92)' }}>
      {children}
    </p>
  )
}

/* ─── main component ─────────────────────────────────────── */

/**
 * ProjectPage
 * One full-page block per project. Fills the A4 content area on print.
 *
 * Layout zones:
 *   Header  – project index, title, subtitle, summary
 *   Middle  – Problem (dark panel) | Solution (light panel)  [grows to fill]
 *   Footer  – Contribution | Tech Stack + Business Impact
 */
export default function ProjectPage({ project, index }) {
  const {
    title, subtitle, summary,
    problem, solution,
    contribution, tech, impact,
    color,
  } = project

  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      className="project-page flex flex-col"
      style={{
        backgroundColor: color,
        /* screen: approximate A4 proportion at card width */
        minHeight: '920px',
        /* print-color-adjust as inline style for highest specificity */
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
      }}
    >
      {/* ── Header ──────────────────────────────────────── */}
      <div className="px-10 pt-10 pb-8">
        <p
          className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase mb-4"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          Project {num}
        </p>

        <h2
          className="text-[1.6rem] font-bold leading-tight tracking-tight"
          style={{ color: '#fff' }}
        >
          {title}
        </h2>

        <p
          className="text-[0.85rem] font-medium mt-1.5"
          style={{ color: 'rgba(255,255,255,0.65)' }}
        >
          {subtitle}
        </p>

        <p
          className="text-[0.82rem] leading-relaxed mt-3 max-w-2xl"
          style={{ color: 'rgba(255,255,255,0.82)' }}
        >
          {summary}
        </p>
      </div>

      {/* ── Hairline separator ──────────────────────────── */}
      <div
        className="mx-10"
        style={{ borderTop: '1px solid rgba(255,255,255,0.18)' }}
      />

      {/* ── Problem / Solution ──────────────────────────── */}
      {/* flex-1 makes this zone grow and fill remaining vertical space */}
      <div className="grid grid-cols-2 flex-1">
        <div
          className="p-8"
          style={{ backgroundColor: 'rgba(0,0,0,0.20)' }}
        >
          <Label>The Problem</Label>
          <Body>{problem}</Body>
        </div>

        <div
          className="p-8"
          style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
        >
          <Label>The Solution</Label>
          <Body>{solution}</Body>
        </div>
      </div>

      {/* ── Footer strip ────────────────────────────────── */}
      <div
        className="grid grid-cols-2"
        style={{ backgroundColor: 'rgba(0,0,0,0.28)' }}
      >
        {/* Contribution */}
        <div
          className="p-8"
          style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}
        >
          <Label>My Contribution</Label>
          <Body>{contribution}</Body>
        </div>

        {/* Tech + Impact */}
        <div className="p-8 flex flex-col gap-5">
          <div>
            <Label>Tech Stack</Label>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-[0.68rem] font-medium px-2 py-0.5 rounded-full"
                  style={{
                    border: '1px solid rgba(255,255,255,0.35)',
                    color: 'rgba(255,255,255,0.88)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <Label>Business Impact</Label>
            <Body>{impact}</Body>
          </div>
        </div>
      </div>
    </div>
  )
}

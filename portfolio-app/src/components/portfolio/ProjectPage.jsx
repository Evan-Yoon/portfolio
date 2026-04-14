import React from 'react'

/* ─── helpers ──────────────────────────────────────────────── */

/** Section label – rendered in the project accent color */
function Label({ color, children }) {
  return (
    <p
      className="text-[0.6rem] font-semibold tracking-[0.14em] uppercase mb-2.5"
      style={{ color }}
    >
      {children}
    </p>
  )
}

/** Body copy – dark, highly readable */
function Body({ children }) {
  return (
    <p className="text-[0.8rem] leading-relaxed text-slate-700">
      {children}
    </p>
  )
}

/** Converts a hex color to an rgba string */
function hex2rgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

/* ─── main component ─────────────────────────────────────── */

/**
 * ProjectPage
 * One full-page block per project. Light base + restrained accent color.
 *
 * Layout zones:
 *   Top bar   – thin gradient accent strip
 *   Header    – index, title, subtitle, summary
 *   Divider   – hairline
 *   Middle    – Problem (left) | Solution (right)   [grows to fill]
 *   Footer    – Contribution | Tech Stack + Business Impact
 */
export default function ProjectPage({ project, index }) {
  const {
    title, subtitle, summary,
    problem, solution,
    contribution, tech, impact,
    color,
  } = project

  const num = String(index + 1).padStart(2, '0')

  /* Derived tints from the accent color */
  const tintStrong  = hex2rgba(color, 0.10)   // panel fills
  const tintMedium  = hex2rgba(color, 0.06)   // lighter panel
  const tintBorder  = hex2rgba(color, 0.22)   // borders
  const tintChipBg  = hex2rgba(color, 0.08)   // chip background
  const tintChipBdr = hex2rgba(color, 0.35)   // chip border
  const labelColor  = color                    // section labels

  return (
    <div
      className="project-page flex flex-col"
      style={{
        backgroundColor: '#ffffff',
        minHeight: '920px',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
      }}
    >
      {/* ── Top accent bar ──────────────────────────────── */}
      <div
        style={{
          height: '5px',
          background: `linear-gradient(90deg, ${color} 0%, ${hex2rgba(color, 0.35)} 100%)`,
        }}
      />

      {/* ── Header ──────────────────────────────────────── */}
      <div className="px-10 pt-8 pb-7">
        {/* Index badge */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-[0.58rem] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
            style={{
              color,
              backgroundColor: tintChipBg,
              border: `1px solid ${tintChipBdr}`,
            }}
          >
            Project {num}
          </span>
        </div>

        <h2
          className="text-[1.55rem] font-bold leading-tight tracking-tight text-slate-900"
        >
          {title}
        </h2>

        <p
          className="text-[0.83rem] font-medium mt-1.5"
          style={{ color }}
        >
          {subtitle}
        </p>

        {/* Summary – tinted highlight block */}
        <div
          className="mt-4 px-4 py-3 rounded-lg max-w-2xl"
          style={{
            backgroundColor: tintStrong,
            borderLeft: `3px solid ${color}`,
          }}
        >
          <p className="text-[0.8rem] leading-relaxed text-slate-700">
            {summary}
          </p>
        </div>
      </div>

      {/* ── Hairline separator ──────────────────────────── */}
      <div
        className="mx-10"
        style={{ borderTop: `1px solid ${tintBorder}` }}
      />

      {/* ── Problem / Solution ──────────────────────────── */}
      <div className="grid grid-cols-2 flex-1">
        {/* Problem – slightly deeper tint */}
        <div
          className="p-8"
          style={{
            backgroundColor: tintStrong,
            borderRight: `1px solid ${tintBorder}`,
          }}
        >
          <Label color={labelColor}>The Problem</Label>
          <Body>{problem}</Body>
        </div>

        {/* Solution – lighter tint */}
        <div
          className="p-8"
          style={{ backgroundColor: tintMedium }}
        >
          <Label color={labelColor}>The Solution</Label>
          <Body>{solution}</Body>
        </div>
      </div>

      {/* ── Footer strip ────────────────────────────────── */}
      <div
        className="grid grid-cols-2"
        style={{
          borderTop: `1px solid ${tintBorder}`,
          backgroundColor: '#f8fafc',
        }}
      >
        {/* Contribution */}
        <div
          className="p-8"
          style={{ borderRight: `1px solid ${tintBorder}` }}
        >
          <Label color={labelColor}>My Contribution</Label>
          <Body>{contribution}</Body>
        </div>

        {/* Tech + Impact */}
        <div className="p-8 flex flex-col gap-5">
          <div>
            <Label color={labelColor}>Tech Stack</Label>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-[0.67rem] font-medium px-2.5 py-0.5 rounded-full"
                  style={{
                    color,
                    backgroundColor: tintChipBg,
                    border: `1px solid ${tintChipBdr}`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div
            className="px-4 py-3 rounded-lg"
            style={{
              backgroundColor: tintStrong,
              border: `1px solid ${tintBorder}`,
            }}
          >
            <Label color={labelColor}>Business Impact</Label>
            <Body>{impact}</Body>
          </div>
        </div>
      </div>
    </div>
  )
}

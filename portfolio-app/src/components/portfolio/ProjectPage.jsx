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

function BulletList({ items, color, size = '0.78rem' }) {
  return (
    <ul className="mt-2 space-y-2 pl-4">
      {items.map((item) => (
        <li
          key={item}
          className="text-slate-700"
          style={{ fontSize: size, lineHeight: 1.55 }}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function WalkMatePage({ project, index }) {
  const { title, subtitle, problem, tech, contribution, impact, color } = project
  const num = String(index + 1).padStart(2, '0')

  const tintSoft = hex2rgba(color, 0.06)
  const tintStrong = hex2rgba(color, 0.12)
  const tintBorder = hex2rgba(color, 0.24)
  const tintChipBg = hex2rgba(color, 0.08)
  const tintChipBdr = hex2rgba(color, 0.34)

  const message =
    'Built to make real-world walking safer when traditional navigation stops at directions and misses actual hazards.'

  const solutionBullets = [
    'Combined AI hazard detection with GPS navigation in one mobile flow.',
    'Replaced unstable compass behavior with direction-vector guidance.',
    'Reported detected hazards to the backend for follow-up and mapping.',
    'Designed for safer, clearer movement in real street conditions.',
  ]

  const contributionPoints = [
    'Owned mobile, backend, and admin architecture.',
    'Defined navigation logic and reliability improvements.',
    'Connected detection, reporting, and data flow end to end.',
  ]

  const impactPoints = [
    'Targets a real accessibility pain point, not a demo scenario.',
    'Shows AI value in public safety and smart-city use cases.',
    'Turns technical capability into a clear user outcome.',
  ]

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
      <div
        style={{
          height: '5px',
          background: `linear-gradient(90deg, ${color} 0%, ${hex2rgba(color, 0.35)} 100%)`,
        }}
      />

      <div className="px-10 pt-7 pb-5">
        <p
          className="mb-3 text-[0.58rem] font-bold uppercase tracking-[0.24em]"
          style={{ color }}
        >
          Project {num}
        </p>

        <h2 className="text-[1.72rem] font-bold leading-[1.08] tracking-tight text-slate-900">
          {title}
        </h2>

        <p className="mt-2 text-[0.88rem] font-medium" style={{ color }}>
          {subtitle}
        </p>
      </div>

      <div className="px-10 pb-5">
        <p
          className="max-w-[600px] text-slate-900"
          style={{
            fontSize: '1.02rem',
            lineHeight: 1.45,
            fontWeight: 600,
          }}
        >
          {message}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-0 px-10 pb-5 flex-1">
        <div
          className="pr-5"
          style={{
            borderRight: `1px solid ${tintBorder}`,
          }}
        >
          <div
            className="h-full rounded-l-xl px-0 py-0"
            style={{ backgroundColor: 'transparent' }}
          >
            <Label color={color}>Problem</Label>
            <p
              className="max-w-[250px] text-slate-700"
              style={{ fontSize: '0.82rem', lineHeight: 1.65 }}
            >
              {problem}
            </p>
          </div>
        </div>

        <div className="pl-5">
          <div
            className="rounded-2xl p-5"
            style={{
              backgroundColor: tintStrong,
              border: `1px solid ${tintBorder}`,
            }}
          >
            <Label color={color}>Solution</Label>
            <p
              className="text-slate-900"
              style={{ fontSize: '0.9rem', lineHeight: 1.5, fontWeight: 600 }}
            >
              AI detection and navigation were designed as one experience instead of two disconnected features.
            </p>
            <BulletList items={solutionBullets} color={color} size="0.8rem" />
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-3 px-10 pt-5 pb-7"
        style={{
          borderTop: `1px solid ${tintBorder}`,
          backgroundColor: '#f8fafc',
          gap: '18px',
        }}
      >
        <div>
          <Label color={color}>Contribution</Label>
          <BulletList items={contributionPoints} color={color} size="0.73rem" />
        </div>

        <div>
          <Label color={color}>Tech Stack</Label>
          <div className="mt-2 flex flex-wrap gap-1.5">
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

        <div>
          <Label color={color}>Business Impact</Label>
          <div
            className="mt-2 rounded-xl p-4"
            style={{
              backgroundColor: tintSoft,
              border: `1px solid ${tintBorder}`,
            }}
          >
            <BulletList items={impactPoints} color={color} size="0.73rem" />
            <p className="mt-3 text-[0.73rem] leading-relaxed text-slate-700">
              {impact}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
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
  if (project.id === 'proj-1') {
    return <WalkMatePage project={project} index={index} />
  }

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

import React from 'react'

/* ─── accent color for this page ───────────────────────────── */
const ACCENT = '#3b82f6'

function hex2rgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

const tintPanel  = hex2rgba(ACCENT, 0.06)
const tintDeep   = hex2rgba(ACCENT, 0.10)
const tintBorder = hex2rgba(ACCENT, 0.22)
const tintChipBg = hex2rgba(ACCENT, 0.08)
const tintChipBd = hex2rgba(ACCENT, 0.30)

/* ─── primitives ────────────────────────────────────────────── */

function Label({ children }) {
  return (
    <p className="text-[0.6rem] font-semibold tracking-[0.14em] uppercase mb-2.5"
      style={{ color: ACCENT }}>
      {children}
    </p>
  )
}

function Body({ children }) {
  return (
    <p className="text-[0.8rem] leading-relaxed text-slate-700">
      {children}
    </p>
  )
}

function Panel({ label, children, deep = false }) {
  return (
    <div
      className="p-7 flex flex-col"
      style={{ backgroundColor: deep ? tintDeep : tintPanel }}
    >
      <Label>{label}</Label>
      {children}
    </div>
  )
}

function DifferentiatorCard({ index, headline, detail }) {
  return (
    <div
      className="px-5 py-4 rounded-lg flex flex-col gap-1.5"
      style={{
        backgroundColor: '#f8fafc',
        border: `1px solid ${tintBorder}`,
      }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="text-[0.6rem] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: tintDeep, color: ACCENT }}
        >
          {index}
        </span>
        <span className="text-[0.8rem] font-semibold text-slate-800 leading-snug">
          {headline}
        </span>
      </div>
      <p className="text-[0.75rem] text-slate-500 leading-relaxed pl-7">
        {detail}
      </p>
    </div>
  )
}

/* ─── experience & education rows ───────────────────────────── */

function ExpRow({ role, company, period, location }) {
  return (
    <div className="print-keep flex flex-col gap-0.5">
      <div className="flex items-baseline justify-between gap-2">
        <div>
          <span className="text-[0.78rem] font-semibold text-slate-800">{role}</span>
          <span className="text-slate-300 mx-1.5 text-[0.7rem]">·</span>
          <span className="text-[0.75rem] text-slate-500">{company}</span>
          {location && (
            <span className="text-slate-400 ml-1.5 text-[0.7rem]">({location})</span>
          )}
        </div>
        <span className="text-[0.7rem] text-slate-400 whitespace-nowrap shrink-0">{period}</span>
      </div>
    </div>
  )
}

function EduRow({ degree, institution, period }) {
  return (
    <div className="print-keep flex items-baseline justify-between gap-2">
      <div>
        <span className="text-[0.78rem] font-medium text-slate-800">{degree}</span>
        <span className="text-slate-300 mx-1.5 text-[0.7rem]">·</span>
        <span className="text-[0.75rem] text-slate-500">{institution}</span>
      </div>
      <span className="text-[0.7rem] text-slate-400 whitespace-nowrap shrink-0">{period}</span>
    </div>
  )
}

/* ─── main component ────────────────────────────────────────── */

/**
 * About
 * Full-page editorial block. Dedicated print page.
 *
 * Zones:
 *   Accent bar
 *   Header  – eyebrow, positioning statement
 *   Middle  – Background | Transition   /   Problem Focus | Approach
 *   Differentiators – three cards
 *   Footer  – Experience | Education & Certifications
 */
export default function About({ about, experience, education, certifications }) {
  return (
    <div
      className="portfolio-full-page print-break-before flex flex-col"
      style={{
        backgroundColor: '#ffffff',
        minHeight: '920px',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
      }}
    >
      {/* ── Accent bar ──────────────────────────────────── */}
      <div
        style={{
          height: '5px',
          background: `linear-gradient(90deg, ${ACCENT} 0%, ${hex2rgba(ACCENT, 0.35)} 100%)`,
        }}
      />

      {/* ── Header ──────────────────────────────────────── */}
      <div className="px-10 pt-8 pb-6">
        <p
          className="text-[0.58rem] font-semibold tracking-[0.22em] uppercase mb-4"
          style={{ color: '#94a3b8' }}
        >
          About
        </p>

        <h2 className="text-[1.45rem] font-bold leading-tight tracking-tight text-slate-900">
          From HR Operations to AI-driven Solutions
        </h2>

        <div
          className="mt-4 px-4 py-3 rounded-lg max-w-2xl"
          style={{
            backgroundColor: tintDeep,
            borderLeft: `3px solid ${ACCENT}`,
          }}
        >
          <p className="text-[0.8rem] leading-relaxed text-slate-700">
            Four years running HR operations showed me exactly where processes break down
            and where people get stuck. Moving into AI development gave me the tools to
            fix those problems — not just describe them.
          </p>
        </div>
      </div>

      {/* ── Hairline ────────────────────────────────────── */}
      <div className="mx-10" style={{ borderTop: `1px solid ${tintBorder}` }} />

      {/* ── Background / Transition ─────────────────────── */}
      <div className="grid grid-cols-2" style={{ borderBottom: `1px solid ${tintBorder}` }}>
        <Panel label="Background" deep>
          <Body>
            I spent four years at Josun Palace Hotel managing onboarding, employee
            lifecycle, and cross-department coordination. That role put me in the room
            where manual processes failed — and made it clear which problems were worth
            solving systematically.
          </Body>
        </Panel>

        <Panel label="Transition" deep={false}>
          <Body>
            In 2025 I joined the Intel AI for Future Workforce Program and built
            end-to-end applications across mobile, backend, and AI layers. I moved into
            engineering to build the systems I could see were missing — not because
            development was interesting on its own.
          </Body>
        </Panel>
      </div>

      {/* ── Problem Focus / Approach ────────────────────── */}
      <div className="grid grid-cols-2 flex-1" style={{ borderBottom: `1px solid ${tintBorder}` }}>
        <div
          className="p-7"
          style={{ borderRight: `1px solid ${tintBorder}` }}
        >
          <Label>What I Work On</Label>
          <Body>
            I focus on gaps where the distance between what technology can do and what
            organizations actually experience is clear and costly — accessibility barriers,
            fragmented onboarding, complex data decisions that fall back to guesswork.
            These are systems problems with concrete answers.
          </Body>
        </div>

        <div className="p-7">
          <Label>How I Build</Label>
          <Body>
            Every project starts with a defined problem, not a technology preference.
            I design for deployability and explainability: the system has to work in the
            real environment, and someone non-technical has to understand the value it
            delivers. Both matter equally.
          </Body>
        </div>
      </div>

      {/* ── Differentiators ─────────────────────────────── */}
      <div className="px-10 py-7" style={{ borderBottom: `1px solid ${tintBorder}` }}>
        <Label>What Makes Me Different</Label>
        <div className="grid grid-cols-3 gap-3 mt-1">
          <DifferentiatorCard
            index="1"
            headline="I've lived the problems I build for"
            detail="HR experience means I don't need to simulate the business context — I worked inside it."
          />
          <DifferentiatorCard
            index="2"
            headline="Technical depth with business fluency"
            detail="I can read the architecture and explain the value to a non-technical buyer without switching modes."
          />
          <DifferentiatorCard
            index="3"
            headline="Real use cases, not demos"
            detail="Every project in this portfolio was built around a specific, real-world problem worth solving."
          />
        </div>
      </div>

      {/* ── Footer: Experience + Education ──────────────── */}
      <div
        className="grid grid-cols-2"
        style={{ backgroundColor: '#f8fafc' }}
      >
        {/* Experience */}
        <div
          className="p-7"
          style={{ borderRight: `1px solid ${tintBorder}` }}
        >
          <Label>Experience</Label>
          <div className="flex flex-col gap-3">
            {experience.map((item) => (
              <ExpRow key={item.id} {...item} />
            ))}
          </div>
        </div>

        {/* Education + Certifications */}
        <div className="p-7">
          <Label>Education & Certifications</Label>
          <div className="flex flex-col gap-3">
            {education.map((item) => (
              <EduRow key={item.id} {...item} />
            ))}
            {certifications.map(({ id, name, year }) => (
              <div key={id} className="print-keep flex items-baseline justify-between gap-2">
                <span
                  className="text-[0.72rem] font-medium px-2.5 py-0.5 rounded-full"
                  style={{
                    color: ACCENT,
                    backgroundColor: tintChipBg,
                    border: `1px solid ${tintChipBd}`,
                  }}
                >
                  {name}
                </span>
                <span className="text-[0.7rem] text-slate-400 whitespace-nowrap shrink-0">{year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

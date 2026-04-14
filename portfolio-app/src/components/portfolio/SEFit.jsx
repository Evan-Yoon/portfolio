import React from 'react'

/* ─── accent color for this page ───────────────────────────── */
const ACCENT = '#0f172a'   /* slate-900 — authoritative, neutral */
const BLUE   = '#3b82f6'   /* highlight accent matching hero/about */

function hex2rgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

const tintPanel  = hex2rgba(BLUE, 0.06)
const tintDeep   = hex2rgba(BLUE, 0.10)
const tintBorder = hex2rgba(BLUE, 0.20)
const numBg      = hex2rgba(BLUE, 0.10)

/* ─── section label ─────────────────────────────────────────── */

function Label({ children }) {
  return (
    <p
      className="text-[0.6rem] font-semibold tracking-[0.14em] uppercase mb-2.5"
      style={{ color: BLUE }}
    >
      {children}
    </p>
  )
}

/* ─── competency card ───────────────────────────────────────── */

/**
 * Full-width card — index number, headline, evidence lines.
 * Two cards sit side-by-side in a 2-col grid.
 */
function CompetencyCard({ index, headline, evidence, detail }) {
  return (
    <div
      className="print-keep flex flex-col gap-3 p-7"
      style={{ backgroundColor: tintPanel }}
    >
      {/* Index + headline row */}
      <div className="flex items-start gap-3">
        <span
          className="text-[0.65rem] font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
          style={{ backgroundColor: numBg, color: BLUE }}
        >
          {index}
        </span>
        <div>
          <p className="text-[0.88rem] font-bold text-slate-900 leading-snug">
            {headline}
          </p>
          <p
            className="text-[0.68rem] font-semibold tracking-[0.1em] uppercase mt-0.5"
            style={{ color: BLUE }}
          >
            {detail}
          </p>
        </div>
      </div>

      {/* Evidence bullets */}
      <ul className="flex flex-col gap-2 pl-9">
        {evidence.map((line, i) => (
          <li key={i} className="relative text-[0.78rem] text-slate-600 leading-relaxed">
            <span
              className="absolute -left-4 font-bold text-[0.65rem] top-[3px]"
              style={{ color: BLUE }}
            >
              —
            </span>
            {line}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ─── closing statement strip ───────────────────────────────── */

function ClosingStrip() {
  return (
    <div
      className="px-10 py-6 flex items-center gap-5"
      style={{
        backgroundColor: tintDeep,
        borderTop: `1px solid ${tintBorder}`,
      }}
    >
      <div
        className="w-1 self-stretch rounded-full shrink-0"
        style={{ backgroundColor: BLUE }}
      />
      <p className="text-[0.8rem] leading-relaxed text-slate-700 max-w-2xl">
        Sales Engineering is the role where understanding both sides of the table —
        technical depth and business reality — creates the most leverage.
        That's the exact intersection I've been working toward.
      </p>
    </div>
  )
}

/* ─── main component ────────────────────────────────────────── */

/**
 * SEFit
 * Dedicated full-page "Why Sales Engineer" block.
 *
 * Zones:
 *   Accent bar
 *   Header  – eyebrow, title, positioning paragraph
 *   4-card grid (2×2) – one card per competency
 *   Closing strip
 */
export default function SEFit({ seFit }) {
  /* Competency definitions — grounded and specific */
  const competencies = [
    {
      index: '1',
      headline: 'Technical Credibility',
      detail: 'Built, not borrowed',
      evidence: [
        'Designed and shipped four end-to-end applications spanning mobile, backend, and AI layers — not prototypes, but deployable systems.',
        'Can engage in architecture discussions, explain trade-offs, and identify where a proposed solution breaks down before it reaches a customer.',
      ],
    },
    {
      index: '2',
      headline: 'Customer-Centric Thinking',
      detail: 'Started from the problem, not the product',
      evidence: [
        'Four years in HR operations means I've been the customer — responsible for onboarding, process gaps, and making vendor decisions under constraints.',
        'I evaluate solutions by asking what the user actually experiences, not what the feature list says.',
      ],
    },
    {
      index: '3',
      headline: 'Problem Framing',
      detail: 'Diagnosis before prescription',
      evidence: [
        'Each project in this portfolio began with a clear, specific problem statement — not a technology search. WalkMate started with a safety gap, not with YOLO.',
        'In a sales cycle, that discipline translates to qualifying the real pain point before proposing any solution.',
      ],
    },
    {
      index: '4',
      headline: 'Solution Communication',
      detail: 'Technical fluency in plain language',
      evidence: [
        'Regularly translated system architecture decisions into outcome-focused explanations across HR, development, and stakeholder contexts.',
        'The goal is always the same: the person across the table should leave understanding the value, not the implementation.',
      ],
    },
  ]

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
      {/* ── Accent bar ──────────────────────────────────── */}
      <div
        style={{
          height: '5px',
          background: `linear-gradient(90deg, ${BLUE} 0%, ${hex2rgba(BLUE, 0.35)} 100%)`,
        }}
      />

      {/* ── Header ──────────────────────────────────────── */}
      <div className="px-10 pt-8 pb-6">
        <p
          className="text-[0.58rem] font-semibold tracking-[0.22em] uppercase mb-4"
          style={{ color: '#94a3b8' }}
        >
          Why Sales Engineer
        </p>

        <h2 className="text-[1.45rem] font-bold leading-tight tracking-tight text-slate-900">
          The Intersection of Technical Depth and Business Impact
        </h2>

        <div
          className="mt-4 px-4 py-3 rounded-lg max-w-2xl"
          style={{
            backgroundColor: tintDeep,
            borderLeft: `3px solid ${BLUE}`,
          }}
        >
          <p className="text-[0.8rem] leading-relaxed text-slate-700">
            I understand what a system does from the inside, and I understand what
            a business needs from experience — not inference. Sales Engineering is where
            those two things are most useful together.
          </p>
        </div>
      </div>

      {/* ── Hairline ────────────────────────────────────── */}
      <div className="mx-10" style={{ borderTop: `1px solid ${tintBorder}` }} />

      {/* ── 2×2 competency grid ─────────────────────────── */}
      <div
        className="grid grid-cols-2 flex-1"
        style={{ borderBottom: `1px solid ${tintBorder}` }}
      >
        {competencies.map((c, i) => (
          <div
            key={c.index}
            style={{
              borderRight: i % 2 === 0 ? `1px solid ${tintBorder}` : 'none',
              borderBottom: i < 2 ? `1px solid ${tintBorder}` : 'none',
            }}
          >
            <CompetencyCard {...c} />
          </div>
        ))}
      </div>

      {/* ── Closing strip ───────────────────────────────── */}
      <ClosingStrip />
    </div>
  )
}

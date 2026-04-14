import React from 'react'

/**
 * SectionBlock
 * Vertical rhythm wrapper for every portfolio section.
 *
 * Props:
 *   label        – section label text (small-caps accent)
 *   noDivider    – suppress the top hairline (use on the first section after Hero)
 *   printBreak   – add print-break-before to force a new PDF page before this section
 */
export default function SectionBlock({ label, noDivider = false, printBreak = false, children }) {
  return (
    <section
      className={[
        'portfolio-section px-8 py-7',
        printBreak ? 'print-break-before' : '',
      ].join(' ')}
    >
      {!noDivider && <hr className="section-divider border-gray-200 mb-7" />}
      {label && <h2 className="section-label">{label}</h2>}
      {children}
    </section>
  )
}

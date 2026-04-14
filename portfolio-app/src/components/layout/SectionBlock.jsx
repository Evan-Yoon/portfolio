import React from 'react'

/**
 * SectionBlock
 * Consistent padding + optional bottom divider for each portfolio section.
 * Add className="print-section" on the parent to avoid mid-section page breaks.
 */
export default function SectionBlock({ title, children, noDivider = false }) {
  return (
    <section className="print-section px-8 py-6">
      {title && (
        <h2 className="section-title">{title}</h2>
      )}
      {children}
      {!noDivider && <div className="divider" />}
    </section>
  )
}

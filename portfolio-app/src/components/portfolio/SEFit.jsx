import React from 'react'
import SectionBlock from '../layout/SectionBlock.jsx'

function FitPoint({ label, description }) {
  return (
    <div className="print-keep mb-4 last:mb-0">
      <p className="text-sm font-semibold text-gray-900">{label}</p>
      <p className="mt-0.5 text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

/**
 * SEFit
 * Explains why the candidate is a strong Sales Engineer.
 * Short intro + 3–4 named competency points.
 */
export default function SEFit({ seFit }) {
  return (
    <SectionBlock label="Sales Engineer Fit">
      <p className="text-sm text-gray-700 leading-relaxed mb-6">{seFit.intro}</p>
      {seFit.points.map((point) => (
        <FitPoint key={point.id} {...point} />
      ))}
    </SectionBlock>
  )
}

import React from 'react'
import SectionBlock from '../layout/SectionBlock.jsx'

function StrengthGroup({ category, items }) {
  return (
    <div className="print-keep">
      <p className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-2">
        {category}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="tag">{item}</span>
        ))}
      </div>
    </div>
  )
}

/**
 * CoreStrengths
 * Skill categories rendered as labelled tag groups.
 */
export default function CoreStrengths({ strengths }) {
  return (
    <SectionBlock label="Core Strengths">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {strengths.map((group) => (
          <StrengthGroup key={group.category} {...group} />
        ))}
      </div>
    </SectionBlock>
  )
}

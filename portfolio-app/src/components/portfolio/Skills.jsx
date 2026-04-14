import React from 'react'
import SectionBlock from '../layout/SectionBlock.jsx'
import Tag from '../ui/Tag.jsx'

export default function Skills({ skills }) {
  return (
    <SectionBlock title="Skills">
      <div className="space-y-3">
        {skills.map(({ category, items }) => (
          <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-2">
            <span className="text-xs font-semibold text-gray-500 w-36 shrink-0 pt-0.5">
              {category}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  )
}

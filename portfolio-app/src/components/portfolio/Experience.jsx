import React from 'react'
import SectionBlock from '../layout/SectionBlock.jsx'
import BulletList from '../ui/BulletList.jsx'

function ExperienceItem({ company, role, period, location, bullets }) {
  return (
    <div className="print-section mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
        <div>
          <span className="font-semibold text-gray-900">{role}</span>
          <span className="text-gray-400 mx-1.5">·</span>
          <span className="text-gray-600">{company}</span>
        </div>
        <span className="text-xs text-gray-400 whitespace-nowrap">{period}</span>
      </div>
      {location && (
        <p className="text-xs text-gray-400 mt-0.5">{location}</p>
      )}
      <BulletList items={bullets} />
    </div>
  )
}

export default function Experience({ experience }) {
  return (
    <SectionBlock title="Experience">
      {experience.map((item) => (
        <ExperienceItem key={item.id} {...item} />
      ))}
    </SectionBlock>
  )
}

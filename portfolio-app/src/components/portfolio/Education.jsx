import React from 'react'
import SectionBlock from '../layout/SectionBlock.jsx'

export default function Education({ education, certifications }) {
  return (
    <SectionBlock title="Education & Certifications" noDivider>
      <div className="space-y-3">
        {education.map(({ id, institution, degree, period }) => (
          <div key={id} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <span className="font-semibold text-sm text-gray-900">{degree}</span>
              <span className="text-gray-400 mx-1.5">·</span>
              <span className="text-sm text-gray-600">{institution}</span>
            </div>
            <span className="text-xs text-gray-400">{period}</span>
          </div>
        ))}

        {certifications && certifications.length > 0 && (
          <div className="mt-4 space-y-1.5">
            {certifications.map(({ id, name, year }) => (
              <div key={id} className="flex items-baseline justify-between text-sm">
                <span className="text-gray-700">{name}</span>
                <span className="text-xs text-gray-400 ml-4">{year}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </SectionBlock>
  )
}

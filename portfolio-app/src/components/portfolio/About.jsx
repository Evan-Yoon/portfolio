import React from 'react'
import SectionBlock from '../layout/SectionBlock.jsx'

function ExperienceRow({ role, company, period, location, bullets }) {
  return (
    <div className="print-keep mb-5 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
        <div className="text-sm">
          <span className="font-semibold text-gray-900">{role}</span>
          <span className="text-gray-300 mx-1.5">·</span>
          <span className="text-gray-600">{company}</span>
          {location && (
            <span className="text-gray-400 ml-1.5 text-xs">({location})</span>
          )}
        </div>
        <span className="text-xs text-gray-400 whitespace-nowrap shrink-0">{period}</span>
      </div>

      <ul className="mt-1.5 space-y-1 pl-3.5 text-sm text-gray-600 leading-relaxed">
        {bullets.map((b, i) => (
          <li key={i} className="relative before:content-['–'] before:absolute before:-left-3.5 before:text-gray-300">
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

function EducationRow({ degree, institution, period }) {
  return (
    <div className="print-keep flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-sm">
      <div>
        <span className="font-medium text-gray-900">{degree}</span>
        <span className="text-gray-300 mx-1.5">·</span>
        <span className="text-gray-500">{institution}</span>
      </div>
      <span className="text-xs text-gray-400 mt-0.5 sm:mt-0">{period}</span>
    </div>
  )
}

/**
 * About
 * Intro paragraph → work experience → education in one section.
 */
export default function About({ about, experience, education, certifications }) {
  return (
    <SectionBlock label="About">
      <p className="text-sm text-gray-700 leading-relaxed">{about.intro}</p>

      {experience.length > 0 && (
        <div className="mt-7">
          <p className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-3">
            Experience
          </p>
          {experience.map((item) => (
            <ExperienceRow key={item.id} {...item} />
          ))}
        </div>
      )}

      {(education.length > 0 || certifications.length > 0) && (
        <div className="mt-7">
          <p className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-3">
            Education & Certifications
          </p>
          <div className="space-y-2">
            {education.map((item) => (
              <EducationRow key={item.id} {...item} />
            ))}
            {certifications.map(({ id, name, year }) => (
              <div key={id} className="print-keep flex items-baseline justify-between text-sm">
                <span className="text-gray-600">{name}</span>
                <span className="text-xs text-gray-400 ml-4">{year}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionBlock>
  )
}

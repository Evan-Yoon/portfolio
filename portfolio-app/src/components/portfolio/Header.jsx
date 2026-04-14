import React from 'react'

/**
 * Header  –  name, title, contact info at the top of the portfolio.
 */
export default function Header({ profile }) {
  const { name, title, tagline, email, phone, location, linkedin, github } = profile

  return (
    <header className="px-8 py-10 border-b border-gray-200 print:py-6">
      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
      <p className="text-lg font-medium text-brand-500 mt-1">{title}</p>
      {tagline && (
        <p className="text-sm text-gray-500 mt-2 italic">{tagline}</p>
      )}

      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
        {email && (
          <a href={`mailto:${email}`} className="no-print-url hover:text-brand-500">
            {email}
          </a>
        )}
        {phone && <span>{phone}</span>}
        {location && <span>{location}</span>}
        {linkedin && (
          <a href={linkedin} className="no-print-url hover:text-brand-500" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {github && (
          <a href={github} className="no-print-url hover:text-brand-500" target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </header>
  )
}

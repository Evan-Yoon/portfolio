import React from 'react'
import SectionBlock from '../layout/SectionBlock.jsx'

/**
 * Contact
 * Closing section with a brief note and contact details.
 * noDivider=false so the hairline still appears at the top.
 */
export default function Contact({ profile, contact }) {
  const { email, phone, location, linkedin, github } = profile

  const links = [
    email    && { label: email,      href: `mailto:${email}` },
    phone    && { label: phone,      href: null },
    location && { label: location,   href: null },
    linkedin && { label: 'linkedin.com/in/your-handle', href: linkedin },
    github   && { label: 'github.com/your-handle',      href: github },
  ].filter(Boolean)

  return (
    <SectionBlock label="Contact">
      {contact.note && (
        <p className="text-sm text-gray-600 leading-relaxed mb-5">{contact.note}</p>
      )}

      <div className="space-y-1.5 text-sm text-gray-700">
        {links.map(({ label, href }) => (
          <div key={label} className="flex items-center gap-2">
            {href ? (
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="hover:text-brand-500 transition-colors"
              >
                {label}
              </a>
            ) : (
              <span>{label}</span>
            )}
          </div>
        ))}
      </div>
    </SectionBlock>
  )
}

import React from 'react'

/**
 * Hero
 * Top of the portfolio: name, title, tagline, contact row.
 * Stays on screen and print without any background fill.
 */
export default function Hero({ profile }) {
  const { name, title, tagline, email, phone, location, linkedin, github } = profile

  const contacts = [
    email    && { label: email,    href: `mailto:${email}` },
    phone    && { label: phone,    href: null },
    location && { label: location, href: null },
    linkedin && { label: 'LinkedIn', href: linkedin },
    github   && { label: 'GitHub',   href: github },
  ].filter(Boolean)

  return (
    <header className="px-8 pt-10 pb-7">
      <h1 className="text-[2rem] font-bold tracking-tight text-gray-900 leading-none">
        {name}
      </h1>

      <p className="text-[0.9rem] font-semibold text-brand-500 mt-2 tracking-wide">
        {title}
      </p>

      {tagline && (
        <p className="text-sm text-gray-500 mt-2.5 leading-relaxed max-w-lg">
          {tagline}
        </p>
      )}

      {contacts.length > 0 && (
        <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-x-1 gap-y-1 text-[0.78rem] text-gray-500">
          {contacts.map(({ label, href }, i) => (
            <React.Fragment key={label}>
              {i > 0 && <span className="text-gray-300 select-none">·</span>}
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="no-print-url hover:text-brand-500 transition-colors"
                >
                  {label}
                </a>
              ) : (
                <span>{label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </header>
  )
}

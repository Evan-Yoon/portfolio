import React from 'react'

/**
 * Tag  –  small pill label used for skill tags, tech stack, etc.
 */
export default function Tag({ label }) {
  return (
    <span className="inline-block bg-brand-50 text-brand-600 text-xs font-medium px-2.5 py-0.5 rounded-full print:border print:border-brand-500 print:bg-white">
      {label}
    </span>
  )
}

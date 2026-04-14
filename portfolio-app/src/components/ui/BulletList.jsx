import React from 'react'

/**
 * BulletList  –  simple unordered list with consistent spacing.
 */
export default function BulletList({ items }) {
  return (
    <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-gray-700">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

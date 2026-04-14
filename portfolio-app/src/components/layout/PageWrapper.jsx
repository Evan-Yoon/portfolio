import React from 'react'

/**
 * PageWrapper
 * Screen: centres a white card on a light background.
 * Print:  .screen-wrapper and .screen-card are targeted by print.css
 *         to strip padding, shadow, and max-width so content fills the A4 page.
 */
export default function PageWrapper({ children }) {
  return (
    <div className="screen-wrapper min-h-screen bg-[#f0f2f5] py-10 px-4">
      <main className="screen-card max-w-[720px] mx-auto bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] rounded-md">
        {children}
      </main>
    </div>
  )
}

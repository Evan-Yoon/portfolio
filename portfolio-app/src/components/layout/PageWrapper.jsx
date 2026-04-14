import React from 'react'

/**
 * PageWrapper
 * Constrains content to a readable max-width and centres it.
 * Used for both screen view and print output.
 */
export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 print:py-0 print:px-0 print:bg-white">
      <main className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg overflow-hidden print:shadow-none print:rounded-none">
        {children}
      </main>
    </div>
  )
}

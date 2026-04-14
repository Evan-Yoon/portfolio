import React from 'react'
import SectionBlock from '../layout/SectionBlock.jsx'

export default function Summary({ summary }) {
  return (
    <SectionBlock title="Summary">
      <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
    </SectionBlock>
  )
}

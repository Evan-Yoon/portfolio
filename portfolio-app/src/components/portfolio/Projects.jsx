import React from 'react'
import SectionBlock from '../layout/SectionBlock.jsx'
import Tag from '../ui/Tag.jsx'

function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="print-section mb-5 last:mb-0 border border-gray-100 rounded-lg p-4 print:border-gray-300 print:p-2">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="no-print-url text-xs text-brand-500 hover:underline shrink-0"
          >
            View →
          </a>
        )}
      </div>
      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{description}</p>
      {tags && tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Projects({ projects }) {
  return (
    <SectionBlock title="Projects">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </SectionBlock>
  )
}

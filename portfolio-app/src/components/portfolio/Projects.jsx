import React from 'react'
import SectionBlock from '../layout/SectionBlock.jsx'

function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="print-keep mb-4 last:mb-0 border border-gray-100 rounded p-4">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
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

      <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{description}</p>

      {tags && tags.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Projects({ projects }) {
  return (
    <SectionBlock label="Projects">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </SectionBlock>
  )
}

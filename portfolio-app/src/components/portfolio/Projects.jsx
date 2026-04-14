import React from 'react'
import ProjectPage from './ProjectPage.jsx'

/**
 * Projects
 * Renders each project as a standalone full-page block.
 * The wrapper carries `print-break-before` so the project sequence
 * always starts on a fresh printed page.
 * Each ProjectPage after the first also carries `print-break-before`
 * so each project occupies exactly one page.
 */
export default function Projects({ projects }) {
  return (
    <div className="print-break-before">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={index > 0 ? 'print-break-before' : ''}
        >
          <ProjectPage project={project} index={index} />
        </div>
      ))}
    </div>
  )
}

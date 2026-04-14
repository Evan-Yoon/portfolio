import React from 'react'
import {
  profile,
  summary,
  experience,
  education,
  certifications,
  languages,
  skills,
  projects,
} from '../../data/portfolioData.js'

import PageWrapper from '../layout/PageWrapper.jsx'
import Hero       from './HeroOverview.jsx'
import Projects   from './Projects.jsx'

/**
 * PortfolioPage
 * A4-based hiring document:
 *   Page 1  –  Summary (Hero): photo, resume content, full URLs
 *   Page 2+ –  One project per page (Projects → ProjectPage)
 */
export default function PortfolioPage() {
  return (
    <PageWrapper>
      <Hero
        profile={profile}
        summary={summary}
        experience={experience}
        education={education}
        certifications={certifications}
        languages={languages}
        skills={skills}
      />
      <Projects projects={projects} />
    </PageWrapper>
  )
}

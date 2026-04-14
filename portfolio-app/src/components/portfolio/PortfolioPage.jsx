import React from 'react'
import {
  profile,
  about,
  strengths,
  projects,
} from '../../data/portfolioData.js'

import PageWrapper from '../layout/PageWrapper.jsx'
import Hero       from './Hero.jsx'
import Projects   from './Projects.jsx'

/**
 * PortfolioPage
 * A4-based hiring document layout:
 *   Page 1  –  Summary (Hero)
 *   Page 2+ –  One project per page (Projects → ProjectPage)
 */
export default function PortfolioPage() {
  return (
    <PageWrapper>
      <Hero profile={profile} about={about} strengths={strengths} />
      <Projects projects={projects} />
    </PageWrapper>
  )
}

import React from 'react'
import {
  profile,
  experience,
  projects,
  skills,
  education,
  certifications,
} from '../../data/portfolioData.js'

import PageWrapper   from '../layout/PageWrapper.jsx'
import Header        from './Header.jsx'
import Summary       from './Summary.jsx'
import Experience    from './Experience.jsx'
import Projects      from './Projects.jsx'
import Skills        from './Skills.jsx'
import Education     from './Education.jsx'

/**
 * PortfolioPage
 * Composes all sections in vertical order.
 * This is the single entry point rendered by App.jsx.
 */
export default function PortfolioPage() {
  return (
    <PageWrapper>
      <Header profile={profile} />
      <Summary summary={profile.summary} />
      <Experience experience={experience} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Education education={education} certifications={certifications} />
    </PageWrapper>
  )
}

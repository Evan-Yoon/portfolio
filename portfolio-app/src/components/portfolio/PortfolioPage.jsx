import React from 'react'
import {
  profile,
  about,
  experience,
  education,
  certifications,
  strengths,
  projects,
  seFit,
  contact,
} from '../../data/portfolioData.js'

import PageWrapper   from '../layout/PageWrapper.jsx'
import Hero          from './Hero.jsx'
import About         from './About.jsx'
import CoreStrengths from './CoreStrengths.jsx'
import Projects      from './Projects.jsx'
import SEFit         from './SEFit.jsx'
import Contact       from './Contact.jsx'

/**
 * PortfolioPage
 * Vertical section order:
 *   Hero → About → Core Strengths → Projects → SE Fit → Contact
 */
export default function PortfolioPage() {
  return (
    <PageWrapper>
      <Hero profile={profile} strengths={strengths} />

      <About
        about={about}
        experience={experience}
        education={education}
        certifications={certifications}
      />

      <CoreStrengths strengths={strengths} />

      <Projects projects={projects} />

      <SEFit seFit={seFit} />

      <Contact profile={profile} contact={contact} />
    </PageWrapper>
  )
}

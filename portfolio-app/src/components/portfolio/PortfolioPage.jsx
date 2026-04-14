import React from "react";
import { hero, profile, projects } from "../../data/portfolioData.js";
import PageWrapper from "../layout/PageWrapper.jsx";
import HeroOverview from "./HeroOverview.jsx";
import Projects from "./Projects.jsx";

export default function PortfolioPage() {
  return (
    <PageWrapper>
      <HeroOverview hero={hero} profile={profile} />
      <Projects projects={projects} />
    </PageWrapper>
  );
}

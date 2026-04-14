import React from "react";
import ProjectPage from "./ProjectPage.jsx";

export default function Projects({ projects }) {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectPage key={project.id} project={project} index={index} />
      ))}
    </>
  );
}

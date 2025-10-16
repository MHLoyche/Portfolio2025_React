import React from "react";
import ProjectCard from "./project_card";

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          title={p.title}
          description={p.description}
          language={p.language}
          framework={p.framework}
        />
      ))}
    </div>
  );
}

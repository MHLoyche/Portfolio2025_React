import React from "react";

export default function ProjectCard({ title, description, language, framework }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Languages:</strong> {language}</p>
      <p><strong>Framework:</strong> {framework}</p>
    </div>
  );
}
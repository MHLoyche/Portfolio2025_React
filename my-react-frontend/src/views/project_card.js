import React from "react";

export default function ProjectCard({ title, description, language, framework, github, image}) {
  return (
    <div className="project-card">
      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Languages:</strong> {language}</p>
      <p><strong>Framework:</strong> {framework}</p>
      <p><strong>Github:</strong> <a href={github} target={github} rel="noopener noreferrer">{github}</a></p>
    </div>
  );
}
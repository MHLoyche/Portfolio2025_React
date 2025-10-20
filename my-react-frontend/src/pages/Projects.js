import React from 'react';
import ProjectList from '../views/project_list';
import { useProjectViewModel } from '../viewmodels/project_viewmodel';
import '../styles/pages.css';

function Projects() {
  const { projects, error, loading } = useProjectViewModel();

  return (
    <div className="page projects-page">
      <h1>My Projects</h1>
      <p className="page-description">
        Here are some of the projects I've worked on during this year.
      </p>

      {loading && <p className="loading-message">Loading projects...</p>}
      {error && <p className="error-message">Error: {error}</p>}

      <ProjectList projects={projects} />
    </div>
  );
}

export default Projects;

import React from 'react';
import EducationTable from '../views/education_table';
import { useEducationViewModel } from '../viewmodels/education_viewmodel';
import '../styles/pages.css';

function About() {
  const { education, error, loading } = useEducationViewModel();

  return (
    <div className="page about-page">
      <h1>About Me</h1>
      
      <section className="about-content">
        <div className="about-section">
          <h2>My Story</h2>
          <p>
            I'm a passionate developer with a love for creating elegant solutions to complex problems. 
            My journey into programming started by experiencing the products of programming through gaming.
            This sparked my curiosity and led me to explore the world of coding and software development.
            Over the years, I've honed my skills in various programming languages and frameworks, 
            and I'm constantly seeking new challenges to grow and improve as a developer.
          </p>
        </div>

        <div className="about-section">
          <h2>Competences</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <ul>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>C# .NET</li>
                <li>Java</li>
                <li>Python</li>
                <li>SQL</li>
                <li>XAML</li>
                <li>PHP</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Professional Competences</h3>
              <ul>
                <li>Agile / Scrum</li>
                <li>Waterfall Model</li>
                <li>VS / VS Code, IntelliJ, Pycharm</li>
                <li>MSSQL, MySQL, PostgreSQL</li>
                <li>UML</li>
                <li>Office-package</li>
                <li>Team dynamics</li>
                <li>REACT</li>
                <li>Fluent in danish and english</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Personal Skills</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Organising and delegating tasks</li>
                <li>Analytically strong</li>
                <li>Motivated and self-driven</li>
                <li>Well-spoken and articulate</li>
                <li>Problem solving</li>
                <li>Clear minded in high-pressure situations</li>
                <li>Open for feedback and constructive criticism</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Education & Experience</h2>
          <p>
            I'm continuously learning and improving my skills through hands-on projects during my current studies.<br/>
            I am currently studying to become a Datatechnician with a speciality in programming at SDE College.<br/>
            I also have almost 3 semesters on my Bachelor's in Software Technology at University of Southern Denmark (SDU)<br/>
            and 1 semester in mathematics and economy also at SDU.<br/>
          </p>
          
          {loading && <p className="loading-message">Loading education data...</p>}
          {error && <p className="error-message">Error loading education: {error}</p>}
          {!loading && !error && <EducationTable education={education} />}
        </div>
      </section>
    </div>
  );
}

export default About;

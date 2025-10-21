import React from 'react';
import '../styles/pages.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          Hi, I'm Mathias H. Løyche - A passionate developer looking for an apprenticeship! A place to grow and contribute.
        </p>
        <div className="hero-cta">
          <Link to="/projects" className="btn btn-primary">View My Work</Link>
          <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
        </div>
      </section>

      <section className="intro">
        <h2>What I Do</h2>
        <div className="intro-grid">
          <div className="intro-card">
            <h3>Web Development</h3>
            <p>Building responsive and modern web applications with React, PHP and more</p>
          </div>
          <div className="intro-card">
            <h3>Applications</h3>
            <p>Creating efficient and intuitive user interfaces and applications with WPF, .NET and more</p>
          </div>
          <div className="intro-card">
            <h3>Databases</h3>
            <p>Designing and managing databases for optimal performance and reliability with MySQL, PostgreSQL and MSSQL</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

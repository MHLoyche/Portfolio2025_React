import React from 'react';
import '../styles/pages.css';

function Contact() {
  return (
    <div className="page contact-page">
      <h1>Contact Me</h1>
      <p className="page-description">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <h3>📧 Email</h3>
              <p>
                <a href="mailto:MHLoyche@outlook.com" target="_blank">MHLoyche@outlook.com</a>
              </p>
            </div>
            <div className="contact-method">
              <h3>💼 LinkedIn</h3>
              <p>
                <a href="https://www.linkedin.com/in/mhloyche" target="_blank">https://www.linkedin.com/in/mhloyche</a>
              </p>
            </div>
            <div className="contact-method">
              <h3>🐙 GitHub</h3>
              <p>
                <a href="https://github.com/MHLoyche" target="_blank">https://github.com/MHLoyche</a>
              </p>
            </div>
          </div>
        </div>

        <div className="contact-additional">
          <div className="availability-section">
            <h2>Availability</h2>
            <div className="availability-card">
              <div className="status-indicator">
                <span className="status-dot available"></span>
                <span className="status-text">Available</span>
              </div>
              <p>I'm currently open to new opportunities and openly looking for an apprenticeship.</p>
            </div>
          </div>

          <div className="response-section">
            <h2>Response Time</h2>
            <div className="response-card">
              <div className="response-info">
                <span className="response-icon">⚡</span>
                <div>
                  <h4>Quick Response</h4>
                  <p>I typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>

    
  );
}


export default Contact;

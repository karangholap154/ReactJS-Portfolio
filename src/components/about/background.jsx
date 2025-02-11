import React from 'react';

export const Background = () => {
  return (
    <div className="about__background">
      <h3 className="about__background-title">Background</h3>
      <p className="about__background-subtitle">Here's a glimpse into some fascinating aspects of my personal info.🌟</p>
      <div className="about__background-info">
        <div className="about__background-item">
          <i className="bx bx-user about__background-icon"></i>
          <span className="about__background-label">Name:</span>
          <span className="about__background-value">Karan Gholap</span>
        </div>
        <div className="about__background-item">
          <i className="bx bx-calendar about__background-icon"></i>
          <span className="about__background-label">Birthday:</span>
          <span className="about__background-value">August 15</span>
        </div>
        <div className="about__background-item">
          <i className="bx bx-map about__background-icon"></i>
          <span className="about__background-label">Location:</span>
          <span className="about__background-value">Pune, India</span>
        </div>
        <div className="about__background-item">
          <i className="bx bx-chat about__background-icon"></i>
          <span className="about__background-label">Languages:</span>
          <span className="about__background-value">English, Hindi, Marathi</span>
        </div>
      </div>
    </div>
  );
};
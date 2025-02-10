import React from 'react';

export const Interests = () => {
  return (
    <div className="about__interests">
      <h3 className="about__interests-title">Interests</h3>
      <p className="about__interests-subtitle">"These activities and hobbies ignite my passion.🔥</p>
      <div className="about__interests-info">
        <div className="about__interests-item">
          <i className="bx bx-video about__interests-icon"></i>
          <span className="about__interests-label">Watch:</span>
          <span className="about__interests-value">Movies & TV Shows</span>
        </div>
        <div className="about__interests-item">
          <i className="bx bx-music about__interests-icon"></i>
          <span className="about__interests-label">Listen:</span>
          <span className="about__interests-value">Podcasts & Music</span>
        </div>
        <div className="about__interests-item">
          <i className="bx bx-palette about__interests-icon"></i>
          <span className="about__interests-label">Create:</span>
          <span className="about__interests-value">Projects & Designs</span>
        </div>
        <div className="about__interests-item">
          <i className="bx bx-search about__interests-icon"></i>
          <span className="about__interests-label">Explore:</span>
          <span className="about__interests-value">New Things & Places</span>
        </div>
      </div>
    </div>
  );
};
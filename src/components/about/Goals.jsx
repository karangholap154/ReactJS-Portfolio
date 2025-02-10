import React from 'react';

export const Goals = () => {
  return (
    <div className="about__goals">
      <h3 className="about__goals-title">Goals</h3>
      <p className="about__goals-subtitle">I’ve outlined these key objectives for advancing my career.🚀</p>
      <div className="about__goals-info">
        <div className="about__goals-item">
          <i className="bx bx-bot about__goals-icon"></i>
          <span className="about__goals-label">Follow:</span>
          <span className="about__goals-value">Software / AI Engineering</span>
        </div>
        <div className="about__goals-item">
          <i className="bx bx-laptop about__goals-icon"></i>
          <span className="about__goals-label">Practice:</span>
          <span className="about__goals-value">Software Development</span>
        </div>
        <div className="about__goals-item">
          <i className="bx bxs-zap about__goals-icon"></i>
          <span className="about__goals-label">Support:</span>
          <span className="about__goals-value">Tech Communities</span>
        </div>
        <div className="about__goals-item">
          <i className="bx bxs-graduation about__goals-icon"></i>
          <span className="about__goals-label">Complete:</span>
          <span className="about__goals-value">Master's Degree</span>
        </div>
      </div>
    </div>
  );
};
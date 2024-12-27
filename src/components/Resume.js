import React from 'react';
import './Resume.css';  // Import the CSS file

import myPortfolioImage from './assets/myportfolio.png';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>
      <img 
        src={myPortfolioImage} 
        alt="My Portfolio" 
        className="resume-image" 
      />
    </div>
  );
};

export default Resume;

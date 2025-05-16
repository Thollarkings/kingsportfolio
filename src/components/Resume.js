import React from 'react';
import './Resume.css'; // Import the CSS file

import myPortfolioImage from './assets/myportfolio.png';

// Add image sources for the thumbnails (replace with actual image paths)
import cloudComputingImage from './assets/cloud-computing.png';
import webDevImage from './assets/web-development.png';
import gitGitHubImage from './assets/git-github.png';
import reactDevImage from './assets/react-dev.png';
import nodeJsImage from './assets/nodejs.png';
import pythonImage from './assets/python.png';
import reactBasicsImage from './assets/react-basics.png';
import advancedReactImage from './assets/advanced-react.png';
import jsBasicsImage from './assets/js-basics.png'; // New image import for JavaScript Basics

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>
      
      {/* Resume Image */}
      <img 
        src={myPortfolioImage} 
        alt="My Portfolio" 
        className="resume-image" 
      />
      
      {/* Download Resume Button */}
      <div className="download-container">
        <a 
          href="/MyPortfolio.pdf" 
          download="MyPortfolio.pdf" 
          className="download-button"
        >
          Download Resume
        </a>
      </div>

      {/* Certifications Section */}
      <div className="certifications-container">
        <h2>Certifications</h2>
        <ul className="certifications-list">
          <li>
            <a 
              href="https://www.coursera.org/account/accomplishments/records/9SQHNYJ4N4DH" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={cloudComputingImage} 
                alt="Introduction to Cloud Computing" 
                className="certification-thumbnail"
              />
            </a>
            <br />
            <a 
              href="https://www.coursera.org/account/accomplishments/records/9SQHNYJ4N4DH" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Introduction to Cloud Computing
            </a>
          </li>
          <li>
            <a 
              href="https://www.coursera.org/account/accomplishments/records/BKWBZ2895DCU" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={webDevImage} 
                alt="Introduction to Web Development" 
                className="certification-thumbnail"
              />
            </a>
            <br />
            <a 
              href="https://www.coursera.org/account/accomplishments/records/BKWBZ2895DCU" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Introduction to Web Development with HTML, CSS, JavaScript
            </a>
          </li>
          <li>
            <a 
              href="https://www.coursera.org/account/accomplishments/records/ASWDZD5MPDST" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={gitGitHubImage} 
                alt="Getting Started with Git and GitHub" 
                className="certification-thumbnail"
              />
            </a>
            <br />
            <a 
              href="https://www.coursera.org/account/accomplishments/records/ASWDZD5MPDST" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Getting Started with Git and GitHub
            </a>
          </li>
          <li>
            <a 
              href="https://www.coursera.org/account/accomplishments/records/RDW29KQZQQRT" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={reactDevImage} 
                alt="Developing Front-End Apps with React" 
                className="certification-thumbnail"
              />
            </a>
            <br />
            <a 
              href="https://www.coursera.org/account/accomplishments/records/RDW29KQZQQRT" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Developing Front-End Apps with React
            </a>
          </li>
          <li>
            <a 
              href="https://www.coursera.org/account/accomplishments/records/F0RIYAXPDVJ1" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={nodeJsImage} 
                alt="Developing Back-End Apps with Node.js and Express" 
                className="certification-thumbnail"
              />
            </a>
            <br />
            <a 
              href="https://www.coursera.org/account/accomplishments/records/F0RIYAXPDVJ1" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Developing Back-End Apps with Node.js and Express
            </a>
          </li>
          <li>
            <a 
              href="https://www.coursera.org/account/accomplishments/records/31M8ZIEZ7XIN" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={pythonImage} 
                alt="Python for Data Science, AI & Development" 
                className="certification-thumbnail"
              />
            </a>
            <br />
            <a 
              href="https://www.coursera.org/account/accomplishments/records/31M8ZIEZ7XIN" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Python for Data Science, AI & Development
            </a>
          </li>
          <li>
            <a 
              href="https://www.coursera.org/account/accomplishments/records/WXY6NZ7658N5" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={reactBasicsImage} 
                alt="React Basics" 
                className="certification-thumbnail"
              />
            </a>
            <br />
            <a 
              href="https://www.coursera.org/account/accomplishments/records/WXY6NZ7658N5" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              React Basics
            </a>
          </li>
          <li>
            <a 
              href="https://www.coursera.org/account/accomplishments/records/WXY6NZ7658N5" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={advancedReactImage} 
                alt="Advanced React" 
                className="certification-thumbnail"
              />
            </a>
            <br />
            <a 
              href="https://www.coursera.org/account/accomplishments/records/WXY6NZ7658N5" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Advanced React
            </a>
          </li>
          <li>
            <a 
              href="https://www.coursera.org/account/accomplishments/records/ORLFTEB8SXKR" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={jsBasicsImage} 
                alt="JavaScript Basics" 
                className="certification-thumbnail"
              />
            </a>
            <br />
            <a 
              href="https://www.coursera.org/account/accomplishments/records/ORLFTEB8SXKR" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              JavaScript Basics
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;

import React from 'react';
import './home.css';
import './Projects.css'; 
import Invoicemax from '../images/Invoicemax.png';
import Measurementrecorder from '../images/Measurementrecorder.png';
import Simplecalculator from '../images/simplecalculator.png';
import Tailorslogs from '../images/Tailorslogs.png';
import Unitconverter from '../images/unitconverter.png';
import Budgetapp from '../images/Budgetapp.png'; // Add Budgetapp.png

const Home = () => {
  return (
    <div className='parentContainer'>
      <div className='myIntro'>
        <h1>Name: Oyeniyi Omotola</h1>
        <h2>Contact Information:</h2>
        <ul>
          <li>Phone: +234-8065970017, +234-9071333340</li>
          <li>Email: mediaxtreme1@gmail.com</li>
          <li>Address: Apartment 11B, Zone D, BCGA, off Queens School, Ibadan</li>
        </ul>
      </div>
      <div className='myProfSum'>
        <h2>Professional Summary:</h2>
        <p>
          Front-end developer with 5+ years of experience Web development and React.<br />
          Skilled in building scalable, user-friendly applications.<br />
          Transitioned from agricultural research to pursue software development.<br />
          Seeking front-end role in forward-thinking IT company, particularly in SaaS or e-commerce.<br />
          Actively engaged in professional development and open-source projects, expanding skills to<br />
          become proficient backend developer and aspiring full-stack developer.
        </p>
        

        
      </div>
      <div className='mySkills'>
        <h2>Skills:</h2>
        <p><strong>Technical Skills:</strong> HTML, CSS, JavaScript, React, Python, Node.js, Express, Git, GitHub, AWS, IBM Cloud, Figma ... . . .  .  .  .</p>
        <p><strong>Soft Skills:</strong> Problem-solving, teamwork, communication, project management, UI/UX, web design, graphic design ... . . .  .  .  .</p>
      </div>
      <div className="projects-container">
        <h1>My Projects</h1>
        <ul className="projects-list">
          <li>
            <a href="https://bit.ly/invoicemax" target="_blank" rel="noopener noreferrer">
              <img
                src={Invoicemax}
                alt="InvoiceMax App Screenshot"
                className="project-image"/>
                <br />
            </a>
            <a href="https://bit.ly/invoicemax"><b>InvoiceMax</b></a>
            <p>Comprehensive invoicing application using React.</p>
          </li>
          <li>
            <a href="https://rebrand.ly/tailors-log" target="_blank" rel="noopener noreferrer">
              <img
                src={Tailorslogs}
                alt="Tailor's Logbook App Screenshot"
                className="project-image"/>
                <br />
            </a>
            <a href="https://rebrand.ly/tailors-log"><b>My Tailor's Logbook</b></a>
            <p>
              This app is an essential tool for accurately recording client measurements,
              tracking key details, and ensuring precise fittings and timely delivery.
            </p>
          </li>
          <li>
            <a href="https://thollarkings.github.io/ejtos-react_budget_app/" target="_blank" rel="noopener noreferrer">
              <img
                src={Budgetapp}
                alt="Budget App Screenshot"
                className="project-image"/>
                <br />
            </a>
            <a href="https://thollarkings.github.io/ejtos-react_budget_app/"><b>Budget App</b></a>
            <p>
              User-friendly budget management tool with React. This app is an essential
              tool for accurately recording client measurements, tracking key details, and<br />
              ensuring precise fittings and timely delivery.
            </p>
          </li>
          <li>
            <a href="https://thollarkings.github.io/Tollars-Calculator/" target="_blank" rel="noopener noreferrer">
              <img
                src={Simplecalculator}
                alt="Kings-Calc App Screenshot"
                className="project-image"/>
                <br />
            </a>
            <a href="https://thollarkings.github.io/Tollars-Calculator/"><b>Kings-Calc</b></a>
            <p>
              This app is a Simplest Working Calculator designed with React. Its primary
              goal is to provide basic arithmetic operations and allow users to interact with<br />
              a clean, user-friendly interface.
            </p>
          </li>
          <li>
            <a href="https://thollarkings.github.io/Tailors_Log_Book/" target="_blank" rel="noopener noreferrer">
              <img
                src={Measurementrecorder}
                alt="Measurements Recorder App Screenshot"
                className="project-image"/>
                <br />
            </a>
            <a href="https://thollarkings.github.io/Tailors_Log_Book/"><b>Measurements Recorder</b></a>
            <p>
              This application serves as a measurement tracking tool, similar to the
              My Tailor's Logbook app, this was developed using vanilla JavaScript.
            </p>
          </li>
          <li>
            <a href="https://thollarkings.github.io/Tailors_Log_Book/" target="_blank" rel="noopener noreferrer">
              <img
                src={Unitconverter}
                alt="Unit Converter App Screenshot"
                className="project-image"/>
                <br />
            </a>
            <a href="https://thollarkings.github.io/Tailors_Log_Book/"><b>Unit Converter</b></a>
            <p>
              Unit Converter Web App is an interactive application designed to simplify
              the process of converting values between different units of measurement.<br />
              Using vanilla JavaScript, it provides a responsive and user-friendly interface
              where users can input values in one unit and instantly see the equivalent value<br />
              in another.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

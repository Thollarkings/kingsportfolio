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
          Front-end developer with 5+ years of experience Web development and React.
          Skilled in building scalable, user-friendly applications.
          Transitioned from agricultural research to pursue software development.
          Seeking front-end role in forward-thinking IT company, particularly in SaaS or e-commerce.
          Actively engaged in professional development and open-source projects, expanding skills to
          become proficient backend developer and aspiring full-stack developer.
        </p>



      </div>
      <div className='mySkills'>
        <h2>Skills:</h2>
        <p><strong>Technical Skills:</strong> HTML, CSS, JavaScript, React, Python, Node.js, Express, Git, GitHub, AWS, IBM Cloud, Figma ... . . .  .  .  .</p>
        <p><strong>Soft Skills:</strong> Problem-solving, teamwork, communication, project management, UI/UX, web design, graphic design ... . . .  .  .  .</p>
      </div>

      <div className="projects-container">
        <h1 className='projtit'>My Projects</h1>
        <div className="project-item">
          <a href="https://invoice-max-git-master-omotolas-projects-5dc9084e.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img
              src={Invoicemax}
              alt="InvoiceMax App Screenshot"
              className="project-image"
            />
          </a>
          <a href="https://invoice-max-git-master-omotolas-projects-5dc9084e.vercel.app/">
            <h2>InvoiceMax</h2>
          </a>
          <p>Comprehensive invoicing application using React.</p>
        </div>

        <div className="project-item">
          <a href="https://thollarkings.github.io/unit-converter/" target="_blank" rel="noopener noreferrer">
            <img
              src={Unitconverter}
              alt="Unit Converter App Screenshot"
              className="project-image"
            />
          </a>
          <a href="https://thollarkings.github.io/unit-converter/">
            <h2>Unit Converter</h2>
          </a>
          <p>
            Unit Converter React Web App is an interactive tool that simplifies the conversion of measurement units. It features a responsive, user-friendly interface that allows users to input values and instantly see their equivalents in another unit.
          </p>
        </div>

        <div className="project-item">
          <a href="https://thollarkings.github.io/mytailors-log/" target="_blank" rel="noopener noreferrer">
            <img
              src={Tailorslogs}
              alt="Tailor's Logbook App Screenshot"
              className="project-image"
            />
          </a>
          <a href="https://thollarkings.github.io/mytailors-log/">
            <h2>My Tailor's Logbook</h2>
          </a>
          <p>
            This app is an essential tool for accurately recording client measurements,
            tracking key details, and ensuring precise fittings and timely delivery.
          </p>
        </div>

        <div className="project-item">
          <a href="https://thollarkings.github.io/kings_budget_app/" target="_blank" rel="noopener noreferrer">
            <img
              src={Budgetapp}
              alt="Budget App Screenshot"
              className="project-image"
            />
          </a>
          <a href="https://thollarkings.github.io/kings_budget_app/">
            <h2>Budget App</h2>
          </a>
          <p>
            User-friendly budget management tool with React. This app is an essential
            tool for accurately recording client measurements, tracking key details, and
            ensuring precise fittings and timely delivery.
          </p>
        </div>

        <div className="project-item">
          <a href="https://thollarkings.github.io/simple-calculator/" target="_blank" rel="noopener noreferrer">
            <img
              src={Simplecalculator}
              alt="Kings-Calc App Screenshot"
              className="project-image"
            />
          </a>
          <a href="https://thollarkings.github.io/simple-calculator/">
            <h2>Kings-Calc</h2>
          </a>
          <p>
            This app is a Simple Working Calculator designed with React. Its primary
            goal is to provide basic arithmetic operations.
          </p>
        </div>

        <div className="project-item">
          <a href="https://thollarkings.github.io/Tailors_Log_Book/" target="_blank" rel="noopener noreferrer">
            <img
              src={Measurementrecorder}
              alt="Measurements Recorder App Screenshot"
              className="project-image"
            />
          </a>
          <a href="https://thollarkings.github.io/Tailors_Log_Book/">
            <h2>Measurements Recorder</h2>
          </a>
          <p>
            This application serves as a measurement tracking tool. Similar to the
            My Tailor's Logbook app, this was developed using vanilla JavaScript.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Home;

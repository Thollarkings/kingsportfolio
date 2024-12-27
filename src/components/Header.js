import React from 'react';
import './Header.css'; // Import the CSS for the header

const Header = ({ setCurrentPage }) => {
  return (
    <header className='header'>
      <div  />
      <nav>
        <ul className="menu">
          <li><button onClick={() => setCurrentPage('Home')}>Home</button></li>
          <li><button onClick={() => setCurrentPage('Resume')}>Resume</button></li>
          <li><button onClick={() => setCurrentPage('Projects')}>Projects</button></li>
          <li><button onClick={() => setCurrentPage('Summary')}>Summary</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

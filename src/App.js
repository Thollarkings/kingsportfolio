import React, { useState } from 'react';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Summary from './components/Summary';
import NotFound from './components/NotFound';
import Header from './components/Header'; // Header component
import './styles.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home'); // Track the current page

  // Function to render the correct component based on the currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Resume':
        return <Resume />;
      case 'Projects':
        return <Projects />;
      case 'Summary':
        return <Summary />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="layout">
      {/* Pass setCurrentPage function to the Header */}
      <Header setCurrentPage={setCurrentPage} />
      
      <main style={{ padding: '10px 50px' }}>
        {renderPage()} {/* Render the page based on the currentPage */}
      </main>

      <footer id="footer">
        <h5>&copy; Thollarkings 2024</h5>
      </footer>
    </div>
  );
};

export default App;

import myPortfolioImage from './assets/myportfolio.png';

const Resume = () => {
  return (
    <div>
      <h1 style={{ color: 'white' }}>My Resume</h1>
      <img 
        src={myPortfolioImage} 
        alt="My Portfolio" 
        style={{ width: '1600px', maxHeight: '4390px', margin: '0 auto', display: 'block' }} 
      />
    </div>
  );
};

export default Resume;

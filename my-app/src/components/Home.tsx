// Home.tsx

import React from 'react';
import './Home.css';
import Navbar from './Navbar'

const Home: React.FC = () => {
  return (
    <div>
    <Navbar/>
    <div className='Home'>
    
      <h1>Home</h1>
      {/* Home page content */}
    </div>
    </div>
  );
};

export default Home;

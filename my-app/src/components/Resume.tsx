// Resume.tsx
// This is unused

import React from 'react';
import Navbar from './Navbar'

const Resume: React.FC = () => {
  return (
    <div>
    <div className='Navbar'>
    <Navbar/>
    </div>
    <div>
      <h2>Resume</h2>
      <a href="resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
    </div>
    </div>
  );
};

export default Resume;
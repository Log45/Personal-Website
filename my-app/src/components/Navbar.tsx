import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar: React.FC = () => {
  return (
    <div className='Navbar'>
    <nav>
      <ul className="navbar-list"> {/* Apply CSS class to the ul element */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><a href="https://www.linkedin.com/in/logan-endes/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/Log45" target="_blank" rel="noopener noreferrer">Github</a></li>
        <li><a href="resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        {/* <li><Link to="/contact">Contact</Link></li> */}
        {/* <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
import React from 'react';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import './Home.css';

const experiences = [
  {
    title: "Part-time AI Engineer at Ecolab",
    duration: "August 2024-March 2025",
    description: "Fine-tuned YOLO object detection models to detect food items in kitchen footage.",
    contributions: []
  },
  {
    title: "AI Software Engineer Co-op at Ecolab",
    duration: "January 2024 - August 2024",
    description: "Collaborated with senior engineers to bring AI assistants to customers in the restaurant industry.",
    contributions: []
  },
  {
    title: "Student Laboratory Instructor at Rochester Institute of Technology",
    duration: "Summer 2023",
    description: "Aided students during Computer Science 1 lab periods.",
    contributions: []
  },
  {
    title: "AI Research Intern at Brookhaven National Laboratory",
    duration: "Summer 2023",
    description: "Researched the use of Large Language AI Models (LLMs) for medical isotope development.",
    contributions: []
  },
  
];

const Experience: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="Home">
        <h1>Experience &#128679; THIS PAGE IS UNDER CONSTRUCTION &#128679;</h1>
      </div>
      <div className="Description">
        <div className="Content centered-content">
          {experiences.map((exp, index) => (
            <Dropdown key={index} title={exp.title}>
              <p><strong>{exp.duration}</strong></p>
              <p>{exp.description}</p>
            </Dropdown>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 
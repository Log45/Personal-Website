// filepath: c:\Users\Logan\Documents\CODE\Personal-Website\my-app\src\components\Experience.tsx
import React from 'react';
import Dropdown from './Dropdown';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "AI Software Engineer at Ecolab",
      duration: "January 2024 - Present",
      description: "Collaborated with senior engineers to bring AI assistants to customers in the restaurant industry."
    },
    {
      title: "Intern at Brookhaven National Laboratory",
      duration: "Summer 2023",
      description: "Researched the use of Large Language AI Models (LLMs) for medical isotope development."
    },
    {
      title: "Part-time AI Engineer at Ecolab",
      duration: "Last school year",
      description: "Fine-tuned YOLO object detection models to detect food items in kitchen footage."
    }
  ];

  return (
    <div>
      <h1>Experience</h1>
      {experiences.map((exp, index) => (
        <Dropdown key={index} title={exp.title} duration={exp.duration}>
          <p>{exp.description}</p>
        </Dropdown>
      ))}
    </div>
  );
};

export default Experience;
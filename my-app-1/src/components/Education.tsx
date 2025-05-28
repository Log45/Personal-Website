import React from 'react';
import Dropdown from './Dropdown';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: "Pennsauken High School",
      degree: "High School Diploma",
      details: "Graduated with a 4.4 GPA. Completed multiple AP courses."
    },
    {
      institution: "Rochester Institute of Technology",
      degree: "Bachelor's and Master's Degree in Computer Science",
      details: "Currently pursuing a degree focused on Artificial Intelligence with a Minor in Japanese Language."
    }
  ];

  return (
    <div>
      <h1>Education</h1>
      {educationData.map((edu, index) => (
        <Dropdown key={index} title={edu.institution}>
          <p>{edu.degree}</p>
          <p>{edu.details}</p>
        </Dropdown>
      ))}
    </div>
  );
};

export default Education;
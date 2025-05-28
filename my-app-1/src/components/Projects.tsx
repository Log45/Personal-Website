// filepath: c:\Users\Logan\Documents\CODE\Personal-Website\my-app\src\components\Projects.tsx
import React from 'react';
import Dropdown from './Dropdown';

const projectsData = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    details: 'Detailed information about Project 1.',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    details: 'Detailed information about Project 2.',
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3',
    details: 'Detailed information about Project 3.',
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <h1>Projects</h1>
      {projectsData.map((project, index) => (
        <Dropdown key={index} title={project.title} description={project.description}>
          <p>{project.details}</p>
        </Dropdown>
      ))}
    </div>
  );
};

export default Projects;
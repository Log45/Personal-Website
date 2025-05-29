import React from 'react';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import './Home.css';

const projectsData = [
  {
    title: 'Notetaker',
    description: 'A command line interface that uses large language models to take notes on mp3 recordings of lectures.',
    details: '',
  },
  {
    title: 'Fencing Referee',
    description: 'Application that uses an ensemble of computer vision models to score sabre fencing bouts live.',
    details: '',
  },
  {
    title: 'CSH Slurm',
    description: 'Workload manager for internal use by Computer Science House.',
    details: '',
  },
  {
    title: 'Custom Keyboard Design',
    description: 'A custom PCB for a keyboard powered by a Raspberry Pi Pico.',
    details: '',
  },
  {
    title: 'Mol Scale',
    description: 'A calculator that computes the number of mols in a given compound.',
    details: '',
  },
  {
    title: 'Alarm Clock Game',
    description: 'A simon-says game to help users ensure they are awake before turning off an alarm.',
    details: '',
  },
  {
    title: 'Interest Calculator',
    description: 'A GUI application to calculate simple and compound interest.',
    details: '',
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="Home">
        <h1>Projects &#128679; THIS PAGE IS UNDER CONSTRUCTION &#128679;</h1>
      </div>
      <div className="Description">
        <div className="Content centered-content">
          {projectsData.map((project, index) => (
            <Dropdown key={index} title={project.title}>
              <p><strong>{project.description}</strong></p>
              <p>{project.details}</p>
            </Dropdown>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 
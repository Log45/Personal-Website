import React, { useState } from 'react';
import './TurningDisplayRack.css';
import scream from '../assets/funnyscream.png'
import me from '../assets/headshot.jpeg'
import group from '../assets/suligroup.jpeg'

interface Option {
  id: number;
  name: string;
  description: string;
  imageUrl: string; // Add imageUrl property
}

const options: Option[] = [
  { id: 1, name: 'This is me', description: "This is me", imageUrl: me },
  { id: 2, name: 'This is my BNL group', description: "This is my BNL group" ,imageUrl: group},
  { id: 3, name: 'Scream', description: "Scream",imageUrl: scream },
  // Add more options as needed
];

const TurningDisplayRack: React.FC = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);

  const nextOption = () => {
    setSelectedOptionIndex((prevIndex) => (prevIndex + 1) % options.length);
  };

  const prevOption = () => {
    setSelectedOptionIndex((prevIndex) =>
      prevIndex === 0 ? options.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="turning-display-rack-container">
      {/* <div className="prev-button-container"> */}
        <button className="prev-button" onClick={prevOption}>Previous</button>
      {/* </div> */}
      <div className="turning-display-rack">
        <div className="rack">
          {options.map((option, index) => (
            <div
              key={option.id}
              className={`option ${index === selectedOptionIndex ? 'selected' : ''}`}
              style={{
                transform: `rotateY(${((index - selectedOptionIndex) * (360 / options.length)).toFixed(2)}deg) translateZ(250px)`,
              }}
            >
              <img
                src={option.imageUrl}
                alt={option.name}
                className="option-image"
              />
              <div className="option-details">
                <h2>{option.name}</h2>
                <p>{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="next-button-container"> */}
        <button className="next-button" onClick={nextOption}>Next</button>
      {/* </div> */}
    </div>
  );
};

export default TurningDisplayRack;
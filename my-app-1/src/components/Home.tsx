// filepath: c:\Users\Logan\Documents\CODE\Personal-Website\my-app\src\components\Home.tsx
// Home.tsx

import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import selfPortraint from '../assets/headshot.jpeg';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className='Home'>
        <h1>Hello! I'm Logan Endes &#128075;</h1>
        {/* <h2>About me: </h2> */}
        {/* Home page content */}
      </div>
      <div className='Description'>
        <img src={selfPortraint} alt="Headshot of Logan Endes" width={600} height={600} />
        <div className='Content'>
          <p>I'm a fourth year student at Rochester Institute of Technology pursuing a Bachelors and Masters Degree in Computer Science focused in Artificial Intelligence, and a Minor in Japanese Language.
            <br></br>
            <br></br>
            Last school year, I worked part time as an AI Software Engineer at Ecolab collaborating with senior engineers to bring AI assistants to customers in the restaurant industry. Before returning to school for the Fall 2024 semester,
            I interned with Ecolab full time starting in January 2024. During my time there, I fine-tuned YOLO object detection models to detect food items in footage from kitchens.
            <br></br>
            <br></br>
            During the Summer of 2023, I was part of the Science Undergratuate Laboratory Internship program at Brookhaven National Laboratory (BNL).
            In my time there, I researched the use of Large Language AI Models (LLMs) similar to ChatGPT to aid in the research and development of
            medical isotopes used to treat cancer through BNL's Computational Science Initiative group in collaboration with the Medical Isotope Research and Production group.
            While specific prompting of models and types of models needs work before a fully autonomous system can be created, we found that the use of LLMs can be
            a valuable asset in automatic isotope suggestion and production for the future of cancer treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
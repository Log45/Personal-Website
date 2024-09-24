// Home.tsx

import React from 'react';
import './Home.css';
import Navbar from './Navbar'
import selfPortraint from '../assets/headshot.jpeg'

const Home: React.FC = () => {
  return (
    <div>
    <Navbar/>
    <div className='Home'>
    
      <h1>Hello! I'm Logan Endes &#128075;</h1>
      
      {/* <h2>About me: </h2> */}
    
      {/* Home page content */}
    </div>
    <div className='Description'>
      <img src={selfPortraint} alt="Headshot of Logan Endes" width={600} height={600}/>
      <div className='Content'>
        <p>I'm a third year student at Rochester Institute of Technology majoring in Computer Science with a Minor in Japanese Language and Culture. 
          This year, I am beginning my Master's in Computer Science with a focus on Artificial Intelligence and Machine Learning.
            
            <br></br>
            <br></br>
            Currently, I'm working part-time as a Software Engineer at Ecolab collaborating with senior engineers to bring AI assistants to
            untapped industries. 
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

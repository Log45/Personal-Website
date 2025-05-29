// Home.tsx

import React, { useRef, useEffect, useState } from 'react';
import './Home.css';
import Navbar from './Navbar'
import selfPortraint from '../assets/headshot.jpeg'
import Dropdown from './Dropdown';

const Home: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgSize, setImgSize] = useState<{width: number, height: number} | undefined>(undefined);
  const pointerRef = useRef<HTMLDivElement>(null);
  const dropdownBtnRef = useRef<HTMLButtonElement>(null);
  const pointerAnimated = useRef(false);

  useEffect(() => {
    function updateSize() {
      if (imgRef.current) {
        setImgSize({
          width: imgRef.current.offsetWidth,
          height: imgRef.current.offsetHeight
        });
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Mouse pointer animation
  useEffect(() => {
    if (pointerAnimated.current) return;
    pointerAnimated.current = true;
    const pointer = pointerRef.current;
    const btn = dropdownBtnRef.current;
    if (!pointer || !btn) return;
    // Start pointer at top left
    pointer.style.display = 'block';
    pointer.style.left = '20px';
    pointer.style.top = '20px';
    pointer.style.transition = 'left 1.2s cubic-bezier(0.4,1.4,0.6,1), top 1.2s cubic-bezier(0.4,1.4,0.6,1)';
    setTimeout(() => {
      const rect = btn.getBoundingClientRect();
      pointer.style.left = rect.left + rect.width / 2 + 'px';
      pointer.style.top = rect.top + rect.height / 2 + 'px';
    }, 300);
    // Hide pointer after animation
    setTimeout(() => {
      if (pointer) pointer.style.display = 'none';
    }, 1800);
  }, []);

  return (
    <div>
    <Navbar/>
    <div className='Home'>
    
      <h1>Hello! I'm Logan Endes &#128075;</h1>
      
      {/* <h2>About me: </h2> */}
    
      {/* Home page content */}
    </div>
    <div className='Description'>
      <img ref={imgRef} src={selfPortraint} alt="Headshot of Logan Endes" width={600} height={600}/>
      <div className='Content'>
        <div style={{ width: '50vw', minHeight: imgSize ? imgSize.height : undefined, margin: '0 auto', position: 'relative' }}>
          {/* Fake mouse pointer */}
          <div ref={pointerRef} id="fake-mouse-pointer" style={{position:'fixed',zIndex:10000,display:'none',left:0,top:0,width:24,height:24,pointerEvents:'none'}} />
          <Dropdown title="About Me" minHeight={imgSize ? imgSize.height : undefined} buttonRef={dropdownBtnRef}>
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
          </Dropdown>
          <Dropdown title="Skills" minHeight={imgSize ? imgSize.height : undefined}>
          <p>Programming Languages:
          <ul>
            <li>Intermediate/Advanced: Python</li>
            <li>Proficient: Java, C++, C#</li>
            <li>Fundamentals: LaTeX, Typescript, Go, HTML, CSS, SQL, Assembly, Bash</li>
          </ul>
          
          Frameworks/Libraries:
          <ul>
            <li>Proficient: PyTorch, Numpy, HuggingFace Transformers, OpenCV, Tkinter, Supervision, Ultralytics, OpenAI</li>
            <li>Fundamentals: React, Angular</li>
          </ul>
          Tools: GitHub, Azure, Azure Machine Learning, Azure DevOps, Jira, JetBrains IDEs, Visual Studio Code, Jupyter Notebooks, Anaconda, Docker, KiCAD
          <br></br>
          <br></br>
          Spoken Fluencies: 
          <ul>
            <li>English: Native</li>
            <li>Japanese: Intermediate</li>
          </ul>
          </p>
          </Dropdown>

          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;

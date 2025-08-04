import React from 'react';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import './Home.css';

// Define types for education data
interface HighSchoolEducation {
  institution: string;
  type: 'highschool';
  details: string[];
}

interface Semester {
  term: string;
  gpa?: string; // GPA is optional for some semesters
  courses?: string[]; // Courses might also be optional
}

interface UniversityEducation {
  institution: string;
  type: 'university' | 'college';
  semesters: Semester[];
}

type EducationEntry = HighSchoolEducation | UniversityEducation;

// Education data from TODO.md
const educationData: EducationEntry[] = [
  {
    institution: "Pennsauken High School",
    type: 'highschool',
    details: [
      "Graduated: 2022",
      "4.4 GPA",
      "SAT: 1520/1600",
      "AP Calc AB: 4",
      "AP Calc BC: 3",
      "AP US History: 4",
      "AP English Language and Composition: 4",
      "AP English Literature and Composition: 5",
      "AP Chemistry: 3",
      "AP Latin: 2",
      "AP Computer Science Principles: 4",
      "AP Psychology: 4",
      "AP Government and Politics: 4"
    ]
  },
  {
    institution: "Rochester Institute of Technology",
    type: 'university',
    semesters: [
      {
        term: "Fall 2022",
        gpa: "3.65 Term GPA",
        courses: [
          "Computer Science 1",
          "University Physics 1",
          "Discrete Mathematics",
          "Principles of Microeconomics",
          "Introduction to Environmental Studies"
        ]
      },
      {
        term: "Spring 2023",
        gpa: "3.76 Term GPA",
        courses: [
          "Computer Science 2",
          "Introduction to Computer Science Theory",
          "Probability and Statistics",
          "Beginning Japanese 1"
        ]
      },
      {
        term: "Fall 2023",
        gpa: "3.56 Term GPA",
        courses: [
          "The Mechanics of Programming",
          "Introduction to Software Engineering",
          "Principles of Data Management",
          "Beginning Japanese 2",
          "The United States and Japan"
        ]
      },
      {
        term: "Fall 2024",
        gpa: "3.27 Term GPA",
        courses: [
          "Analysis of Algorithms",
          "Introduction to Artificial Intelligence",
          "Introduction to Machine Learning*",
          "Intermediate Japanese 1",
          "Practical Writing and Speaking in Japanese"
        ]
      },
      {
        term: "Spring 2025",
        gpa: "3.67 Term GPA",
        courses: [
          "Neural Networks and Machine Learning*",
          "Large Language Models",
          "Concepts of Parallel and Distributed Systems",
          "Intermediate Japanese 2",
          "Practical Reading and Speaking in Japanese"
        ]
      },
      {
        term: "Summer 2025",
        gpa: "TBD Term GPA",
        courses: [
          "Introduction to Big Data*",
          "Programming Language Concepts",
          "Professional Communications"
        ]
      },
      {
        term: "Fall 2025",
        gpa: "TBD Term GPA",
        courses: [
          "Database System Implementation*",
          "Foundations of Computer Vision*",
          "Computational Geometry*",
          "Advanced Databases: Graph Databases*",
          "Quantum Machine Learning*",
          "Japanese for Science & Technology"
        ]
      }
    ]
  },
  {
    institution: "Rowan College at Burlington County",
    type: 'college',
    semesters: [
      {
        term: "Summer 2023",
        courses: [
          "Linear Algebra"
        ]
      },
      {
        term: "Spring 2024",
        courses: [
          "Machine and Assembler Language Programming",
          "Intermediate Student Research: Neural Networks"
        ]
      }
    ]
  }
];

const Education: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="Home">
        <h1>Welcome to my Educational journey!</h1>
      </div>
      <div className="Description">
        <div className="Content centered-content">
          {educationData.map((edu, index) => (
            <Dropdown key={index} title={edu.institution}>
              {edu.type === 'highschool' && edu.details && (
                // Render details as a list for high school
                <ul>
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
              {(edu.type === 'university' || edu.type === 'college') && edu.semesters && (
                // Render nested dropdowns for semesters for universities/colleges
                <div>
                  {edu.institution === 'Rochester Institute of Technology' && <p>
                        <ul>
                          <li>Bachelors of Science in Computer Science</li>
                          <li>Masters of Science in Computer Science</li>
                          <li>Advanced Certificate in Artificial Intelligence</li>
                          {/* <li>Advanced Certificate in Big Data Analytics</li> */}
                          <li>Minor in Japanese Language and Culture</li>
                          <li>Cumulative GPA: 3.58</li>
                        </ul>
                      </p>}
                  {edu.semesters.map((semester, i) => (
                    <Dropdown 
                      key={i} 
                      title={
                        edu.institution === 'Rochester Institute of Technology' && semester.gpa
                          ? `${semester.term}: ${semester.gpa}`
                          : semester.term
                      }
                    >
                      {/* Remove GPA from inside the dropdown */}
                      {/* {semester.gpa && <p>GPA: {semester.gpa}</p>} */}
                      {semester.courses && (
                        <div> {/* Add a container for the label and list */}
                         <strong>Courses:</strong>
                          <ul> 
                            {semester.courses.map((course, j) => (
                              <li key={j}>{course}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* Add Graduate Course label only for RIT semesters */}
                      {edu.institution === 'Rochester Institute of Technology' && <small>* Graduate Course</small>}
                    </Dropdown>
                  ))}
                </div>
              )}
            </Dropdown>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education; 
import React from 'react';
import '../App.css'; 

const Resume = () => {
    const proficiencies = [
        'JavaScript',
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'SQL',
        'HTML & CSS',
        'Git & GitHub',
        'RESTful APIs',
        'GraphQL'
    ];

    return (
      <div className="resume-container">
          <h1>Resume</h1>
          <p>Click the link below to download my resume:</p>
          <a href="/path/to/your/resume.pdf" download className="resume-link">
              Download My Resume
          </a>
          <h2>Proficiencies</h2>
          <div className="proficiencies-list">
              {proficiencies.map((proficiency, index) => (
                  <div className="proficiency-item" key={index}>
                      {proficiency}
                  </div>
              ))}
          </div>
      </div>
  );
};

export default Resume;
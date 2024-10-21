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
        <div>
            <h1>Resume</h1>
            <p>Click the link below to download my resume:</p>
            <a href="../src/assets/resume.pdf" download>
                Download My Resume
            </a>
            <h2>Proficiencies</h2>
            <ul>
                {proficiencies.map((proficiency, index) => (
                    <li key={index}>{proficiency}</li>
                ))}
            </ul>
        </div>
    );
};

export default Resume;
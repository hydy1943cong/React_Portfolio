import React from 'react';

function Project({ title, description, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Deployed Application</a> | 
        <a href={githubLink} target="_blank" rel="noopener noreferrer">View GitHub Repository</a>
      </div>
    </div>
  );
}

export default Project;
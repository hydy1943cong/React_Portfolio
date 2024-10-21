import React from 'react';
import '../App.css'; 

export default function Portfolio() {
    const projects = [
        {
            title: 'An ecomerce web application where users login and post books for sale',
            image: '../src/assets/img/hellobook.png', 
            deployedLink: 'https://hello-books-zbnd.onrender.com/', 
            githubLink: 'https://github.com/Book-Hackers/Hello-Books', 
        },
        {
            title: 'A Note Taker app that can be used to write and save notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file.',
            image: '../src/assets/img/noteTaker.png',
            deployedLink: 'https://note-taker-8e6d.onrender.com/notes',
            githubLink: 'https://github.com/hydy1943cong/note-taker',
        },
        {
            title: 'A web page to help find diverse seasonal recipes.',
            image: '../src/assets/img/food.png',
            deployedLink: 'https://overwhelmedbyindecision.github.io/Spice-It-Up/index.html',
            githubLink: 'https://github.com/overwhelmedbyindecision/Spice-It-Up',
        },
        {
            title: 'A project management application that allows people to keep track of due dates and progress.',
            image: '../src/assets/img/projectMan.png',
            deployedLink: 'https://hydy1943cong.github.io/project_management_app/',
            githubLink: 'https://github.com/hydy1943cong/project_management_app',
        },
        {
            title: 'A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.',
            image: '../src/assets/img/Weather.png',
            deployedLink: 'https://hydy1943cong.github.io/weather-dashboard/',
            githubLink: 'https://github.com/hydy1943cong/weather-dashboard',
        },
        {
            title: 'A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
            image: '../src/assets/img/TechBlog.png',
            deployedLink: 'https://tech-blog-wt2v.onrender.com',
            githubLink: 'https://github.com/hydy1943cong/Tech_Blog',
        },
    ];

    return (
        <div>
            <h1>Featured Projects</h1>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-item">
                        <h3>{project.title}</h3>
                        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.title} className="portfolio-image" />
                        </a>
                        <div className="project-links">
                            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                                Live Application
                            </a>
                            <span> | </span>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                GitHub Repository
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
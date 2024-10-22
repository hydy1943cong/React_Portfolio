import React from 'react';
import Project from '../components/Project';
import '../App.css'; 

export default function Portfolio() {
    return (
        <div className="portfolio-grid">
          <Project
            title="Hello Book"
            description="An ecomerce web application where users login and post books for sale"
            image= '../public/img/hellobook.png'
            deployedLink= 'https://hello-books-zbnd.onrender.com/'
            githubLink= 'https://github.com/Book-Hackers/Hello-Books'
          />
          <Project
            title="Note Taker"
            description="A Note Taker app that can be used to write and save notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file."
            image= '../public/img/noteTaker.png'
            deployedLink= 'https://note-taker-8e6d.onrender.com/notes'
            githubLink= 'https://github.com/hydy1943cong/note-taker'
          />
          <Project
            title="Spice It Up"
            description="A web page to help find diverse seasonal recipes."
            image= '../public/img/food.png'
            deployedLink= 'https://overwhelmedbyindecision.github.io/Spice-It-Up/index.html'
            githubLink= 'https://github.com/overwhelmedbyindecision/Spice-It-Up'
          />
          <Project
            title="Be Productive"
            description="A project management application that allows people to keep track of due dates and progress."
            image= '../public/img/projectMan.png'
            deployedLink= 'https://hydy1943cong.github.io/project_management_app/'
            githubLink= 'https://github.com/hydy1943cong/project_management_app'
          />
          <Project
            title="Weather report"
            description= 'A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.'
            image= '../public/img/Weather.png'
            deployedLink= 'https://hydy1943cong.github.io/weather-dashboard/'
            githubLink= 'https://github.com/hydy1943cong/weather-dashboard'
          />
          <Project
            title="Tech Blog"
            description= 'A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.'
            image= '../public/img/TechBlog.png'
            deployedLink= 'https://tech-blog-wt2v.onrender.com'
            githubLink= 'https://github.com/hydy1943cong/Tech_Blog'
          />
        </div>
      );
    }


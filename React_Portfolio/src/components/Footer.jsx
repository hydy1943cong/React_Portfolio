import React from 'react';
import '../App.css'; 
import { FaGithub} from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <a href="https://github.com/hydy1943cong" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Cong Wang. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
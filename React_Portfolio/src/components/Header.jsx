import React, { useState } from 'react';
import './Header.css'; // Link to the CSS file for styling

const Header = () => {
  // State to track which section is active
  const [activeSection, setActiveSection] = useState('about');

  // Handle click event to update the active section
  const handleNavClick = (section) => {
    setActiveSection(section);

    // Scroll to the corresponding section
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="header-content">
        {/* Developer's Name */}
        <h1 className="developer-name">Cong Wang</h1>
        
        {/* Navigation Menu */}
        <nav>
          <ul className="nav-links">
            <li className={activeSection === 'about' ? 'active' : ''}>
              <button onClick={() => handleNavClick('about')}>About Me</button>
            </li>
            <li className={activeSection === 'portfolio' ? 'active' : ''}>
              <button onClick={() => handleNavClick('portfolio')}>Portfolio</button>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <button onClick={() => handleNavClick('contact')}>Contact</button>
            </li>
            <li className={activeSection === 'resume' ? 'active' : ''}>
              <button onClick={() => handleNavClick('resume')}>Resume</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
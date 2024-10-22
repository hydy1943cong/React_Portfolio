import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header>
      <h1>Cong Wang</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : '')}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/Resume" className={({ isActive }) => (isActive ? 'active' : '')}>
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
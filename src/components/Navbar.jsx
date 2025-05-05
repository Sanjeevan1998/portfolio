import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import Navbar styles

function Navbar() {
  return (
    <nav className="main-nav">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
        Home
      </NavLink>
      {/* --- MODIFIED HERE: Single Projects Link --- */}
      <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Projects
      </NavLink>
      {/* --- END MODIFICATION --- */}
      <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        About
      </NavLink>
      <NavLink to="/writing" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Writing
      </NavLink>
      <NavLink to="/resume" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Resume
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
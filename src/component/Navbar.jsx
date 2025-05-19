import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>SB</h2>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

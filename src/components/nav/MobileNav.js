import React, { useState } from 'react';
import './mobilenav.css';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <nav className="navbar font600  flexwrap navul sub-banner">
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li className="home">
            <a href="#home">Home</a>
          </li>
          <li className="mobilehide">
            <a href="#learnmore">Learn More</a>
          </li>
          <li className="">
            <a href="#about">About</a>
          </li>
          <li className="">
            <a href="#contact">Contact</a>
          </li>
          <li className="">
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;

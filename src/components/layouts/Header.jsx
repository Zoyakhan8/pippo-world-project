import { useState } from "react";
import logo from "../../assets/logo.png";
import './Header.css';
import { NavLink } from "react-router-dom";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 400);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <header>
      <nav className="container">
        <img src={logo} alt="logo" id="logo" />
        <div className={`nav-links ${isOpen ? "open" : ""} ${isClosing ? "closing" : ""}`}>
          <li><NavLink to="/"
            className={({ isActive }) =>
              isActive ? "header-links active" : "header-links"
            }
            onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/about"
            className={({ isActive }) =>
              isActive ? "header-links active" : "header-links"
            }
            onClick={toggleMenu}>About us</NavLink></li>
          <li><NavLink to="/contact"
            className={({ isActive }) =>
              isActive ? "header-links active" : "header-links"
            }
            onClick={toggleMenu}>Contact us</NavLink></li>
        </div>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}
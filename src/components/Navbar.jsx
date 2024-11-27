import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";
import "../App.css";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // Track menu toggle state

  // Handle logout with confirmation
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
    }
  };

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu after clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>MovieHub</h1>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <div className={`navbar-actions ${isOpen ? "open" : ""}`}>
        {isAuthenticated ? (
          <>
            <Link to="/" className="navbar-button" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/movies" className="navbar-button" onClick={closeMenu}>
              Movies
            </Link>
            <Link to="/profile" className="navbar-button" onClick={closeMenu}>
              Profile
            </Link>
            <button
              onClick={() => {
                handleLogout();
                closeMenu();
              }}
              className="navbar-button logout-button"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className="navbar-button" onClick={closeMenu}>
              Signup
            </Link>
            <Link to="/login" className="navbar-button" onClick={closeMenu}>
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

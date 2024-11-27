import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = ({ isAuthenticated, logout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">MyApp</Link>
      </div>
      <div className="navbar-actions">
        {isAuthenticated ? (
          <>
            <Link to="/" className="navbar-button">Home</Link>
            <button onClick={logout} className="navbar-button logout-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup" className="navbar-button">Signup</Link>
            <Link to="/login" className="navbar-button">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

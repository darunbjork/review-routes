import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";
import "../App.css";

const Navbar = () => {

  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    if(window.confirm("Are you sure you want to logout?")) {
      logout();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="" className="navbar-logo">MovieHub</Link>
      </div>
      <div className="navbar-actions">
        {isAuthenticated ? (
          <>
            <Link to="/" className="navbar-button">Home</Link>
            <Link to="/movies" className="navbar-button">Movies</Link>
            <Link to="/profile" className="navbar-button">Profile</Link>
            <button onClick={handleLogout} className="navbar-button logout-button">Logout</button>
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

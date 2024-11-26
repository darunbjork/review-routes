import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

const Signup = () => {

  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Signup Username:", username);
    console.log("Signup Password:", password);

    navigate("/login");

    setUsername('');
    setUsername('');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up Page</h2>
   <form onSubmit={handleSubmit} className="login-form">
    <label htmlFor="username">
      Username:
      <input 
      type="text" 
      placeholder="Enter Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
      />
    </label>
    <br />
    <label htmlFor="password">
      Password:
      <input 
      type="password" 
      placeholder="Enter Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      />
    </label>
    <br />
    <button type="submit" className="login-button">Signup</button>
   </form>
    </div>
  )
};

export default Signup;
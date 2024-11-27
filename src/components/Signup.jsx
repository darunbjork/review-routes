import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

const Signup = () => {

  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const [email, setEmail ] = useState('');
  const [birthday, setBirthday] = useState('');
  const [error, setError ] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if(username.trim() === '' || password.trim() === '' || email.trim() === '' || birthday.trim() === '') {
      setError("All fields are required");
      return;
    }

    if(password.length < 6 ) {
      setError("Password must be at least 6 characters long");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return;
    }

    console.log("Signup Username:", username);
    console.log("Signup Password:", password);

    navigate("/login");
    setError('');
    alert("Account created successfully! Redirected to login")
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
    <label htmlFor="email">
      Email:
      <input 
      type="email" 
      placeholder="Enter Email Adress"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      />
    </label>
    <br />
    <label htmlFor="birthday">
      Birthday:
      <input 
      type="date" 
      value={birthday}
      onChange={(e) => setBirthday(e.target.value)}
      required
      />
    </label>
    <br />
    {error && <p style={{color: 'red'}}>{error}</p>}
    <br />
    <button type="submit" className="login-button">Signup</button>
   </form>
    </div>
  )
};

export default Signup;
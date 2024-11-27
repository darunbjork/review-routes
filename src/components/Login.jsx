import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"
import AuthContext from "../AuthContext";

const Login = () => {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const {login} = useContext(AuthContext)
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Username:", username);
    console.log("Login Password:", password);

    navigate("/")
    login();
    setUsername('');
    setPassword('');
  };
  return (
    <div  className="login-container">
      <h2>Login Page</h2>
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
      <button type="submit" className="login-button">Login</button>
     </form>
    </div>
  )
};

export default Login;
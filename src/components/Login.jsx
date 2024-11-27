import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"
import AuthContext from "../AuthContext";

const Login = () => {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [error, setError ] = useState('');
  const {login} = useContext(AuthContext)
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if(username.trim() === '' || password.trim() === '') {
      setError("Username and Password are required");
      return;
    }

    if(password.length < 6 ) {
      setError("Password must be at least 6 cgaracters long.");
      return;
    }

    console.log("Login Username:", username);
    console.log("Login Password:", password);

    setError('');
    navigate("/");
    login();
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
      {error && <p style={{color: 'red'}}>{error}</p>}
      <br />
      <button type="submit" className="login-button">Login</button>
     </form>
    </div>
  )
};

export default Login;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {

  
  const [ isAuthenticated, setIsAuthenticated ] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true"; //checks if the stored value is "true"       (local storage only stores strings "that's why we put in " " ).
  });

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true")
  }

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  }

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} logout={logout}/>
      <Routes>
        <Route path="/" element={ isAuthenticated ? < Home/> : <Navigate to={"/login"} replace/> }/>
        <Route path="/signup" element={ isAuthenticated ?  < Home/> : <Signup />}/>
        <Route path="/login" element={ isAuthenticated ? < Home/> : <Login login={login}/>} />
      </Routes>
    </Router>
  )
};

export default App;
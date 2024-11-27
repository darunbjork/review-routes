import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  const login = () => setIsAuthenticated(true);

  const logout = () => setIsAuthenticated(false);

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
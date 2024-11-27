import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AuthContext from "./AuthContext";
import Movies from './components/Movies';
import Profile from './components/Profile';
function App() {
  const {isAuthenticated } = useContext(AuthContext)

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={ isAuthenticated ? < Home/> : <Navigate to={"/login"} replace/> }/>
        <Route path="/movies" element={isAuthenticated ? <Movies /> : <Navigate to="/login" replace />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />} />;
        <Route path="/signup" element={ isAuthenticated ?  < Home/> : <Signup />}/>
        <Route path="/login" element={ isAuthenticated ? < Home/> : <Login />} />
      </Routes>
    </Router>
  )
};

export default App;
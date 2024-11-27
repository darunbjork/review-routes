import React, { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true"; /* checks if the stored value is "true" 
    (local storage only stores strings "that's why we put in " " ). */
  })

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true")
  }

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, logout, login}}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;
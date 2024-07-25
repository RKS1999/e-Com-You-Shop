import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (email, password) => {
    try {
      const { data } = await axios.get(
        `https://raw.githubusercontent.com/RKS1999/json-server/main/db.json`
      );
      const user = data.users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error", error);
      return false;
    }
  };

  const signup = async (userData) => {
    try {
      console.log("User data to be submitted: ", userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    } catch (error) {
      console.error("Signup error", error);
      return false;
    }
  };

  const updateUser = async (userData) => {
    try {
      console.log("User data to be updated: ", userData);
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Update error", error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

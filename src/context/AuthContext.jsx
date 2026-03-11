// src/context/AuthContext.jsx

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // ⭐ Default users
  const defaultUsers = [
    {
      username: "student1",
      email: "student@gmail.com",
      password: "Student@123",
      role: "student",
      name: "Sai Student",
    },
    {
      username: "teacher1",
      email: "teacher@gmail.com",
      password: "Teacher@123",
      role: "teacher",
      name: "Ravi Teacher",
    },
  ];

  // ⭐ Get users from localStorage
  const getUsers = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    return storedUsers ? [...defaultUsers, ...storedUsers] : defaultUsers;
  };

  // ✅ REGISTER FUNCTION
  const register = (name, email, password, role) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((u) => u.email === email);

    if (userExists) {
      return false;
    }

    const newUser = {
      username: email.split("@")[0],
      name,
      email,
      password,
      role,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    return true;
  };

  // ✅ LOGIN FUNCTION
  const login = (identifier, password) => {

    const users = getUsers();

    const foundUser = users.find(
      (u) =>
        (u.username === identifier || u.email === identifier) &&
        u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      return foundUser.role;
    }

    return null;
  };

  // ✅ LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  // ✅ Load user from localStorage
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  // ✅ Default users
  const users = [
    {
      username: "student1",
      email: "student@gmail.com",
      password: "Student@123",
      role: "student",
    },
    {
      username: "teacher1",
      email: "teacher@gmail.com",
      password: "Teacher@123",
      role: "teacher",
    },
  ];

  // ✅ LOGIN
  const login = (identifier, password) => {
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
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ MUST EXPORT THIS
export const useAuth = () => useContext(AuthContext);
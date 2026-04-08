import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";
import "../App.css";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "STUDENT"
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    api.post("/auth/login", {
      email: formData.email,
      password: formData.password
    })
    .then((res) => {

      const user = res.data;

      // ROLE CHECK
      if (user.role === formData.role) {

        if (user.role === "STUDENT") navigate("/student");
        else if (user.role === "TEACHER") navigate("/teacher");
        else if (user.role === "ADMIN") navigate("/admin");

      } else {
        setError("Role mismatch!");
      }

    })
    .catch(() => {
      setError("Invalid email or password");
    });
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h2>Login to PORTFOLIO-HUB</h2>

        <form onSubmit={handleLogin} className="login-form">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="STUDENT">Student</option>
            <option value="TEACHER">Teacher</option>
            <option value="ADMIN">Admin</option>
          </select>

          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>

        </form>

        <p className="login-links">
          <Link to="/register">Don't have an account? Register</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
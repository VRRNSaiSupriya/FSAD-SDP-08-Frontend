// src/pages/Register.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../App.css";

function Register() {

  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const success = register(
      form.name,
      form.email,
      form.password,
      form.role
    );

    if (!success) {
      setError("User already exists");
      return;
    }

    setError("");
    setMessage("Registered Successfully ✅");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h2 className="form-title">Register</h2>

        <form onSubmit={handleRegister} className="login-form">

          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Register</button>

        </form>

        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}

      </div>

    </div>
  );
}

export default Register;
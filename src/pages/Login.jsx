import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../App.css";

const Login = () => {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {

    e.preventDefault();

    const role = login(formData.email, formData.password);

    if (role && role === formData.role) {

      if (role === "student") navigate("/student");
      else if (role === "teacher") navigate("/teacher");
      else if (role === "admin") navigate("/admin");

    } else {

      setError("Invalid credentials or role mismatch");

    }
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
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
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
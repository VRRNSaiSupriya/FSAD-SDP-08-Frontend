import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
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

  const validateForm = () => {
    const emailRegex = /^[a-z0-9._%+-]+@gmail\.com$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!emailRegex.test(formData.username)) {
      setError("Enter valid Gmail (example@gmail.com)");
      return false;
    }

    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must contain uppercase, lowercase, number, symbol & min 8 chars"
      );
      return false;
    }

    setError("");
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const role = login(formData.username, formData.password);

    if (role && role.toLowerCase() === formData.role.toLowerCase()) {
      if (role === "student") navigate("/student");
      else if (role === "teacher") navigate("/teacher");
      else if (role === "admin") navigate("/admin");
    } else {
      setError("Role mismatch or invalid credentials");
    }
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h2>Login to PORTFOLIO-HUB</h2>

        <form onSubmit={handleLogin} className="login-form">

          <input
            type="text"
            name="username"
            placeholder="Email"
            value={formData.username}
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
            required
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>

        </form>

        <p className="login-links">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>

        <p className="login-links">
          Don't have an account? <Link to="/register">Register</Link>
        </p>

      </div>

    </div>
  );
};

export default Login;
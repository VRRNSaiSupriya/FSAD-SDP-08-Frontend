import React, { useState } from "react";
import api from "../api";

const Register = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "STUDENT"
  });

  const [passwordMsg, setPasswordMsg] = useState("");

  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });

    if (name === "password") {
      if (value.length === 0) {
        setPasswordMsg("");
      } else if (!passwordRegex.test(value)) {
        setPasswordMsg("Password must contain uppercase, number & special char");
      } else {
        setPasswordMsg("Strong Password");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordRegex.test(user.password)) {
      alert("Invalid password");
      return;
    }

    api.post("/auth/register", user)
      .then(() => alert("Registered Successfully!"))
      .catch(err => console.log(err));
  };

  return (
    <>
      <style>{`
        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 90vh;
        }

        .register-box {
          background: #f5f5f5;
          padding: 30px;
          border-radius: 12px;
          width: 350px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          text-align: center;
        }

        .register-box h2 {
          margin-bottom: 20px;
        }

        .register-box input,
        .register-box select {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        .register-box button {
          width: 100%;
          padding: 10px;
          background: #3b82c4;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 10px;
        }

        .register-box button:hover {
          background: #2f6ea3;
        }

        .msg {
          font-size: 12px;
        }
      `}</style>

      <div className="register-container">
        <div className="register-box">

          <h2>Register</h2>

          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} />

          {/* Password message */}
          {passwordMsg && <p className="msg">{passwordMsg}</p>}

          <select name="role" onChange={handleChange}>
            <option value="STUDENT">Student</option>
            <option value="TEACHER">Teacher</option>
          </select>

          <button onClick={handleSubmit}>Register</button>

        </div>
      </div>
    </>
  );
};

export default Register;
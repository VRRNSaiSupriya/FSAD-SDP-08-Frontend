import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <style>
        {`
        .navbar{
          display:flex;
          justify-content:space-between;
          align-items:center;
          background:#1f2235;
          padding:15px 40px;
          color:white;
        }

        .nav-links{
          display:flex;
          gap:20px;
          align-items:center;
        }

        .nav-links a{
          color:white;
          text-decoration:none;
        }

        .logout-btn{
          background:red;
          border:none;
          padding:6px 12px;
          color:white;
          border-radius:5px;
          cursor:pointer;
        }
        `}
      </style>

      <div className="navbar">
        <h2>PORTFOLIO-HUB</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>

          {/* NOT LOGGED IN */}
          {!user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}

          {/* LOGGED IN */}
          {user && (
            <>
              {user.role === "student" && <Link to="/student">Dashboard</Link>}
              {user.role === "teacher" && <Link to="/teacher">Dashboard</Link>}

              <Link to="/courses">Courses</Link>
              <Link to="/marks">Marks</Link>
              <Link to="/feedback">Feedback</Link>

              {/* 🔥 LOGOUT BUTTON */}
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
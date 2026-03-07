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
        /* NAVBAR ONLY */
        .navbar{
          display:flex;
          justify-content:space-between;
          align-items:center;
          background:#1f2235;
          padding:15px 40px;
          color:white;
        }

        .navbar h2{
          margin:0;
          font-size:22px;
        }

        .navbar .nav-links{
          display:flex;
          align-items:center;
          gap:25px;
        }

        .navbar .nav-links a{
          color:white;
          text-decoration:none;
          font-size:17px;
          font-weight:500;
        }

        .navbar .nav-links a:hover{
          text-decoration:underline;
        }

        .navbar .logout-btn{
          background:none;
          border:none;
          color:white;
          font-size:17px;
          font-weight:500;
          cursor:pointer;
          font-family:inherit;
        }

        .navbar .logout-btn:hover{
          text-decoration:underline;
        }
        `}
      </style>

      <div className="navbar">
        <h2>PORTFOLIO-HUB</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>

          {!user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}

          {user?.role === "student" && (
            <>
              <Link to="/student">Dashboard</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/marks">Marks</Link>
              <Link to="/feedback">Feedback</Link>

              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}

          {user?.role === "teacher" && (
            <>
              <Link to="/teacher">Dashboard</Link>
              <Link to="/upload">Assign Marks</Link>
              <Link to="/courses">Courses</Link>

              <button className="logout-btn" onClick={handleLogout}>
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
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
   <div className="hero-overlay">
  <h1>Welcome to PortfolioHub</h1>
  <p>Track • Manage • Showcase Your Projects</p>

  <button className="hero-btn" onClick={() => navigate("/login")}>
    Get Started
  </button>
</div>
  );
};

export default Home;
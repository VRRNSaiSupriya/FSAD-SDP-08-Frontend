import { Link } from "react-router-dom";
import studentImg from "../assets/student.jpeg";
import "../App.css";

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">

      <h1 className="dashboard-title">Student Dashboard</h1>

      <div className="dashboard-top">
        <img src={studentImg} alt="student" className="dashboard-img" />
      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>📚 Courses</h3>
          <Link to="/courses">View assigned courses</Link>
        </div>

        <div className="dashboard-card">
          <h3>📤 Assignment Submission</h3>
          <Link to="/upload">Upload assignments</Link>
        </div>

        <div className="dashboard-card">
          <h3>📊 Marks</h3>
          <Link to="/marks">Check your marks</Link>
        </div>

        <div className="dashboard-card">
          <h3>💬 Feedback</h3>
          <Link to="/feedback">Teacher feedback</Link>
        </div>

      </div>

    </div>
  );
};

export default StudentDashboard;
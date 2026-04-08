import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaUpload, FaChartBar, FaComments } from "react-icons/fa";

const StudentDashboard = () => {

  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .dashboard-wrapper {
          min-height: 100vh;
          text-align: center;
          padding: 40px;
        }

        .dashboard-title {
          font-size: 42px;
          font-weight: bold;
          color: white;
          margin-bottom: 20px;
        }

        .dashboard-image {
          width: 230px;
          border-radius: 15px;
          margin-bottom: 40px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .card-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 30px;
        }

        .dashboard-card {
          width: 260px;
          height: 180px; /* 🔥 increased */
          background: #eeeeee;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 15px;
          cursor: pointer;
          box-shadow: 0 6px 15px rgba(0,0,0,0.15);
          transition: 0.3s;
        }

        .dashboard-card:hover {
          transform: translateY(-5px) scale(1.05);
          background: white;
        }

        .dashboard-card p {
          color: #2c6ecb;
          font-size: 15px;
          text-align: center;
        }

        .icon-circle {
          background: #f5f5f5;
          padding: 15px;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
      `}</style>

      <div className="dashboard-wrapper">

        <h1 className="dashboard-title">Student Dashboard</h1>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          className="dashboard-image"
          alt="student"
        />

        <div className="card-container">

          {/* Courses */}
          <div className="dashboard-card" onClick={() => navigate("/courses")}>
            <div className="icon-circle">
              <FaBookOpen size={45} color="#4CAF50" />
            </div>
            <p>View assigned courses</p>
          </div>

          {/* Upload */}
          <div className="dashboard-card" onClick={() => navigate("/upload")}>
            <div className="icon-circle">
              <FaUpload size={45} color="#2196F3" />
            </div>
            <p>Upload assignments</p>
          </div>

          {/* Marks */}
          <div className="dashboard-card" onClick={() => navigate("/marks")}>
            <div className="icon-circle">
              <FaChartBar size={45} color="#FF9800" />
            </div>
            <p>Check your marks</p>
          </div>

          {/* Feedback */}
          <div className="dashboard-card" onClick={() => navigate("/feedback")}>
            <div className="icon-circle">
              <FaComments size={45} color="#9C27B0" />
            </div>
            <p>Teacher feedback</p>
          </div>

        </div>

      </div>
    </>
  );
};

export default StudentDashboard;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

/* Background Image */
import background from "./assets/background.jpg";

/* Auth */
import { AuthProvider } from "./context/AuthContext";

/* Navbar */
import Navbar from "./components/Navbar";

/* Pages */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Courses from "./pages/Courses";     // 👈 will be Assign Course
import Marks from "./pages/Marks";         // 👈 Give Marks
import Feedback from "./pages/Feedback";   // 👈 Give Feedback
import Upload from "./pages/Upload";       // 👈 Upload Assignment
import ForgotPassword from "./pages/ForgotPassword";
import ViewUploads from "./components/ViewUploads";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div
          className="app-background"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh"
          }}
        >
          <Navbar />

          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Dashboards */}
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />

            {/* Teacher Features */}
            <Route path="/courses" element={<Courses />} />       {/* Assign Course */}
            <Route path="/marks" element={<Marks />} />           {/* Give Marks */}
            <Route path="/feedback" element={<Feedback />} />     {/* Give Feedback */}
            <Route path="/upload" element={<Upload />} />         {/* Upload Assignment */}

            {/* Extra */}
            <Route path="/view-projects" element={<ViewUploads />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
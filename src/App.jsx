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
import Courses from "./pages/Courses";
import Marks from "./pages/Marks";
import Feedback from "./pages/Feedback";
import Upload from "./pages/Upload";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Background Wrapper */}
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
            <Route path="/" element={<Home />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Dashboards */}
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />

            {/* Features */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/marks" element={<Marks />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
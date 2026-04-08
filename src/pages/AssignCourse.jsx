import { useState } from "react";
import axios from "axios";

const AssignCourse = () => {
  const [data, setData] = useState({
    teacherName: "",
    studentName: "",
    courseName: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/courses", data);
    alert("Course Assigned");
  };

  return (
    <div className="container mt-4">
      <h2>Assign Course</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Teacher Name"
          onChange={(e) => setData({...data, teacherName: e.target.value})} />

        <input className="form-control mb-2" placeholder="Student Name"
          onChange={(e) => setData({...data, studentName: e.target.value})} />

        <input className="form-control mb-2" placeholder="Course Name"
          onChange={(e) => setData({...data, courseName: e.target.value})} />

        <button className="btn btn-primary">Assign</button>
      </form>
    </div>
  );
};

export default AssignCourse;
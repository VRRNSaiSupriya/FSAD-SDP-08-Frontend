import { useState } from "react";
import axios from "axios";

const GiveMarks = () => {
  const [data, setData] = useState({
    studentName: "",
    courseName: "",
    marks: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/marks", data);
    alert("Marks Given");
  };

  return (
    <div className="container mt-4">
      <h2>Give Marks</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2"
          placeholder="Student Name"
          onChange={(e) => setData({...data, studentName: e.target.value})} />

        <input className="form-control mb-2"
          placeholder="Course Name"
          onChange={(e) => setData({...data, courseName: e.target.value})} />

        <input type="number" className="form-control mb-2"
          placeholder="Marks"
          onChange={(e) => setData({...data, marks: e.target.value})} />

        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default GiveMarks;
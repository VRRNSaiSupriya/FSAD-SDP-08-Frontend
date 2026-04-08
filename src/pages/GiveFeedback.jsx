import { useState } from "react";
import axios from "axios";

const GiveFeedback = () => {
  const [data, setData] = useState({
    studentName: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/feedback", data);
    alert("Feedback Sent");
  };

  return (
    <div className="container mt-4">
      <h2>Give Feedback</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2"
          placeholder="Student Name"
          onChange={(e) => setData({...data, studentName: e.target.value})} />

        <textarea className="form-control mb-2"
          placeholder="Feedback"
          onChange={(e) => setData({...data, message: e.target.value})} />

        <button className="btn btn-warning">Send</button>
      </form>
    </div>
  );
};

export default GiveFeedback;
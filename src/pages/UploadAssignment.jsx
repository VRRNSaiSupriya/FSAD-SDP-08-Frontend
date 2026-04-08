import { useState } from "react";
import axios from "axios";

const UploadAssignment = () => {
  const [file, setFile] = useState(null);
  const [studentName, setStudentName] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("studentName", studentName);

    await axios.post("http://localhost:8080/api/files/upload", formData);
    alert("Uploaded");
  };

  return (
    <div className="container mt-4">
      <h2>Upload Assignment</h2>

      <form onSubmit={handleUpload}>
        <input className="form-control mb-2"
          placeholder="Student Name"
          onChange={(e) => setStudentName(e.target.value)} />

        <input type="file" className="form-control mb-2"
          onChange={(e) => setFile(e.target.files[0])} />

        <button className="btn btn-success">Upload</button>
      </form>
    </div>
  );
};

export default UploadAssignment;
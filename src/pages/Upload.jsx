import React, { useState } from "react";
import axios from "axios";

const Upload = () => {

  const [project, setProject] = useState({
    title: "",
    description: "",
    status: ""
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {

    axios.post("http://localhost:8082/projects", project)
      .then(() => {
        alert("Project Uploaded!");
        setProject({ title: "", description: "", status: "" });
      })
      .catch(err => {
        console.log(err);
        alert("Upload failed");
      });
  };

  return (
    <div className="page-container">
      <h2>Upload Project</h2>

      <input
        name="title"
        placeholder="Title"
        value={project.title}
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        value={project.description}
        onChange={handleChange}
      />

      <input
        name="status"
        placeholder="Status"
        value={project.status}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default Upload;
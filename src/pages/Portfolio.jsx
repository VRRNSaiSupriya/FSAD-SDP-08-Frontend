import React, { useEffect, useState } from "react";
import api from "../api";

const Portfolio = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects")
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="page-container">
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
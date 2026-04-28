import React, { useState } from "react";
import axios from "axios";

const TeacherCourses = () => {
  const [course, setCourse] = useState({
    courseName: "",
    description: "",
    teacherName: ""
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8083/api/courses", course);
      alert("Course Assigned Successfully!");

      setCourse({
        courseName: "",
        description: "",
        teacherName: ""
      });
    } catch (error) {
      console.error(error);
      alert("Failed to assign course");
    }
  };

  return (
    <div className="dashboard">
      <h1>Assign Courses</h1>

      <form onSubmit={handleSubmit} className="form-box">
        <input
          type="text"
          name="courseName"
          placeholder="Course Name"
          value={course.courseName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={course.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="teacherName"
          placeholder="Teacher Name"
          value={course.teacherName}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Assign Course
        </button>
      </form>
    </div>
  );
};

export default TeacherCourses;
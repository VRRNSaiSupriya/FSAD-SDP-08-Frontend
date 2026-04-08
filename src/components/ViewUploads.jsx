import { Link } from "react-router-dom";

const ViewUploads = () => {
  // Dummy data
  const uploads = [
    { student: "John Doe", project: "Project1.pdf", marks: 85, submittedAt: "2026-04-05 10:30 AM" },
    { student: "Alice Smith", project: "Project2.pdf", marks: 90, submittedAt: "2026-04-04 02:15 PM" },
    { student: "Bob Johnson", project: "Project3.pdf", marks: "Not Assigned", submittedAt: "2026-04-03 11:00 AM" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>📂 Student Uploads</h1>
      <Link to="/teacher" style={{ textDecoration: "none", color: "#007bff" }}>← Back to Dashboard</Link>

      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Student Name</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Project</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Marks</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {uploads.map((upload, index) => (
            <tr key={index}>
              <td style={{ padding: "8px" }}>{upload.student}</td>
              <td style={{ padding: "8px" }}>{upload.project}</td>
              <td style={{ padding: "8px" }}>{upload.marks}</td>
              <td style={{ padding: "8px" }}>{upload.submittedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUploads;
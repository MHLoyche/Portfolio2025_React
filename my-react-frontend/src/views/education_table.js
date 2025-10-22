import React from "react";

export default function EducationTable({ education }) {
  if (!education || education.length === 0) {
    return <p>No education data available.</p>;
  }

  return (
    <div className="education-table-container">
      <table className="education-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
            <th>Passing Date</th>
            <th>Education</th>
          </tr>
        </thead>
        <tbody>
          {education.map((item) => (
            <tr key={item.id}>
              <td>{item.subject}</td>
              <td>{item.grade || 'N/A'}</td>
              <td>{item.passing_date || 'Ongoing'}</td>
              <td>{item.education}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

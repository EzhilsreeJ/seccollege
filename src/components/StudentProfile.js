import React from 'react';

function StudentProfile({ name, studentId, grade, program }) {
  return (
    <div className="card">
      <h3>Student Profile</h3>
      <div className="student-profile-details">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Student ID:</strong> {studentId}</p>
        <p><strong>Grade:</strong> {grade}</p>
        <p><strong>Program:</strong> {program}</p>
      </div>
    </div>
  );
}

export default StudentProfile;
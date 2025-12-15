import React from 'react';
import StudentProfile from '../components/StudentProfile';

// This page could potentially display a list of students or a single student's profile
// For this example, we'll show a sample student profile.
const sampleStudent = {
  id: 101,
  name: "Alex Johnson",
  studentId: "STU123456",
  grade: "11",
  program: "Science Stream"
};

function StudentsPage() {
  return (
    <div>
      <h1 className="page-header">Student Information</h1>
      <StudentProfile
        name={sampleStudent.name}
        studentId={sampleStudent.studentId}
        grade={sampleStudent.grade}
        program={sampleStudent.program}
      />
      {/* In a real application, you might fetch student data or allow searching */}
    </div>
  );
}

export default StudentsPage;
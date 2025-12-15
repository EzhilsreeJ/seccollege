import React from 'react';
import FacultyCard from '../components/FacultyCard';

const dummyFaculty = [
  { id: 1, name: "Dr. Eleanor Vance", position: "Head of Department", department: "Science", imageUrl: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Dr.+Vance" },
  { id: 2, name: "Mr. Samuel Chen", position: "Lead Teacher", department: "Mathematics", imageUrl: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Mr.+Chen" },
  { id: 3, name: "Ms. Isabella Rossi", position: "Senior Instructor", department: "Literature", imageUrl: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Ms.+Rossi" },
  { id: 4, name: "Prof. Kenji Tanaka", position: "Professor", department: "History", imageUrl: "https://via.placeholder.com/150/FfD700/000000?text=Prof.+Tanaka" },
];

function FacultyPage() {
  return (
    <div>
      <h1 className="page-header">Our Faculty</h1>
      <div className="faculty-list">
        {dummyFaculty.map(faculty => (
          <FacultyCard
            key={faculty.id}
            name={faculty.name}
            position={faculty.position}
            department={faculty.department}
            imageUrl={faculty.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default FacultyPage;
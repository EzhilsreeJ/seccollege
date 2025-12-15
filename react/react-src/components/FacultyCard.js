import React from 'react';

function FacultyCard({ name, position, department, imageUrl }) {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} />}
      <h3>{name}</h3>
      <p><strong>Position:</strong> {position}</p>
      <p><strong>Department:</strong> {department}</p>
    </div>
  );
}

export default FacultyCard;
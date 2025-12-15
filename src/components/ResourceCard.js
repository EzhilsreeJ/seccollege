import React from 'react';

function ResourceCard({ title, description, url }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="resource-link">
          Access Resource
        </a>
      </div>
    </div>
  );
}

export default ResourceCard;
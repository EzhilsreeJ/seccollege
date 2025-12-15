import React from 'react';

function AnnouncementCard({ title, date, content }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p><em>{date}</em></p>
      <div className="card-content">{content}</div>
    </div>
  );
}

export default AnnouncementCard;
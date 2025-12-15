import React from 'react';
import AnnouncementCard from '../components/AnnouncementCard';

const dummyAnnouncements = [
  { id: 1, title: "Midterm Exam Schedule Released", date: "2023-10-26", content: "The schedule for the upcoming midterm exams has been published on the student portal. Please check carefully." },
  { id: 2, title: "School Play Auditions", date: "2023-11-01", content: "Auditions for the annual school play will be held next week. Sign-up sheets are available at the student activities office." },
  { id: 3, title: "Parent-Teacher Conference", date: "2023-11-15", content: "Parent-teacher conferences are scheduled for November 15th. Please book your slots with your child's teacher." },
];

function AnnouncementsPage() {
  return (
    <div>
      <h1 className="page-header">Announcements</h1>
      <div className="announcement-list">
        {dummyAnnouncements.map(announcement => (
          <AnnouncementCard
            key={announcement.id}
            title={announcement.title}
            date={announcement.date}
            content={announcement.content}
          />
        ))}
      </div>
    </div>
  );
}

export default AnnouncementsPage;
import React from 'react';

function HomePage() {
  return (
    <div>
      <h1 className="page-header">Welcome to Our Secondary College</h1>
      <div className="card">
        <h2>About Us</h2>
        <p>
          Our college is dedicated to providing a nurturing and challenging environment for students to grow academically, socially, and personally. We strive for excellence in education and foster a community of lifelong learners.
        </p>
        <p>
          Explore our website to learn more about our programs, faculty, and events.
        </p>
      </div>
      <div className="card">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/announcements">Latest Announcements</a></li>
          <li><a href="/resources">Academic Resources</a></li>
          <li><a href="/faculty">Meet Our Faculty</a></li>
          <li><a href="/students">Student Information</a></li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
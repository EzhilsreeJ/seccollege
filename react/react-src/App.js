import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import ResourcesPage from './pages/ResourcesPage';
import FacultyPage from './pages/FacultyPage';
import StudentsPage from './pages/StudentsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/announcements">Announcements</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/students">Students</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/students" element={<StudentsPage />} />
        </Routes>

        <footer className="footer">
          <p>&copy; 2023 Secondary College. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
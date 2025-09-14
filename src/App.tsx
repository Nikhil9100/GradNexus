import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import ProfilePage from './components/pages/ProfilePage';
import MentorshipPage from './components/pages/MentorshipPage';
import DonatePage from './components/pages/DonatePage';
import AlumniPage from './components/pages/AlumniPage';
import JobsPage from './components/pages/JobsPage';
import EventsPage from './components/pages/EventsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'profile':
        return <ProfilePage />;
      case 'mentorship':
        return <MentorshipPage />;
      case 'donate':
        return <DonatePage />;
      case 'alumni':
        return <AlumniPage />;
      case 'jobs':
        return <JobsPage />;
      case 'events':
        return <EventsPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
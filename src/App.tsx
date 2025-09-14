import React, { useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import ProfilePage from './components/pages/ProfilePage';
import MentorshipPage from './components/pages/MentorshipPage';
import DonatePage from './components/pages/DonatePage';
import AlumniPage from './components/pages/AlumniPage';
import JobsPage from './components/pages/JobsPage';
import EventsPage from './components/pages/EventsPage';
import MobileApp from './components/mobile/MobileApp';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

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

  if (viewMode === 'mobile') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex space-x-2">
              <button
                onClick={() => setViewMode('desktop')}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Monitor size={18} />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className="flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-xl text-white font-medium"
              >
                <Smartphone size={18} />
                <span>Mobile</span>
              </button>
            </div>
          </div>
          <MobileApp />
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* View Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2 flex space-x-2 shadow-lg border border-gray-200">
          <button
            onClick={() => setViewMode('desktop')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 rounded-xl text-white font-medium"
          >
            <Monitor size={16} />
            <span>Desktop</span>
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-200"
          >
            <Smartphone size={16} />
            <span>Mobile</span>
          </button>
        </div>
      </div>
      
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
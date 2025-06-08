import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Code, Calendar } from 'lucide-react';
import WeekNavigation from './WeekNavigation';

const DSALayout = ({ 
  children, 
  activeWeek, 
  setActiveWeek, 
  selectedTopicId, 
  setSelectedTopicId,
  completedTopicsCount = 0,
  totalTopics = 0,
  topicProgress = 0,
  completedProblemsCount = 0,
  totalProblems = 0,
  problemProgress = 0
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    setSidebarOpen(false);
    // If we're on a problem page, navigate back to home with the state preserved
    if (location.pathname.includes('/problem/')) {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Close Button for Mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 lg:hidden rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">DSA Mastery</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Interview Preparation</p>
              </div>
            </div>
          </div>

          {/* Navigation Header */}
          <div className="p-6 pb-4 flex-shrink-0">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-slate-400" />
              <span className="text-base font-semibold text-slate-700 dark:text-slate-300">Learning Path</span>
            </div>
          </div>

          {/* Navigation Content - Scrollable */}
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <WeekNavigation 
              activeWeek={activeWeek} 
              setActiveWeek={setActiveWeek}
              selectedTopicId={selectedTopicId}
              setSelectedTopicId={setSelectedTopicId}
              onNavigate={handleNavigation}
            />
          </div>

          {/* Bottom Stats - Fixed at bottom */}
          <div className="p-6 border-t border-slate-200 dark:border-slate-800 flex-shrink-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {completedTopicsCount}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Topics Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {completedProblemsCount}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Problems Solved</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 fixed top-0 left-0 right-0 z-30">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code size={16} className="text-white" />
            </div>
            <span className="font-bold text-slate-900 dark:text-white">DSA Mastery</span>
          </div>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:pl-80">
        {/* Content with proper spacing */}
        <main className="min-h-screen pt-16 lg:pt-0">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DSALayout;
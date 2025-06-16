import React, { useState } from 'react';
import { Menu, X, Code, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import WeekNavigation from './WeekNavigation';

const DSALayout = ({ 
  children, 
  activeWeek, 
  setActiveWeek, 
  selectedTopicId, 
  setSelectedTopicId,
  completedTopicsCount,
  totalTopics,
  topicProgress,
  completedProblemsCount,
  totalProblems,
  problemProgress,
  completedTopics = new Set(),
  isSidebarMinimized = false,
  toggleSidebarMinimized
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigation = () => {
    setSidebarOpen(false);
  };

  // Calculate responsive widths with smooth transitions
  const sidebarWidth = isSidebarMinimized ? 'w-20' : 'w-80';
  const mainContentMargin = isSidebarMinimized ? 'lg:ml-20' : 'lg:ml-80';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 ${sidebarWidth} bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-all duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Close button for mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 lg:hidden rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className={`p-6 border-b border-slate-200 dark:border-slate-800 flex-shrink-0 transition-all duration-300 ${isSidebarMinimized ? 'px-4' : 'px-6'}`}>
            <div className={`flex items-center transition-all duration-300 ${isSidebarMinimized ? 'justify-center' : 'gap-3'}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Code size={24} className="text-white transition-transform duration-300" />
              </div>
              {!isSidebarMinimized && (
                <div className="transition-all duration-300 ease-in-out">
                  <h1 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">Algomist</h1>
                  <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">Master the Code</p>
                </div>
              )}
            </div>
          </div>

          {/* Minimize/Expand Button - Desktop Only */}
          {toggleSidebarMinimized && (
            <div className="hidden lg:flex justify-end px-4 py-2 border-b border-slate-200 dark:border-slate-700">
              <button
                onClick={toggleSidebarMinimized}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-300 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                title={isSidebarMinimized ? "Expand Sidebar" : "Minimize Sidebar"}
              >
                <div className="transition-transform duration-300 ease-in-out">
                  {isSidebarMinimized ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </div>
              </button>
            </div>
          )}

          {/* Quest Path Label - Only show when not minimized */}
          {!isSidebarMinimized && (
            <div className="p-6 pb-4 flex-shrink-0 transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-slate-400 transition-transform duration-300 hover:rotate-12" />
                <span className="text-base font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-300">Quest Path</span>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarMinimized ? 'px-2' : 'px-6'} pb-6`}>
            <WeekNavigation 
              activeWeek={activeWeek} 
              setActiveWeek={setActiveWeek}
              selectedTopicId={selectedTopicId}
              setSelectedTopicId={setSelectedTopicId}
              onNavigate={handleNavigation}
              completedTopics={completedTopics}
              isMinimized={isSidebarMinimized}
              toggleMinimized={toggleSidebarMinimized}
            />
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 fixed top-0 left-0 right-0 z-30 transition-all duration-300">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:scale-110 active:scale-95"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12">
              <Code size={16} className="text-white" />
            </div>
            <span className="font-bold text-slate-900 dark:text-white transition-colors duration-300">Algomist</span>
          </div>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${mainContentMargin} transition-all duration-300 ease-in-out`}>
        <main className="min-h-screen pt-16 lg:pt-0">
          <div className="p-6 transition-all duration-300">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DSALayout;
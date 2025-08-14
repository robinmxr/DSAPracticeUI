import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Code, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on a problem or concept page
  const isOnProblemPage = location.pathname.includes('/problem/');
  const isOnConceptPage = location.pathname.includes('/concept/');
  const shouldHideSidebar = isOnProblemPage || isOnConceptPage;

  const handleNavigation = () => {
    setSidebarOpen(false);
  };

  // Enhanced navigation functions
  const handleWeekNavigation = (weekNumber) => {
    setActiveWeek(weekNumber);
    if (shouldHideSidebar) {
      navigate('/', { state: { activeWeek: weekNumber } });
    }
    handleNavigation();
  };

  const handleTopicNavigation = (topicId) => {
    setSelectedTopicId(topicId);
    if (shouldHideSidebar) {
      navigate('/', { state: { selectedTopicId: topicId } });
    }
    handleNavigation();
  };

  // Simplified layout calculations
  const sidebarWidth = isSidebarMinimized ? 'w-20' : 'w-80';
  const mainContentClass = shouldHideSidebar 
    ? 'w-full' 
    : isSidebarMinimized 
      ? 'lg:ml-20' 
      : 'lg:ml-80';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      {!shouldHideSidebar && (
        <div className={`fixed inset-y-0 left-0 z-50 ${sidebarWidth} bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-r border-slate-200/50 dark:border-slate-800/50 transform transition-all duration-500 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
          <div className="flex flex-col h-full">
            {/* Close button for mobile */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 z-10 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 lg:hidden rounded-md hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className={`p-4 border-b border-slate-200/30 dark:border-slate-800/30 transition-all duration-500 ease-in-out ${isSidebarMinimized ? 'px-3' : 'px-4'}`}>
              <div className={`flex items-center transition-all duration-500 ease-in-out ${isSidebarMinimized ? 'justify-center' : 'gap-2.5'}`}>
                <button
                  onClick={() => navigate('/')}
                  className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-105 transition-all duration-200"
                >
                  <Code size={20} className="text-white" />
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  !isSidebarMinimized 
                    ? 'opacity-100 max-w-full translate-x-0' 
                    : 'opacity-0 max-w-0 -translate-x-4'
                }`}>
                  <button
                    onClick={() => navigate('/')}
                    className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
                  >
                    <h1 className="text-lg font-semibold text-slate-900 dark:text-white">Algomist</h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Master the Code</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Collapse Toggle */}
            {toggleSidebarMinimized && (
              <div className="hidden lg:flex justify-center px-3 py-1.5">
                <button
                  onClick={toggleSidebarMinimized}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-600 dark:hover:text-slate-300 transition-all duration-200"
                  title={isSidebarMinimized ? "Expand Sidebar" : "Minimize Sidebar"}
                >
                  {isSidebarMinimized ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </button>
              </div>
            )}

            {/* Navigation */}
            <div className={`flex-1 overflow-y-auto transition-all duration-500 ease-in-out ${isSidebarMinimized ? 'px-1.5' : 'px-4'} pb-4`}>
              <WeekNavigation 
                activeWeek={activeWeek} 
                setActiveWeek={handleWeekNavigation}
                selectedTopicId={selectedTopicId}
                setSelectedTopicId={handleTopicNavigation}
                onNavigate={handleNavigation}
                completedTopics={completedTopics}
                isMinimized={isSidebarMinimized}
                toggleMinimized={toggleSidebarMinimized}
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Header */}
      <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 fixed top-0 left-0 right-0 z-30">
        <div className="flex items-center justify-between p-4">
          {!shouldHideSidebar ? (
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Menu size={24} />
            </button>
          ) : (
            <button
              onClick={() => navigate(-1)}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code size={16} className="text-white" />
            </div>
            <span className="font-bold text-slate-900 dark:text-white">Algomist</span>
          </button>
          
          <div className="w-10"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${mainContentClass} transition-all duration-500 ease-in-out`}>
        <main className="min-h-screen pt-16 lg:pt-0">
          <div className={`${shouldHideSidebar ? 'p-0' : 'p-6'}`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DSALayout;
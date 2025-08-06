import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
        <div className={`fixed inset-y-0 left-0 z-50 ${sidebarWidth} bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
          <div className="flex flex-col h-full">
            {/* Close button for mobile */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 lg:hidden rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className={`p-6 border-b border-slate-200 dark:border-slate-800 ${isSidebarMinimized ? 'px-4' : 'px-6'}`}>
              <div className={`flex items-center ${isSidebarMinimized ? 'justify-center' : 'gap-3'}`}>
                <button
                  onClick={() => navigate('/')}
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 hover:scale-110 transition-all duration-300"
                >
                  <Code size={24} className="text-white" />
                </button>
                {!isSidebarMinimized && (
                  <div>
                    <button
                      onClick={() => navigate('/')}
                      className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <h1 className="text-xl font-bold text-slate-900 dark:text-white">Algomist</h1>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Master the Code</p>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Collapse Toggle */}
            {toggleSidebarMinimized && (
              <div className="hidden lg:flex justify-end px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                <button
                  onClick={toggleSidebarMinimized}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-300 transition-all duration-300"
                  title={isSidebarMinimized ? "Expand Sidebar" : "Minimize Sidebar"}
                >
                  {isSidebarMinimized ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
              </div>
            )}

            {/* Quest Path Label */}
            {!isSidebarMinimized && (
              <div className="p-6 pb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-slate-400" />
                  <span className="text-base font-semibold text-slate-700 dark:text-slate-300">Quest Path</span>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className={`flex-1 overflow-y-auto ${isSidebarMinimized ? 'px-2' : 'px-6'} pb-6`}>
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
      <div className={`${mainContentClass} transition-all duration-300`}>
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
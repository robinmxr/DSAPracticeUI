import React, { useState, useRef, useEffect } from 'react';
import { TrendingUp, BookOpen, Trophy, RotateCcw, AlertTriangle } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import Footer from './components/Footer';
import DSALayout from './components/DSALayout';
import WeekContent from './components/WeekContent';
import DailyStudyTips from './components/DailyStudyTips';
import {  practiceProblems } from './data/planData';
import { learningPlan } from './data/learningPlan';

const DSAMasteryPlan = ({
  activeWeek,
  setActiveWeek,
  selectedTopicId,
  setSelectedTopicId,
  completedProblems,
  toggleProblemComplete,
  resetProgress,
  isSidebarMinimized,
  toggleSidebarMinimized
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const weekContentRef = useRef(null);
  const statsRef = useRef(null);

  // Scroll to week content when selectedTopicId changes
  useEffect(() => {
    if (selectedTopicId && weekContentRef.current) {
      weekContentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [selectedTopicId]);

  // Handle sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 80); // Offset for the sidebar header
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCompletedTopics = () => {
    const completed = new Set();
    Object.values(learningPlan).forEach(week => {
      week.topics?.forEach(topic => {
        const allCompleted = topic.problems.every(problem => 
          completedProblems.has(problem.name)
        );
        if (allCompleted && topic.problems.length > 0) {
          completed.add(topic.id);
        }
      });
    });
    return completed;
  };

  const completedTopics = getCompletedTopics();
  const planArray = Object.values(learningPlan);
  const totalTopics = planArray.reduce((acc, week) => acc + (week.topics?.length || 0), 0);
  const totalProblems = Object.keys(practiceProblems).length;
  const completedTopicsCount = completedTopics.size;
  const completedProblemsCount = Array.from(completedProblems).filter(problemName =>
    practiceProblems[problemName]
  ).length;
  const topicProgress = Math.round((completedTopicsCount / totalTopics) * 100) || 0;
  const problemProgress = Math.round((completedProblemsCount / totalProblems) * 100) || 0;

  const handleResetProgress = () => {
    resetProgress();
    setShowResetConfirm(false);
  };

  // Calculate sidebar width for sticky header positioning
  const sidebarWidth = isSidebarMinimized ? 'left-20' : 'left-80';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <DSALayout
        activeWeek={activeWeek}
        setActiveWeek={setActiveWeek}
        selectedTopicId={selectedTopicId}
        setSelectedTopicId={setSelectedTopicId}
        completedTopicsCount={completedTopicsCount}
        totalTopics={totalTopics}
        topicProgress={topicProgress}
        completedProblemsCount={completedProblemsCount}
        totalProblems={totalProblems}
        problemProgress={problemProgress}
        completedTopics={completedTopics}
        isSidebarMinimized={isSidebarMinimized}
        toggleSidebarMinimized={toggleSidebarMinimized}
      >
        {/* Sticky Header Stats - Hidden on mobile */}
        {isSticky && (
          <div className={`hidden lg:block fixed top-0 ${sidebarWidth} right-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all duration-300`}>
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="text-white" size={14} />
                    </div>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Quest {activeWeek} of 6</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="text-white" size={14} />
                    </div>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Challenges: {topicProgress}% Complete</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Trophy className="text-white" size={14} />
                    </div>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Puzzles: {problemProgress}% Solved</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowResetConfirm(true)}
                  disabled={completedProblemsCount === 0 && completedTopicsCount === 0}
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-br from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-lg text-white text-sm font-medium shadow-sm hover:shadow-md min-h-[44px]"
                >
                  <RotateCcw size={14} />
                  <span>Reset Progress</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto space-y-6 lg:space-y-12">
          {/* Mobile-Optimized Hero Section */}
          <div className="text-center py-6 lg:py-12 relative">
            <div className="relative z-10 max-w-4xl mx-auto px-4">
              {/* Mobile-only compact badge */}
              <div className="sm:hidden inline-flex items-center gap-2 px-3 py-1.5 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 rounded-full text-xs font-medium mb-4">
                <Sparkles size={14} className="text-amber-500" />
                <span>Algomist</span>
              </div>
              
              {/* Desktop badge */}
              <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium mb-6 lg:mb-8 shadow-sm">
                <Sparkles size={16} className="text-amber-500" />
                <span>Algomist Journey</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 lg:mb-6 leading-tight">
                <span className="text-slate-900 dark:text-white">
                  The{' '}
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Algomist
                </span>
                <br />
                <span className="text-slate-900 dark:text-white">
                  Master the{' '}
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Code
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-4 lg:mb-8">
                6-week algorithmic adventure designed to conquer technical interviews with 
                <span className="text-slate-800 dark:text-slate-300 font-semibold"> strategic mastery</span>
              </p>

              {/* Mobile-optimized stats - simplified */}
              <div className="flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">6 Quests</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">{totalTopics} Topics</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">{totalProblems} Problems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-Optimized Stats Cards */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-4 lg:mb-8 px-4 lg:px-0">
            {/* Current Week Card */}
            <div className="group relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 dark:from-blue-500/10 dark:to-indigo-600/10"></div>
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg mb-2">
                    <TrendingUp className="text-white" size={14} />
                  </div>
                  <span className="text-lg lg:text-2xl font-bold text-slate-900 dark:text-white">
                    {activeWeek}
                  </span>
                  <p className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400">Quest</p>
                </div>
              </div>
            </div>

            {/* Topics Progress Card */}
            <div className="group relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-600/5 dark:from-emerald-500/10 dark:to-green-600/10"></div>
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg mb-2">
                    <BookOpen className="text-white" size={14} />
                  </div>
                  <span className="text-lg lg:text-2xl font-bold text-slate-900 dark:text-white">
                    {topicProgress}%
                  </span>
                  <p className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400">
                    <span className="hidden sm:inline">{completedTopicsCount}/{totalTopics} </span>Topics
                  </p>
                </div>
              </div>
            </div>

            {/* Problems Progress Card */}
            <div className="group relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5 dark:from-purple-500/10 dark:to-pink-600/10"></div>
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg mb-2">
                    <Trophy className="text-white" size={14} />
                  </div>
                  <span className="text-lg lg:text-2xl font-bold text-slate-900 dark:text-white">
                    {problemProgress}%
                  </span>
                  <p className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400">
                    <span className="hidden sm:inline">{completedProblemsCount}/{totalProblems} </span>Solved
                  </p>
                </div>
              </div>
            </div>

            {/* Reset Button Card - Mobile optimized */}
            <div className="group relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-600/5 dark:from-red-500/10 dark:to-orange-600/10"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <button
                  onClick={() => setShowResetConfirm(true)}
                  disabled={completedProblemsCount === 0 && completedTopicsCount === 0}
                  className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-lg lg:rounded-xl flex items-center justify-center mb-2 shadow-lg hover:shadow-xl transform hover:rotate-12 min-h-[44px] min-w-[44px]"
                >
                  <RotateCcw className="text-white" size={14} />
                </button>
                <p className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400 text-center">
                  <span className="hidden sm:inline">Reset Progress</span>
                  <span className="sm:hidden">Reset</span>
                </p>
              </div>
            </div>
          </div>

          {/* Week Content - Adjusted margins for mobile */}
          <div ref={weekContentRef} className={`relative transition-all duration-300 px-4 lg:px-0 ${isSticky && window.innerWidth >= 1024 ? 'lg:mt-20' : 'mt-0'}`}>
            <WeekContent
              week={activeWeek}
              learningPlan={learningPlan}
              completedTopics={completedTopics}
              practiceProblems={practiceProblems}
              completedProblems={completedProblems}
              toggleProblemComplete={toggleProblemComplete}
              selectedTopicId={selectedTopicId}
            />
          </div>

          <div className="px-4 lg:px-0">
            <DailyStudyTips />
          </div>
        </div>

        {/* Mobile-Optimized Reset Confirmation Modal */}
        {showResetConfirm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 max-w-sm sm:max-w-md w-full border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-600/5 dark:from-red-500/10 dark:to-orange-600/10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <AlertTriangle className="text-white" size={18} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Reset Progress?</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  This will clear all your progress permanently. You'll start from the beginning.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="flex-1 px-4 py-3 bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-700/80 rounded-xl border border-slate-200/50 dark:border-slate-600/50 font-medium transition-all duration-200 hover:shadow-sm text-sm min-h-[44px] touch-manipulation"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleResetProgress}
                    className="flex-1 px-4 py-3 bg-gradient-to-br from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl text-sm min-h-[44px] touch-manipulation"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </DSALayout>

      {/* Footer with sidebar padding for DSAMasteryPlan */}
      <Footer totalTopics={totalTopics} totalProblems={totalProblems} isSidebarMinimized={isSidebarMinimized} />
    </div>
  );
};

export default DSAMasteryPlan;
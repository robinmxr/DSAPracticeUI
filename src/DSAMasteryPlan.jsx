import React, { useState, useRef, useEffect } from 'react';
import { TrendingUp, BookOpen, Trophy, RotateCcw, AlertTriangle, User, Mail, Globe, Sparkles, Linkedin, Github } from 'lucide-react';
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
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-br from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-lg text-white text-sm font-medium shadow-sm hover:shadow-md"
                >
                  <RotateCcw size={14} />
                  <span>Reset Progress</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto space-y-8 lg:space-y-12">
          {/* Clean Hero Section */}
          <div className="text-center py-8 lg:py-12 relative">
            <div className="relative z-10 max-w-4xl mx-auto px-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium mb-6 lg:mb-8 shadow-sm">
                <Sparkles size={16} className="text-amber-500" />
                <span>Algomist Journey</span>
              </div>
              
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
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
              
              <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-6 lg:mb-8">
                6-week algorithmic adventure designed to conquer technical interviews with 
                <span className="text-slate-800 dark:text-slate-300 font-semibold"> strategic mastery</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">6 Quests</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">{totalTopics} Challenges</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">{totalProblems} Puzzles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8 px-4 lg:px-0">
            {/* Current Week Card */}
            <div className="group relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 dark:from-blue-500/10 dark:to-indigo-600/10"></div>
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-3 lg:mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg mb-2 lg:mb-0">
                    <TrendingUp className="text-white" size={16} />
                  </div>
                  <span className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                    Quest {activeWeek}
                  </span>
                </div>
                <p className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400 text-center lg:text-left">Current Quest</p>
              </div>
            </div>

            {/* Topics Progress Card */}
            <div className="group relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-600/5 dark:from-emerald-500/10 dark:to-green-600/10"></div>
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-3 lg:mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg mb-2 lg:mb-0">
                    <BookOpen className="text-white" size={16} />
                  </div>
                  <span className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                    {topicProgress}%
                  </span>
                </div>
                <p className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400 text-center lg:text-left">
                  {completedTopicsCount}/{totalTopics} Challenges
                </p>
              </div>
            </div>

            {/* Problems Progress Card */}
            <div className="group relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5 dark:from-purple-500/10 dark:to-pink-600/10"></div>
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-3 lg:mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg mb-2 lg:mb-0">
                    <Trophy className="text-white" size={16} />
                  </div>
                  <span className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                    {problemProgress}%
                  </span>
                </div>
                <p className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400 text-center lg:text-left">
                  {completedProblemsCount}/{totalProblems} Puzzles
                </p>
              </div>
            </div>

            {/* Reset Button Card */}
            <div className="group relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-600/5 dark:from-red-500/10 dark:to-orange-600/10"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <button
                  onClick={() => setShowResetConfirm(true)}
                  disabled={completedProblemsCount === 0 && completedTopicsCount === 0}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-lg lg:rounded-xl flex items-center justify-center mb-2 lg:mb-3 shadow-lg hover:shadow-xl transform hover:rotate-12"
                >
                  <RotateCcw className="text-white" size={16} />
                </button>
                <p className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400 text-center">Reset Quest Progress</p>
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

        {/* Reset Confirmation Modal */}
        {showResetConfirm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-600/5 dark:from-red-500/10 dark:to-orange-600/10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <AlertTriangle className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Reset Quest Progress?</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  This will clear all your Algomist progress permanently. You'll start your algorithmic adventure from the beginning.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="flex-1 px-4 py-2 bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-700/80 rounded-xl border border-slate-200/50 dark:border-slate-600/50 font-medium transition-all duration-200 hover:shadow-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleResetProgress}
                    className="flex-1 px-4 py-2 bg-gradient-to-br from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Reset Progress
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </DSALayout>

      {/* Footer - Adjusted for minimized sidebar */}
      <div className={`${isSidebarMinimized ? 'lg:pl-20' : 'lg:pl-80'} transition-all duration-300`}>
        <footer className="relative overflow-hidden border-t border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-br from-white/80 via-slate-50/80 to-blue-50/80 dark:from-slate-900/80 dark:via-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-emerald-500/10"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Creator Section */}
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <User size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Reajul Islam Robin</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Software Engineer</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  A fellow learner on the coding journey, passionate about building tools that make people's lives easier
                </p>
              </div>

              {/* Algomist Info */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Algomist</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Embark on a 6-week algorithmic adventure designed to conquer technical interviews with strategic mastery.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                    6 Quests
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full">
                    {totalTopics} Challenges
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full">
                    {totalProblems} Puzzles
                  </span>
                </div>
              </div>

              {/* Contact & Links */}
              <div className="flex flex-col space-y-4">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Mail size={12} className="text-white" />
                  </div>
                  Connect
                </h4>
                
                {/* Social Links Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="mailto:reajulbd786@gmail.com" 
                    className="flex items-center justify-center gap-2 p-3 bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 rounded-xl border border-slate-200/50 dark:border-slate-600/50 hover:shadow-sm group hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    title="Send Email"
                  >
                    <Mail size={20} className="group-hover:text-blue-500 transition-colors" />
                    <span className="text-sm font-medium">Email</span>
                  </a>
                  
                  <a
                    href="https://robinislam.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 rounded-xl border border-slate-200/50 dark:border-slate-600/50 hover:shadow-sm group hover:scale-105 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    title="Visit Portfolio"
                  >
                    <Globe size={20} className="group-hover:text-purple-500 transition-colors" />
                    <span className="text-sm font-medium">Portfolio</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/robin-mxr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 rounded-xl border border-slate-200/50 dark:border-slate-600/50 hover:shadow-sm group hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={20} className="group-hover:text-blue-600 transition-colors" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://github.com/robinmxr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 rounded-xl border border-slate-200/50 dark:border-slate-600/50 hover:shadow-sm group hover:scale-105 hover:bg-slate-50 dark:hover:bg-slate-800"
                    title="GitHub Profile"
                  >
                    <Github size={20} className="group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-700/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Sparkles size={14} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">Algomist</span>
                  </div>
                  <div className="h-4 w-px bg-slate-300 dark:bg-slate-600"></div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    © 2025
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Trophy size={14} className="text-amber-500" />
                  <span>Master the Code • Conquer the Quest</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DSAMasteryPlan;
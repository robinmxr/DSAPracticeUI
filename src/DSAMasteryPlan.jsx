import React, { useState, useRef, useEffect } from 'react';
import { TrendingUp, BookOpen, Trophy, RotateCcw, AlertTriangle, User, Mail, Globe, Sparkles } from 'lucide-react';
import DSALayout from './components/DSALayout';
import WeekContent from './components/WeekContent';
import DailyStudyTips from './components/DailyStudyTips';
import { learningPlan, practiceProblems } from './data/planData';

const DSAMasteryPlan = ({
  activeWeek,
  setActiveWeek,
  selectedTopicId,
  setSelectedTopicId,
  completedProblems,
  toggleProblemComplete,
  resetProgress
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const weekContentRef = useRef(null);

  // Scroll to week content when selectedTopicId changes
  useEffect(() => {
    if (selectedTopicId && weekContentRef.current) {
      weekContentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [selectedTopicId]);

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
      >
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Clean Hero Section */}
          <div className="text-center py-16 relative">
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium mb-8 shadow-sm">
                <Sparkles size={16} className="text-amber-500" />
                <span>Structured Learning Path</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                Data Structures &<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Algorithms
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
                12-week curriculum designed for technical interview preparation with 
                <span className="text-slate-800 dark:text-slate-300 font-semibold"> focused learning</span>
              </p>

              <div className="flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">12 Weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">{totalTopics} Topics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-400">{totalProblems} Problems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Current Week Card */}
            <div className="group relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    Week {activeWeek}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Current Week</p>
              </div>
            </div>

            {/* Topics Progress Card */}
            <div className="group relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-sm">
                    <BookOpen className="text-white" size={20} />
                  </div>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {topicProgress}%
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {completedTopicsCount}/{totalTopics} Topics
                </p>
              </div>
            </div>

            {/* Problems Progress Card */}
            <div className="group relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-sm">
                    <Trophy className="text-white" size={20} />
                  </div>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {problemProgress}%
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {completedProblemsCount}/{totalProblems} Problems
                </p>
              </div>
            </div>

            {/* Reset Button Card */}
            <div className="group relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <button
                  onClick={() => setShowResetConfirm(true)}
                  disabled={completedProblemsCount === 0 && completedTopicsCount === 0}
                  className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-xl flex items-center justify-center mb-3 shadow-sm hover:shadow-md transform hover:rotate-12"
                >
                  <RotateCcw className="text-white" size={20} />
                </button>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 text-center">Reset Progress</p>
              </div>
            </div>
          </div>

          {/* Reset Modal */}
          {showResetConfirm && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="text-red-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Reset Progress?</h3>
                  <p className="text-slate-600 dark:text-slate-400">This will clear all tracked progress permanently.</p>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="flex-1 px-4 py-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-xl transition-all duration-300 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleResetProgress}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white rounded-xl transition-all duration-300 font-medium shadow-sm"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Week Content - Add ref here */}
          <div ref={weekContentRef} className="relative">
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

          <DailyStudyTips />
        </div>
      </DSALayout>

      {/* Footer */}
      <div className="lg:pl-80">
        <footer className="border-t border-slate-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Reajul Islam Robin</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Software Engineer</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a 
                  href="mailto:reajulbd786@gmail.com" 
                  className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 rounded-xl border border-slate-200/50 dark:border-slate-600/50 hover:shadow-sm group"
                >
                  <Mail size={16} className="group-hover:text-blue-500 transition-colors" />
                  <span className="font-medium">Contact</span>
                </a>
                <a
                  href="https://robinislam.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 rounded-xl border border-slate-200/50 dark:border-slate-600/50 hover:shadow-sm group"
                >
                  <Globe size={16} className="group-hover:text-purple-500 transition-colors" />
                  <span className="font-medium">Portfolio</span>
                </a>
              </div>

              <div className="flex gap-6 text-center">
                <div>
                  <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                    {completedTopicsCount}/{totalTopics}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 font-medium">Topics</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
                    {completedProblemsCount}/{totalProblems}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 font-medium">Problems</div>
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
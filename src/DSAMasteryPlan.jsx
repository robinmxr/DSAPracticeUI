import React, { useState } from 'react';
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
    <div className="min-h-screen">
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
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center py-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Structured Learning Path</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Data Structures & Algorithms
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              12-week curriculum for technical interview preparation
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <span className="text-2xl font-bold text-slate-900 dark:text-white">Week {activeWeek}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Current Week</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-emerald-600 dark:text-emerald-400" size={20} />
                </div>
                <span className="text-2xl font-bold text-slate-900 dark:text-white">{topicProgress}%</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{completedTopicsCount}/{totalTopics} Topics</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Trophy className="text-purple-600 dark:text-purple-400" size={20} />
                </div>
                <span className="text-2xl font-bold text-slate-900 dark:text-white">{problemProgress}%</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{completedProblemsCount}/{totalProblems} Problems</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col items-center justify-center h-full">
                <button
                  onClick={() => setShowResetConfirm(true)}
                  disabled={completedProblemsCount === 0 && completedTopicsCount === 0}
                  className="w-10 h-10 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-lg flex items-center justify-center mb-2"
                >
                  <RotateCcw className="text-red-600 dark:text-red-400" size={20} />
                </button>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Reset Progress</p>
              </div>
            </div>
          </div>

          {/* Reset Modal */}
          {showResetConfirm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-8 max-w-md w-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="text-red-600 dark:text-red-400" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Reset Progress?</h3>
                  <p className="text-slate-600 dark:text-slate-400">This will clear all tracked progress permanently.</p>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleResetProgress}
                    className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Week Content */}
          <WeekContent
            week={activeWeek}
            learningPlan={learningPlan}
            completedTopics={completedTopics}
            practiceProblems={practiceProblems}
            completedProblems={completedProblems}
            toggleProblemComplete={toggleProblemComplete}
            selectedTopicId={selectedTopicId}
          />

          <DailyStudyTips />
        </div>
      </DSALayout>

      {/* Footer - Outside of the layout */}
      <div className="lg:pl-80">
        <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Reajul Islam Robin</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Software Engineer</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a 
                  href="mailto:reajulbd786@gmail.com" 
                  className="flex items-center gap-2 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  <span className="text-sm">Contact</span>
                </a>
                <a
                  href="https://robinislam.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Globe size={16} />
                  <span className="text-sm">Portfolio</span>
                </a>
              </div>

              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{completedTopicsCount}/{totalTopics}</div>
                  <div className="text-xs text-slate-500">Topics</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{completedProblemsCount}/{totalProblems}</div>
                  <div className="text-xs text-slate-500">Problems</div>
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
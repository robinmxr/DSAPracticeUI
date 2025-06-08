import React, { useState } from 'react';
import { Target, BookOpen, Trophy, User, Mail, Globe, RotateCcw, AlertTriangle, TrendingUp, Star } from 'lucide-react';
import DSALayout from './components/DSALayout';
import WeekContent from './components/WeekContent';
import ProblemModal from './components/ProblemModal';
import DailyStudyTips from './components/DailyStudyTips';
import { learningPlan, practiceProblems } from './data/planData';

const DSAMasteryPlan = ({
  activeWeek,
  setActiveWeek,
  selectedTopicId,
  setSelectedTopicId,
  completedProblems,
  toggleProblemComplete,
  resetProgress,
}) => {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Calculate topic completion based on problems
  const getCompletedTopics = () => {
    const completed = new Set();
    Object.values(learningPlan).forEach(week => {
      week.topics.forEach(topic => {
        if (
          topic.problems &&
          topic.problems.length > 0 &&
          topic.problems.every(p => completedProblems.has(p.name))
        ) {
          completed.add(topic.id);
        }
      });
    });
    return completed;
  };

  const completedTopics = getCompletedTopics();
  const planArray = Object.values(learningPlan);
  const problemArray = Object.values(practiceProblems);
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
    <>
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
        {/* Hero Section */}
        <div className="mb-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4">
              <Star size={16} className="text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Structured Learning Path</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Data Structures & Algorithms
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive 12-week curriculum designed for technical interview preparation and algorithmic proficiency
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Week Progress */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-blue-400" size={20} />
                </div>
                <span className="text-2xl font-bold text-white">Week {activeWeek}</span>
              </div>
              <p className="text-gray-400 text-sm">Current Progress</p>
            </div>

            {/* Topics */}
            <div className="bg-gradient-to-br from-emerald-800/20 to-emerald-900/20 backdrop-blur-sm border border-emerald-700/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-emerald-400" size={20} />
                </div>
                <span className="text-2xl font-bold text-white">{topicProgress}%</span>
              </div>
              <p className="text-gray-400 text-sm">{completedTopicsCount}/{totalTopics} Concepts Mastered</p>
            </div>

            {/* Problems */}
            <div className="bg-gradient-to-br from-purple-800/20 to-purple-900/20 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Trophy className="text-purple-400" size={20} />
                </div>
                <span className="text-2xl font-bold text-white">{problemProgress}%</span>
              </div>
              <p className="text-gray-400 text-sm">{completedProblemsCount}/{totalProblems} Exercises Solved</p>
            </div>

            {/* Reset Button */}
            <div className="bg-gradient-to-br from-red-800/20 to-red-900/20 backdrop-blur-sm border border-red-700/30 rounded-2xl p-6">
              <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <button
                  onClick={() => setShowResetConfirm(true)}
                  disabled={completedProblemsCount === 0 && completedTopicsCount === 0}
                  className="w-10 h-10 bg-red-500/20 hover:bg-red-500/40 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-all duration-200 rounded-lg flex items-center justify-center group mb-3"
                  title={completedProblemsCount === 0 && completedTopicsCount === 0 ? "No progress to reset" : "Reset learning progress"}
                >
                  <RotateCcw className="text-red-400 group-hover:text-red-300 transition-colors duration-200" size={20} />
                </button>
                <p className="text-red-300 text-sm font-medium pointer-events-none">Reset Progress</p>
              </div>
            </div>
          </div>

          {/* Progress Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Topics Progress */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Concepts Mastered</h3>
                  <p className="text-gray-400">Fundamental data structures & algorithms</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-emerald-400">{topicProgress}%</div>
                  <div className="text-sm text-gray-400">{completedTopicsCount} of {totalTopics} topics</div>
                </div>
              </div>
              
              <div className="relative mb-4">
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-emerald-500/20"
                    style={{ width: `${topicProgress}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Fundamentals</span>
                  <span>Advanced</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-semibold text-white">{Math.round(totalTopics * 0.3)}</div>
                  <div className="text-xs text-gray-400">Basic</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">{Math.round(totalTopics * 0.5)}</div>
                  <div className="text-xs text-gray-400">Intermediate</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">{Math.round(totalTopics * 0.2)}</div>
                  <div className="text-xs text-gray-400">Expert</div>
                </div>
              </div>
            </div>

            {/* Problems Progress */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Practice Exercises</h3>
                  <p className="text-gray-400">Coding challenges & algorithm implementation</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-purple-400">{problemProgress}%</div>
                  <div className="text-sm text-gray-400">{completedProblemsCount} of {totalProblems} completed</div>
                </div>
              </div>
              
              <div className="relative mb-4">
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-purple-400 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-purple-500/20"
                    style={{ width: `${problemProgress}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Practice</span>
                  <span>Interview Ready</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-semibold text-green-400">Easy</div>
                  <div className="text-xs text-gray-400">Foundation</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-yellow-400">Medium</div>
                  <div className="text-xs text-gray-400">Technical</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-red-400">Hard</div>
                  <div className="text-xs text-gray-400">Competition</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reset Confirmation Modal */}
        {showResetConfirm && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-lg w-full shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="text-red-400" size={36} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Reset Learning Progress?</h3>
                <p className="text-gray-400 text-lg">This will clear all tracked progress permanently</p>
              </div>
              
              <div className="mb-8">
                <div className="bg-slate-800/50 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Trophy className="text-purple-400" size={16} />
                      </div>
                      <span className="text-gray-300">Coding Exercises Completed</span>
                    </div>
                    <span className="text-2xl font-bold text-purple-400">{completedProblemsCount}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                        <BookOpen className="text-emerald-400" size={16} />
                      </div>
                      <span className="text-gray-300">Concepts Mastered</span>
                    </div>
                    <span className="text-2xl font-bold text-emerald-400">{completedTopicsCount}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-2xl text-gray-300 hover:text-white transition-all duration-200 font-semibold text-lg"
                >
                  Keep Progress
                </button>
                <button
                  onClick={handleResetProgress}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-2xl text-white transition-all duration-200 font-semibold text-lg shadow-lg shadow-red-500/25"
                >
                  Reset Everything
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content Sections */}
        <WeekContent
          week={activeWeek}
          learningPlan={learningPlan}
          completedTopics={completedTopics}
          setSelectedProblem={setSelectedProblem}
          practiceProblems={practiceProblems}
          completedProblems={completedProblems}
          toggleProblemComplete={toggleProblemComplete}
          selectedTopicId={selectedTopicId}
        />

        <ProblemModal
          selectedProblem={selectedProblem}
          setSelectedProblem={setSelectedProblem}
          practiceProblems={practiceProblems}
          completedProblems={completedProblems}
          toggleProblemComplete={toggleProblemComplete}
        />

        <DailyStudyTips />
      </DSALayout>

      {/* Professional Footer */}
      <footer className="border-t border-white/10 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Creator Info */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Reajul Islam Robin</h4>
                  <p className="text-gray-400">Software Engineer & Educator</p>
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex justify-center gap-6">
              <a 
                href="mailto:reajulbd786@gmail.com" 
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-gray-300 hover:text-white transition-all duration-200"
              >
                <Mail size={18} />
                <span>Contact</span>
              </a>
              <a
                href="https://robinislam.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-gray-300 hover:text-white transition-all duration-200"
              >
                <Globe size={18} />
                <span>Portfolio</span>
              </a>
            </div>

            {/* Progress Summary */}
            <div className="flex justify-center lg:justify-end gap-4">
              <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <div className="text-emerald-400 font-bold">{completedTopicsCount}/{totalTopics}</div>
                <div className="text-xs text-gray-400">Concepts</div>
              </div>
              <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                <div className="text-purple-400 font-bold">{completedProblemsCount}/{totalProblems}</div>
                <div className="text-xs text-gray-400">Exercises</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DSAMasteryPlan;
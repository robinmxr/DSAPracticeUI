import React, { useState } from 'react';
import { Target, Clock, BookOpen, Trophy, User, Mail, Globe } from 'lucide-react';
import DSALayout from './components/DSALayout';
import WeekContent from './components/WeekContent';
import ProblemModal from './components/ProblemModal';
import DailyStudyTips from './components/DailyStudyTips';
import { learningPlan, practiceProblems } from './data/planData';

const DSAMasteryPlan = () => {
  const [activeWeek, setActiveWeek] = useState(1);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [completedProblems, setCompletedProblems] = useState(new Set());

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

  const toggleProblemComplete = (problemName) => {
    setCompletedProblems(prev => {
      const next = new Set(prev);
      if (next.has(problemName)) {
        next.delete(problemName);
      } else {
        next.add(problemName);
      }
      return next;
    });
  };

  const planArray = Object.values(learningPlan);
  const problemArray = Object.values(practiceProblems);

  const totalTopics = planArray.reduce((acc, week) => acc + (week.topics?.length || 0), 0);
  const totalProblems = problemArray.length;

  const completedTopicsCount = completedTopics.size;
  const completedProblemsCount = Array.from(completedProblems).filter(problemName =>
    problemArray.some(problem => problem.name === problemName)
  ).length;

  const topicProgress = Math.round((completedTopicsCount / totalTopics) * 100) || 0;
  const problemProgress = Math.round((completedProblemsCount / totalProblems) * 100) || 0;

  return (
    <>
      <DSALayout
        activeWeek={activeWeek}
        setActiveWeek={setActiveWeek}
        selectedTopicId={selectedTopicId}
        setSelectedTopicId={setSelectedTopicId}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-blue-400" size={28} />
            <h1 className="text-2xl font-bold text-gray-100">DSA Interview Prep Plan</h1>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-gray-300">
              <strong>Goal:</strong> Master data structures & algorithms in 6 weeks (1-2 hours/day)
            </p>
            <div className="flex gap-6 mt-2 text-sm">
              <span className="flex items-center gap-1">
                <Clock size={16} className="text-blue-400" /> 1-2 hours daily
              </span>
              <span className="flex items-center gap-1">
                <BookOpen size={16} className="text-green-400" /> Theory + Practice
              </span>
              <span className="flex items-center gap-1">
                <Trophy size={16} className="text-yellow-400" /> Interview Ready
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Topics Progress */}
            <div className="flex-1 bg-[#18181b] rounded-lg p-4 flex flex-col items-start border border-gray-700">
              <span className="text-sm text-gray-400 mb-1">Topics Progress</span>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-blue-400">{completedTopicsCount}</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-300">{totalTopics}</span>
                <span className="ml-2 text-xs text-gray-500">{topicProgress}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded h-2">
                <div
                  className="bg-blue-500 h-2 rounded transition-all"
                  style={{ width: `${topicProgress}%` }}
                />
              </div>
            </div>
            {/* Problems Progress */}
            <div className="flex-1 bg-[#18181b] rounded-lg p-4 flex flex-col items-start border border-gray-700">
              <span className="text-sm text-gray-400 mb-1">Problems Progress</span>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-green-400">{completedProblemsCount}</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-300">{totalProblems}</span>
                <span className="ml-2 text-xs text-gray-500">{problemProgress}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded h-2">
                <div
                  className="bg-green-500 h-2 rounded transition-all"
                  style={{ width: `${problemProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Active Week Content */}
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
        {/* Problem Modal */}
        <ProblemModal
          selectedProblem={selectedProblem}
          setSelectedProblem={setSelectedProblem}
          practiceProblems={practiceProblems}
          completedProblems={completedProblems}
          toggleProblemComplete={toggleProblemComplete}
        />
        {/* Daily Study Tips */}
        <DailyStudyTips />
      </DSALayout>

      {/* Footer stays outside */}
      <footer className="w-full border-t border-gray-800 bg-[#181c2f] px-4 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Identity */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="flex items-center gap-2 text-gray-200 font-semibold text-base">
              <User size={18} className="text-blue-400" />
              Reajul (Islam) Robin
            </span>
            <span className="hidden md:inline-block text-gray-600">|</span>
            <span className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail size={16} className="text-green-400" />
              <a href="mailto:reajulbd786@gmail.com" className="hover:text-blue-400 underline">reajulbd786@gmail.com</a>
            </span>
            <span className="hidden md:inline-block text-gray-600">|</span>
            <span className="flex items-center gap-2 text-gray-400 text-sm">
              <Globe size={16} className="text-yellow-400" />
              <a
                href="https://robinislam.me"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 underline"
              >
                robinislam.me
              </a>
            </span>
          </div>
          {/* Right: Stats */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="flex items-center gap-2 text-blue-300 text-sm bg-[#232b4d] px-3 py-1 rounded">
              <BookOpen size={15} className="text-blue-400" />
              <span>
                <span className="font-semibold text-blue-200">{completedTopicsCount}</span>
                <span className="mx-1 text-gray-400">/</span>
                <span className="text-gray-400">{totalTopics}</span> Topics
              </span>
            </span>
            <span className="flex items-center gap-2 text-green-300 text-sm bg-[#19321a] px-3 py-1 rounded">
              <Target size={15} className="text-green-400" />
              <span>
                <span className="font-semibold text-green-200">{completedProblemsCount}</span>
                <span className="mx-1 text-gray-400">/</span>
                <span className="text-gray-400">{totalProblems}</span> Problems
              </span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DSAMasteryPlan;
import React, { useState } from 'react';
import { Target, Clock, BookOpen, Trophy, User, Mail, Globe } from 'lucide-react';
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
}) => {
  const [selectedProblem, setSelectedProblem] = useState(null);

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
        {/* Modern Asymmetric Cards Layout */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Goal Card */}
          <div className="col-span-1 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[160px] border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <Target className="text-blue-300" size={28} />
              <h2 className="text-xl font-bold text-blue-100">Goal</h2>
            </div>
            <p className="text-blue-100 text-base font-medium mb-2">
              Master DSA in <span className="font-bold text-blue-200">6 weeks</span>
            </p>
            <div className="flex gap-4 mt-auto text-xs text-blue-200">
              <span className="flex items-center gap-1">
                <Clock size={15} className="text-blue-300" /> 1-2h/day
              </span>
              <span className="flex items-center gap-1">
                <BookOpen size={15} className="text-green-300" /> Theory+Practice
              </span>
              <span className="flex items-center gap-1">
                <Trophy size={15} className="text-yellow-300" /> Interview Ready
              </span>
            </div>
          </div>
          {/* Topics Progress Card */}
          <div className="col-span-1 bg-gradient-to-br from-green-900 via-green-800 to-green-700 rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[160px] border border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={22} className="text-green-300" />
              <span className="text-lg font-semibold text-green-100">Topics Progress</span>
            </div>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-2xl font-bold text-green-200">{completedTopicsCount}</span>
              <span className="text-green-300 text-lg">/</span>
              <span className="text-green-100 text-lg">{totalTopics}</span>
              <span className="ml-2 text-xs text-green-300">{topicProgress}%</span>
            </div>
            <div className="w-full bg-green-950 rounded h-2 mb-1">
              <div
                className="bg-green-400 h-2 rounded transition-all"
                style={{ width: `${topicProgress}%` }}
              />
            </div>
          </div>
          {/* Problems Progress Card */}
          <div className="col-span-1 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[160px] border border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <Target size={22} className="text-purple-300" />
              <span className="text-lg font-semibold text-purple-100">Problems Progress</span>
            </div>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-2xl font-bold text-purple-200">{completedProblemsCount}</span>
              <span className="text-purple-300 text-lg">/</span>
              <span className="text-purple-100 text-lg">{totalProblems}</span>
              <span className="ml-2 text-xs text-purple-300">{problemProgress}%</span>
            </div>
            <div className="w-full bg-purple-950 rounded h-2 mb-1">
              <div
                className="bg-purple-400 h-2 rounded transition-all"
                style={{ width: `${problemProgress}%` }}
              />
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
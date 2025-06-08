import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Lightbulb, Target, Eye, EyeOff, CheckCircle, Circle, Code, Brain, Zap } from 'lucide-react';
import WeekNavigation from './WeekNavigation';
import { learningPlan, conceptsInfo, practiceProblems } from '../data/planData';
import ConceptModal from './ConceptModal';
import DSALayout from './DSALayout';

const ProblemPage = ({
  completedProblems = new Set(),
  toggleProblemComplete = () => {},
  activeWeek,
  setActiveWeek,
  selectedTopicId,
  setSelectedTopicId,
}) => {
  const { problemName } = useParams();
  const navigate = useNavigate();
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [showApproach, setShowApproach] = useState(false);

  // Decode the problem name from URL
  const decodedProblemName = decodeURIComponent(problemName || '');

  // Scroll to top when component mounts or problemName changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [problemName]);

  // Find the topic and week for this problem
  useEffect(() => {
    if (!decodedProblemName || !learningPlan) return;
    
    let found = false;
    for (const [weekNum, weekData] of Object.entries(learningPlan)) {
      if (!weekData.topics) continue;
      for (const topic of weekData.topics) {
        if (topic.problems && topic.problems.some((p) => p.name === decodedProblemName)) {
          if (setActiveWeek) setActiveWeek(Number(weekNum));
          if (setSelectedTopicId) setSelectedTopicId(topic.id);
          found = true;
          break;
        }
      }
      if (found) break;
    }
  }, [decodedProblemName, learningPlan, setActiveWeek, setSelectedTopicId]);

  // Get problem data from practiceProblems
  const problemData = practiceProblems?.[decodedProblemName];
  
  // Get problem metadata from learningPlan
  let problemMetadata = null;
  if (learningPlan) {
    for (const weekData of Object.values(learningPlan)) {
      if (!weekData.topics) continue;
      for (const topic of weekData.topics) {
        if (topic.problems) {
          const found = topic.problems.find(p => p.name === decodedProblemName);
          if (found) {
            problemMetadata = found;
            break;
          }
        }
      }
      if (problemMetadata) break;
    }
  }

  // Calculate stats for DSALayout
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

  // If problem doesn't exist in either place
  if (!problemData && !problemMetadata) {
    return (
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
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12">
              <Target className="text-red-400" size={36} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Problem Not Found</h2>
            <p className="text-gray-400 mb-8 text-lg">The problem "{decodedProblemName}" could not be located.</p>
            <button
              onClick={() => navigate('/')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-2xl text-white font-semibold transition-all duration-200 shadow-lg"
            >
              Go Back to Home
            </button>
          </div>
        </div>
      </DSALayout>
    );
  }

  // Combine data from both sources
  const combinedData = {
    problem: problemData?.problem || `Solve the problem: ${decodedProblemName}`,
    hint: problemData?.hint || problemMetadata?.hint || "Think about the most efficient approach for this problem type.",
    approach: problemData?.approach || "Break down the problem into smaller steps and consider the optimal data structures and algorithms.",
    concepts: problemData?.concepts || problemMetadata?.concepts || [],
    pattern: problemData?.pattern || problemMetadata?.pattern || 'General Problem Solving',
    difficulty: problemData?.difficulty || problemMetadata?.difficulty || 'Medium'
  };

  const isCompleted = completedProblems.has(decodedProblemName);

  const handleToggleComplete = () => {
    toggleProblemComplete(decodedProblemName);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'hard': return 'text-red-400 bg-red-500/10 border-red-500/20';
      default: return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    }
  };

  return (
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
      {/* Hero Header with Floating Elements */}
      <div className="relative mb-12 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/3 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-1/2 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate('/')}
              className="group flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl text-gray-300 hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Overview</span>
            </button>
            
            <div className="flex items-center gap-4">
              {combinedData.difficulty && (
                <div className={`px-4 py-2 rounded-2xl text-sm font-bold border backdrop-blur-sm ${getDifficultyColor(combinedData.difficulty)}`}>
                  {combinedData.difficulty.toUpperCase()}
                </div>
              )}
              <button
                onClick={handleToggleComplete}
                className={`group flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  isCompleted
                    ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white shadow-lg shadow-green-500/25'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white'
                }`}
              >
                {isCompleted ? (
                  <>
                    <CheckCircle size={20} className="group-hover:scale-110 transition-transform duration-200" />
                    Completed
                  </>
                ) : (
                  <>
                    <Circle size={20} className="group-hover:scale-110 transition-transform duration-200" />
                    Mark Complete
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Title Section */}
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
              <Code size={16} className="text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Algorithm Challenge</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              {decodedProblemName}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Dive deep into algorithmic problem-solving and enhance your programming skills through structured practice
            </p>
          </div>
        </div>
      </div>

      {/* Dynamic Grid Layout */}
      <div className="max-w-7xl mx-auto">
        {/* Problem Statement - Full Width Hero */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center rotate-3">
                  <BookOpen className="text-blue-400" size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Problem Statement</h2>
                  <p className="text-blue-300 mt-1">Read carefully and understand the requirements</p>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
                <pre className="text-gray-100 whitespace-pre-wrap leading-loose font-mono text-base">
                  {combinedData.problem}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Concepts & Hint */}
          <div className="lg:col-span-2 space-y-8">
            {/* Concepts */}
            <div className="bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center -rotate-3">
                    <Brain className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Key Concepts</h2>
                    <p className="text-purple-300 mt-1">Fundamental building blocks for this problem</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {combinedData.concepts.map((concept, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedConcept(concept)}
                      className="group px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/30 rounded-2xl text-purple-300 hover:text-purple-200 font-semibold transition-all duration-300 hover:scale-105"
                    >
                      {concept}
                    </button>
                  ))}
                  {combinedData.pattern && (
                    <button
                      onClick={() => setSelectedConcept(combinedData.pattern)}
                      className="group px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-blue-500/20 hover:border-blue-500/30 rounded-2xl text-blue-300 hover:text-blue-200 font-semibold transition-all duration-300 hover:scale-105"
                    >
                      🎯 Pattern: {combinedData.pattern}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Hint */}
            <div className="bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-transparent backdrop-blur-sm border border-yellow-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/5 rounded-full blur-2xl -translate-y-20 translate-x-20"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-yellow-500/20 rounded-2xl flex items-center justify-center rotate-12">
                    <Lightbulb className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Hint</h2>
                    <p className="text-yellow-300 mt-1">A gentle nudge in the right direction</p>
                  </div>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">
                  <p className="text-yellow-200 leading-relaxed text-lg">
                    💡 {combinedData.hint}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Practice Tips */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 sticky top-8 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <Zap className="text-emerald-400" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Practice Guide</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-300 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      Before Coding
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3 group">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                        <span className="group-hover:text-white transition-colors duration-200">Understand the problem completely</span>
                      </li>
                      <li className="flex items-start gap-3 group">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                        <span className="group-hover:text-white transition-colors duration-200">Identify edge cases</span>
                      </li>
                      <li className="flex items-start gap-3 group">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                        <span className="group-hover:text-white transition-colors duration-200">Plan your approach</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-300 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      After Solving
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3 group">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                        <span className="group-hover:text-white transition-colors duration-200">Test with examples</span>
                      </li>
                      <li className="flex items-start gap-3 group">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                        <span className="group-hover:text-white transition-colors duration-200">Analyze complexity</span>
                      </li>
                      <li className="flex items-start gap-3 group">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                        <span className="group-hover:text-white transition-colors duration-200">Consider alternatives</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Approach - Full Width */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-36"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center -rotate-6">
                    <Target className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Solution Approach</h2>
                    <p className="text-emerald-300 mt-1">Strategic thinking for optimal solution</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowApproach(!showApproach)}
                  className="group flex items-center gap-3 px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/30 rounded-2xl text-emerald-300 hover:text-emerald-200 font-semibold transition-all duration-300"
                >
                  {showApproach ? (
                    <>
                      <EyeOff size={20} className="group-hover:scale-110 transition-transform duration-200" />
                      Hide Solution
                    </>
                  ) : (
                    <>
                      <Eye size={20} className="group-hover:scale-110 transition-transform duration-200" />
                      Reveal Solution
                    </>
                  )}
                </button>
              </div>
              
              <div className="relative">
                {!showApproach ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-12 text-center">
                    <div className="mb-8">
                      <div className="w-20 h-20 bg-emerald-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 rotate-12">
                        <Eye className="text-emerald-400" size={36} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Solution Hidden</h3>
                      <p className="text-gray-400 text-lg max-w-md mx-auto">
                        Challenge yourself first! Only reveal the approach when you need guidance.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowApproach(true)}
                      className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:scale-105"
                    >
                      Reveal Solution Approach
                    </button>
                  </div>
                ) : (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8">
                    <p className="text-emerald-200 leading-relaxed text-lg">
                      🎯 {combinedData.approach}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concept Modal */}
      {selectedConcept && conceptsInfo && (
        <ConceptModal
          concept={selectedConcept}
          description={conceptsInfo[selectedConcept]?.description}
          onClose={() => setSelectedConcept(null)}
        />
      )}
    </DSALayout>
  );
};

export default ProblemPage;
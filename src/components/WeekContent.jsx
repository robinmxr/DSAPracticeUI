import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, BookOpen, Code, CheckCircle, Circle, Star, ExternalLink, Calendar, Target } from 'lucide-react';

const WeekContent = ({ 
  week, 
  learningPlan, 
  completedTopics, 
  practiceProblems, 
  completedProblems, 
  toggleProblemComplete,
  selectedTopicId 
}) => {
  const navigate = useNavigate();
  const weekData = learningPlan[week];
  
  // Scroll to selected topic when it changes - MUST be called before any conditional returns
  useEffect(() => {
    if (selectedTopicId && weekData) {
      const element = document.getElementById(`topic-${selectedTopicId}`);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  }, [selectedTopicId, weekData]);

  // Now we can do conditional returns after all hooks
  if (!weekData) return null;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'hard': return 'text-red-400 bg-red-500/10 border-red-500/20';
      default: return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    }
  };

  const handleProblemClick = (problemName) => {
    navigate(`/problem/${encodeURIComponent(problemName)}`);
  };

  // Filter topics to show only the selected one, or all if none selected
  const topicsToShow = selectedTopicId 
    ? weekData.topics?.filter(topic => topic.id === selectedTopicId) || []
    : weekData.topics || [];

  // Get week problems - Add proper type checking
  const weekProblems = Array.isArray(practiceProblems) 
    ? practiceProblems.filter(problem => problem.week === week) 
    : [];

  return (
    <div className="space-y-4 sm:space-y-8">
      {/* Mobile-Optimized Hero Header */}
      <div className="relative mb-6 sm:mb-12 overflow-hidden">
        {/* Simplified background decoration for mobile */}
        <div className="absolute inset-0 pointer-events-none opacity-50 sm:opacity-100">
          <div className="absolute top-5 sm:top-10 left-1/4 w-16 sm:w-32 h-16 sm:h-32 bg-blue-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute top-10 sm:top-20 right-1/3 w-12 sm:w-24 h-12 sm:h-24 bg-purple-500/5 rounded-full blur-xl sm:blur-2xl"></div>
        </div>

        <div className="relative z-10">
          {/* Mobile-Optimized Week Header */}
          <div className="bg-gradient-to-br from-blue-500/8 via-blue-500/4 to-transparent backdrop-blur-sm border border-blue-500/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-blue-500/5 rounded-full blur-2xl sm:blur-3xl -translate-y-16 sm:-translate-y-32 translate-x-16 sm:translate-x-32"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <Calendar className="text-white" size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
                    Quest {week} - {weekData.title}
                  </h2>
                  <p className="text-blue-300 font-medium text-sm sm:text-base">
                    {weekData.description}
                  </p>
                </div>
              </div>

              {selectedTopicId && topicsToShow.length > 0 && (
                <div className="mt-4 sm:mt-6">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                    <BookOpen size={14} />
                    <span className="truncate max-w-[200px] sm:max-w-none">{topicsToShow[0].title}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-Optimized No Topic Selected Message */}
      {!selectedTopicId && (
        <div className="bg-gradient-to-br from-purple-500/8 via-purple-500/4 to-transparent backdrop-blur-sm border border-purple-500/15 rounded-2xl sm:rounded-3xl p-6 sm:p-12 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-24 sm:w-48 h-24 sm:h-48 bg-purple-500/5 rounded-full blur-2xl sm:blur-3xl translate-y-12 sm:translate-y-24 -translate-x-12 sm:-translate-x-24"></div>
          <div className="relative z-10 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
              <BookOpen className="text-white" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Select a Topic to Start
            </h3>
            <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base">
              Choose a topic from the sidebar to view its problems and start practicing.
            </p>
          </div>
        </div>
      )}

      {/* Mobile-Optimized Learning Challenges Section */}
      {topicsToShow.length > 0 && (
        <div className="space-y-4 sm:space-y-8">
          {topicsToShow.map((topic, index) => {
            const isCompleted = completedTopics.has(topic.id);
            const isSelected = selectedTopicId === topic.id;
            
            return (
              <div 
                key={topic.id}
                id={`topic-${topic.id}`}
                className="scroll-mt-16 sm:scroll-mt-24"
              >
                {/* Mobile-Optimized Topic Header */}
                <div className="bg-gradient-to-br from-emerald-500/8 via-emerald-500/4 to-transparent backdrop-blur-sm border border-emerald-500/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden mb-4 sm:mb-6">
                  <div className="absolute top-1/2 left-0 w-36 sm:w-72 h-36 sm:h-72 bg-emerald-500/5 rounded-full blur-2xl sm:blur-3xl -translate-y-1/2 -translate-x-18 sm:-translate-x-36"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 ${
                          isCompleted 
                            ? 'bg-gradient-to-br from-emerald-500 to-green-600' 
                            : isSelected
                            ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                            : 'bg-gradient-to-br from-gray-500 to-gray-600'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="text-white" size={16} />
                          ) : (
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2 bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent leading-tight">
                            {topic.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-emerald-300">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <BookOpen size={12} />
                              <span>Learn: {topic.timeLearn}</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <Code size={12} />
                              <span>Practice: {topic.timePractice}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border backdrop-blur-sm flex-shrink-0 ${
                        isCompleted 
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' 
                          : 'bg-blue-500/10 text-blue-300 border-blue-500/20'
                      }`}>
                        <span className="hidden sm:inline">{isCompleted ? '✓ Completed' : '⏳ In Progress'}</span>
                        <span className="sm:hidden">{isCompleted ? '✓' : '⏳'}</span>
                      </div>
                    </div>

                    {/* Mobile-Hidden Concepts */}
                    {topic.concepts && topic.concepts.length > 0 && (
                      <div className="mb-4 sm:mb-6 hidden sm:block">
                        <h4 className="text-sm font-semibold text-emerald-300 mb-3">Key Concepts:</h4>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {topic.concepts.map((concept, idx) => (
                            <span
                              key={idx}
                              className="px-2 sm:px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-lg text-xs sm:text-sm font-medium border border-emerald-500/15 backdrop-blur-sm"
                            >
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Mobile-Hidden Description */}
                    {topic.description && (
                      <div className="mb-4 sm:mb-6 hidden sm:block">
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {topic.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Clean Mobile-Optimized Problems List */}
                {topic.problems && topic.problems.length > 0 && (
                  <div className="bg-gradient-to-br from-purple-500/8 via-purple-500/4 to-transparent backdrop-blur-sm border border-purple-500/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-16 sm:w-32 h-16 sm:h-32 bg-purple-500/5 rounded-full blur-xl sm:blur-2xl translate-y-8 sm:translate-y-16 translate-x-8 sm:translate-x-16"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                          <Code className="text-purple-400" size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg sm:text-2xl font-bold text-white">
                            Problems ({topic.problems.length})
                          </h4>
                          <p className="text-purple-300 mt-1 text-sm sm:text-base hidden sm:block">Sharpen your skills with these challenges</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-4 sm:gap-4">
                        {topic.problems.map((problem) => {
                          const isProblemCompleted = completedProblems.has(problem.name);
                          return (
                            <div
                              key={problem.name}
                              className="group bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/30 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10 mb-4"
                              onClick={() => handleProblemClick(problem.name)}
                              style={{ minWidth: 0 }}
                            >
                              <div className="p-4">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-3">
                                  <div className="flex items-center gap-3">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleProblemComplete(problem.name);
                                      }}
                                      className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                                        isProblemCompleted
                                          ? 'bg-gradient-to-br from-emerald-500 to-green-600 text-white'
                                          : 'bg-gray-700/60 text-gray-400 hover:bg-gray-600/80 border border-gray-600/30'
                                      }`}
                                    >
                                      {isProblemCompleted ? (
                                        <CheckCircle size={14} />
                                      ) : (
                                        <Circle size={14} />
                                      )}
                                    </button>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors leading-tight break-words">
                                        {problem.name}
                                      </h4>
                                    </div>
                                    {problem.essential && (
                                      <div className="flex items-center gap-1 px-2 py-0.5 bg-yellow-500/10 text-yellow-300 rounded-md text-xs font-medium border border-yellow-500/20 backdrop-blur-sm flex-shrink-0">
                                        <Star size={10} />
                                        <span className="hidden sm:inline">Essential</span>
                                      </div>
                                    )}
                                  </div>
                                  {/* Mobile: Only show difficulty, hide pattern */}
                                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                    <span className={`px-2 py-0.5 rounded-md text-xs font-medium border backdrop-blur-sm ${getDifficultyColor(problem.difficulty)}`}>
                                      {problem.difficulty}
                                    </span>
                                    <span className="hidden sm:inline text-gray-400 text-xs">
                                      {problem.pattern}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1 text-gray-400 group-hover:text-purple-400 transition-colors ml-auto">
                                    <ExternalLink size={12} />
                                    <span className="text-xs">Solve</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WeekContent;
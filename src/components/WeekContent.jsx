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
    <div className="space-y-8">
      {/* Hero Header with Floating Elements */}
      <div className="relative mb-12 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/3 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-1/2 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Week Header */}
          <div className="bg-gradient-to-br from-blue-500/8 via-blue-500/4 to-transparent backdrop-blur-sm border border-blue-500/15 rounded-3xl p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg rotate-3">
                  <Calendar className="text-white" size={20} />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    Quest {week} - {weekData.title}
                  </h2>
                  <p className="text-blue-300 font-medium">
                    {weekData.description}
                  </p>
                </div>
              </div>

              {selectedTopicId && topicsToShow.length > 0 && (
                <div className="mt-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
                    <BookOpen size={16} />
                    <span> {topicsToShow[0].title}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Show message if no topic is selected */}
      {!selectedTopicId && (
        <div className="bg-gradient-to-br from-purple-500/8 via-purple-500/4 to-transparent backdrop-blur-sm border border-purple-500/15 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg rotate-12">
              <BookOpen className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Select a Topic to Start
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Choose a topic from the sidebar to view its problems and start practicing.
            </p>
          </div>
        </div>
      )}

      {/* Learning Challenges Section */}
      {topicsToShow.length > 0 && (
        <div className="space-y-8">
          {topicsToShow.map((topic, index) => {
            const isCompleted = completedTopics.has(topic.id);
            const isSelected = selectedTopicId === topic.id;
            
            return (
              <div 
                key={topic.id}
                id={`topic-${topic.id}`}
                className="scroll-mt-24"
              >
                {/* Topic Header */}
                <div className="bg-gradient-to-br from-emerald-500/8 via-emerald-500/4 to-transparent backdrop-blur-sm border border-emerald-500/15 rounded-3xl p-6 lg:p-8 relative overflow-hidden mb-6">
                  <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-36"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                          isCompleted 
                            ? 'bg-gradient-to-br from-emerald-500 to-green-600 rotate-3' 
                            : isSelected
                            ? 'bg-gradient-to-br from-blue-500 to-purple-600 -rotate-3'
                            : 'bg-gradient-to-br from-gray-500 to-gray-600 rotate-6'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="text-white" size={20} />
                          ) : (
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          )}
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                            {topic.title}
                          </h3>
                          <div className="flex items-center gap-6 text-sm text-emerald-300">
                            <div className="flex items-center gap-2">
                              <BookOpen size={14} />
                              <span>Learn: {topic.timeLearn}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Code size={14} />
                              <span>Practice: {topic.timePractice}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm ${
                        isCompleted 
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' 
                          : 'bg-blue-500/10 text-blue-300 border-blue-500/20'
                      }`}>
                        {isCompleted ? '✓ Completed' : '⏳ In Progress'}
                      </div>
                    </div>

                    {/* Concepts */}
                    {topic.concepts && topic.concepts.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-emerald-300 mb-3">Key Concepts:</h4>
                        <div className="flex flex-wrap gap-3">
                          {topic.concepts.map((concept, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-lg text-sm font-medium border border-emerald-500/15 backdrop-blur-sm"
                            >
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    {topic.description && (
                      <div className="mb-6">
                        <p className="text-gray-300 leading-relaxed">
                          {topic.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Problems List */}
                {topic.problems && topic.problems.length > 0 && (
                  <div className="bg-gradient-to-br from-purple-500/8 via-purple-500/4 to-transparent backdrop-blur-sm border border-purple-500/15 rounded-3xl p-6 lg:p-8 relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl translate-y-16 translate-x-16"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center -rotate-3">
                          <Code className="text-purple-400" size={20} />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white">
                            Practice Problems ({topic.problems.length})
                          </h4>
                          <p className="text-purple-300 mt-1">Sharpen your skills with these challenges</p>
                        </div>
                      </div>
                      
                      <div className="grid gap-4">
                        {topic.problems.map((problem) => {
                          const isProblemCompleted = completedProblems.has(problem.name);
                          
                          return (
                            <div
                              key={problem.name}
                              className="group bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/30 rounded-2xl p-4 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10"
                              onClick={() => handleProblemClick(problem.name)}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 flex-1">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleProblemComplete(problem.name);
                                    }}
                                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 shadow-sm ${
                                      isProblemCompleted
                                        ? 'bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg'
                                        : 'bg-gray-700/60 text-gray-400 hover:bg-gray-600/80 border border-gray-600/50'
                                    }`}
                                  >
                                    {isProblemCompleted ? (
                                      <CheckCircle size={16} />
                                    ) : (
                                      <Circle size={16} />
                                    )}
                                  </button>
                                  
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                      <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                                        {problem.name}
                                      </h4>
                                      {problem.essential && (
                                        <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/10 text-yellow-300 rounded-md text-xs font-medium border border-yellow-500/20 backdrop-blur-sm">
                                          <Star size={12} />
                                          <span>Essential</span>
                                        </div>
                                      )}
                                    </div>
                                    
                                    <div className="flex items-center gap-4 text-sm">
                                      <span className={`px-3 py-1 rounded-md text-sm font-medium border backdrop-blur-sm ${getDifficultyColor(problem.difficulty)}`}>
                                        {problem.difficulty}
                                      </span>
                                      <span className="text-gray-400">
                                        Pattern: <span className="font-medium text-gray-300">{problem.pattern}</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-2 text-gray-400 group-hover:text-purple-400 transition-colors">
                                  <ExternalLink size={16} />
                                  <span className="text-sm font-medium">Solve</span>
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
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, BookOpen, Code, CheckCircle, Circle, Star, ExternalLink } from 'lucide-react';

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
      case 'easy': return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      case 'hard': return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      default: return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
    }
  };

  const handleProblemClick = (problemName) => {
    navigate(`/problem/${encodeURIComponent(problemName)}`);
  };

  // Filter topics to show only the selected one, or all if none selected
  const topicsToShow = selectedTopicId 
    ? weekData.topics?.filter(topic => topic.id === selectedTopicId) || []
    : weekData.topics || [];

  return (
    <div className="space-y-8">
      {/* Week Header */}
      <div className="text-center py-8">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
          {weekData.title}
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          {weekData.focus}
        </p>
        {selectedTopicId && topicsToShow.length > 0 && (
          <div className="mt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              <BookOpen size={16} />
              <span>Focused on: {topicsToShow[0].title}</span>
            </div>
          </div>
        )}
      </div>

      {/* Show message if no topic is selected */}
      {!selectedTopicId && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="text-blue-600 dark:text-blue-400" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Select a Topic to Start
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Choose a topic from the sidebar to view its problems and start practicing.
          </p>
        </div>
      )}

      {/* Topics */}
      <div className="space-y-8">
        {topicsToShow.map((topic) => {
          const isCompleted = completedTopics.has(topic.id);
          const isSelected = selectedTopicId === topic.id;
          
          return (
            <div 
              key={topic.id} 
              id={`topic-${topic.id}`}
              className="space-y-4 scroll-mt-24"
            >
              {/* Topic Header */}
              <div className={`bg-white dark:bg-slate-800 rounded-xl p-6 border transition-all duration-300 ${
                isSelected 
                  ? 'border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/10 shadow-lg ring-2 ring-blue-200 dark:ring-blue-800' 
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}>
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isCompleted 
                        ? 'bg-emerald-100 dark:bg-emerald-900/30' 
                        : isSelected
                        ? 'bg-blue-100 dark:bg-blue-900/30'
                        : 'bg-slate-100 dark:bg-slate-700'
                    }`}>
                      <BookOpen className={`${
                        isCompleted 
                          ? 'text-emerald-600 dark:text-emerald-400' 
                          : isSelected
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-slate-500 dark:text-slate-400'
                      }`} size={24} />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {topic.title}
                      </h3>
                      <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
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
                  
                  <div className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                    isCompleted 
                      ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700' 
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700'
                  }`}>
                    {isCompleted ? '✓ Completed' : '⏳ In Progress'}
                  </div>
                </div>

                {/* Concepts */}
                {topic.concepts && topic.concepts.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Key Concepts:</h4>
                    <div className="flex flex-wrap gap-2">
                      {topic.concepts.map((concept, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium"
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
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Problems List */}
              {topic.problems && topic.problems.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Code size={20} className="text-slate-600 dark:text-slate-400" />
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Practice Problems ({topic.problems.length})
                    </h4>
                  </div>
                  
                  <div className="grid gap-3">
                    {topic.problems.map((problem) => {
                      const isProblemCompleted = completedProblems.has(problem.name);
                      
                      return (
                        <div
                          key={problem.name}
                          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all duration-200 cursor-pointer group"
                          onClick={() => handleProblemClick(problem.name)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 flex-1">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleProblemComplete(problem.name);
                                }}
                                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                                  isProblemCompleted
                                    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700'
                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600'
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
                                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {problem.name}
                                  </h4>
                                  {problem.essential && (
                                    <div className="flex items-center gap-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-md text-xs font-medium border border-yellow-300 dark:border-yellow-700">
                                      <Star size={12} />
                                      <span>Essential</span>
                                    </div>
                                  )}
                                </div>
                                
                                <div className="flex items-center gap-4 text-sm">
                                  <span className={`px-3 py-1 rounded-md text-sm font-medium border ${getDifficultyColor(problem.difficulty)}`}>
                                    {problem.difficulty}
                                  </span>
                                  <span className="text-slate-500 dark:text-slate-400">
                                    Pattern: <span className="font-medium">{problem.pattern}</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 group-hover:text-blue-500 transition-colors">
                              <ExternalLink size={16} />
                              <span className="text-sm font-medium">Solve</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeekContent;
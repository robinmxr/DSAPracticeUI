import React, { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle, Code, Target, Zap, Brain, Trophy, Rocket } from 'lucide-react';
import { learningPlan } from "../data/learningPlan";

const WeekNavigation = ({ 
  activeWeek, 
  setActiveWeek, 
  selectedTopicId, 
  setSelectedTopicId, 
  onNavigate,
  completedTopics = new Set(),
  isMinimized = false,
  toggleMinimized
}) => {
  const [expandedWeeks, setExpandedWeeks] = useState(new Set([activeWeek]));
  const weeks = Object.keys(learningPlan).map(Number).sort((a, b) => a - b);

  // Week icons for visual appeal
  const weekIcons = {
    1: Code,
    2: Target,
    3: Zap,
    4: Brain,
    5: Trophy,
    6: Rocket
  };

  // Keep active week expanded and expand week containing selected topic
  useEffect(() => {
    setExpandedWeeks(prev => {
      const newSet = new Set(prev);
      newSet.add(activeWeek);
      
      if (selectedTopicId) {
        for (const [weekNum, weekData] of Object.entries(learningPlan)) {
          if (weekData.topics?.some(topic => topic.id === selectedTopicId)) {
            newSet.add(Number(weekNum));
            break;
          }
        }
      }
      
      return newSet;
    });
  }, [activeWeek, selectedTopicId]);

  const handleWeekClick = (weekNumber) => {
    if (isMinimized) {
      if (setActiveWeek) setActiveWeek(weekNumber);
      if (onNavigate) onNavigate();
      return;
    }
    
    setExpandedWeeks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(weekNumber)) {
        newSet.delete(weekNumber);
      } else {
        newSet.add(weekNumber);
      }
      return newSet;
    });
  };

  const handleTopicClick = (e, topicId, weekNumber) => {
    e.stopPropagation();
    if (setActiveWeek) setActiveWeek(weekNumber);
    if (setSelectedTopicId) setSelectedTopicId(topicId);
    if (onNavigate) onNavigate();
  };

  return (
    <div className="space-y-2 mt-4">
      {weeks.map((weekNumber) => {
        const week = learningPlan[weekNumber];
        const isActive = activeWeek === weekNumber;
        const isExpanded = expandedWeeks.has(weekNumber) && !isMinimized;
        const WeekIcon = weekIcons[weekNumber] || Code;
        
        return (
          <div key={weekNumber}>
            {/* Week Button - Simplified */}
            <button
              onClick={() => handleWeekClick(weekNumber)}
              className={`group w-full flex items-center ${isMinimized ? 'justify-center p-2' : 'gap-2.5 p-3'} rounded-lg text-left transition-all duration-200 ${
                isActive 
                  ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/30 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
              title={isMinimized ? `Quest ${weekNumber} - ${week.title}` : undefined}
            >
              {/* Week Icon - Simplified */}
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                isActive 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-600'
              }`}>
                <WeekIcon size={14} />
              </div>
              
              {/* Week Content - Simplified */}
              <div className={`flex-1 min-w-0 transition-all duration-500 ease-in-out overflow-hidden ${
                !isMinimized 
                  ? 'opacity-100 max-w-full translate-x-0' 
                  : 'opacity-0 max-w-0 -translate-x-4'
              }`}>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="font-medium text-sm">Quest {weekNumber}</span>
                  {isActive && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{week.title}</p>
              </div>
              
              {/* Simple Chevron */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                !isMinimized 
                  ? 'opacity-100 max-w-full' 
                  : 'opacity-0 max-w-0'
              }`}>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 text-slate-400 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>

            {/* Topics - Simplified */}
            {!isMinimized && (
              <div className={`overflow-hidden transition-all duration-300 ${
                isExpanded && week.topics 
                  ? 'max-h-[600px] opacity-100 mt-1' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="ml-4 space-y-1">
                  {week.topics?.map((topic) => {
                    const isSelected = selectedTopicId === topic.id;
                    const isCompleted = completedTopics.has(topic.id);
                    
                    return (
                      <button
                        key={topic.id}
                        onClick={(e) => handleTopicClick(e, topic.id, weekNumber)}
                        className={`group w-full flex items-center gap-2 p-2.5 rounded-md text-left transition-all duration-200 ${
                          isSelected
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/30 hover:text-slate-700 dark:hover:text-slate-300'
                        }`}
                      >
                        {/* Simple Status Indicator */}
                        <div className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          isSelected 
                            ? 'bg-emerald-500' 
                            : isCompleted
                            ? 'bg-green-500'
                            : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-slate-400 dark:group-hover:bg-slate-500'
                        }`}>
                          {isCompleted && (
                            <CheckCircle size={12} className="text-white -m-px" />
                          )}
                        </div>
                        
                        {/* Topic Content - Simplified */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm truncate">{topic.title}</span>
                            <span className="text-xs text-slate-400 ml-2 flex-shrink-0">{topic.timeLearn}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WeekNavigation;
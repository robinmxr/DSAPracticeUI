import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, CheckCircle } from 'lucide-react';
import { learningPlan } from '../data/planData';

const WeekNavigation = ({ activeWeek, setActiveWeek, selectedTopicId, setSelectedTopicId, onNavigate }) => {
  const [expandedWeeks, setExpandedWeeks] = useState(new Set([activeWeek]));
  const weeks = Object.keys(learningPlan).map(Number).sort((a, b) => a - b);

  // Keep active week expanded and expand week containing selected topic
  useEffect(() => {
    setExpandedWeeks(prev => {
      const newSet = new Set(prev);
      newSet.add(activeWeek);
      
      // Also expand the week that contains the selected topic
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
    // Only toggle expanded state, don't change active week unless we're selecting a topic
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
    
    // Set the active week to match the selected topic's week
    if (setActiveWeek) {
      setActiveWeek(weekNumber);
    }
    
    // Set the selected topic
    if (setSelectedTopicId) {
      setSelectedTopicId(topicId);
    }
    
    // Call onNavigate to close mobile sidebar and navigate
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <div className="space-y-2">
      {weeks.map((weekNumber) => {
        const week = learningPlan[weekNumber];
        const isActive = activeWeek === weekNumber;
        const isExpanded = expandedWeeks.has(weekNumber);
        
        return (
          <div key={weekNumber} className="space-y-1">
            {/* Week Button - Only toggles dropdown */}
            <button
              onClick={() => handleWeekClick(weekNumber)}
              className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 group ${
                isActive 
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                isActive 
                  ? 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300' 
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-600'
              }`}>
                {weekNumber}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-base mb-1">Week {weekNumber}</div>
                <div className="text-sm opacity-70 truncate">{week.title}</div>
              </div>
              
              <ChevronRight 
                size={18} 
                className={`transition-transform duration-200 flex-shrink-0 ${
                  isExpanded ? 'rotate-90' : ''
                } ${
                  isActive ? 'text-blue-500 dark:text-blue-400' : 'text-slate-400'
                }`}
              />
            </button>

            {/* Topics List */}
            {isExpanded && week.topics && (
              <div className="ml-4 pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-1">
                {week.topics.map((topic) => {
                  const isSelected = selectedTopicId === topic.id;
                  
                  return (
                    <button
                      key={topic.id}
                      onClick={(e) => handleTopicClick(e, topic.id, weekNumber)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 group ${
                        isSelected
                          ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                          : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-300'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full flex-shrink-0 transition-colors ${
                        isSelected 
                          ? 'bg-emerald-500 dark:bg-emerald-400' 
                          : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-slate-400 dark:group-hover:bg-slate-500'
                      }`} />
                      
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm mb-1 truncate">{topic.title}</div>
                        <div className="flex items-center gap-1 text-xs opacity-60">
                          <Clock size={10} />
                          <span>{topic.timeLearn}</span>
                        </div>
                      </div>

                      {/* Show completion status if available */}
                      {topic.problems && topic.problems.length > 0 && (
                        <div className="flex-shrink-0">
                          <CheckCircle 
                            size={14} 
                            className={`${
                              isSelected 
                                ? 'text-emerald-500 dark:text-emerald-400' 
                                : 'text-slate-300 dark:text-slate-600'
                            }`}
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WeekNavigation;
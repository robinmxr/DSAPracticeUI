import React, { useState, useEffect } from 'react';
import { ChevronDown, Clock, CheckCircle, Sparkles, Code, Target, Zap, Brain, Trophy, Rocket } from 'lucide-react';
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
    <div className="space-y-3">
      {weeks.map((weekNumber) => {
        const week = learningPlan[weekNumber];
        const isActive = activeWeek === weekNumber;
        const isExpanded = expandedWeeks.has(weekNumber) && !isMinimized;
        const WeekIcon = weekIcons[weekNumber] || Code;
        
        return (
          <div key={weekNumber}>
            {/* Week Button - Glassmorphism Style */}
            <button
              onClick={() => handleWeekClick(weekNumber)}
              className={`group w-full flex items-center gap-3 p-4 rounded-2xl text-left transition-all duration-300 backdrop-blur-sm border hover:scale-105 active:scale-95 ${
                isActive 
                  ? 'bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-700 dark:text-blue-300 shadow-lg shadow-blue-500/10' 
                  : 'bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-400 hover:bg-white/80 dark:hover:bg-slate-800/80 hover:border-slate-300/60 dark:hover:border-slate-600/60 hover:text-slate-900 dark:hover:text-white hover:shadow-lg'
              }`}
              title={isMinimized ? `Quest ${weekNumber} - ${week.title}` : undefined}
            >
              {/* Week Icon - Gradient Background */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                isActive 
                  ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-blue-500/25' 
                  : 'bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-600 dark:text-slate-400 group-hover:from-slate-200 group-hover:to-slate-300 dark:group-hover:from-slate-600 dark:group-hover:to-slate-500 shadow-slate-500/10'
              }`}>
                <WeekIcon size={16} className="transition-transform duration-300 group-hover:rotate-12" />
              </div>
              
              {!isMinimized && (
                <>
                  {/* Week Content - Enhanced Typography */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-base">Quest {weekNumber}</span>
                      {isActive && <Sparkles size={14} className="text-blue-500 animate-pulse" />}
                    </div>
                    <p className="text-sm opacity-70 truncate transition-opacity duration-300 group-hover:opacity-90">{week.title}</p>
                  </div>
                  
                  {/* Enhanced Chevron with Background */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-100 dark:bg-blue-900/30' 
                      : 'bg-slate-100 dark:bg-slate-700/50 group-hover:bg-slate-200 dark:group-hover:bg-slate-600/70'
                  }`}>
                    <ChevronDown 
                      size={16} 
                      className={`transition-all duration-300 ${
                        isExpanded ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                      } ${
                        isActive ? 'text-blue-600' : 'text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300'
                      }`}
                    />
                  </div>
                </>
              )}
            </button>

            {/* Topics - Enhanced Dropdown */}
            {!isMinimized && (
              <div className={`overflow-hidden transition-all duration-500 ease-out ${
                isExpanded && week.topics 
                  ? 'max-h-[800px] opacity-100 mt-2' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="ml-6 pl-4 border-l-2 border-gradient-to-b from-slate-200/50 to-transparent dark:from-slate-700/50 space-y-2">
                  {week.topics?.map((topic, index) => {
                    const isSelected = selectedTopicId === topic.id;
                    const isCompleted = completedTopics.has(topic.id);
                    
                    return (
                      <button
                        key={topic.id}
                        onClick={(e) => handleTopicClick(e, topic.id, weekNumber)}
                        className={`group w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-300 backdrop-blur-sm border hover:scale-102 active:scale-98 ${
                          isSelected
                            ? 'bg-gradient-to-r from-emerald-500/10 to-green-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-300 shadow-md shadow-emerald-500/10'
                            : 'bg-white/40 dark:bg-slate-800/40 border-slate-200/30 dark:border-slate-700/30 text-slate-600 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800/60 hover:border-slate-300/50 dark:hover:border-slate-600/50 hover:text-slate-800 dark:hover:text-slate-200'
                        }`}
                        style={{
                          transitionDelay: isExpanded ? `${index * 50}ms` : '0ms'
                        }}
                      >
                        {/* Enhanced Status Indicator */}
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                          isSelected 
                            ? 'bg-gradient-to-br from-emerald-500 to-green-600 shadow-emerald-500/25 scale-110' 
                            : isCompleted
                            ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-green-500/20'
                            : 'bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-500 group-hover:from-slate-400 group-hover:to-slate-500 dark:group-hover:from-slate-500 dark:group-hover:to-slate-400 shadow-slate-500/15'
                        }`}>
                          {isCompleted && (
                            <CheckCircle size={10} className="text-white" />
                          )}
                        </div>
                        
                        {/* Topic Content - Enhanced */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-sm truncate">{topic.title}</span>
                            {isCompleted && (
                              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse flex-shrink-0"></div>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs opacity-60 transition-opacity duration-300 group-hover:opacity-80">
                            <Clock size={10} className="flex-shrink-0" />
                            <span>{topic.timeLearn}</span>
                          </div>
                        </div>

                        {/* Subtle Hover Indicator */}
                        <div className={`w-1 h-6 rounded-full transition-all duration-300 ${
                          isSelected
                            ? 'bg-emerald-500'
                            : 'bg-slate-300 dark:bg-slate-600 opacity-0 group-hover:opacity-100 group-hover:bg-slate-500'
                        }`}></div>
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
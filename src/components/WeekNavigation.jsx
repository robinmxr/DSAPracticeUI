import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, BookOpen, ChevronDown, ChevronRight } from 'lucide-react';

const WeekNavigation = ({
  learningPlan,
  activeWeek,
  setActiveWeek,
  selectedTopicId,
  setSelectedTopicId,
}) => {
  const [expandedWeeks, setExpandedWeeks] = useState([String(activeWeek)]);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleWeek = (week) => {
    setExpandedWeeks((prev) =>
      prev.includes(week)
        ? prev.filter((w) => w !== week)
        : [...prev, week]
    );
  };

  return (
    <div className="week-nav">
      <div className="week-nav-header">
        <Calendar className="text-purple-400" size={18} />
        <span className="font-semibold text-gray-200 text-base">Lesson Plan</span>
      </div>
      <div className="week-nav-weeks">
        {Object.entries(learningPlan).map(([week, weekData]) => {
          const isExpanded = expandedWeeks.includes(week);
          return (
            <React.Fragment key={week}>
              <div className="week-nav-week-row">
                <button
                  type="button"
                  onClick={() => {
                    setActiveWeek(parseInt(week));
                    setSelectedTopicId(null);
                    if (location.pathname.startsWith('/problem')) {
                      navigate('/');
                    }
                  }}
                  className={`week-nav-week-btn flex items-center justify-between${
                    activeWeek === parseInt(week) ? ' active' : ''
                  }`}
                  aria-expanded={isExpanded}
                  aria-label={`Week ${week} ${
                    isExpanded ? 'collapse' : 'expand'
                  }`}
                >
                  <span>Week {week}</span>
                  <span
                    className="week-nav-chevron-btn"
                    tabIndex={-1}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWeek(week);
                    }}
                  >
                    {isExpanded ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </span>
                </button>
              </div>
              {isExpanded && weekData.topics && (
                <div className="week-nav-topics">
                  {weekData.topics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => {
                        setActiveWeek(parseInt(week));
                        setSelectedTopicId(topic.id);
                        if (location.pathname.startsWith('/problem')) {
                          navigate('/');
                        }
                      }}
                      className={`week-nav-topic-btn${
                        selectedTopicId === topic.id ? ' active' : ''
                      }`}
                    >
                      <BookOpen size={14} className="text-blue-400" />
                      {topic.title}
                    </button>
                  ))}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default WeekNavigation;
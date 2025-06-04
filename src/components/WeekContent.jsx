import React from 'react';
import { BookOpen, Code, CheckCircle } from 'lucide-react';
import TopicCard from './TopicCard';
import { useState } from 'react';



const WeekContent = ({
  week,
  learningPlan,
  completedTopics,
  toggleComplete,
  setSelectedProblem,
  practiceProblems,
  completedProblems,           
  toggleProblemComplete, 
  selectedTopicId,
}) => {

  const weekData = learningPlan[week];
  let topics = weekData.topics || [];
    if (selectedTopicId) {
    topics = topics.filter(topic => topic.id === selectedTopicId);
  }
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Week {week}: {weekData.title}
        </h2>
        <div className="text-sm text-gray-600">{weekData.focus}</div>
      </div>
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          completedTopics={completedTopics}
          toggleComplete={toggleComplete}
          setSelectedProblem={setSelectedProblem}
          practiceProblems={practiceProblems}
          completedProblems={completedProblems}
          toggleProblemComplete={toggleProblemComplete}
        />
      ))}
    </div>
  );
};

export default WeekContent;
import React from 'react';
import TopicCard from './TopicCard';

const WeekContent = ({
  week,
  learningPlan,
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

  // Collect all problem names from this week's topics
  const topicProblemNames = new Set(
    topics.flatMap(topic => (topic.problems || []).map(p => p.name))
  );

  // Show only practice problems not already in topics
  const extraPracticeProblems = Object.values(practiceProblems).filter(
    (problem) => !topicProblemNames.has(problem.name)
  );

  // Helper: check if all problems in a topic are completed
  const isTopicCompleted = (topic) =>
    topic.problems &&
    topic.problems.length > 0 &&
    topic.problems.every(p => completedProblems.has(p.name));

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
          isCompleted={isTopicCompleted(topic)}
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
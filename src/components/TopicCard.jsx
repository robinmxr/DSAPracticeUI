import React from 'react';
import { BookOpen, Code, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopicCard = ({
  topic,
  completedTopics,
  toggleComplete,
  setSelectedProblem,
  practiceProblems,
  completedProblems,
  toggleProblemComplete = () => {},
}) => (
  <div className="border border-gray-200 rounded-lg p-4 mb-4">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <button
          onClick={() => toggleComplete(topic.id)}
          className={`w-6 h-6 rounded-full flex items-center justify-center ${
            completedTopics.has(topic.id)
              ? 'bg-green-500 text-white'
              : 'border-2 border-gray-300'
          }`}
        >
          {completedTopics.has(topic.id) && <CheckCircle size={16} />}
        </button>
        <h3 className="text-lg font-medium text-gray-800">{topic.title}</h3>
      </div>
      <div className="flex gap-4 text-sm text-gray-600">
        <span className="flex items-center gap-1">
          <BookOpen size={14} /> Learn: {topic.timeLearn}
        </span>
        <span className="flex items-center gap-1">
          <Code size={14} /> Practice: {topic.timePractice}
        </span>
      </div>
    </div>
    <div className="mb-3">
      <h4 className="font-medium text-gray-700 mb-2">Key Concepts:</h4>
      <div className="flex flex-wrap gap-2">
        {topic.concepts.map((concept, idx) => (
          <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
            {concept}
          </span>
        ))}
      </div>
    </div>
    <div>
      <h4 className="font-medium text-gray-700 mb-2">Practice Problems:</h4>
      <div className="grid gap-2">
        {topic.problems.map((problem, idx) => (
          <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleProblemComplete(problem.name)}
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  completedProblems.has(problem.name)
                    ? 'bg-green-500 text-white'
                    : 'border-2 border-gray-300'
                }`}
                aria-label={`Mark ${problem.name} as complete`}
              >
                {completedProblems.has(problem.name) && <CheckCircle size={14} />}
              </button>
              <Link
  to={`/problem/${problem.name}`}
  className="problem-link"
>
              <span className="font-medium text-gray-800">{problem.name}</span>
              <span className={`px-2 py-2 rounded text-sm ${
                problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {problem.difficulty}
              </span>
              <span className="text-sm text-gray-600">{problem.pattern}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TopicCard;
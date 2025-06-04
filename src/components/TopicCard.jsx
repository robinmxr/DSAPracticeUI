import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const difficultyColors = {
  Easy: 'bg-green-700 text-green-100',
  Medium: 'bg-yellow-600 text-yellow-100',
  Hard: 'bg-red-700 text-red-100',
};

const TopicCard = ({
  topic,
  isCompleted,
  setSelectedProblem, // not used anymore
  practiceProblems,
  completedProblems,
}) => (
  <div
    className={`mb-6 p-4 rounded-lg border shadow-sm ${
      isCompleted
        ? 'bg-green-900/10 border-green-700'
        : 'bg-[#18181b] border-gray-700'
    }`}
  >
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-lg font-semibold text-gray-100 flex items-center">
        {topic.title}
        {isCompleted && (
          <span className="ml-3 flex items-center text-green-400 text-base font-bold">
            <CheckCircle size={18} className="mr-1" /> Completed
          </span>
        )}
      </h3>
    </div>
    <ul className="mt-2 space-y-3">
      {topic.problems.map((problem) => {
        const isDone = completedProblems.has(problem.name);
        const difficulty =
          (practiceProblems[problem.name] && practiceProblems[problem.name].difficulty) ||
          problem.difficulty ||
          'Medium';
        return (
          <li
            key={problem.name}
            className={`flex items-center gap-4 px-4 py-4 rounded-xl transition ${
              isDone
                ? 'bg-green-900/30 border border-green-700'
                : 'bg-[#23232b] border border-transparent hover:border-blue-700'
            }`}
          >
             <span
              className={`inline-flex items-center justify-center w-6 h-6 rounded-full border-2 transition
                ${isDone ? 'border-green-500 bg-green-500' : 'border-gray-500 bg-[#18181b]'}
              `}
            >
              {isDone && <CheckCircle size={16} className="text-white" />}
            </span>
            <Link
              to={`/problem/${encodeURIComponent(problem.name)}`}
              className={`flex-1 font-medium text-base bg-transparent border-0 p-0 m-0 hover:underline transition ${
                isDone ? 'text-green-300' : 'text-gray-100'
              }`}
            >
              {problem.name}
            </Link>
            <span
              className={`ml-2 px-2 py-0.5 rounded text-xs font-semibold ${difficultyColors[difficulty] || difficultyColors['Medium']}`}
            >
              {difficulty}
            </span>
            {isDone && (
              <span className="text-green-400 text-lg ml-1">
                <CheckCircle size={18} />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

export default TopicCard;
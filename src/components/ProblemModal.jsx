import React from 'react';

const ProblemModal = ({
  selectedProblem,
  setSelectedProblem,
  practiceProblems,
  completedProblems = new Set(),
  toggleProblemComplete = () => {},
}) => {
  if (!selectedProblem || !practiceProblems[selectedProblem]) return null;
  const { problem, hint, approach } = practiceProblems[selectedProblem];
  const isCompleted = completedProblems.has(selectedProblem);

  const handleToggleAndClose = () => {
    toggleProblemComplete(selectedProblem);
    setSelectedProblem(null);
  };

  return (
    <div className="problem-modal-overlay">
      <div className="problem-modal-box">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-100">{selectedProblem}</h3>
          <button
            onClick={() => setSelectedProblem(null)}
            className="text-gray-400 hover:text-gray-200 text-2xl"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="mb-4">
          <h4 className="font-medium mb-2 text-gray-200">Problem:</h4>
          <pre className="bg-[#18181b] p-3 rounded text-sm text-gray-100 whitespace-pre-wrap border border-gray-700">
            {problem}
          </pre>
        </div>
        <div className="mb-4">
          <h4 className="font-medium mb-2 text-gray-200">Hint:</h4>
          <p className="text-yellow-200 bg-[#3b2f13] p-3 rounded border border-yellow-900">
            💡 {hint}
          </p>
        </div>
        <div className="mb-4">
          <h4 className="font-medium mb-2 text-gray-200">Approach:</h4>
          <p className="text-blue-200 bg-[#172554] p-3 rounded border border-blue-900">
            🎯 {approach}
          </p>
        </div>
        <div className="bg-[#19321a] p-4 rounded-lg border border-green-900">
          <p className="text-sm text-green-200">
            <strong>💪 Practice Tips:</strong>
          </p>
          <ul className="text-sm text-green-300 mt-2 space-y-1">
            <li>• Start by understanding the problem thoroughly</li>
            <li>• Think through edge cases before coding</li>
            <li>• Code your solution without looking up answers</li>
            <li>• Test with multiple examples</li>
            <li>• Analyze time and space complexity</li>
          </ul>
        </div>
        <div className="flex items-center gap-3 m-4">
          <button
            onClick={handleToggleAndClose}
            className={`px-3 py-1 rounded font-semibold transition-colors duration-150 ${
              isCompleted
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-700 text-gray-100 hover:bg-gray-600'
            }`}
          >
            {isCompleted ? '✓ Completed' : 'Mark as Completed'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemModal;
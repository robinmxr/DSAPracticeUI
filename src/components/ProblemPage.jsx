import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Target } from 'lucide-react';
import WeekNavigation from './WeekNavigation';
import { learningPlan, conceptsInfo } from '../data/planData';
import ConceptModal from './ConceptModal';
import DSALayout from './DSALayout';

const ProblemPage = ({
  practiceProblems,
  completedProblems = new Set(),
  toggleProblemComplete = () => {},
  activeWeek,
  setActiveWeek,
  selectedTopicId,
  setSelectedTopicId,
  learningPlan, // <-- pass this prop from App.js
}) => {
  const { problemId } = useParams();
  const navigate = useNavigate();
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [showApproach, setShowApproach] = useState(false);

  // Find the topic and week for this problem
  useEffect(() => {
    let found = false;
    for (const [weekNum, weekData] of Object.entries(learningPlan)) {
      for (const topic of weekData.topics) {
        if (topic.problems.some((p) => p.name === problemId)) {
          setActiveWeek(Number(weekNum));
          setSelectedTopicId(topic.id);
          found = true;
          break;
        }
      }
      if (found) break;
    }
  }, [problemId, learningPlan, setActiveWeek, setSelectedTopicId]);

  const problemData = practiceProblems[problemId];
  if (!problemData)
    return <div className="p-8 text-red-400">Problem not found.</div>;

  const { problem, hint, approach, concepts, pattern } = problemData;
  const isCompleted = completedProblems.has(problemId);

  const handleToggleAndBack = () => {
    toggleProblemComplete(problemId);
    navigate(-1);
  };

  return (
    <DSALayout
      activeWeek={activeWeek}
      setActiveWeek={setActiveWeek}
      selectedTopicId={selectedTopicId}
      setSelectedTopicId={setSelectedTopicId}
    >
      <div className="mx-auto my-10 bg-[#23232b] rounded-lg p-6 border border-gray-700 shadow-lg relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-100">{problemId}</h3>
          <button
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-gray-200 text-2xl"
            aria-label="Back"
          >
            ←
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
        <div className="my-6">
          <h4 className="font-medium mb-2 text-gray-200">Concepts:</h4>
          <div className="flex flex-wrap gap-3 mt-2">
            {concepts.map((concept, idx) => (
              <button
                key={idx}
                className="bg-blue-900 text-blue-200 text-sm font-semibold px-4 py-2 rounded-lg border border-blue-700 hover:bg-blue-800 transition shadow-sm"
                onClick={() => setSelectedConcept(concept)}
                type="button"
              >
                {concept}
              </button>
            ))}
          </div>
          {pattern && (
            <button
              className="problem-tag bg-blue-900 text-blue-200 text-sm font-semibold px-4 py-2 rounded-lg border border-blue-700 hover:bg-blue-800 transition shadow-sm mt-2"
              onClick={() => setSelectedConcept(pattern)}
              type="button"
            >
              {pattern}
            </button>
          )}
        </div>
        <div className="mb-4 relative">
          <h4 className="font-medium mb-2 text-gray-200 flex items-center gap-2">
            Approach:
          </h4>
          <div className="relative">
            <p
              className={`text-blue-200 bg-[#172554] p-3 rounded border border-blue-900 transition-all ${
                showApproach
                  ? 'backdrop-blur-0'
                  : 'backdrop-blur-sm pointer-events-none select-none'
              }`}
              style={{
                filter: showApproach ? 'none' : 'blur(6px)',
                transition: 'filter 0.3s',
                position: 'relative',
                zIndex: 10,
              }}
            >
              🎯 {approach}
            </p>
            {!showApproach && (
              <div
                className="absolute inset-0 flex items-center justify-center z-20"
                style={{
                  background: 'rgba(23,37,84,0.55)',
                  borderRadius: '0.5rem',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <button
                  onClick={() => setShowApproach(true)}
                  className="px-4 py-2 rounded bg-blue-800 text-blue-100 font-semibold border border-blue-700 shadow hover:bg-blue-700 transition"
                  type="button"
                >
                  Reveal Approach (Only reveal if you can't solve it)
                </button>
              </div>
            )}
          </div>
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
        <div className="flex justify-end mt-8">
          <button
            onClick={handleToggleAndBack}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold shadow-sm border transition-colors duration-150
              ${isCompleted
                ? 'bg-green-600 border-green-700 text-white hover:bg-green-700'
                : 'bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700'}
            `}
          >
            {isCompleted ? (
              <>
                <span className="inline-block w-2 h-2 rounded-full bg-white" />
                Completed
              </>
            ) : (
              'Mark as Completed'
            )}
          </button>
        </div>
        {/* Concepts Section */}
        
      </div>
      {selectedConcept && (
        <ConceptModal
          concept={selectedConcept}
          description={conceptsInfo[selectedConcept]?.description}
          onClose={() => setSelectedConcept(null)}
        />
      )}
    </DSALayout>
  );
};

export default ProblemPage;
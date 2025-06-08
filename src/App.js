import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DSAMasteryPlan from './DSAMasteryPlan';
import ProblemPage from './components/ProblemPage';
import { learningPlan, practiceProblems } from './data/planData';

const LOCAL_STORAGE_KEY = 'completedProblems';

const App = () => {
  const [activeWeek, setActiveWeek] = useState(1);
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  // Load from localStorage on first render
  const [completedProblems, setCompletedProblems] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  // Save to localStorage whenever completedProblems changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Array.from(completedProblems)));
  }, [completedProblems]);

  const toggleProblemComplete = (problemName) => {
    setCompletedProblems(prev => {
      const next = new Set(prev);
      if (next.has(problemName)) {
        next.delete(problemName);
      } else {
        next.add(problemName);
      }
      return next;
    });
  };

  const resetProgress = () => {
    setCompletedProblems(new Set());
    // Optionally, you might want to reset other state as well
    setActiveWeek(1);
    setSelectedTopicId(null);
    
    // Clear from localStorage
    localStorage.removeItem('completedProblems');
    localStorage.removeItem('activeWeek');
    localStorage.removeItem('selectedTopicId');
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#0f1117]">
        <Routes>
          <Route
            path="/"
            element={
              <DSAMasteryPlan
                activeWeek={activeWeek}
                setActiveWeek={setActiveWeek}
                selectedTopicId={selectedTopicId}
                setSelectedTopicId={setSelectedTopicId}
                completedProblems={completedProblems}
                toggleProblemComplete={toggleProblemComplete}
                resetProgress={resetProgress}
              />
            }
          />
          <Route
            path="/problem/:problemId"
            element={
              <ProblemPage
                practiceProblems={practiceProblems}
                completedProblems={completedProblems}
                toggleProblemComplete={toggleProblemComplete}
                activeWeek={activeWeek}
                setActiveWeek={setActiveWeek}
                selectedTopicId={selectedTopicId}
                setSelectedTopicId={setSelectedTopicId}
                learningPlan={learningPlan}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

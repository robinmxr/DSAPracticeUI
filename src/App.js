import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DSAMasteryPlan from './DSAMasteryPlan';
import ProblemPage from './components/ProblemPage';

const App = () => {
  const [activeWeek, setActiveWeek] = useState(1);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [completedProblems, setCompletedProblems] = useState(() => {
    const saved = localStorage.getItem('completedProblems');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('completedProblems', JSON.stringify([...completedProblems]));
  }, [completedProblems]);

  const toggleProblemComplete = (problemName) => {
    setCompletedProblems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(problemName)) {
        newSet.delete(problemName);
      } else {
        newSet.add(problemName);
      }
      return newSet;
    });
  };

  const resetProgress = () => {
    setCompletedProblems(new Set());
    localStorage.removeItem('completedProblems');
  };

  return (
    <Router>
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
          path="/problem/:problemName" 
          element={
            <ProblemPage
              activeWeek={activeWeek}
              setActiveWeek={setActiveWeek}
              selectedTopicId={selectedTopicId}
              setSelectedTopicId={setSelectedTopicId}
              completedProblems={completedProblems}
              toggleProblemComplete={toggleProblemComplete}
            />
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;

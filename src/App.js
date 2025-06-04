import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DSAMasteryPlan from './DSAMasteryPlan';
import ProblemPage from './components/ProblemPage';
import { learningPlan, practiceProblems } from './data/planData';

const App = () => {
  const [activeWeek, setActiveWeek] = useState(1);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [completedProblems, setCompletedProblems] = useState(new Set());

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
    </Router>
  );
};

export default App;

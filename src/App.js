import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DSAMasteryPlan from './DSAMasteryPlan';
import ProblemPage from './components/ProblemPage';
import ConceptPage from './components/ConceptPage';

const App = () => {
  const [activeWeek, setActiveWeek] = useState(1);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(() => {
    const saved = localStorage.getItem('sidebarMinimized');
    return saved ? JSON.parse(saved) : false;
  });
  const [completedProblems, setCompletedProblems] = useState(() => {
    const saved = localStorage.getItem('completedProblems');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('completedProblems', JSON.stringify([...completedProblems]));
  }, [completedProblems]);

  useEffect(() => {
    localStorage.setItem('sidebarMinimized', JSON.stringify(isSidebarMinimized));
  }, [isSidebarMinimized]);

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

  const toggleSidebarMinimized = () => {
    setIsSidebarMinimized(prev => !prev);
  };

  const resetProgress = () => {
    setCompletedProblems(new Set());
    setSelectedTopicId(null);
    setActiveWeek(1);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <DSAMasteryPlan
            activeWeek={activeWeek}
            setActiveWeek={setActiveWeek}
            selectedTopicId={selectedTopicId}
            setSelectedTopicId={setSelectedTopicId}
            completedProblems={completedProblems}
            toggleProblemComplete={toggleProblemComplete}
            resetProgress={resetProgress}
            isSidebarMinimized={isSidebarMinimized}
            toggleSidebarMinimized={toggleSidebarMinimized}
          />
        } />
        <Route path="/problem/:problemName" element={
          <ProblemPage
            completedProblems={completedProblems}
            toggleProblemComplete={toggleProblemComplete}
            activeWeek={activeWeek}
            setActiveWeek={setActiveWeek}
            selectedTopicId={selectedTopicId}  
            setSelectedTopicId={setSelectedTopicId}
          />
        } />
        <Route 
          path="/concept/:conceptName" 
          element={
            <ConceptPage 
              activeWeek={activeWeek}
              setActiveWeek={setActiveWeek}
              selectedTopicId={selectedTopicId}
              setSelectedTopicId={setSelectedTopicId}
            />
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;

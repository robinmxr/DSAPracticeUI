import React from 'react';
import { Target } from 'lucide-react';
import WeekNavigation from './WeekNavigation';
import { learningPlan } from '../data/planData';

const DSALayout = ({
  activeWeek,
  setActiveWeek,
  selectedTopicId,
  setSelectedTopicId,
  children,
}) => (
  <div className="dsa-layout">
    {/* Sidebar */}
    <aside className="dsa-sidebar sticky top-0 left-0 w-64 h-screen bg-gray-900 text-gray-200 p-6">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Target className="text-blue-400" size={28} />
          <span className="text-lg font-bold text-gray-100">DSA Roadmap</span>
        </div>
      </div>
      <WeekNavigation
        learningPlan={learningPlan}
        activeWeek={activeWeek}
        setActiveWeek={setActiveWeek}
        selectedTopicId={selectedTopicId}
        setSelectedTopicId={setSelectedTopicId}
        className="week-nav"
      />
    </aside>
    {/* Main content */}
    <main className="dsa-content">{children}</main>
  </div>
);

export default DSALayout;
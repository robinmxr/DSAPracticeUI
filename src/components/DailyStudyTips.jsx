import React from 'react';
import { Zap } from 'lucide-react';

const DailyStudyTips = () => (
  <div className="bg-[#23232b] rounded-lg shadow-lg p-6">
    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-yellow-400">
      <Zap className="text-yellow-400" size={20} />
      Daily Study Strategy
    </h2>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-[#1e293b] p-4 rounded-lg">
        <h3 className="font-medium text-blue-300 mb-2">Learning Phase (30-45 min)</h3>
        <ul className="text-sm text-blue-200 space-y-1">
          <li>• Watch concept videos (YouTube/Neetcode)</li>
          <li>• Read about patterns and techniques</li>
          <li>• Understand time/space complexity</li>
          <li>• Draw out examples by hand</li>
        </ul>
      </div>
      <div className="bg-[#19321a] p-4 rounded-lg">
        <h3 className="font-medium text-green-300 mb-2">Practice Phase (45-75 min)</h3>
        <ul className="text-sm text-green-200 space-y-1">
          <li>• Code problems from scratch</li>
          <li>• Time yourself (20-30min per problem)</li>
          <li>• Review multiple solutions</li>
          <li>• Practice explaining your approach</li>
        </ul>
      </div>
    </div>
    <div className="mt-4 p-4 bg-[#3b2f13] rounded-lg">
      <p className="text-sm text-yellow-200">
        <strong>💡 Pro Tip:</strong> After week 3, spend 20 minutes daily reviewing previous week's problems to maintain retention.
      </p>
    </div>
  </div>
);

export default DailyStudyTips;
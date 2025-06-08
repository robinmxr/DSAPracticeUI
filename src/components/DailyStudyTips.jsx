import React from 'react';
import { Zap, BookOpen, Code, Target, AlertCircle, ExternalLink } from 'lucide-react';

const DailyStudyTips = () => (
  <div className="space-y-8">
    {/* Daily Study Strategy */}
    <div className="relative overflow-hidden bg-slate-900/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 dark:border-slate-600/50 shadow-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Zap className="text-white" size={24} />
          </div>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Daily Study Strategy
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Learning Phase */}
          <div className="bg-slate-800/60 dark:bg-slate-700/60 backdrop-blur-md rounded-2xl p-6 border border-slate-600/50 dark:border-slate-500/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <BookOpen className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Learning Phase
              </h3>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold border border-blue-500/30">
                30-45 min
              </span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-200 dark:text-slate-300 font-medium">Watch concept videos (YouTube/Neetcode)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-200 dark:text-slate-300 font-medium">Read about patterns and techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-200 dark:text-slate-300 font-medium">Understand time/space complexity</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-200 dark:text-slate-300 font-medium">Draw out examples by hand</span>
              </li>
            </ul>
          </div>

          {/* Practice Phase */}
          <div className="bg-slate-800/60 dark:bg-slate-700/60 backdrop-blur-md rounded-2xl p-6 border border-slate-600/50 dark:border-slate-500/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                <Code className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Practice Phase
              </h3>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold border border-emerald-500/30">
                45-75 min
              </span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-200 dark:text-slate-300 font-medium">Code problems from scratch on LeetCode</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-200 dark:text-slate-300 font-medium">Time yourself (20-30min per problem)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-200 dark:text-slate-300 font-medium">Review multiple solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-200 dark:text-slate-300 font-medium">Practice explaining your approach</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pro Tip */}
        <div className="mt-8 bg-slate-800/40 dark:bg-slate-700/40 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30 dark:border-purple-400/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Target className="text-white" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                💡 Pro Tip
              </h4>
              <p className="text-slate-200 dark:text-slate-300 font-medium leading-relaxed">
                After week 3, spend 20 minutes daily reviewing previous week's problems to maintain retention and build long-term memory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Platform Disclaimer */}
    <div className="relative overflow-hidden bg-slate-900/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 dark:border-slate-600/50 shadow-xl">
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400/15 to-indigo-400/15 rounded-full blur-2xl"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
            <AlertCircle className="text-white" size={24} />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Platform Disclaimer
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/60 dark:bg-slate-700/60 backdrop-blur-md rounded-2xl p-6 border border-slate-600/50 dark:border-slate-500/50">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ExternalLink size={20} className="text-blue-400" />
              This is NOT a Coding Platform
            </h3>
            <p className="text-slate-200 dark:text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">DSA Mastery</strong> is a <span className="text-blue-400 font-semibold">progress tracking and learning management platform</span>. 
              All coding problems are sourced from <strong className="text-white">LeetCode</strong> and should be solved there.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-300 dark:text-slate-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Click on any problem to be redirected to LeetCode</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 dark:bg-slate-700/50 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30 dark:border-emerald-400/30">
              <h4 className="text-lg font-bold text-emerald-400 dark:text-emerald-300 mb-3">
                What This Platform Offers:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></div>
                  <span className="text-slate-200 dark:text-slate-300 text-sm">Structured 12-week learning curriculum</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></div>
                  <span className="text-slate-200 dark:text-slate-300 text-sm">Progress tracking and completion status</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></div>
                  <span className="text-slate-200 dark:text-slate-300 text-sm">Curated problem sets by difficulty & pattern</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></div>
                  <span className="text-slate-200 dark:text-slate-300 text-sm">Study tips and learning strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 dark:bg-slate-700/50 backdrop-blur-md rounded-2xl p-6 border border-orange-500/30 dark:border-orange-400/30">
              <h4 className="text-lg font-bold text-orange-400 dark:text-orange-300 mb-3">
                For Actual Coding:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                  <span className="text-slate-200 dark:text-slate-300 text-sm">Solve problems on LeetCode platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                  <span className="text-slate-200 dark:text-slate-300 text-sm">Use LeetCode's built-in IDE and testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                  <span className="text-slate-200 dark:text-slate-300 text-sm">Access detailed solutions and discussions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                  <span className="text-slate-200 dark:text-slate-300 text-sm">Submit and get instant feedback</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/40 dark:bg-slate-700/40 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30 dark:border-purple-400/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Target className="text-white" size={16} />
              </div>
              <h4 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Mission
              </h4>
            </div>
            <p className="text-slate-200 dark:text-slate-300 leading-relaxed">
              To make your interview preparation journey more organized, focused, and efficient by providing 
              a clear roadmap and progress tracking system alongside LeetCode's excellent coding environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DailyStudyTips;
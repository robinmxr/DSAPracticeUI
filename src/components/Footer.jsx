import React from 'react';
import { User, Mail, Globe, Sparkles, Linkedin, Github, Trophy } from 'lucide-react';

const Footer = ({ totalTopics = 36, totalProblems = 90, isSidebarMinimized = false }) => (
  <footer className={`relative overflow-hidden border-t border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-br from-white/80 via-slate-50/80 to-blue-50/80 dark:from-slate-900/80 dark:via-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm ${isSidebarMinimized ? (isSidebarMinimized ? 'lg:pl-20' : 'lg:pl-80') : ''}`}> 
    {/* Background decoration */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-emerald-500/10"></div>
    <div className="relative z-10 max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
          {/* Creator Section - Mobile optimized */}
          <div className="flex flex-col items-start space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                <User size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Reajul Islam Robin</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">Software Engineer</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              A fellow learner passionate about building tools that make coding easier
            </p>
          </div>
          {/* Algomist Info - Mobile simplified */}
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles size={14} className="text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Algomist</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              6-week algorithmic adventure to conquer technical interviews with strategic mastery.
            </p>
            {/* Mobile-hidden tags */}
            <div className="hidden sm:flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                6 Quests
              </span>
              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full">
                {totalTopics} Topics
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full">
                {totalProblems} Problems
              </span>
            </div>
          </div>
          {/* Contact & Links - Mobile optimized */}
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                <Mail size={10} className="text-white" />
              </div>
              Connect
            </h4>
            {/* Mobile-optimized Social Links Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <a 
                href="mailto:reajulbd786@gmail.com" 
                className="flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 rounded-lg sm:rounded-xl border border-slate-200/50 dark:border-slate-600/50 hover:shadow-sm group hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20 min-h-[44px] touch-manipulation"
                title="Send Email"
              >
                <Mail size={16} className="group-hover:text-blue-500 transition-colors" />
                <span className="text-xs sm:text-sm font-medium">Email</span>
              </a>
              <a
                href="https://robinislam.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 rounded-lg sm:rounded-xl border border-slate-200/50 dark:border-slate-600/50 hover:shadow-sm group hover:scale-105 hover:bg-purple-50 dark:hover:bg-purple-900/20 min-h-[44px] touch-manipulation"
                title="Visit Portfolio"
              >
                <Globe size={16} className="group-hover:text-purple-500 transition-colors" />
                <span className="text-xs sm:text-sm font-medium">Portfolio</span>
              </a>
              <a
                href="https://linkedin.com/in/robin-mxr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 rounded-lg sm:rounded-xl border border-slate-200/50 dark:border-slate-600/50 hover:shadow-sm group hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20 min-h-[44px] touch-manipulation"
                title="LinkedIn Profile"
              >
                <Linkedin size={16} className="group-hover:text-blue-600 transition-colors" />
                <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/robinmxr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 bg-white/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 rounded-lg sm:rounded-xl border border-slate-200/50 dark:border-slate-600/50 hover:shadow-sm group hover:scale-105 hover:bg-slate-50 dark:hover:bg-slate-800 min-h-[44px] touch-manipulation"
                title="GitHub Profile"
              >
                <Github size={16} className="group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors" />
                <span className="text-xs sm:text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        {/* Mobile-optimized Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles size={12} className="text-white" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">Algomist</span>
              </div>
              <div className="h-3 sm:h-4 w-px bg-slate-300 dark:bg-slate-600"></div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                © 2025
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Trophy size={12} className="text-amber-500" />
              <span className="hidden sm:inline">Master the Code • Conquer the Quest</span>
              <span className="sm:hidden">Master • Conquer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
);

export default Footer;

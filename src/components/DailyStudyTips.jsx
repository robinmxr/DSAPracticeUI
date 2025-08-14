import React from 'react';
import { Zap, BookOpen, Code, Target, AlertCircle, ExternalLink } from 'lucide-react';

const DailyStudyTips = () => (
  <div className="space-y-6 sm:space-y-8">
    {/* Hero Header with Floating Elements */}
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/3 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/2 w-40 h-40 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Daily Study Strategy */}
        <div className="bg-gradient-to-br from-amber-500/8 via-amber-500/4 to-transparent backdrop-blur-sm border border-amber-500/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg rotate-3">
                <Target className="text-white" size={18} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-white via-amber-100 to-orange-100 bg-clip-text text-transparent">
                  Algomist Study Guide
                </h2>
                <p className="text-amber-300 font-medium text-sm sm:text-base">Daily mastery in 6 weeks</p>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Left Column - Learning & Practice */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                {/* Learning Phase */}
                <div className="bg-gradient-to-br from-blue-500/8 via-blue-500/4 to-transparent backdrop-blur-sm border border-blue-500/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center -rotate-3">
                        <BookOpen className="text-blue-400" size={18} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                          Learn
                        </h3>
                        <p className="text-blue-300 mt-1 text-sm sm:text-base">Build foundation</p>
                      </div>
                      <div className="ml-auto px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-500/10 text-blue-300 rounded-full text-xs sm:text-sm font-semibold border border-blue-500/20">
                        30-45 min
                      </div>
                    </div>
                    
                    <div className="bg-blue-500/8 border border-blue-500/15 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3 group">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">Watch concept videos</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">Study patterns & techniques</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">Analyze time complexity</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">Sketch examples</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Practice Phase */}
                <div className="bg-gradient-to-br from-emerald-500/8 via-emerald-500/4 to-transparent backdrop-blur-sm border border-emerald-500/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                  <div className="absolute top-1/2 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-36"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center rotate-6">
                        <Code className="text-emerald-400" size={18} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                          Code
                        </h3>
                        <p className="text-emerald-300 mt-1 text-sm sm:text-base">Apply knowledge</p>
                      </div>
                      <div className="ml-auto px-2 sm:px-3 py-1 sm:py-1.5 bg-emerald-500/10 text-emerald-300 rounded-full text-xs sm:text-sm font-semibold border border-emerald-500/20">
                        45-75 min
                      </div>
                    </div>
                    
                    <div className="bg-emerald-500/8 border border-emerald-500/15 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3 group">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">Solve on LeetCode</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">Time each problem</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">Compare multiple solutions</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">Explain your approach</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Success Tips */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-purple-500/8 via-purple-500/4 to-transparent backdrop-blur-sm border border-purple-500/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 sticky top-32 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center -rotate-12">
                        <Zap className="text-purple-400" size={16} />
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-white">Pro Tips</h2>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3 sm:mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          Retention
                        </h3>
                        <div className="bg-purple-500/8 border border-purple-500/15 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                          <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                            💡 After week 3, spend 15 minutes daily reviewing previous problems to maintain retention.
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3 sm:mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          Essentials
                        </h3>
                        <ul className="space-y-2 sm:space-y-3 text-gray-300">
                          <li className="flex items-start gap-3 group">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                            <span className="group-hover:text-white transition-colors duration-200 text-sm">Daily consistency</span>
                          </li>
                          <li className="flex items-start gap-3 group">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                            <span className="group-hover:text-white transition-colors duration-200 text-sm">Deep understanding</span>
                          </li>
                          <li className="flex items-start gap-3 group">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                            <span className="group-hover:text-white transition-colors duration-200 text-sm">Verbal explanations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Platform Disclaimer */}
    <div className="bg-gradient-to-br from-blue-500/8 via-blue-500/4 to-transparent backdrop-blur-sm border border-blue-500/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-32 -translate-x-32"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg -rotate-3">
            <AlertCircle className="text-white" size={18} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Platform Guide
            </h2>
            <p className="text-blue-300 font-medium text-sm sm:text-base">How Algomist works</p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gradient-to-br from-red-500/8 via-red-500/4 to-transparent backdrop-blur-sm border border-red-500/15 rounded-xl sm:rounded-2xl p-4 sm:p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/5 rounded-full blur-2xl -translate-y-20 translate-x-20"></div>
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                <ExternalLink size={18} className="text-blue-400" />
                Track Progress, Code Elsewhere
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                <strong className="text-white">Algomist</strong> is your <span className="text-blue-400 font-semibold">progress companion</span>. 
                All coding happens on <strong className="text-white">LeetCode</strong> - click any problem to jump there instantly. 
              </p>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>One click → LeetCode problem page</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-emerald-500/8 via-emerald-500/4 to-transparent backdrop-blur-sm border border-emerald-500/15 rounded-xl sm:rounded-2xl p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl translate-y-16 -translate-x-16"></div>
              <div className="relative z-10">
                <h4 className="text-lg sm:text-xl font-bold text-emerald-300 mb-3 sm:mb-4">
                  What We Provide:
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-xs sm:text-sm">6-week structured curriculum</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-xs sm:text-sm">Progress tracking</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-xs sm:text-sm">Curated problem sets</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-xs sm:text-sm">Study strategies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/8 via-orange-500/4 to-transparent backdrop-blur-sm border border-orange-500/15 rounded-xl sm:rounded-2xl p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <h4 className="text-lg sm:text-xl font-bold text-orange-300 mb-3 sm:mb-4">
                  LeetCode Handles:
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-xs sm:text-sm">Code editor & testing</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-xs sm:text-sm">Solution submissions</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-xs sm:text-sm">Detailed explanations</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-xs sm:text-sm">Instant feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/8 via-purple-500/4 to-transparent backdrop-blur-sm border border-purple-500/15 rounded-xl sm:rounded-2xl p-4 sm:p-6 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center rotate-12">
                  <Target className="text-purple-400" size={14} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Mission
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Organize your interview prep with a clear 6-week roadmap while leveraging LeetCode's proven coding environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DailyStudyTips;
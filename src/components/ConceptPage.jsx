

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Lightbulb, Youtube, ExternalLink, Brain, Loader2, Sparkles, Code } from 'lucide-react';
import { conceptsInfo } from '../data/conceptsInfo';
import Footer from './Footer';
import DSALayout from './DSALayout';

const ConceptPage = (props) => {
  // Example hooks and logic (customize as needed)
  const navigate = useNavigate();
  const { conceptName } = useParams();
  const [showAISection, setShowAISection] = useState(false);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  // Example: get concept data
  const conceptData = conceptsInfo[conceptName] || {};
  const decodedConceptName = conceptName;
  // Example: AI explanation logic
  const [aiExplanation, setAIExplanation] = useState('');
  const handleAIExplanation = () => {
    setIsLoadingAI(true);
    // Simulate async AI call
    setTimeout(() => {
      setAIExplanation('This is an AI-generated explanation for the concept.');
      setIsLoadingAI(false);
      setShowAISection(true);
    }, 1000);
  };
  const handleYouTubeSearch = () => {
    window.open(`https://www.youtube.com/results?search_query=${decodedConceptName}+algorithm`, '_blank');
  };
  const formatAIResponse = (response) => response;

  return (
    <>
      <DSALayout
        activeWeek={props.activeWeek}
        setActiveWeek={props.setActiveWeek}
        selectedTopicId={props.selectedTopicId}
        setSelectedTopicId={props.setSelectedTopicId}
      >
        {/* Header with Back Button */}
        <div className="sticky">
          <div className="flex items-center justify-between py-4 px-4 sm:px-6 max-w-7xl mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="group flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-slate-800/80 to-slate-700/80 hover:from-slate-700/90 hover:to-slate-600/90 border border-slate-600/30 hover:border-slate-500/50 rounded-xl text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium backdrop-blur-sm shadow-lg hover:shadow-slate-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <ArrowLeft 
                size={18} 
                className="flex-shrink-0 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:text-blue-400" 
              />
              <span className="whitespace-nowrap">Back</span>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="relative mb-12 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="absolute top-20 right-1/3 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-1/2 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center py-12 px-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
                  <Code size={16} className="text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">Concept Deep Dive</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent break-words">
                  {decodedConceptName}
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Master this fundamental concept with detailed explanations, examples, and AI-powered insights
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 pb-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-gradient-to-br from-blue-500/8 via-blue-500/4 to-transparent backdrop-blur-sm border border-blue-500/15 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center rotate-3">
                      <BookOpen className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Core Concept</h2>
                      <p className="text-blue-300 mt-1">Fundamental understanding</p>
                    </div>
                  </div>
                  <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/20">
                    <p className="text-gray-100 leading-relaxed text-lg whitespace-pre-line">
                      {conceptData.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Explanation Section */}
              <div className="bg-gradient-to-br from-purple-500/8 via-purple-500/4 to-transparent backdrop-blur-sm border border-purple-500/15 rounded-3xl p-6 sm:p-8 relative overflow-hidden mb-2">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center -rotate-3">
                        <Brain className="text-purple-400" size={20} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">Detailed Explanation</h2>
                        <p className="text-purple-300 mt-1">Powered by Advanced AI</p>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleAIExplanation}
                      disabled={isLoadingAI}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-all duration-300 font-medium shadow-sm hover:shadow-md transform hover:scale-105 group"
                    >
                      {isLoadingAI ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        <Brain size={18} className="group-hover:scale-110 transition-transform duration-300" />
                      )}
                      <span>{aiExplanation ? (showAISection ? 'Hide' : 'Show') : 'Generate'}</span>
                      <Sparkles size={14} className="opacity-70" />
                    </button>
                  </div>

                  {/* AI Content */}
                  {showAISection && (
                    <div className="bg-purple-500/8 border border-purple-500/15 rounded-2xl p-6 transition-all duration-300">
                      {isLoadingAI ? (
                        <div className="flex items-center justify-center py-12">
                          <div className="flex items-center gap-3">
                            <Loader2 size={24} className="animate-spin text-purple-400" />
                            <span className="text-gray-300 text-lg">AI is analyzing the concept...</span>
                          </div>
                        </div>
                      ) : (
                        <div className="ai-content">
                          <div 
                            className="text-base leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: formatAIResponse(aiExplanation) }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 sm:space-y-8">
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-emerald-500/8 via-emerald-500/4 to-transparent backdrop-blur-sm border border-emerald-500/15 rounded-3xl p-6 sticky top-32 overflow-hidden mb-0">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <Lightbulb className="text-emerald-400" size={18} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Quick Actions</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <button
                      onClick={handleYouTubeSearch}
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all duration-300 font-medium shadow-sm hover:shadow-md transform hover:scale-105 group"
                    >
                      <Youtube size={20} className="group-hover:scale-110 transition-transform duration-300" />
                      <span>Learn on YouTube</span>
                      <ExternalLink size={16} className="opacity-70" />
                    </button>

                    <div className="pt-4 border-t border-emerald-500/20">
                      <h4 className="text-emerald-300 font-semibold mb-3">Study Tips</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Practice implementing from scratch</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Solve related coding problems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Understand time complexity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Learn common variations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DSALayout>
      <Footer />
    </>
  );
};

export default ConceptPage;
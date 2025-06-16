import React from 'react';
import { X, BookOpen, Lightbulb } from 'lucide-react';

const ConceptModal = ({ concept, description, onClose }) => {
  if (!concept) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 max-w-lg w-full border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
        {/* Floating background elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-xl"></div>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-slate-100/80 dark:bg-slate-700/80 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 group z-10"
          aria-label="Close modal"
        >
          <X size={18} className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200" />
        </button>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <BookOpen className="text-white" size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Lightbulb size={16} className="text-amber-500" />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Concept Overview</span>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {concept}
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="bg-slate-50/80 dark:bg-slate-700/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-600/30">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
              {description}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 font-medium shadow-sm hover:shadow-md transform hover:scale-105"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptModal;
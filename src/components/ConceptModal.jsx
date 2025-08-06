import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConceptModal = ({ concept, description, onClose }) => {
  const navigate = useNavigate();

  if (!concept) return null;

  const handleViewDetails = () => {
    const encodedConcept = encodeURIComponent(concept);
    navigate(`/concept/${encodedConcept}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal - Now Much Simpler */}
      <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 max-w-lg w-full border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-slate-100/80 dark:bg-slate-700/80 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105 group"
          aria-label="Close modal"
        >
          <X size={16} className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200" />
        </button>

        {/* Content */}
        <div className="pr-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {concept}
          </h2>
          
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 line-clamp-4">
            {description}
          </p>

          <div className="flex gap-3">
            <button
              onClick={handleViewDetails}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 font-medium shadow-sm hover:shadow-md transform hover:scale-105"
            >
              <span>Learn More</span>
              <ExternalLink size={14} />
            </button>
            
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-xl transition-all duration-300 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptModal;
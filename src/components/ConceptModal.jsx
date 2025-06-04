import React from 'react';

const ConceptModal = ({ concept, description, onClose }) => {
  if (!concept) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#23232b] rounded-lg p-6 max-w-md w-full border border-gray-700 shadow-lg relative">
        <button
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-200 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >×</button>
        <h2 className="text-xl font-bold mb-2 text-blue-300">{concept}</h2>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default ConceptModal;
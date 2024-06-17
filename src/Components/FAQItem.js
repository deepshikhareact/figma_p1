// src/FAQItem.js
import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-blue-700' : 'text-black'}`}>
          {question}
        </span>
        <button
          className={`text-2xl transform transition-transform hover:text-blue-700 ${isOpen ? 'rotate-180 text-blue-700' : ''}`}
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && (
        <div className="p-4 bg-transparent">
          <p className="whitespace-pre-line">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;

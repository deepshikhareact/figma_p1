import React, { useState } from 'react';

const faqData = [
  {
    question: "Question number one goes here.....",
    answer: [
      "Answer for question number one goes here in the first paragraph.",
      "This can be a short answer or long answer.",
    ],
  },
  {
    question: "Question number two goes here.....",
    answer: [
      "Answer for question number two goes here in the first paragraph.",
      "This can be a short answer or long answer.",
    ],
  },
];

const FaqComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-6xl p-6">
        {faqData.map((faq, index) => (
          <div key={index} className="pb-4 mb-8 border-b">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-blue-700' : 'text-black'}`}>
                {faq.question}
              </h3>
              <span className={`text-2xl transform transition-transform hover:text-blue-700 ${openIndex === index ? 'rotate-180 text-blue-700' : ''}`}>
                {openIndex === index ? '-' : '+'}
              </span>
            </div>
            {openIndex === index && (
              <div className="mt-4">
                {faq.answer.map((paragraph, idx) => (
                  <p key={idx} className="mb-2">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;

import React, { useState } from 'react';
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

interface FAQ {
  question: string;
  answer: string;
}

interface AccordionProps {
  faqs: FAQ[];
}

const Accordion: React.FC<AccordionProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl font-poppins mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left py-4 px-6 bg-white hover:bg-gray-50 rounded-lg flex justify-between items-center group transition-colors duration-200"
          >
            <span className="font-medium text-[#313131]">{faq.question}</span>
            {activeIndex === index ? (
              <RxCaretUp size={24} className="text-gray-500 group-hover:text-[#313131] transition-colors duration-200" />
            ) : (
              <RxCaretDown size={24} className="text-gray-500 group-hover:text-[#313131] transition-colors duration-200" />
            )}
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-6 py-4 text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

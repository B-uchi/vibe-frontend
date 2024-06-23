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
    <div className="w-full max-w-2xl font-poppins mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left py-2 px-4 bg-gray-200 rounded-md  focus:bg-gray-300 flex justify-between items-center"
          >
            {faq.question} {activeIndex === index ? <RxCaretUp size={25} /> : <RxCaretDown size={25} />}
          </button>
          <div
            className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
              activeIndex === index ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <p className="p-4 bg-white border border-t-0 border-gray-200 rounded-md">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

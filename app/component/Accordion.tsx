import { useState,useRef } from 'react';


const AccordionItem = ({ title, content, isOpen, onToggle }: any) => {
    return (
      <div className="border-b border-gray-200 w-full">
        <button
          onClick={onToggle}
          className="w-full py-4 text-left focus:outline-none flex justify-between items-center"
        >
          <span className="text-lg font-semibold">{title}</span>
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-4 text-gray-600">{content}</div>
        </div>
      </div>
    );
  };

export default AccordionItem;

import React from 'react';

const FAQItem = ({ question, answer }) => {
    return (
        <details className="group mb-4">
            <summary className="flex items-center justify-between cursor-pointer p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-all list-none">
                <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 group-open:bg-blue-600 group-open:border-blue-600 group-open:text-white transition-colors">
                        {/* Plus/Minus Icon */}
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:block">-</span>
                    </div>
                    <span className="text-gray-700 font-medium text-base md:text-lg">
                        {question}
                    </span>
                </div>

                <span className="text-gray-400 transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </summary>

            <div className="px-5 pb-5 pt-0 bg-white border-x border-b border-gray-200 rounded-b-xl -mt-2 relative z-0">
                <div className="pt-4 text-gray-600 leading-relaxed border-t border-gray-100">
                    {answer}
                </div>
            </div>
        </details>
    );
};

export default FAQItem;

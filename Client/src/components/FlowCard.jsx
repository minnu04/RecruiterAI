import React from 'react';

const FlowCard = ({ title, nodes, footerText, benefitHighlight }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">

            {/* Title */}
            <h3 className="text-[#1E3A8A] font-bold text-lg mb-8 leading-tight h-12">
                {title}
            </h3>

            {/* Steps Container */}
            <div className="flex-1 flex flex-col gap-4 mb-8">
                {nodes.map((node, index) => (
                    <div key={index} className="flex items-center gap-3">

                        {/* Left Pill (Step Name) */}
                        <div className={`
              w-1/2 rounded-lg py-2.5 px-3 flex items-center gap-2 shadow-sm relative z-10
              ${node.color === 'green' ? 'bg-green-500 text-white' :
                                node.color === 'purple' ? 'bg-purple-500 text-white' :
                                    node.color === 'yellow' ? 'bg-yellow-400 text-white' : // Added yellow support from pic
                                        'bg-blue-600 text-white'}
            `}>
                            {/* Simple Icon Dot */}
                            <div className="w-2 h-2 rounded-full bg-white/40 shrink-0"></div>
                            <span className="text-[11px] md:text-xs font-semibold leading-tight line-clamp-2">
                                {node.label}
                            </span>
                        </div>

                        {/* Arrow */}
                        <div className="flex-shrink-0 text-gray-300">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>

                        {/* Right Box (Description/Subtext) */}
                        <div className="w-1/2 bg-white border border-gray-200 rounded-lg py-2 px-3 shadow-sm min-h-[42px] flex items-center">
                            <span className="text-[10px] text-gray-500 leading-tight font-medium">
                                {/* Logic to handle different data shapes */}
                                {node.subtext ? node.subtext :
                                    node.branches ? (
                                        <div className="flex flex-col gap-0.5">
                                            <div className="text-green-600">✓ {node.branches.yes}</div>
                                            <div className="text-red-500">✕ {node.branches.no}</div>
                                        </div>
                                    ) : "Process Step"} {/* Fallback text if no subtext provided */}
                            </span>
                        </div>

                        {/* Vertical Connector Line (Visual only, behind elements) - Optional, mimicking the 'flow' feel if needed, but horizontal arrow is dominant in pic. 
                The pic has vertical lines connecting the LEFT pills.
            */}
                        {index < nodes.length - 1 && (
                            <div className="absolute left-[24%] translate-x-3 w-[1px] h-4 bg-gray-200 -bottom-4 hidden"></div>
                            // Difficult to position absolute relative to the loop without a parent relative container for the gap.
                            // Keeping it simple for now as the horizontal flow is the key change.
                        )}

                    </div>
                ))}
            </div>

            {/* Footer Pill */}
            <div className="w-full bg-blue-50 py-3 px-4 rounded-xl mt-auto border border-blue-100 text-center">
                <p className="text-sm font-bold text-blue-800">
                    {benefitHighlight || footerText}
                </p>
            </div>

        </div>
    );
};

export default FlowCard;

import React from 'react';

const LogoStrip = ({ logos }) => {
    const doubledLogos = [...logos, ...logos];

    return (
        <div className="w-full py-10 border-y border-gray-100 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
            </div>
            <div className="relative w-full overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                <div className="flex w-max animate-scroll gap-12 group-hover:[animation-play-state:paused] items-center">
                    {doubledLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 cursor-pointer transition-opacity duration-300 opacity-50 hover:opacity-100 grayscale hover:grayscale-0"
                        >
                            <span className="text-xl md:text-2xl font-bold text-gray-500 hover:text-blue-600 transition-colors whitespace-nowrap">
                                {logo}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoStrip;

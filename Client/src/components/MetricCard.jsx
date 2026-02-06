import React from 'react';

const MetricCard = ({ value, label, colorClass }) => {
    return (
        <div className={`relative rounded-2xl p-8 overflow-hidden flex flex-col items-start justify-center text-white h-[180px] shadow-sm transform hover:-translate-y-1 transition-all duration-300 ${colorClass}`}>

            {/* Value */}
            <span className="text-5xl font-extrabold mb-3 tracking-tight z-10 drop-shadow-sm">
                {value}
            </span>

            {/* Label */}
            <p className="text-base md:text-lg font-medium leading-snug opacity-95 max-w-[90%] z-10">
                {label}
            </p>

            {/* Bottom Wave Decoration */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg viewBox="0 0 1440 320" className="w-full h-auto opacity-30 text-white" fill="currentColor">
                    <path fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,208C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>

            {/* Top-Right Glow for depth */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 blur-3xl rounded-full pointer-events-none"></div>

        </div>
    );
};

export default MetricCard;

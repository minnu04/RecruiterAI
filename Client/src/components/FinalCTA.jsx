import React from 'react';

const FinalCTA = () => {
    return (
        <section className="relative bg-blue-700 pt-20 pb-32 px-4 text-center overflow-hidden">

            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Ready to Hire Better, Faster?
                </h2>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                    Join 500+ companies hiring smarter with AI
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <button className="px-8 py-3 bg-white text-blue-700 text-sm font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg">
                        Start Free Trial
                    </button>
                    <button className="px-8 py-3 bg-white text-blue-700 text-sm font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg border-2 border-transparent">
                        Schedule Demo
                    </button>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-[#A5D8FF] opacity-30"></path>
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="fill-[#A5D8FF] opacity-50"></path>
                </svg>
            </div>
        </section>
    );
};

export default FinalCTA;

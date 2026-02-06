import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full pt-20 pb-28 px-4 flex flex-col items-center bg-blue-50 overflow-hidden">

            {/* Main Blue Card */}
            <div className="relative z-10 w-full max-w-6xl bg-[#2563EB] rounded-[32px] p-12 md:p-20 text-center shadow-xl mx-auto mt-4 border-4 border-[#60A5FA]/30">

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    Every Hire, <br className="hidden md:block" />
                    Faster and Better
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                    Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy <br className="hidden md:block" />
                    lifting while you focus on building your team.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3.5 bg-white text-blue-700 text-base font-bold rounded-full hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        Start Hiring Smarter
                    </button>
                    <button className="px-8 py-3.5 bg-transparent text-white text-base font-bold rounded-full border-2 border-white hover:bg-white/10 transition-all shadow-lg">
                        See How It Works
                    </button>
                </div>

                {/* 
           Conversation Bubbles - Positioned to float around the content.
           Updated with specific Profiles: Sarah K, Rahul M, Priya S, Amit T.
        */}

                {/* Top-Left Bubble: Sarah K. */}
                <div className="hidden md:flex absolute top-12 -left-16 lg:-left-24 bg-white p-4 rounded-xl shadow-xl max-w-[260px] animate-float text-left z-20 items-start gap-3 transform -rotate-2">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold shrink-0 text-sm">SK</div>
                    <div>
                        <p className="text-xs text-gray-800 font-medium italic mb-1">"Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent."</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Sarah K., Founder</p>
                    </div>
                </div>

                {/* Top-Right Bubble: Rahul M. */}
                <div className="hidden md:flex absolute top-16 -right-12 lg:-right-20 bg-white p-4 rounded-xl shadow-xl max-w-[260px] animate-float delay-700 text-left z-20 items-start gap-3 transform rotate-2">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0 text-sm">RM</div>
                    <div>
                        <p className="text-xs text-gray-800 font-medium italic mb-1">"Posted on LinkedIn. Got 200 applications. Skimmed 20. Hired on gut feeling. They quit in 2 months."</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Rahul M., Hiring Manager</p>
                    </div>
                </div>

                {/* Bottom-Left Bubble: Priya S. */}
                <div className="hidden md:flex absolute bottom-16 -left-12 lg:-left-20 bg-white p-4 rounded-xl shadow-xl max-w-[260px] animate-float delay-1000 text-left z-20 items-start gap-3 transform rotate-1">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold shrink-0 text-sm">PS</div>
                    <div>
                        <p className="text-xs text-gray-800 font-medium italic mb-1">"I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly."</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Priya S., CEO</p>
                    </div>
                </div>

                {/* Bottom-Right Bubble: Amit T. */}
                <div className="hidden md:flex absolute bottom-20 -right-12 lg:-right-16 bg-white p-4 rounded-xl shadow-xl max-w-[260px] animate-float delay-500 text-left z-20 items-start gap-3 transform -rotate-1">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold shrink-0 text-sm">AT</div>
                    <div>
                        <p className="text-xs text-gray-800 font-medium italic mb-1">"Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening."</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Amit T., Head of HR</p>
                    </div>
                </div>

            </div>

            {/* Mobile Stacked Bubbles */}
            <div className="md:hidden mt-8 grid grid-cols-1 gap-3 w-full max-w-sm px-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-pink-500">
                    <p className="text-sm text-gray-700 italic">"Candidates wait 3 weeks for replies... We're losing great talent."</p>
                    <p className="text-xs text-gray-500 mt-2 font-bold">- Sarah K., Founder</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-indigo-500">
                    <p className="text-sm text-gray-700 italic">"Posted on LinkedIn. Got 200 applications... Hired on gut feeling."</p>
                    <p className="text-xs text-gray-500 mt-2 font-bold">- Rahul M., Hiring Manager</p>
                </div>
            </div>

        </section>
    );
};

export default Hero;

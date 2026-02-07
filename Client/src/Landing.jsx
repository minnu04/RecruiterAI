import React from 'react';
import Hero from './components/Hero';
import FlowCard from './components/FlowCard';
import MetricCard from './components/MetricCard';
import LogoStrip from './components/LogoStrip';
import TestimonialCard from './components/TestimonialCard';
import FAQItem from './components/FAQItem';
import FinalCTA from './components/FinalCTA';

const Landing = () => {
    const flowCardsData = [
        {
            title: "1. Automated Candidate Screening & Scheduling",
            benefitHighlight: "Screen 250+ applications in minutes vs. 8 hours manually",
            nodes: [
                { type: 'process', label: "New Application Submitted", subtext: "Captured from any job board", color: 'blue' },
                { type: 'process', label: "AI Resume Screening", subtext: "Ranks top 20% instantly", color: 'blue' },
                { type: 'process', label: "Auto-send Questions", subtext: "Via Email / SMS", color: 'blue' },
                {
                    type: 'decision',
                    label: "Score > 75%?",
                    branches: { yes: "Auto-schedule Interview", no: "Send Rejection Email" }
                },
                { type: 'process', label: "Interview Scheduled", subtext: "24h Reminder Sent", color: 'green' }
            ]
        },
        {
            title: "2. Multi-Stage Interview Process Automation",
            benefitHighlight: "Reduce time-to-hire from 42 days to 12 days",
            nodes: [
                { type: 'process', label: "Candidate Accepts Invite", subtext: "Calendar sync active", color: 'blue' },
                { type: 'process', label: "Round 1: AI Video", subtext: "Technical assessment", color: 'blue' },
                {
                    type: 'decision',
                    label: "AI Score > 80%?",
                    branches: { yes: "Schedule Round 2", no: "Auto-reject + Feedback" }
                },
                { type: 'process', label: "Hiring Manager Decision", subtext: "One-click hire/reject", color: 'purple' },
                { type: 'process', label: "Offer / Rejection Sent", subtext: "Auto-onboarding workflow", color: 'green' }
            ]
        },
        {
            title: "3. Passive Candidate Re-engagement System",
            benefitHighlight: "Build a qualified talent pipeline automatically",
            nodes: [
                { type: 'process', label: "Candidate Rejected", subtext: "Scored 60-74% (Silver Medalist)", color: 'blue' },
                { type: 'process', label: "Added to 'Future Talent'", subtext: "Tagged in database", color: 'blue' },
                { type: 'process', label: "3 Month Wait Period", subtext: "Automated nurturing drip", color: 'purple' },
                {
                    type: 'decision',
                    label: "New Role?",
                    branches: { yes: "Send Engagement Email", no: "Snooze 3 months" }
                },
                { type: 'process', label: "Fast-track to Interview", subtext: "Skip initial screening", color: 'green' }
            ]
        }
    ];

    const metricsData = [
        { value: "10x", label: "Faster Screening", colorClass: "bg-blue-600" },
        { value: "70%", label: "Faster Time-to-Hire", colorClass: "bg-blue-400" },
        { value: "60%", label: "Less Manual Work", colorClass: "bg-[#7C3AED]" }, 
        { value: "2x", label: "Higher Candidate Response Rate", colorClass: "bg-[#2563EB]" } 
    ];
    const logos = [
        "LinkedIn", "naukri.com", "Indeed", "AngelList", "instahyre",
        "Wellfound", "glassdoor"
    ];
    const testimonials = [
        {
            quote: "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. Game changer for our 5-person startup.",
            name: "Rahul Mehta",
            role: "Founder",
            company: "TechStart Solutions",
            image: ""
        },
        {
            quote: "The automated pipeline allows us to process 5x the candidates without adding headcount. Best investment we've made this year.",
            name: "Anjali Gupta",
            role: "VP of People",
            company: "GrowthWave",
            image: ""
        },
        {
            quote: "Finally, a tool that actually understands context in resumes. The quality of candidates we interview has improved drastically.",
            name: "David Chen",
            role: "CTO",
            company: "Innovate Labs",
            image: ""
        }
    ];
    const faqs = [
        {
            question: "How does AI screening work?",
            answer: "Our AI analyzes resumes against your job descriptions, looking for relevant skills, experience, and context. It ranks candidates based on match quality, ensuring you see the best people first."
        },
        {
            question: "Does RecruiterAI integrate with our existing ATS?",
            answer: "Yes, we integrate seamlessly with major ATS platforms including Greenhouse, Lever, and Workable."
        },
        {
            question: "What's the pricing structure?",
            answer: "We offer flexible plans starting with a free trial. You can choose from monthly subscriptions or pay-per-hire models depending on your volume."
        },
        {
            question: "How long does setup take?",
            answer: "Most teams are up and running within 24 hours. Our onboarding team helps configure your workflows and integrations."
        },
        {
            question: "Is candidate data secure?",
            answer: "Absolutely. We are SOC2 and GDPR compliant, ensuring your candidate data is encrypted and protected at all times."
        }
    ];

    return (
        <div className="font-sans text-gray-900 bg-[#EFF6FF]">
            <Hero />

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A8A] mb-4">
                    AI Recruiting Software That Works Like Your Own HR Team
                </h2>
                <p className="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                    Build custom hiring workflows in minutes. No coding required.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    {flowCardsData.map((card, index) => (
                        <FlowCard key={index} {...card} />
                    ))}
                </div>
            </section>
            <section className="py-20 bg-[#E0E7FF]/50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-xl md:text-2xl font-bold text-center text-[#1E3A8A] mb-12">
                        The RecruiterAI Advantage
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {metricsData.map((metric, index) => (
                            <MetricCard key={index} {...metric} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="text-center mb-10 px-4">
                    <h2 className="text-xl md:text-3xl font-bold text-[#1E3A8A] mb-4">
                        Post Once, Reach Everywhere
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        RecruiterAI automatically syncs your job postings across all major platforms
                    </p>
                </div>
                <LogoStrip logos={logos} />
            </section>
            <section className="py-20 bg-light-secondary">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#1E3A8A]">
                        Trusted by Hiring Teams
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, index) => (
                            <TestimonialCard key={index} {...t} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 max-w-4xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-center text-[#1E3A8A] mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </section>
            <FinalCTA />
        </div>
    );
};

export default Landing;

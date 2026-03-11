import { motion } from 'framer-motion';
import { Play, Check } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="bg-white relative overflow-hidden flex flex-col items-center w-full">
            {/* Top Banner indicating enrollment open */}
            <div className="w-full bg-[#E5E7EB] text-center py-4 text-[13px] font-bold tracking-[0.2em] uppercase text-gray-500">
                Young Minds Forum x ThinkYard: Enrollment open for Batch 01
            </div>

            <div className="container mx-auto px-10 max-w-[1440px] relative z-10 pt-10 pb-10">
                <div className="flex flex-col lg:flex-row items-center gap-24 justify-between">

                    {/* Left Column */}
                    <div className="flex-1 text-left w-full lg:max-w-[840px]">
                        {/* Logo */}
                        <div className="flex items-center mb-2">
                            <img src="/logo-light.jpg" alt="Young Minds Forum" className="h-20 w-auto mix-blend-multiply" />
                        </div>

                        <h1 className="text-7xl lg:text-[80px] font-black text-secondary-blue leading-[0.9] tracking-tight mb-12">
                            Business <br />
                            Automation with <br />
                            <span className="text-[#3ABBA6]">Agentic AI.</span>
                        </h1>

                        <p className="text-xl text-text-gray mb-16 max-w-2xl leading-relaxed font-medium">
                            This 4-week hybrid program explores the revolutionary world of AI Agents. You will learn to design, deploy, and supervise agents that plan and execute complex business tasks independently.
                        </p>

                        {/* Enroll Now & Checklist */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-16 mb-12">
                            <button 
                                onClick={() => {
                                    const element = document.getElementById('fullName');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                        element.focus();
                                    }
                                }}
                                className="bg-primary-blue hover:bg-blue-800 text-white font-bold py-6 px-16 rounded-full text-xl shadow-[0_15px_35px_rgba(0,43,154,0.3)] transition-all active:scale-95"
                            >
                                Enroll Now
                            </button>

                            <div className="flex flex-col gap-4 pt-3 text-base text-text-gray font-medium">
                                <div className="flex items-center gap-4">
                                    <div className="w-5 h-5 rounded-full bg-blue-50 flex flex-shrink-0 items-center justify-center text-primary-blue">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    No previous coding experience needed
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-5 h-5 rounded-full bg-blue-50 flex flex-shrink-0 items-center justify-center text-primary-blue">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    Build your own AI agents
                                </div>
                            </div>
                        </div>

                        {/* Collaboration */}
                        <div className="text-sm text-text-gray font-bold flex flex-col mb-20 uppercase tracking-[0.1em]">
                            <span className="text-gray-400 mb-2 ml-2">In Collaboration with</span>
                            <span className="flex items-baseline gap-px lowercase ml-2">
                                <span className="text-[#3ABBA6] text-4xl font-black leading-none capitalize">Think</span>
                                <span className="text-secondary-blue text-4xl font-black leading-none capitalize">Yard.</span>
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Hero Graphic */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-[560px] relative">
                        {/* Blue glow effect behind the image */}
                        <div className="absolute -top-16 -right-16 w-96 h-96 bg-[#002B9A]/30 blur-[140px] rounded-full"></div>

                        {/* Representation of the dark video/graph player in design */}
                        <div className="w-full aspect-[4/5] bg-[#0A0D14] rounded-[50px] overflow-hidden relative shadow-2xl z-10 flex flex-col border border-white/5">
                            {/* Network Graph Graphic representation */}
                            <div className="flex-1 relative overflow-hidden flex items-center justify-center p-12 opacity-80">
                                {/* Abstract graph lines */}
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M10,80 Q30,40 50,60 T90,20" stroke="#00D1FF" strokeWidth="0.5" fill="none" opacity="0.6" className="drop-shadow-[0_0_8px_rgba(0,209,255,0.8)]" />
                                    <circle cx="10" cy="80" r="2" fill="#00D1FF" opacity="0.8" />
                                    <circle cx="50" cy="60" r="2.5" fill="#00D1FF" opacity="0.9" />
                                    <circle cx="90" cy="20" r="2" fill="#00D1FF" opacity="0.8" />
                                    <path d="M20,90 Q40,50 60,70 T100,30" stroke="#3ABBA6" strokeWidth="0.5" fill="none" opacity="0.4" />
                                    <circle cx="20" cy="90" r="2.5" fill="#3ABBA6" opacity="0.7" />
                                    <circle cx="60" cy="70" r="2" fill="#3ABBA6" opacity="0.6" />
                                    <circle cx="100" cy="30" r="2.5" fill="#3ABBA6" opacity="0.7" />
                                </svg>
                            </div>
                            {/* Bottom Controller Bar */}
                            <div className="p-12 pt-0 flex justify-between items-center text-white shrink-0 relative z-20">
                                <div className="text-xl font-bold tracking-[0.1em] text-white/90">Master the Future</div>
                                <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center">
                                    <Play size={16} fill="currentColor" className="ml-0.5 text-white/90" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Integration Logos Section below hero */}
                <div className="mt-48 space-y-12 flex flex-col items-center border-t border-gray-100/0">
                    <p className="text-[13px] font-bold text-gray-600 uppercase tracking-[0.3em] text-center">Powering Workflows With</p>
                    <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 text-base font-bold text-gray-400">
                        {/* Conceptual Logos built via Text for precise layout */}
                        <div className="flex items-center gap-3"><div className="w-5 h-5  text-gray-600 bg-gray-600 rounded-sm"></div>n8n</div>
                        <div className="flex items-center gap-3"><div className="w-5 h-5  text-gray-600 bg-gray-600 rounded-full"></div>ChatGPT</div>
                        <div className="flex items-center gap-3"><div className="w-5 h-5  text-gray-600 bg-gray-600 rounded-full"></div>Make</div>
                        <div className="flex items-center gap-3"><div className="w-5 h-5  text-gray-600 bg-gray-600 rounded-sm"></div>Python</div>
                        <div className="flex items-center gap-3"><div className="w-5 h-5  text-gray-600 bg-gray-600 rounded-sm"></div>Javascript</div>
                        <div className="flex items-center gap-3"><div className="w-5 h-5  text-gray-600 bg-gray-600 rounded-sm"></div>Upwork</div>
                        <div className="flex items-center gap-3"><div className="w-5 h-5  text-gray-600 bg-gray-600 rounded-full"></div>Google Workspace 365</div>
                        <div className="flex items-center gap-3"><div className="w-5 h-5  text-gray-600 bg-gray-600 rounded-sm shadow-sm"></div>Microsoft 365</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;

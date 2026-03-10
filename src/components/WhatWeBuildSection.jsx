import { BookOpen, Workflow, Settings, Briefcase } from 'lucide-react';

const WhatWeBuildSection = () => {
    return (
        <section className="py-24 bg-white flex flex-col items-center px-8 border-b border-gray-100">
            <div className="container mx-auto max-w-[1440px]">

                <h2 className="text-[42px] font-black text-secondary-blue text-center mb-28 uppercase tracking-[0.2em] leading-tight">
                    What you will build.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                    {/* Card 1 */}
                    <div className="bg-[#F9FAFB] border border-gray-200 rounded-[32px] p-10 hover:shadow-2xl transition-all hover:-translate-y-2">
                        <div className="w-16 h-16 border border-gray-200 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm">
                            <BookOpen size={28} className="text-text-gray" />
                        </div>
                        <h4 className="text-xl font-bold text-secondary-blue leading-[1.2] mb-6">Autonomous<br />Research Agent</h4>
                        <p className="text-[16px] text-text-gray/80 leading-relaxed font-medium">Scrape and retrieve context from vast data sources for detailed analysis.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#F9FAFB] border border-gray-200 rounded-[32px] p-10 hover:shadow-2xl transition-all hover:-translate-y-2">
                        <div className="w-16 h-16 border border-gray-200 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm">
                            <Workflow size={28} className="text-text-gray" />
                        </div>
                        <h4 className="text-xl font-bold text-secondary-blue leading-[1.2] mb-6">Multi-Step Workflow<br />System</h4>
                        <p className="text-[16px] text-text-gray/80 leading-relaxed font-medium">Orchestrate a multi-agent system from email triage to drafted response.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#F9FAFB] border border-gray-200 rounded-[32px] p-10 hover:shadow-2xl transition-all hover:-translate-y-2">
                        <div className="w-16 h-16 border border-gray-200 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm">
                            <Settings size={28} className="text-text-gray" />
                        </div>
                        <h4 className="text-xl font-bold text-secondary-blue leading-[1.2] mb-6">Custom Business<br />Solution</h4>
                        <p className="text-[16px] text-text-gray/80 leading-relaxed font-medium">Build AI workflows for a specific task inside your industry from scratch.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#F9FAFB] border border-gray-200 rounded-[32px] p-10 hover:shadow-2xl transition-all hover:-translate-y-2">
                        <div className="w-16 h-16 border border-gray-200 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm">
                            <Briefcase size={28} className="text-text-gray" />
                        </div>
                        <h4 className="text-xl font-bold text-secondary-blue leading-[1.2] mb-6">Freelance Portfolio<br />Project</h4>
                        <p className="text-[16px] text-text-gray/80 leading-relaxed font-medium">Design an operations project that serves as the anchor of your service portfolio.</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhatWeBuildSection;

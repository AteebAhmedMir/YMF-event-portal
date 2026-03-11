const CurriculumSection = () => {
    return (
        <section id="curriculum" className="py-32 bg-[#F9FAFB] flex flex-col items-center px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row gap-24 items-start justify-between">

                    {/* Left Column */}
                    <div className="flex-1 max-w-2xl">
                        <h2 className="text-[48px] font-black text-secondary-blue leading-[1.1] mb-10 pt-48">
                            Curriculum
                        </h2>
                        <p className="text-xl text-text-gray/80 leading-relaxed font-medium">
                            Designed to take you from foundations to building high-ROI systems, with a dedicated track on how to sell these services.                        </p>
                    </div>

                    {/* Right Column (List) */}
                    <div className="flex-1 w-full max-w-3xl relative pb-16">
                        {/* Decorative Line connection mimicking design */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 hidden md:block opacity-50 -ml-24"></div>

                        <div className="space-y-16">
                            {/* Week 1 */}
                            <div className="relative pb-10 border-b border-gray-200">
                                <h4 className="text-[20px] font-bold text-secondary-blue mb-3.5 uppercase tracking-widest">Foundations & System Design (Week 1)</h4>
                                <p className="text-[16px] text-text-gray/70 leading-relaxed font-medium max-w-md">Understand the landscape of Agentic AI. Architect your first automated micro service.</p>
                            </div>

                            {/* Week 2 */}
                            <div className="relative pb-10 border-b border-gray-200">
                                <h4 className="text-[20px] font-bold text-secondary-blue mb-3.5 uppercase tracking-widest">No-Code Building & Multi-Agent Flows (Week 2)</h4>
                                <p className="text-[16px] text-text-gray/70 leading-relaxed font-medium max-w-md">Deep dive into n8n and Make. Create complex multi-agent flows with custom tools.</p>
                            </div>

                            {/* Weeks 3-4 */}
                            <div className="relative pb-8">
                                <h4 className="text-[20px] font-bold text-secondary-blue mb-3.5 uppercase tracking-widest">Governance & Professional Positioning (Weeks 3-4)</h4>
                                <p className="text-[16px] text-text-gray/70 leading-relaxed font-medium max-w-md">Deploy agents securely. Learn how to sell these high value automated services.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Register Now Button centered below */}
                <div className="mt-20 flex justify-center">
                    <button 
                        onClick={() => {
                            const element = document.getElementById('fullName');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                element.focus();
                            }
                        }}
                        className="bg-primary-blue hover:bg-blue-800 text-white font-bold py-6 px-24 rounded-xl text-4xl transition-all shadow-[0_15px_35px_rgba(0,43,154,0.3)] hover:shadow-[0_18px_40px_rgba(0,43,154,0.4)] active:scale-95"
                    >
                        Register Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CurriculumSection;

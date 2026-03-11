import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section className="py-20 lg:py-32 bg-primary-blue text-white relative rounded-tl-[50px] sm:rounded-tl-[100px] rounded-tr-[50px] sm:rounded-tr-[100px] overflow-hidden w-full px-6 sm:px-8">
            {/* Decorative radial gradient similar to the design */}
            <div className="absolute top-1/2 -right-48 -translate-y-1/2 w-[900px] h-[900px] bg-[#3ABBA6]/10 rounded-full blur-[120px]"></div>

            <div className="container mx-auto max-w-[1440px] relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-48 w-full">
                    {/* Left Side: Content & Grid */}
                    <div className="flex-1 max-w-3xl">
                        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-black leading-[1.1] mb-8 lg:mb-12 tracking-tight">
                            Agentic<br />Automation.
                        </h2>
                        <p className="text-xl text-white/80 leading-relaxed font-medium mb-20">
                            Agentic AI is the next generation of automation. It goes beyond simple AI scripts by creating AI agents that reason, use tools, and execute workflows autonomously.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
                            {/* 01 */}
                            <div>
                                <div className="text-[#3ABBA6] font-black text-3xl mb-4">01</div>
                                <h4 className="font-bold text-xl mb-3 uppercase tracking-widest">Autonomy</h4>
                                <p className="text-[16px] text-white/70 leading-relaxed font-medium">Agents continuously monitor systems for events that trigger workflows.</p>
                            </div>
                            {/* 02 */}
                            <div>
                                <div className="text-[#3ABBA6] font-black text-3xl mb-4">02</div>
                                <h4 className="font-bold text-xl mb-3 uppercase tracking-widest">Reasoning</h4>
                                <p className="text-[16px] text-white/70 leading-relaxed font-medium">Agents formulate internal execution plans to break complex tasks into actionable steps.</p>
                            </div>
                            {/* 03 */}
                            <div>
                                <div className="text-[#3ABBA6] font-black text-3xl mb-4">03</div>
                                <h4 className="font-bold text-xl mb-3 uppercase tracking-widest">Tool Integration</h4>
                                <p className="text-[16px] text-white/70 leading-relaxed font-medium">Agents call external APIs to interact with tools like email or databases.</p>
                            </div>
                            {/* 04 */}
                            <div>
                                <div className="text-[#3ABBA6] font-black text-3xl mb-4">04</div>
                                <h4 className="font-bold text-xl mb-3 uppercase tracking-widest">No-Code Building</h4>
                                <p className="text-[16px] text-white/70 leading-relaxed font-medium">Build automated workflows visually without typing a single line of code.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Graph / Nodes Concept */}
                    <div className="flex-1 relative flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
                        {/* Simulating the connected nodes shown in Figma */}
                        <div className="relative w-full aspect-square max-w-[320px] sm:max-w-none sm:h-[500px] border border-white/10 rounded-full flex items-center justify-center">

                            {/* Connectors */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                                <path d="M 150 180 Q 250 250 350 180" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="5 5" />
                                <path d="M 150 320 Q 250 250 350 320" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="5 5" />
                            </svg>

                            {/* Node 1: Autonomy */}
                            <div className="absolute top-[25%] left-[5%] bg-[#0A1D5C] border border-[#213781] px-8 py-4 rounded-full flex flex-col items-center shadow-2xl">
                                <div className="w-6 h-6 mb-2 flex items-center justify-center text-[#3ABBA6]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#93A5E5]">Autonomy</span>
                            </div>

                            {/* Node 2: Tool Integration */}
                            <div className="absolute top-[25%] right-[5%] bg-[#0A1D5C] border border-[#213781] px-8 py-4 rounded-full flex flex-col items-center shadow-2xl">
                                <div className="w-6 h-6 mb-2 flex items-center justify-center text-[#3ABBA6]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#93A5E5]">Tool Integration</span>
                            </div>

                            {/* Node 3: Reasoning */}
                            <div className="absolute bottom-[25%] left-[5%] bg-[#0A1D5C] border border-[#213781] px-8 py-4 rounded-full flex flex-col items-center shadow-2xl">
                                <div className="w-6 h-6 mb-2 flex items-center justify-center text-[#3ABBA6]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><circle cx="12" cy="12" r="4" /></svg>
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#93A5E5]">Reasoning</span>
                            </div>

                            {/* Node 4: No-Code Building */}
                            <div className="absolute bottom-[25%] right-[5%] bg-[#0A1D5C] border border-[#213781] px-4 sm:px-8 py-2 sm:py-4 rounded-full flex flex-col items-center justify-center shadow-2xl">
                                <div className="w-4 h-4 sm:w-6 sm:h-6 mb-1 sm:mb-2 flex items-center justify-center text-[#3ABBA6]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                </div>
                                <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#93A5E5]">No-Code</span>
                            </div>

                            {/* Center glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-40 sm:h-40 bg-primary-blue rounded-full border border-[#213781] shadow-[0_0_30px_rgba(0,43,154,0.8)] sm:shadow-[0_0_60px_rgba(0,43,154,0.8)] z-10 flex items-center justify-center">
                                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-[#3ABBA6]/20 rounded-full blur-md sm:blur-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

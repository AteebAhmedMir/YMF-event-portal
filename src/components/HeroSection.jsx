import { motion } from 'framer-motion';
import { Cpu, Calendar, Monitor, Clock, ChevronRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white mesh-gradient min-h-[90vh] flex flex-col justify-center">
            {/* Immersive Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary-blue/5 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-teal-accent/5 blur-[100px] rounded-full"></div>

                {/* Floating "Agent" Orbs */}
                <motion.div
                    animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 left-10 w-16 h-16 bg-gradient-to-br from-teal-accent/20 to-transparent blur-xl rounded-full"
                ></motion.div>
                <motion.div
                    animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/3 right-20 w-24 h-24 bg-gradient-to-br from-primary-blue/10 to-transparent blur-xl rounded-full"
                ></motion.div>
            </div>

            {/* Announcement Bar */}
            <div className="absolute top-0 w-full bg-secondary-blue/5 backdrop-blur-sm py-2 text-center px-4 z-20">
                <p className="text-[10px] lg:text-[11px] font-black text-secondary-blue uppercase tracking-[0.3em]">
                    Collaborating for impact: Young Minds Forum x ThinkYard
                </p>
            </div>

            <div className="container mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Column: Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center lg:justify-start mb-1 lg:mb-12"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}Logo_main.png`}
                                alt="Young Minds Forum"
                                className="h-44 -mt-20 -mb-8 lg:mt-0 lg:h-80 lg:-mb-32 lg:-ml-24 object-contain"
                            />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl lg:text-[72px] font-black text-secondary-blue leading-[1] mb-6 tracking-tight text-center lg:text-left"
                        >
                            <span className="relative">
                                Business
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-full h-1.5 bg-teal-accent/20 -z-10"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ delay: 1, duration: 1 }}
                                ></motion.span>
                            </span><br />
                            Automation with<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-accent to-primary-blue font-black">Agentic AI.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-base lg:text-xl text-text-gray/70 max-w-xl mx-auto lg:mx-0 mb-10 font-medium leading-relaxed"
                        >
                            Master the revolution. Build, deploy, and supervise autonomous agency systems
                            that transform professional tasks into efficient, high-ROI workflows.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center gap-8 mb-12 justify-center lg:justify-start"
                        >
                            <button
                                onClick={() => {
                                    const el = document.getElementById('fullName');
                                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }}
                                className="group relative w-full sm:w-auto px-8 py-5 bg-primary-blue text-white rounded-[20px] text-lg font-black shadow-[0_15px_40px_rgba(0,43,154,0.25)] hover:bg-black transition-all flex items-center justify-center gap-3"
                            >
                                <span>Enroll Now</span>
                                <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>

                            <div className="flex flex-col gap-2 text-left">
                                <div className="flex items-center gap-2 text-xs font-black text-secondary-blue">
                                    <Monitor size={16} className="text-teal-accent" strokeWidth={3} />
                                    <span>HYBRID: ONSITE & ONLINE</span>
                                </div>
                                <div className="flex items-center gap-4 text-[10px] font-black text-secondary-blue/40 uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> 4 weeks</span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> 12-2 PM PKT</span>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex flex-col items-center lg:items-start opacity-50">
                            <p className="text-[9px] font-black text-text-gray uppercase tracking-[0.3em]">Strategic Partner</p>
                            <img
                                src={`${import.meta.env.BASE_URL}ThinkYardLogo.png`}
                                alt="ThinkYard"
                                className="h-24 lg:h-32 w-auto -mt-10 pr-8"
                            />
                        </div>
                    </div>

                    {/* Right Column: Immersive Graphic Card */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
                        <motion.div
                            initial={{ opacity: 0, rotate: 1 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 1.2 }}
                            className="relative aspect-square lg:aspect-[5/6] bg-secondary-blue rounded-[48px] overflow-hidden shadow-[0_60px_100px_-30px_rgba(0,0,0,0.5)] border border-white/5 group"
                        >
                            {/* Inner Glow and Depth */}
                            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent"></div>

                            {/* Neural Grid Overlay */}
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <defs>
                                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#grid)" />
                                </svg>
                            </div>
                            {/*
                            - [x] Fix Mobile Logo Centering & Overlap <!-- id: 16 -->
                            - [/] Adjust Mobile Logo Size <!-- id: 20 -->
                                - [ ] Increase hero logo height on mobile (`h-44`) <!-- id: 21 -->
                                - [ ] Increase footer logo height on mobile (`h-44`) <!-- id: 22 -->
                            - [/] Verify configuration <!-- id: 3 -->
                            */}

                            {/* Center Piece */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="w-32 h-32 bg-teal-accent/20 blur-3xl rounded-full"
                                    ></motion.div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-teal-accent shadow-inner">
                                            <Cpu size={32} className="animate-pulse" />
                                        </div>
                                    </div>

                                    {/* Rotating Satellite Elements */}
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 pointer-events-none"
                                        >
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-2 h-2 bg-white/30 rounded-full"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Info Overlay at the bottom */}
                            <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12 bg-gradient-to-t from-secondary-blue via-secondary-blue/80 to-transparent">
                                <div className="space-y-4">
                                    <div className="w-12 h-0.5 bg-teal-accent rounded-full"></div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-teal-accent text-[10px] font-black uppercase tracking-[0.3em] mb-2">Module 01: Foundations</p>
                                            <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tight uppercase leading-tight">
                                                Master the<br />Future Ecosystem
                                            </h3>
                                        </div>
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/10 group-hover:bg-teal-accent group-hover:text-secondary-blue transition-all">
                                            <ChevronRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Badge */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute -top-6 -right-6 px-6 py-6 bg-white rounded-[24px] shadow-2xl z-20 hidden lg:block border border-gray-100"
                        >
                            <p className="text-[9px] font-black text-secondary-blue/40 uppercase tracking-widest mb-1">Enrollment Status</p>
                            <p className="text-xl font-black text-secondary-blue">Batch 01 Open</p>
                            <div className="mt-3 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-teal-accent rounded-full animate-ping"></div>
                                <span className="text-[9px] font-black text-teal-accent uppercase tracking-widest">Limited Seats</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

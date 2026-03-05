import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Star, CheckCircle } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-light-blue/50 to-white">
            {/* Background patterns can be added here */}
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-primary-blue"></span>
                            <span className="text-xs font-bold text-primary-blue tracking-wider uppercase">AI Automation Course</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-secondary-blue mb-6">
                            Master Automation with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-cyan-accent">
                                Agentic AI.
                            </span>
                        </h1>

                        <p className="text-lg text-text-gray mb-8 max-w-xl">
                            Integrate autonomous agents into your business processes and create powerful AI models that work for you 24/7. Join the future of workflow efficiency.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            <button className="bg-primary-blue text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary-blue/30 transform hover:-translate-y-1 transition-all flex items-center gap-2">
                                ENROLL NOW <ArrowRight size={20} />
                            </button>
                            <button className="bg-white text-secondary-blue border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-light-blue flex items-center justify-center text-primary-blue">
                                    <Play size={16} fill="currentColor" />
                                </div>
                                See Demo
                            </button>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-blue-200 flex items-center justify-center text-[10px] font-bold`}>
                                        U{i}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-yellow-400">
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                </div>
                                <p className="text-sm font-semibold text-secondary-blue">1200+ Students enrolled</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Device Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 bg-secondary-blue rounded-[32px] p-4 shadow-2xl border border-white/10 overflow-hidden">
                            {/* Fake UI mockup with SVGs */}
                            <div className="bg-[#050720] rounded-[24px] aspect-[1.4/1] w-full overflow-hidden p-6 text-white/90">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex gap-4">
                                        <div className="w-32 h-3 bg-white/10 rounded-full"></div>
                                        <div className="w-16 h-3 bg-white/5 rounded-full"></div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/10"></div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5">
                                            <div className="w-8 h-8 bg-primary-blue/30 rounded-lg mb-3"></div>
                                            <div className="w-full h-2 bg-white/20 rounded-full mb-2"></div>
                                            <div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-white/5 rounded-xl p-6 border border-white/5 relative overflow-hidden">
                                    <div className="flex justify-between items-end mb-4">
                                        <div className="space-y-2">
                                            <div className="w-40 h-4 bg-white/20 rounded-full"></div>
                                            <div className="w-20 h-3 bg-white/10 rounded-full"></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-cyan-accent">+84%</div>
                                            <div className="text-[10px] text-white/40">Efficiency Growth</div>
                                        </div>
                                    </div>
                                    {/* Fake Chart */}
                                    <svg className="w-full h-24" preserveAspectRatio="none">
                                        <path
                                            d="M0 80 Q 50 20, 100 60 T 200 10 T 300 50 T 400 30 T 500 70 L 500 100 L 0 100 Z"
                                            fill="url(#grad)"
                                            opacity="0.3"
                                        />
                                        <path
                                            d="M0 80 Q 50 20, 100 60 T 200 10 T 300 50 T 400 30 T 500 70"
                                            fill="none"
                                            stroke="#00D1FF"
                                            strokeWidth="3"
                                        />
                                        <defs>
                                            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#00D1FF" />
                                                <stop offset="100%" stopColor="#00D1FF" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Float elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-blue-50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <CheckCircle size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-gray-400 leading-none">Status</p>
                                    <p className="text-xs font-bold text-secondary-blue">Agents Active</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

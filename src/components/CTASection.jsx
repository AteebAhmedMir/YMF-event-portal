import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Sparkles } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden bg-primary-blue rounded-[40px] p-12 lg:p-20 text-white"
                >
                    {/* Background Decorative elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 400 400">
                            <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10 10" />
                            <circle cx="200" cy="200" r="100" fill="none" stroke="white" strokeWidth="2" />
                            <path d="M200 50 L200 350 M50 200 L350 200" stroke="white" strokeWidth="1" />
                            <rect x="180" y="180" width="40" height="40" fill="white" />
                        </svg>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="lg:w-2/3">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-6">
                                <Sparkles size={16} className="text-cyan-accent" />
                                <span className="text-xs font-bold tracking-wider uppercase">Limited Availability</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                                Unlock the Power of <br />
                                <span className="text-cyan-accent">Agentic Automation.</span>
                            </h2>
                            <p className="text-lg text-blue-100 mb-8 max-w-xl">
                                Integrate autonomous agents into your business processes, and help your events processes. This is the last chance to join the current cohort.
                            </p>
                            <button className="bg-white text-primary-blue px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-cyan-accent hover:text-primary-blue transition-all flex items-center gap-2 text-lg">
                                GET STARTED NOW <ArrowRight size={22} />
                            </button>
                        </div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="hidden lg:block lg:w-1/3"
                        >
                            <div className="w-64 h-64 border-2 border-white/20 rounded-full flex items-center justify-center relative">
                                <div className="w-48 h-48 border-4 border-cyan-accent/30 rounded-full flex items-center justify-center">
                                    <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center text-primary-blue shadow-2xl">
                                        <Cpu size={64} />
                                    </div>
                                </div>
                                {/* Dots around circle */}
                                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                                    <div
                                        key={angle}
                                        className="absolute w-4 h-4 bg-cyan-accent rounded-full border-4 border-primary-blue"
                                        style={{
                                            transform: `rotate(${angle}deg) translateY(-128px)`
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;

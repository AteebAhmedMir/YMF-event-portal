import { motion } from 'framer-motion';
import { Search, Layers, ShieldCheck, Briefcase, ArrowUpRight } from 'lucide-react';

const WhatWeBuildSection = () => {
    const builds = [
        {
            title: "Autonomous Research Agent",
            description: "An agent that can plan, research, and report on data for any professional context.",
            icon: <Search size={24} />
        },
        {
            title: "Multi-Step Workflow System",
            description: "A robust system that handles complex tasks across different software platforms.",
            icon: <Layers size={24} />
        },
        {
            title: "Custom Business Solution",
            description: "A project tailored to your specific professional needs to drive measurable ROI.",
            icon: <ShieldCheck size={24} />
        },
        {
            title: "Freelance Portfolio Project",
            description: "A deployable agentic system that serves as a live demo to pitch to potential clients.",
            icon: <Briefcase size={24} />
        }
    ];

    return (
        <section className="py-20 lg:py-32 bg-white flex flex-col items-center px-6 lg:px-12 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
            
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col items-center mb-20">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] font-black text-teal-accent uppercase tracking-[0.4em] mb-6"
                    >
                        Hands-on Implementation
                    </motion.p>
                    <h2 className="text-[42px] lg:text-[72px] font-black text-secondary-blue text-center tracking-tight leading-[1]">
                        What you will<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-teal-accent">actually build.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {builds.map((build, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group bg-[#F8FAFC] border border-gray-100 rounded-[32px] p-8 lg:p-10 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all relative overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-teal-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-blue mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500">
                                    {build.icon}
                                </div>
                                <h3 className="text-xl font-black text-secondary-blue mb-4 tracking-tight leading-tight">
                                    {build.title}
                                </h3>
                                <p className="text-base text-text-gray/50 leading-relaxed font-medium mb-8">
                                    {build.description}
                                </p>
                                
                                <div className="flex items-center gap-2 text-primary-blue font-black text-[12px] uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                    <span>Learn More</span>
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeBuildSection;

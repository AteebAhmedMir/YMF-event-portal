import { motion } from 'framer-motion';

const FeaturesSection = () => {
    return (
        <section id="features" className="py-20 lg:py-32 bg-white px-6 lg:px-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 -z-10"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    {/* Left Pane */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 flex flex-col items-center lg:block text-center lg:text-left"
                    >
                        <h2 className="text-[42px] lg:text-[72px] font-black text-secondary-blue leading-[1] mb-8 tracking-tight">
                            The manual<br />
                            work <span className="text-primary-blue/20">trap.</span>
                        </h2>
                        <p className="text-lg lg:text-xl text-text-gray/50 leading-relaxed max-w-md font-medium italic">
                            Break free from the repetitive loops that drain professional energy.
                            Our systems don't just "help" — they execute.
                        </p>
                    </motion.div>

                    {/* Right Pane */}
                    <div className="flex-1 flex flex-col pt-2">
                        <FeatureItem
                            number="01"
                            title="Complex Efficiency"
                            description="Move past manual bottlenecks with systems that can reason through multi-step tasks independently."
                        />
                        <FeatureItem
                            number="02"
                            title="Universal Domain Impact"
                            description="From supply chain to HR, automate workflows across any industry without writing a single line of code."
                        />
                        <FeatureItem
                            number="03"
                            title="Logic First Design"
                            description="Shift your focus from 'doing the work' to 'architecting the decision' using agentic principles."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ number, title, description }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-10 border-t border-gray-100 group hover:bg-[#F8FAFC] transition-all rounded-[24px] px-6 -mx-6"
    >
        <div className="flex gap-6">
            <span className="text-[12px] font-black text-teal-accent uppercase tracking-widest pt-1.5">{number}</span>
            <div>
                <h3 className="text-xl lg:text-2xl font-black text-secondary-blue mb-3 tracking-tight group-hover:text-primary-blue transition-colors text-center lg:text-left">
                    {title}
                </h3>
                <p className="text-base lg:text-lg text-text-gray/50 leading-relaxed font-medium">
                    {description}
                </p>
            </div>
        </div>
    </motion.div>
);

export default FeaturesSection;

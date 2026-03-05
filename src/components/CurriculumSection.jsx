import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2 } from 'lucide-react';

const CurriculumSection = () => {
    const modules = [
        {
            id: "01",
            title: "Module 1: Intro to Agentic AI",
            items: [
                "Intelligence Intro to Agentic AI",
                "Explain about Agentic AI",
                "Integrated Intro into Agentic AI",
                "Consolidate common workflows",
                "Customize small integration",
                "Condition Agentic AI"
            ]
        },
        {
            id: "02",
            title: "Module 2: Designing Workflows",
            items: [
                "Integrate automated workflows",
                "Developing designing workflows",
                "Designing optimization and serialization",
                "Deploying a tool integrating agentic console"
            ]
        },
        {
            id: "03",
            title: "Module 3: Tool Integration",
            items: [
                "Developing custom-designed workflows",
                "Designing automation and workflows",
                "Leveraging tool integration and automation",
                "Deployment & optimization"
            ]
        },
        {
            id: "04",
            title: "Module 4: Deployment & Optimization",
            items: [
                "Deploying agents and business processes",
                "Deployment to Optimization",
                "Deployment Section Optimization",
                "Deployment Power Optimization"
            ]
        }
    ];

    return (
        <section id="curriculum" className="py-24 bg-bg-off-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="md:w-1/2">
                        <h2 className="text-sm font-bold text-primary-blue tracking-widest uppercase mb-3">Roadmap</h2>
                        <h3 className="text-4xl font-extrabold text-secondary-blue mb-4">Curriculum</h3>
                        <p className="text-text-gray">
                            Our comprehensive curriculum is designed to take you from a beginner to an expert in building autonomous agent systems.
                        </p>
                    </div>
                    <button className="bg-primary-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all flex items-center gap-2">
                        Download Syllabus <BookOpen size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    {/* Central Line Visual */}
                    <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-blue-100 -translate-x-1/2 pointer-events-none"></div>

                    {modules.map((module, index) => (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all relative z-10 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-light-blue flex items-center justify-center text-primary-blue font-bold text-xl flex-shrink-0">
                                    {module.id}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-secondary-blue mb-6 border-b border-gray-50 pb-4">
                                        {module.title}
                                    </h4>
                                    <ul className="space-y-4">
                                        {module.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 group">
                                                <CheckCircle2 size={18} className="text-cyan-accent mt-0.5 flex-shrink-0" />
                                                <span className="text-text-gray text-sm font-medium group-hover:text-primary-blue transition-colors">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurriculumSection;

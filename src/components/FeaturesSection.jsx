import { motion } from 'framer-motion';
import { Bot, Zap, Network, Lightbulb } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        {
            icon: <Bot size={32} />,
            title: "AI Agent Fundamentals",
            description: "Learn the core concepts of autonomous agents and how they reason and act in complex environments.",
            color: "blue"
        },
        {
            icon: <Zap size={32} />,
            title: "No-Code Automation",
            description: "Build powerful workflows without writing a single line of code using modern automation platforms.",
            color: "cyan"
        },
        {
            icon: <Network size={32} />,
            title: "Building Agentic Workflows",
            description: "Design multi-agent systems that communicate and collaborate to solve high-level business problems.",
            color: "indigo"
        },
        {
            icon: <Lightbulb size={32} />,
            title: "Advanced AI Strategy",
            description: "Develop a roadmap for implementing AI automation in any organization for maximum ROI.",
            color: "sky"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary-blue tracking-widest uppercase mb-3">Core Capabilities</h2>
                    <h3 className="text-4xl font-extrabold text-secondary-blue">Features of Agentic AI</h3>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-[24px] bg-bg-off-white border border-gray-100 hover:border-primary-blue/20 hover:shadow-xl hover:shadow-primary-blue/5 transition-all group"
                        >
                            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-white shadow-sm text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all`}>
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-secondary-blue mb-4">{feature.title}</h4>
                            <p className="text-text-gray text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;

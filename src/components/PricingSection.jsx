import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const PricingSection = () => {
    const plans = [
        {
            name: "BASIC",
            price: "25,000",
            features: ["Video Access", "Community", "Course Handbook", "Support"],
            isPopular: false
        },
        {
            name: "PRO",
            price: "25,000",
            features: ["Video Access", "Community", "Mentor Support", "Live Q&A", "Job Assistance"],
            isPopular: true
        },
        {
            name: "ELITE",
            price: "25,000",
            features: ["Video Access", "Community", "1-on-1 Mentorship", "Direct Referrals", "Lifetime Access"],
            isPopular: false
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary-blue tracking-widest uppercase mb-3">Investment</h2>
                    <h3 className="text-4xl font-extrabold text-secondary-blue">Flexible Pricing Plans</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-10 rounded-[40px] border ${plan.isPopular ? 'bg-primary-blue text-white border-primary-blue shadow-2xl scale-105 z-10' : 'bg-white text-secondary-blue border-gray-100 shadow-xl'}`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-accent text-primary-blue text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-8 text-center uppercase tracking-widest font-bold text-sm opacity-80">
                                {plan.name}
                            </div>

                            <div className="flex items-baseline justify-center gap-1 mb-8">
                                <span className="text-lg font-bold">PKR</span>
                                <span className="text-5xl font-black">{plan.price}</span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.isPopular ? 'bg-white/20' : 'bg-blue-50'}`}>
                                            <Check size={12} className={plan.isPopular ? 'text-cyan-accent' : 'text-primary-blue'} />
                                        </div>
                                        <span className="text-sm font-medium opacity-90">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${plan.isPopular ? 'bg-white text-primary-blue hover:bg-cyan-accent' : 'bg-primary-blue text-white hover:bg-opacity-90 shadow-lg shadow-primary-blue/20'}`}
                            >
                                SUBSCRIBE <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;

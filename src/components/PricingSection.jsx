import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const PricingSection = () => {
    const plans = [
        {
            name: "STANDARD",
            price: "25,000",
            status: "disabled",
            features: ["Video Access", "Community", "Course Handbook", "Support"],
            isEarlyBird: false
        },
        {
            name: "EARLY BIRD",
            price: "20,000",
            status: "active",
            features: ["Everything in Standard", "Mentor Support", "Live Q&A", "Job Assistance", "Limited Slots"],
            isEarlyBird: true
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-[#00164d]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10 sm:mb-20">
                    <h2 className="text-[12px] sm:text-sm font-bold text-[#6ee7b7] tracking-widest uppercase mb-3">Investment</h2>
                    <h3 className="text-3xl sm:text-5xl font-black text-white">Secure Your Future</h3>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative w-full md:w-[420px] p-8 sm:p-12 rounded-[40px] border transition-all duration-500 shadow-2xl ${plan.isEarlyBird
                                    ? 'bg-[#6ee7b7] text-[#00164d] border-[#6ee7b7]'
                                    : 'bg-[#1e3a8a]/40 text-white/90 border-[#1e3a8a] backdrop-blur-sm'
                                }`}
                        >
                            {plan.isEarlyBird && (
                                <div className="absolute top-8 right-8 bg-[#1e3a8a]/20 text-[#00164d] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-[#00164d]/10">
                                    LIMITED
                                </div>
                            )}

                            <div className={`mb-10 uppercase tracking-[0.2em] font-black text-xs ${plan.isEarlyBird ? 'text-[#00164d]/60' : 'text-white/40'}`}>
                                {plan.name}
                            </div>

                            <div className="flex items-baseline gap-2 mb-12">
                                <span className="text-xl font-black">PKR</span>
                                <span className={`text-5xl sm:text-6xl font-black tracking-tight ${!plan.isEarlyBird ? 'line-through decoration-white/30' : ''}`}>
                                    {plan.price}
                                </span>
                            </div>

                            <button
                                onClick={() => {
                                    const element = document.getElementById('fullName');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                        element.focus();
                                    }
                                }}
                                className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${plan.isEarlyBird
                                        ? 'bg-[#00164d] text-white hover:bg-[#00164d]/90 shadow-[0_10px_30px_rgba(0,22,77,0.3)]'
                                        : 'bg-transparent border-2 border-white/10 text-white/50 cursor-pointer hover:bg-white/5'
                                    }`}
                            >
                                Apply Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;

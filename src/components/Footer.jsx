import { motion } from 'framer-motion';
import { MessageCircle, Globe, AtSign, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary-blue pt-20 lg:pt-32 pb-12 px-6 lg:px-12 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-blue/10 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32 items-start mb-24 lg:mb-40">
                    {/* Brand Info */}
                    <div className="flex-1 max-w-xl">
                        <div className="flex items-center gap-4 lg:mb-20">
                            <img
                                src={`${import.meta.env.BASE_URL}Logo_main.png`}
                                alt="Young Minds Forum"
                                className="h-42 lg:h-80 -mb-40 -ml-24"
                            />
                        </div>

                        <p className="text-xl lg:text-2xl font-black text-white/30 leading-tight mb-16 tracking-tight uppercase italic">
                            Building the next generation of<br />
                            <span className="text-white">AI decision-makers.</span>
                        </p>

                        <div className="space-y-8">
                            <div className="text-white/40 font-black text-[10px] uppercase tracking-[0.3em]">Inquiries</div>
                            <div className="flex flex-wrap gap-8">
                                <FooterAction icon={<MessageCircle size={18} />} label="WhatsApp" href="#" target="_blank" />
                                <FooterAction icon={<AtSign size={18} />} label="Email Us" href="mailto:info@ymforum.org" target="_blank" />
                                <FooterAction icon={<Globe size={18} />} label="Website" href="#" target="_blank" />
                            </div>
                        </div>
                    </div>

                    {/* Newsletter - Glassmorphic */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="flex-1 w-full max-w-lg glass-card rounded-[48px] p-10 lg:p-14 border-white/5 shadow-2xl relative group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="text-teal-accent -rotate-45" size={32} />
                        </div>

                        <h4 className="text-2xl lg:text-3xl font-black text-white mb-12 tracking-tight leading-none italic text-center">
                            Stay within the loop.
                        </h4>

                        <div className="w-full space-y-6">
                            <input
                                type="email" placeholder="EMAIL ADDRESS *"
                                className="w-full bg-white/5 border border-white/10 py-4 px-8 rounded-full text-lg font-black text-white placeholder-white/10 outline-none focus:border-teal-accent transition-colors text-center"
                            />
                            <button className="w-full py-6 bg-white text-secondary-blue rounded-full text-lg font-black hover:bg-teal-accent transition-colors uppercase tracking-widest ring-4 ring-white/5">
                                Join Now
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8 opacity-40">
                    <div className="text-xl font-black text-white tracking-widest uppercase">Agentic AI</div>
                    <p className="text-[9px] font-black text-white uppercase tracking-[0.4em] text-center">
                        © 2024 Automation With Agentic AI. Islamabad, Pakistan.
                    </p>
                    <div className="flex gap-8">
                        <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] cursor-pointer hover:text-teal-accent">Legal</span>
                        <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] cursor-pointer hover:text-teal-accent">Privacy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterAction = ({ icon, label, href }) => (
    <a href={href} className="group flex items-center gap-3 text-white hover:text-teal-accent transition-colors">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-teal-accent transition-colors">
            {icon}
        </div>
        <span className="text-[12px] font-black uppercase tracking-[0.15em]">{label}</span>
    </a>
);

export default Footer;

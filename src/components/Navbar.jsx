import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Features', href: '#features' },
        { name: 'Curriculum', href: '#curriculum' },
        { name: 'Pricing', href: '#enroll' },
        { name: 'Contact', href: '#enroll' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo & Backdrop */}
                <div className={`absolute inset-x-6 lg:inset-x-12 top-0 h-full bg-white/80 backdrop-blur-xl border border-white/20 rounded-[24px] shadow-xl transition-all duration-500 -z-10 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 shadow-none'}`}></div>
                
                <div className="flex items-center gap-2 group">
                    <img 
                        src={`${import.meta.env.BASE_URL}logo-light.png`} 
                        alt="Young Minds Forum" 
                        className="h-14 lg:h-20 w-auto group-hover:scale-105 transition-transform duration-300" 
                    />
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-[11px] font-black text-secondary-blue/50 hover:text-primary-blue uppercase tracking-[0.15em] transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button 
                        onClick={() => {
                            const el = document.getElementById('fullName');
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                        className="group relative px-6 py-3 bg-primary-blue text-white rounded-xl text-[11px] font-black uppercase tracking-[0.15em] shadow-lg shadow-primary-blue/15 hover:bg-black transition-all flex items-center gap-2"
                    >
                        <span>Get Started</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isScrolled ? 'bg-secondary-blue/5' : 'bg-white shadow-lg'}`} 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} className="text-secondary-blue" /> : <Menu size={20} className="text-secondary-blue" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -10 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="lg:hidden absolute top-full left-6 right-6 mt-3 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-[32px] shadow-2xl py-10 px-8 flex flex-col gap-8 overflow-hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary-blue/5 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        
                        {navLinks.map((link, index) => (
                            <motion.a 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                key={link.name} 
                                href={link.href} 
                                className="text-2xl font-black text-secondary-blue tracking-tight hover:text-primary-blue transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.button 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                const el = document.getElementById('fullName');
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                            className="w-full py-5 bg-primary-blue text-white rounded-[20px] text-xl font-black shadow-xl shadow-primary-blue/20 mt-2 flex items-center justify-center gap-3"
                        >
                            <span>GET STARTED</span>
                            <ArrowRight size={20} />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

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
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="/logo-light.jpg" alt="Young Minds Forum" className="h-12 w-auto mix-blend-multiply" />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-text-gray hover:text-primary-blue transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <button 
                        onClick={() => {
                            const element = document.getElementById('fullName');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                element.focus();
                            }
                        }}
                        className="bg-primary-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-md"
                    >
                        GET STARTED
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-secondary-blue" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-lg font-medium text-text-gray" onClick={() => setIsMobileMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    <button 
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            const element = document.getElementById('fullName');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                element.focus();
                            }
                        }}
                        className="bg-primary-blue text-white w-full py-4 rounded-xl text-lg font-semibold"
                    >
                        GET STARTED
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

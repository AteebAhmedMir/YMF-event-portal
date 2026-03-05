import { Cpu, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary-blue text-white py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Logo and Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                                <Cpu size={24} />
                            </div>
                            <span className="text-xl font-bold tracking-tight">AUTOAGENTS</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Empowering businesses and individuals through the magic of Agentic AI and seamless automation.
                        </p>
                        <div className="flex gap-4">
                            {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-blue transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Features', 'Curriculum', 'Pricing', 'About Us', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Support</h4>
                        <ul className="space-y-4">
                            {['Help Center', 'Documentation', 'Community', 'Security', 'Privacy Policy'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-cyan-accent">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Email</p>
                                    <p className="text-sm font-medium">contact@autoagents.ai</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-cyan-accent">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Phone</p>
                                    <p className="text-sm font-medium">+92 300 1234567</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-cyan-accent">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Location</p>
                                    <p className="text-sm font-medium">Remote / Islamabad, PK</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © 2026 AutoAgents. All rights reserved. Built with excellence.
                    </p>
                    <div className="flex gap-8 text-xs text-gray-500">
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

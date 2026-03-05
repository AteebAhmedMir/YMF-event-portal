import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, Rocket, Check } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';

const EnrollmentSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        interest: 'pro'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Firebase integration code (temporarily bypassed)
            /*
            await addDoc(collection(db, 'enrollments'), {
                ...formData,
                createdAt: serverTimestamp()
            });
            */

            // Simulation for offline/initial run
            await new Promise(resolve => setTimeout(resolve, 1000));

            toast.success('Enrollment submitted successfully!');
            setFormData({ fullName: '', email: '', phone: '', interest: 'pro' });
        } catch (error) {
            console.error('Error submitting enrollment:', error);
            toast.error('Failed to submit enrollment. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-bg-off-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-12">

                    {/* Left Panel: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-white p-10 lg:p-14 rounded-[40px] shadow-2xl shadow-blue-900/5"
                    >
                        <h3 className="text-3xl font-extrabold text-secondary-blue mb-2">Enroll Today</h3>
                        <p className="text-text-gray mb-10">Fill in your details below to start your AI journey with us.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                                <div className="relative">
                                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-primary-blue focus:bg-white transition-all text-secondary-blue font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                                <div className="relative">
                                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-primary-blue focus:bg-white transition-all text-secondary-blue font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone Number</label>
                                <div className="relative">
                                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+92 3XX XXXXXXX"
                                        className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-primary-blue focus:bg-white transition-all text-secondary-blue font-medium"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-5 bg-primary-blue text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary-blue/20 hover:bg-opacity-90 transform transition-all active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'PROCESSING...' : 'ENROLL NOW'} <Rocket size={20} />
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Panel: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/5 flex flex-col justify-center"
                    >
                        <div className="mb-8">
                            <h2 className="text-4xl font-extrabold text-secondary-blue leading-tight mb-6">
                                Start Your AI<br />
                                <span className="text-primary-blue underline decoration-cyan-accent underline-offset-8">Journey Now.</span>
                            </h2>
                            <p className="text-lg text-text-gray mb-8">
                                Join our community of forward-thinking individuals and transform your business with the power of Agentic AI. We provide all the tools and knowledge you need to succeed.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: "Expert Instruction", text: "Learn from industry pioneers" },
                                { title: "Hands-on Projects", text: "Build real AI agents" },
                                { title: "Global Community", text: "Connect with 1200+ peers" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-cyan-accent flex-shrink-0 flex items-center justify-center text-primary-blue">
                                        <Check size={14} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary-blue">{item.title}</h4>
                                        <p className="text-sm text-text-gray">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default EnrollmentSection;

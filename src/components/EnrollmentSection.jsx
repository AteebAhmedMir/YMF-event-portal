import { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { Calendar, Monitor, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

const EnrollmentSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        jobTitle: '',
        linkedin: '',
        qualification: '',
        industry: '',
        learningMode: '',
        workflowIdea: '',
        freelanceInterest: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email.');
            setIsSubmitting(false);
            return;
        }

        try {
            const emailQuery = query(collection(db, 'enrollments'), where('email', '==', formData.email));
            const phoneQuery = query(collection(db, 'enrollments'), where('phone', '==', formData.phone));
            const [emailSnap, phoneSnap] = await Promise.all([getDocs(emailQuery), getDocs(phoneQuery)]);

            if (!emailSnap.empty) {
                toast.error('Email already registered.');
                setIsSubmitting(false);
                return;
            }
            if (!phoneSnap.empty) {
                toast.error('Phone number already registered.');
                setIsSubmitting(false);
                return;
            }

            await addDoc(collection(db, 'enrollments'), { ...formData, createdAt: serverTimestamp() });
            toast.success('Enrollment submitted successfully!');
            setFormData({
                fullName: '', email: '', phone: '', jobTitle: '', linkedin: '',
                qualification: '', industry: '', learningMode: '', workflowIdea: '', freelanceInterest: ''
            });
        } catch (error) {
            console.error(error);
            toast.error('Submission failed. Try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <section id="enroll" className="w-full relative overflow-hidden bg-white">
            {/* Instructors Section */}
            <div className="py-24 lg:py-32 px-6 lg:px-12 relative border-t border-gray-100">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 -z-10"></div>

                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
                        <div className="flex-1 flex flex-col items-center lg:block text-center lg:text-left">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-[10px] font-bold text-primary-blue uppercase tracking-[0.4em] mb-8"
                            >
                                World Class Mentoring
                            </motion.p>
                            <h2 className="text-[42px] lg:text-[72px] font-black text-secondary-blue leading-[1.1] tracking-tight mb-12">
                                Learn from those who <span className="text-teal-accent">actually build.</span>
                            </h2>

                            <div className="space-y-8">
                                <InstructorBlock
                                    name="Hashim M. Nadeem"
                                    role="LEAD ML ENGINEER @ MARKAZ (YC)"
                                    initials="H"
                                />
                                <InstructorBlock
                                    name="Husnain Sattar"
                                    role="CTO @ EYNVISION"
                                    initials="S"
                                />
                            </div>
                        </div>

                        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                            <FeatureCard icon={<Calendar className="text-primary-blue" size={20} />} title="4 Weeks" detail="Weekend Momentum" />
                            <FeatureCard icon={<Monitor className="text-teal-accent" size={20} />} title="Hybrid" detail="Local & Global" />
                            <FeatureCard icon={<MessageCircle className="text-primary-blue" size={20} />} title="Support" detail="TA-Led Sessions" />
                            <FeatureCard icon={<Sparkles className="text-teal-accent" size={20} />} title="Project" detail="ROI-Focused" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-[#00164d] py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-[#6ee7b7]/5 opacity-30"></div>

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch justify-center">
                        <PricingGlassCard
                            type="STANDARD"
                            price="25,000"
                            disabled
                            features={["Full Curriculum Access", "Weekly Support Sessions", "Project Review"]}
                            className="bg-[#1e3a8a]/30 border-[#1e3a8a] text-white/90 backdrop-blur-md opacity-50 pointer-events-none"
                        />
                        <PricingGlassCard
                            type="EARLY BIRD"
                            price="20,000"
                            isFeatured
                            features={["Priority TA Support", "Lifetime Alumni Access", "1-on-1 Strategy Session"]}
                            className="bg-[#6ee7b7] border-[#6ee7b7] text-[#00164d] shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* Enrollment Form - Matching Screenshot Precisely */}
            <div className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Full Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Full Name *</label>
                            <input
                                id="fullName"
                                type="text" name="fullName" value={formData.fullName} onChange={handleChange} required
                                placeholder='e.g "Ahmed Shoaib"'
                                className="w-full border border-gray-200 rounded-md py-3 px-4 text-gray-900 placeholder-gray-300 focus:ring-1 focus:ring-primary-blue outline-none transition-all"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Email *</label>
                            <input
                                type="email" name="email" value={formData.email} onChange={handleChange} required
                                placeholder='Email: "name@company.com"'
                                className="w-full border border-gray-200 rounded-md py-3 px-4 text-gray-900 placeholder-gray-300 focus:ring-1 focus:ring-primary-blue outline-none transition-all"
                            />
                        </div>

                        {/* Mobile/WhatsApp */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Mobile/WhatsApp Number*</label>
                            <div className="flex items-center border border-gray-200 rounded-md focus-within:ring-1 focus-within:ring-primary-blue transition-all">
                                <div className="flex items-center gap-2 px-3 border-r border-gray-100 shrink-0">
                                    <span className="text-lg">🇵🇰</span>
                                    <span className="text-gray-400 text-sm">▼</span>
                                </div>
                                <input
                                    type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                                    placeholder='"+92 3xx xxxxxxx"'
                                    className="w-full py-3 px-4 text-gray-900 placeholder-gray-300 outline-none bg-transparent"
                                />
                            </div>
                        </div>

                        {/* Job Title */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Current Job Title & Organization*</label>
                            <input
                                type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required
                                placeholder='"e.g. Operations Manager at ABC Corp"'
                                className="w-full border border-gray-200 rounded-md py-3 px-4 text-gray-900 placeholder-gray-300 focus:ring-1 focus:ring-primary-blue outline-none transition-all"
                            />
                        </div>

                        {/* LinkedIn */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">LinkedIn Profile Link (Optional)</label>
                            <input
                                type="text" name="linkedin" value={formData.linkedin} onChange={handleChange}
                                placeholder='URL: "linkedin.com/in/yourprofile"'
                                className="w-full border border-gray-200 rounded-md py-3 px-4 text-gray-900 placeholder-gray-300 focus:ring-1 focus:ring-primary-blue outline-none transition-all"
                            />
                        </div>

                        {/* Qualification */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Highest Qualification*</label>
                            <input
                                type="text" name="qualification" value={formData.qualification} onChange={handleChange} required
                                placeholder="Enter your education level..."
                                className="w-full border border-gray-200 rounded-md py-3 px-4 text-gray-900 placeholder-gray-300 focus:ring-1 focus:ring-primary-blue outline-none transition-all"
                            />
                            <p className="text-xs text-gray-400">E.g Bachelors, Masters etc.</p>
                        </div>

                        {/* Industry */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Industry/Department*</label>
                            <input
                                type="text" name="industry" value={formData.industry} onChange={handleChange} required
                                placeholder="e.g. HR, Supply Chain, Finance"
                                className="w-full border border-gray-200 rounded-md py-3 px-4 text-gray-900 placeholder-gray-300 focus:ring-1 focus:ring-primary-blue outline-none transition-all"
                            />
                        </div>

                        {/* Learning Mode */}
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-gray-700 block">Preferred Learning Mode*</label>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="radio" name="learningMode" value="onsite"
                                        checked={formData.learningMode === 'onsite'}
                                        onChange={handleChange} required
                                        className="w-4 h-4 text-primary-blue focus:ring-primary-blue"
                                    />
                                    <span className="text-sm font-medium text-gray-700">Onsite (ThinkYard, DHA-2, Islamabad)</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="radio" name="learningMode" value="online"
                                        checked={formData.learningMode === 'online'}
                                        onChange={handleChange} required
                                        className="w-4 h-4 text-primary-blue focus:ring-primary-blue"
                                    />
                                    <span className="text-sm font-medium text-gray-700">Online (Live via Zoom)</span>
                                </label>
                            </div>
                        </div>

                        {/* Workflow Idea */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 block">Workflow Idea*</label>
                            <textarea
                                name="workflowIdea" value={formData.workflowIdea} onChange={handleChange} required rows="4"
                                placeholder={`"Describe one specific business task you want to automate (e.g., 'I want to automate the screening of resumes in HR')."`}
                                className="w-full border border-gray-200 rounded-md py-3 px-4 text-gray-900 placeholder-gray-300 focus:ring-1 focus:ring-primary-blue outline-none transition-all resize-none"
                            />
                        </div>

                        {/* Freelance Interest */}
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 block">Freelance Interest*</label>
                                <p className="text-sm text-gray-600 font-bold">"Are you interested in learning how to sell these AI solutions to clients?"</p>
                            </div>
                            <div className="flex gap-8">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="radio" name="freelanceInterest" value="yes"
                                        checked={formData.freelanceInterest === 'yes'}
                                        onChange={handleChange} required
                                        className="w-4 h-4 text-primary-blue focus:ring-primary-blue"
                                    />
                                    <span className="text-sm font-medium text-gray-700">Yes</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="radio" name="freelanceInterest" value="no"
                                        checked={formData.freelanceInterest === 'no'}
                                        onChange={handleChange} required
                                        className="w-4 h-4 text-primary-blue focus:ring-primary-blue"
                                    />
                                    <span className="text-sm font-medium text-gray-700">No</span>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit" disabled={isSubmitting}
                            className="w-full py-4 bg-[#001A72] text-white rounded-md text-sm font-bold transition-all hover:bg-black active:scale-[0.99] disabled:opacity-50 shadow-md"
                        >
                            {isSubmitting ? 'Submitting...' : 'Apply Now'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const InstructorBlock = ({ name, role, initials }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex items-center gap-6 group"
    >
        <div className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-full bg-secondary-blue flex items-center justify-center text-teal-accent text-xl font-black ring-4 ring-secondary-blue/5 group-hover:rotate-12 transition-transform shadow-lg">
            {initials}
        </div>
        <div>
            <h4 className="text-xl lg:text-2xl font-black text-secondary-blue tracking-tight mb-1">{name}</h4>
            <p className="text-[9px] font-bold text-primary-blue uppercase tracking-[0.2em]">{role}</p>
        </div>
    </motion.div>
);

const FeatureCard = ({ icon, title, detail }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-6 bg-white border border-gray-100 rounded-[24px] shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center"
    >
        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-6 shadow-inner">
            {icon}
        </div>
        <h5 className="text-lg font-black text-secondary-blue mb-1 tracking-tight">{title}</h5>
        <p className="text-text-gray/40 text-[10px] font-bold uppercase tracking-widest">{detail}</p>
    </motion.div>
);

const PricingGlassCard = ({ type, price, features, isFeatured, disabled, className }) => (
    <motion.div
        whileHover={!disabled ? { scale: 1.02 } : {}}
        className={`flex-1 p-10 lg:p-14 rounded-[40px] border flex flex-col items-center text-center relative overflow-hidden transition-all duration-500 ${className}`}
    >
        {isFeatured && (
            <div className="absolute top-10 right-10 bg-[#1e3a8a]/10 text-[#00164d] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-[#00164d]/10">
                LIMITED
            </div>
        )}
        <p className={`text-[10px] font-black uppercase tracking-[0.4em] mb-12 ${isFeatured ? 'text-[#00164d]/60' : 'text-white/40'}`}>
            {type}
        </p>

        <div className="flex items-baseline gap-2 mb-14">
            <span className="text-xl font-black">PKR</span>
            <span className={`text-5xl lg:text-7xl font-black tracking-tight ${!isFeatured ? 'line-through decoration-white/30' : ''}`}>
                {price}
            </span>
        </div>

        <div className="space-y-4 w-full mb-16 px-4">
            {features.map((f, i) => (
                <div key={i} className={`flex items-center gap-3 text-sm font-bold justify-center ${isFeatured ? 'text-[#00164d]/70' : 'text-white/50'}`}>
                    <CheckCircle2 size={16} className={isFeatured ? 'text-[#00164d]' : 'text-teal-accent'} />
                    <span>{f}</span>
                </div>
            ))}
        </div>

        <button
            disabled={disabled}
            onClick={() => {
                const el = document.getElementById('fullName');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className={`w-full py-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${isFeatured
                ? 'bg-[#00164d] text-white hover:bg-[#00164d]/90 shadow-xl'
                : disabled ? 'bg-white/5 text-white/30 cursor-not-allowed' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
        >
            {disabled ? 'CLOSED' : 'APPLY NOW'}
        </button>
    </motion.div>
);

export default EnrollmentSection;

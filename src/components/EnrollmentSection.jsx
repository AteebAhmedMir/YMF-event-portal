import { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { Calendar, Monitor, MessageCircle } from 'lucide-react';

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

        // Client-side validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address.');
            setIsSubmitting(false);
            return;
        }

        // Basic Pakistani phone number validation
        // Expected formats: +92 3xx xxxxxxx, 03xxxxxxxxxx, 923xxxxxxxxx
        const cleanPhone = formData.phone.replace(/[\s-]/g, '');
        const phoneRegex = /^((\+92)|(92)|(0))3\d{9}$/;
        if (!phoneRegex.test(cleanPhone)) {
            toast.error('Please enter a valid Pakistani mobile number (+92 3xx xxxxxxx).');
            setIsSubmitting(false);
            return;
        }

        if (formData.linkedin && !formData.linkedin.toLowerCase().includes('linkedin.com/')) {
            toast.error('Please enter a valid LinkedIn profile link.');
            setIsSubmitting(false);
            return;
        }

        try {
            // Uniqueness check for email and phone
            const emailQuery = query(collection(db, 'enrollments'), where('email', '==', formData.email));
            const phoneQuery = query(collection(db, 'enrollments'), where('phone', '==', formData.phone));
            
            const [emailSnapshot, phoneSnapshot] = await Promise.all([
                getDocs(emailQuery),
                getDocs(phoneQuery)
            ]);

            if (!emailSnapshot.empty) {
                toast.error('This email is already registered.');
                setIsSubmitting(false);
                return;
            }

            if (!phoneSnapshot.empty) {
                toast.error('This phone number is already registered.');
                setIsSubmitting(false);
                return;
            }

            await addDoc(collection(db, 'enrollments'), {
                ...formData,
                createdAt: serverTimestamp()
            });

            toast.success('Enrollment submitted successfully!');
            setFormData({
                fullName: '', email: '', phone: '', jobTitle: '', linkedin: '',
                qualification: '', industry: '', learningMode: '', workflowIdea: '', freelanceInterest: ''
            });

            // Reset radio buttons manually if needed (not strictly necessary with controlled state but good habit)
        } catch (error) {
            console.error('Error submitting enrollment:', error);
            toast.error('Failed to submit enrollment. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const scrollToForm = (e) => {
        if (e) e.preventDefault();
        const element = document.getElementById('fullName');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.focus();
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="enroll" className="w-full">
            {/* INSTRUCTORS & FEATURES (Light Gray Background) */}
            <div className="bg-[#F9FAFB] py-12 sm:py-16 px-6 sm:px-10 border-b border-gray-100">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16 sm:mb-32">
                        <h3 className="text-xl sm:text-2xl font-black text-secondary-blue mb-10 sm:mb-20 uppercase tracking-[0.2em]">Meet Our Instructors</h3>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-24 md:gap-40">
                            {/* Instructor 1 */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full bg-gray-200 overflow-hidden flex-shrink-0 relative shadow-inner">
                                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 font-bold text-2xl sm:text-3xl">HN</div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <h4 className="font-bold text-secondary-blue text-xl leading-tight mb-2">Mr. Huzaifa Muhammad Nadeem</h4>
                                    <p className="text-[16px] text-primary-blue font-bold mb-1.5">Lead AI Architect</p>
                                    <p className="text-[14px] text-text-gray/80 font-medium">Works: PKI Solutions, 2x AI Startup</p>
                                </div>
                            </div>
                            {/* Instructor 2 */}
                             <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full bg-gray-200 overflow-hidden flex-shrink-0 relative shadow-inner">
                                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 font-bold text-2xl sm:text-3xl">HS</div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <h4 className="font-bold text-secondary-blue text-xl leading-tight mb-2">Mr. Hussain Salim</h4>
                                    <p className="text-[16px] text-primary-blue font-bold mb-1.5">Lead AI Developer & Architect</p>
                                    <p className="text-[14px] text-text-gray/80 font-medium">AI Specialist</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center items-start md:items-center gap-12 sm:gap-16 md:gap-40">
                        <div className="text-center flex flex-col items-center w-48">
                            <div className="w-20 h-20 flex items-center justify-center mb-8 text-text-gray/60">
                                <Calendar strokeWidth={1.5} size={56} />
                            </div>
                            <h5 className="text-[14px] font-black text-secondary-blue uppercase tracking-[0.2em] mb-3">4 weeks</h5>
                            <p className="text-[14px] text-text-gray/70 leading-tight font-medium">Hands-on Sessions</p>
                        </div>
                        <div className="text-center flex flex-col items-center w-48 md:border-l md:border-r border-gray-200 md:px-20 md:w-80">
                            <div className="w-20 h-20 flex items-center justify-center mb-8 text-text-gray/60">
                                <Monitor strokeWidth={1.5} size={56} />
                            </div>
                            <h5 className="text-[14px] font-black text-secondary-blue uppercase tracking-[0.2em] mb-3">Hybrid</h5>
                            <p className="text-[14px] text-text-gray/70 leading-tight font-medium">Onsite & Online Availability</p>
                        </div>
                        <div className="text-center flex flex-col items-center w-48">
                            <div className="w-20 h-20 flex items-center justify-center mb-8 text-text-gray/60">
                                <MessageCircle strokeWidth={1.5} size={56} />
                            </div>
                            <h5 className="text-[14px] font-black text-secondary-blue uppercase tracking-[0.2em] mb-3">Weekly Support</h5>
                            <p className="text-[14px] text-text-gray/70 leading-tight font-medium">Online Q&A Sessions</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PRICING (Dark Blue Background) */}
            <div className="bg-secondary-blue py-20 sm:py-32 px-6 sm:px-10 w-full">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 sm:gap-16 justify-center max-w-7xl mx-auto items-center md:items-stretch">
                        {/* Standard Card */}
                        <div className="bg-[#2D459D]/50 text-white p-10 sm:p-16 rounded-[40px] sm:rounded-[48px] w-full max-w-lg flex flex-col shadow-2xl border border-white/5 order-2 md:order-1">
                            <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4 sm:mb-6">STANDARD</p>
                            <h3 className="text-4xl sm:text-[48px] font-black mb-10 sm:mb-20 tracking-tight">PKR 25,000</h3>
                            <button 
                                onClick={scrollToForm}
                                className="w-full py-6 mt-auto rounded-2xl border border-white/20 text-white/90 hover:bg-white/10 transition-colors text-xl font-bold"
                            >
                                Apply Now
                            </button>
                        </div>
                        {/* Early Bird Card */}
                        <div className="bg-[#5CE1CB] text-[#0A192F] p-10 sm:p-16 rounded-[40px] sm:rounded-[48px] w-full max-w-lg relative shadow-2xl mt-0 md:-mt-8 transform md:-translate-y-8 order-1 md:order-2">
                            <span className="absolute top-6 sm:top-10 right-6 sm:right-10 bg-black/5 text-[11px] sm:text-[12px] font-bold px-4 sm:px-6 pt-2 pb-1.5 sm:pt-2.5 sm:pb-2 rounded-full uppercase tracking-[0.2em] text-black/60 shadow-sm">SAVE!</span>
                            <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] text-[#0A192F]/60 mb-4 sm:mb-6">EARLY BIRD</p>
                            <h3 className="text-4xl sm:text-[48px] font-black mb-10 sm:mb-20 tracking-tight">PKR 20,000</h3>
                            <button 
                                onClick={scrollToForm}
                                className="w-full py-6 mt-auto rounded-2xl bg-secondary-blue text-white hover:bg-opacity-90 transition-colors text-xl font-bold shadow-2xl"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* FORM (White Background) */}
            <div className="bg-white py-20 sm:py-32 px-6 sm:px-10 w-full">
                <div className="container mx-auto max-w-4xl">
                    <form onSubmit={handleSubmit} className="space-y-12">
                        {/* Full Name */}
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-lg sm:text-xl font-bold text-secondary-blue">Full Name *</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder='e.g "Ahmed Shoaib"'
                                className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white border border-gray-200 rounded-xl focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all text-lg sm:text-xl text-secondary-blue placeholder-gray-400"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-xl font-bold text-secondary-blue">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder='Email: "name@company.com"'
                                className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white border border-gray-200 rounded-xl focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all text-lg sm:text-xl text-secondary-blue placeholder-gray-400"
                            />
                        </div>

                        {/* Mobile/WhatsApp */}
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-xl font-bold text-secondary-blue">Mobile/WhatsApp Number *</label>
                            <div className="flex relative">
                                <div className="absolute left-8 top-1/2 -translate-y-1/2 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="* +92 3xx xxxxxxx"
                                    className="w-full pl-20 pr-8 py-4 sm:py-5 bg-white border border-gray-200 rounded-xl focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all text-lg sm:text-xl text-secondary-blue placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Job Title */}
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-xl font-bold text-secondary-blue">Current Job Title & Organization *</label>
                            <input
                                type="text"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                required
                                placeholder='"e.g. Operations Manager at ABC Corp"'
                                className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white border border-gray-200 rounded-xl focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all text-lg sm:text-xl text-secondary-blue placeholder-gray-400"
                            />
                        </div>

                        {/* LinkedIn */}
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-xl font-bold text-secondary-blue">LinkedIn Profile Link (Optional)</label>
                            <div className="flex relative">
                                <div className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-base">URL</div>
                                <input
                                    type="url"
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    placeholder='"linkedin.com/in/yourprofile"'
                                    className="w-full pl-24 pr-8 py-4 sm:py-5 bg-white border border-gray-200 rounded-xl focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all text-lg sm:text-xl text-secondary-blue placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Qualification */}
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-xl font-bold text-secondary-blue">Highest Qualification *</label>
                            <input
                                type="text"
                                name="qualification"
                                value={formData.qualification}
                                onChange={handleChange}
                                required
                                placeholder="Enter your education level..."
                                className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white border border-gray-200 rounded-t-xl border-b-0 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all text-lg sm:text-xl text-secondary-blue placeholder-gray-400"
                            />
                            <div className="w-full px-8 py-4 bg-gray-50 border border-gray-200 rounded-b-xl text-[16px] text-text-gray/60 font-medium tracking-wide">
                                e.g. Bachelors, Masters etc.
                            </div>
                        </div>

                        {/* Industry */}
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-xl font-bold text-secondary-blue">Industry/Department *</label>
                            <input
                                type="text"
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                required
                                placeholder="e.g. HR, Supply Chain, Finance"
                                className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white border border-gray-200 rounded-xl focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all text-lg sm:text-xl text-secondary-blue placeholder-gray-400"
                            />
                        </div>

                        {/* Learning Mode */}
                        <div className="space-y-6 pt-4">
                            <label className="text-xl font-bold text-secondary-blue">Preferred Learning Mode *</label>
                            <div className="space-y-6 text-xl text-secondary-blue font-medium pl-2">
                                <label className="flex items-center gap-6 cursor-pointer group">
                                    <input type="radio" name="learningMode" value="onsite" onChange={handleChange} required className="accent-secondary-blue w-6 h-6" />
                                    <span>Onsite (ThinkYard, DHA-2, Islamabad)</span>
                                </label>
                                <label className="flex items-center gap-6 cursor-pointer group">
                                    <input type="radio" name="learningMode" value="online" onChange={handleChange} required className="accent-secondary-blue w-6 h-6" />
                                    <span>Online (Live via Zoom)</span>
                                </label>
                            </div>
                        </div>

                        {/* Workflow Idea */}
                        <div className="space-y-4 pt-4">
                            <label className="text-xl font-bold text-secondary-blue">Workflow Idea *</label>
                            <textarea
                                name="workflowIdea"
                                value={formData.workflowIdea}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Describe one specific business task you want to automate..."
                                className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white border border-gray-200 rounded-xl focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all text-lg sm:text-xl text-secondary-blue placeholder-gray-400 resize-none font-medium leading-relaxed"
                            ></textarea>
                        </div>

                        {/* Freelance Interest */}
                        <div className="space-y-4 pt-4">
                            <label className="text-xl font-bold text-secondary-blue block">Freelance Interest *</label>
                            <p className="text-[16px] text-text-gray/80 font-medium italic mb-6">"Are you interested in learning how to sell these AI solutions to clients?"</p>
                            <div className="flex gap-16 text-xl text-secondary-blue font-medium pl-2">
                                <label className="flex items-center gap-6 cursor-pointer group">
                                    <input type="radio" name="freelanceInterest" value="yes" onChange={handleChange} required className="accent-secondary-blue w-6 h-6" />
                                    <span>Yes</span>
                                </label>
                                <label className="flex items-center gap-6 cursor-pointer group">
                                    <input type="radio" name="freelanceInterest" value="no" onChange={handleChange} required className="accent-secondary-blue w-6 h-6" />
                                    <span>No</span>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-6 bg-secondary-blue text-white rounded-xl font-black flex items-center justify-center transition-all mt-8 text-xl mb-12 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90 active:scale-[0.99] shadow-2xl'}`}
                        >
                            {isSubmitting ? 'PROCESSING...' : 'Apply Now'}
                        </button>
                    </form>
                </div>
            </div>

            {/* PARTNERS (Light background block) */}
            <div className="bg-[#F9FAFB] py-24 px-8 w-full text-center border-t border-b border-gray-100">
                <p className="text-[16px] font-black text-secondary-blue uppercase tracking-[0.2em] leading-relaxed max-w-6xl mx-auto">
                    Industry Partners: Zindigi Prize, Demente Interactive, Google, Gray Factor,<br className="hidden sm:block" />
                    Islamabad Women Chamber of Commerce and Industries, ThinkYard.
                </p>
            </div>

            {/* FOOTER (Dark Blue) */}
            <div className="bg-secondary-blue pt-20 pb-10 px-10 w-full text-white relative">
                <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start gap-24 md:gap-16">
                    {/* Left Footer items */}
                    <div className="flex flex-col gap-14 max-w-xl">
                        {/* Logo */}
                        <div className="flex items-center mb-1">
                            <img src="/logo-dark.jpg" alt="Young Minds Forum" className="h-20 w-auto mix-blend-screen" />
                        </div>

                        <p className="text-[16px] text-white/60 leading-relaxed font-medium">
                            Young Minds Forum is a global youth leadership building<br />
                            and capacity enhancement platform, registered under the<br />
                            laws of Pakistan in 2017.
                        </p>

                        <div className="text-[16px] text-white/50 space-y-4 font-medium">
                            <p>Registered: FBR, SECP, IPO, Islamabad.</p>
                            <p>Head Office: Islamabad<br />Contact us:      | WhatsApp:<br /><a href="#" className="underline">03429393370</a> | <a href="#" className="underline">hello@ymforum.org</a></p>
                        </div>
                    </div>

                    {/* Right Subscribe block */}
                    <div className="bg-[#1A2552] p-8 sm:p-16 rounded-[40px] sm:rounded-[48px] border border-white/5 w-full max-w-lg shadow-2xl flex flex-col items-center">
                        <h4 className="font-bold text-lg sm:text-xl mb-8 sm:mb-12 text-center text-white/90 leading-relaxed">Get exclusive updates<br />straight to your inbox!</h4>
                        <div className="w-full space-y-4 sm:space-y-6">
                            <input
                                type="email"
                                placeholder="Email *"
                                className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white border-0 rounded-xl focus:ring-2 focus:ring-[#3ABBA6] outline-none text-base text-secondary-blue font-bold placeholder-gray-400 text-center"
                            />
                            <button className="w-full py-4 sm:py-5 bg-secondary-blue hover:bg-[#131b40] text-base font-bold rounded-xl transition-colors border border-white/10 shadow-2xl">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Rights Bar */}
                <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-6 text-[14px] text-white/40 mt-10 pt-8 border-t border-white/5 font-medium">
                    <p className="font-black text-white/60 uppercase tracking-[0.3em]">Agentic AI</p>
                    <p>© 2024 Young Minds Forum. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        {/* Social icons placeholder right side */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnrollmentSection;

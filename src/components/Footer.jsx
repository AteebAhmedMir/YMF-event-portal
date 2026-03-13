import { motion } from "framer-motion";
import { MessageCircle, Globe, AtSign, ArrowRight } from "lucide-react";

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
            <div className="flex items-center justify-center lg:justify-start lg:mb-20">
              <img
                src={`${import.meta.env.BASE_URL}Logo_main.png`}
                alt="Young Minds Forum"
                className="h-44 -mt-20 -mb-2 lg:-mt-32 lg:h-80 lg:-mb-32 lg:-ml-24 object-contain"
              />
            </div>

            <div className="flex flex-col max-w-lg lg:max-w-xl -mt-4 lg:-mt-10 lg:mb-12">
              <p className="text-white/80 font-medium leading-[1.6] mb-6 lg:mb-8 text-center lg:text-left text-base lg:text-lg">
                Young Minds Forum is a global youth platform building the next
                generation of AI leaders, entrepreneurs, and decision-makers.
              </p>

              <p className="text-white font-medium text-center lg:text-left text-sm lg:text-base mb-10 lg:mb-12">
                <span className="font-bold">Location:</span> ThinkYard, DHA-2,
                Islamabad.
              </p>

              <div className="flex flex-col sm:flex-row justify-between gap-8 lg:gap-8">
                {/* Left Contact Side */}
                <div className="text-center lg:text-left">
                  <p className="text-white font-bold mb-1 text-base">
                    Still have questions?
                  </p>
                  <p className="text-white mb-6 text-sm">
                    Contact us on WhatsApp
                  </p>
                  <a
                    href="https://wa.me/923495507026"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-[#F4F4F5] text-[#001A72] font-bold py-3 px-8 rounded-[12px] text-[15px] transition-transform hover:scale-105 shadow-sm"
                  >
                    Contact Us
                  </a>
                </div>

                {/* Right Inquiry Side */}
                <div className="text-center lg:text-left lg: mr-24 pl-24">
                  <p className="text-white font-bold mb-1 text-base">
                    For inquiries:
                  </p>
                  <a
                    href="mailto:info@ymforum.org"
                    className="text-white text-base underline hover:text-white/80 transition-colors"
                  >
                    info@ymforum.org
                  </a>

                  <div className="flex gap-4 justify-center lg:justify-start mt-8 mb-2">
                    <a
                      href="https://www.facebook.com/YoungMindsForum"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white rounded-full p-1.5 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#00164d"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/YoungMindsForum"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white rounded-full p-1.5 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#00164d"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.604 4.00003C20.78 4.48827 19.881 4.82997 18.944 5.01503C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7282 3.74842 13.9153 4.18338C13.1024 4.61834 12.4564 5.30961 12.0795 6.14972C11.7026 6.98983 11.6156 7.93171 11.832 8.82803C10.1551 8.74358 8.52832 8.31345 7.04328 7.56294C5.55823 6.81244 4.24439 5.75628 3.176 4.45503C2.82061 5.06649 2.63104 5.77258 2.631 6.49103C2.63098 7.82054 3.3081 9.06013 4.404 9.79303C3.74092 9.77189 3.09503 9.59325 2.52 9.27303V9.33603C2.52 11.261 3.896 12.898 5.8 13.284C5.18731 13.4502 4.54228 13.4754 3.916 13.357C4.44426 14.9983 5.96131 16.1465 7.76 16.18C6.27361 17.3465 4.43126 17.9702 2.52 17.965C2.19323 17.9653 1.86694 17.9458 1.543 17.907C3.41165 19.1091 5.60334 19.7461 7.846 19.742C15.418 19.742 19.558 13.475 19.558 8.04703C19.558 7.86803 19.554 7.69103 19.546 7.51403C20.3541 6.93043 21.0544 6.22014 21.621 5.40803L22.162 5.65593Z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/YoungMindsForum"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white rounded-full p-1.5 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00164d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                  <p className="text-white text-[13px] tracking-wide">
                    @YoungMindsForum
                  </p>
                </div>
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
                type="email"
                placeholder="EMAIL ADDRESS *"
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
          <div className="text-xl font-black text-white tracking-widest uppercase">
            Agentic AI
          </div>
          <p className="text-[9px] font-black text-white uppercase tracking-[0.4em] text-center">
            © 2024 Automation With Agentic AI. Islamabad, Pakistan.
          </p>
          <div className="flex gap-8">
            <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] cursor-pointer hover:text-teal-accent">
              Legal
            </span>
            <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] cursor-pointer hover:text-teal-accent">
              Privacy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterAction = ({ icon, label, href }) => (
  <a
    href={href}
    className="group flex items-center gap-3 text-white hover:text-teal-accent transition-colors"
  >
    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-teal-accent transition-colors">
      {icon}
    </div>
    <span className="text-[12px] font-black uppercase tracking-[0.15em]">
      {label}
    </span>
  </a>
);

export default Footer;

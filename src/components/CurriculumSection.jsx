import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const CurriculumSection = () => {
  return (
    <section
      id="curriculum"
      className="py-24 lg:py-40 bg-[#F8FAFC] px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-accent/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col justify-center items-center lg:flex-row gap-16 lg:gap-32 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex-1 lg:sticky lg:top-32 flex flex-col items-center lg:block text-center lg:text-left"
          >
            <h2 className="text-[42px] lg:text-[72px] font-black text-secondary-blue leading-[1] mb-5 tracking-tight">
              Course
              <br />
              <span className="text-primary-blue">Blueprint.</span>
            </h2>
            <p className="text-lg lg:text-xl text-text-gray/40 leading-relaxed max-w-xs font-black uppercase tracking-widest mb-8">
              Designed to take you from foundations to building high-ROI
              systems, with a dedicated track on how to sell these services.
            </p>
            <div className="w-16 h-1.5 bg-teal-accent rounded-full"></div>
          </motion.div>

          {/* Right Column */}
          <div className="flex-[1.4] flex flex-col pt-2">
            <WeekCard
              week="WEEK 01"
              title="Foundations & System Design"
              description="Understand the evolution of agents and map out real-world workflows for automation."
            />
            <WeekCard
              week="WEEK 02"
              title="No-Code Building & Multi-Agent Flows"
              description="Hands-on development with supervisor-worker models and human-escalation points."
            />
            <WeekCard
              week={
                <>
                  WEEK 03 <br /> WEEK 04
                </>
              }
              title="Governance & Professional Positioning"
              description="Implement guardrails and learn to sell AI automation as a high-value freelance service."
            />
            {/* <WeekCard
              week="WEEK 04"
              title="Governance & Selling"
              description="Deploying at scale with guardrails, ethics, and a dedicated track on pricing yourself as an AI Automation Lead."
            /> */}
          </div>
        </div>

        {/* Centered CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 lg:mt-32 p-10 lg:p-16 bg-primary-blue rounded-[48px] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 group max-w-5xl mx-auto border border-white/5"
        >
          <div className="text-center lg:text-left">
            <h4 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight text-center lg:text-left">
              Ready to build?
            </h4>
            <p className="text-white/50 text-lg lg:text-xl font-medium">
              Join Batch 01 and master the future of work.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("fullName");
              if (el)
                el.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="px-12 py-6 bg-white text-primary-blue rounded-3xl text-xl lg:text-2xl font-black hover:bg-teal-accent hover:text-secondary-blue transition-all flex flex-col items-center leading-tight group-hover:scale-105 shadow-xl"
          >
            <span className="flex items-center gap-2">
              Register Now <ArrowDownRight size={28} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const WeekCard = ({ week, title, description }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="py-10 border-b border-gray-200 group flex flex-col sm:flex-row gap-8 lg:gap-12 hover:bg-white transition-all px-6 -mx-6 rounded-[32px]"
  >
    <span className="text-[12px] font-black text-teal-accent tracking-[0.3em] uppercase shrink-0 pt-1.5">
      {week}
    </span>
    <div>
      <h3 className="text-2xl lg:text-3xl font-black text-secondary-blue mb-3 tracking-tight group-hover:text-primary-blue transition-colors italic text-center lg:text-left">
        {title}
      </h3>
      <p className="text-base lg:text-lg text-text-gray/60 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  </motion.div>
);

export default CurriculumSection;

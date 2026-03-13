import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  Activity,
  Globe,
  Lock,
  Cpu as AgentIcon,
} from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Background Light Leaks */}
      <div className="absolute top-0 right-0  h-[600px] bg-primary-blue/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="bg-secondary-blue rounded-t-[48px] lg:rounded-t-[100px] py-16 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-block px-5 py-1.5 bg-white/5 border text-white border-white/10 rounded-full text-teal-accent text-[10px] font-black uppercase tracking-[0.4em]">
                  Agentic Ecosystem
                </div>
                <h2 className="text-[42px] lg:text-[72px] font-black text-white leading-[1] mb-8 tracking-tighter">
                  Logic &<br />
                  <span className="text-teal-accent">Autonomy.</span>
                </h2>
                <p className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-lg font-medium">
                  Agentic AI is the next generation of automation. It goes
                  beyond simple copilots by enabling AI agents to reason, use
                  tools, and execute workflows independently.{" "}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 pt-8">
                  <Point
                    number="01"
                    title="Autonomy"
                    description="Agents can operate with human oversight to plan and execute multi-step tasks."
                  />
                  <Point
                    number="02"
                    title="Reasoning"
                    description="Agents analyze data and make decisions based on defined logical roles (planner, executor, reviewer)."
                  />
                  <Point
                    number="03"
                    title="Tool Integration"
                    description="Easily connect agents to Google Workspace, Microsoft 365, and other business software."
                  />
                  <Point
                    number="04"
                    title="No-Code Building"
                    description="Build powerful systems using tools like make.com and n8n without writing complex code."
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Area: Immersive Graphic */}
            <div className="flex-1 w-full relative h-[500px] lg:h-[600px] flex items-center justify-center">
              {/* Central Glowing Orb */}
              <div className="relative w-[280px] h-[280px] lg:w-[450px] lg:h-[450px] border border-white/10 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-4 lg:inset-8 border border-white/5 rounded-full border-dashed"
                ></motion.div>

                {/* Core */}
                <div className="relative z-10 w-24 h-24 lg:w-40 lg:h-40 bg-teal-accent/20 blur-3xl rounded-full"></div>
                <div className="absolute z-20 w-14 h-14 lg:w-20 lg:h-20 glass-card rounded-2xl flex items-center justify-center text-teal-accent shadow-2xl border-white/20">
                  <AgentIcon size={32} className="animate-pulse" />
                </div>

                {/* Floating Cards in Orbit */}
                <FloatingGlassCard
                  icon={<Zap size={16} />}
                  title="Live Reasoning"
                  className="top-0 left-5"
                  delay={0}
                />
                <FloatingGlassCard
                  icon={<Globe size={16} />}
                  title="Global Tools"
                  className="top-1/4 right-0 translate-x-10"
                  delay={1}
                />
                <FloatingGlassCard
                  icon={<Lock size={16} />}
                  title="Governance"
                  className="bottom-1/4 left-0 -translate-x-10"
                  delay={2}
                />
                <FloatingGlassCard
                  icon={<Activity size={16} />}
                  title="Scalability"
                  className="bottom-0 right-5"
                  delay={3}
                />

                {/* Connection Lines (Visual effects) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="48%"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Point = ({ number, title, description }) => (
  <div className="space-y-3 group">
    <div className="text-teal-accent text-2xl font-black opacity-30 group-hover:opacity-100 transition-opacity">
      {number}
    </div>
    <h3 className="text-xl font-black text-white tracking-tight leading-none">
      {title}
    </h3>
    <p className="text-[15px] text-white/40 leading-relaxed font-medium">
      {description}
    </p>
  </div>
);

const FloatingGlassCard = ({ icon, title, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    animate={{ y: [0, -15, 0] }}
    transition={{
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      default: { duration: 0.5, delay },
    }}
    className={`absolute p-4 lg:p-6 glass-card rounded-2xl flex items-center gap-4 z-20 border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] ${className}`}
  >
    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-teal-accent">
      {icon}
    </div>
    <span className="text-white font-black text-[10px] lg:text-[12px] tracking-widest uppercase shrink-0">
      {title}
    </span>
  </motion.div>
);

export default CTASection;

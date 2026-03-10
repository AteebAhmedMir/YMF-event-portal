const FeaturesSection = () => {
    return (
        <section id="features" className="py-32 bg-[#F9FAFB] flex justify-center">
            <div className="container mx-auto px-8 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-24 items-start justify-between">

                    {/* Left Column */}
                    <div className="flex-1 max-w-2xl">
                        <h2 className="text-[48px] font-black text-secondary-blue leading-[1.1] mb-16 pt-20">
                            The manual work<br />trap.
                        </h2>
                        <p className="text-xl text-text-gray/80 leading-relaxed font-medium">
                            Professional workloads are often bogged down by repetitive tasks that are mundane and time-consuming. This bootcamp helps you break free through practical AI systems.                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 w-full max-w-3xl relative">
                        {/* Decorative Line connection mimicking design */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 hidden md:block opacity-50 -ml-24"></div>

                        <div className="space-y-16">
                            {/* Point 1 */}
                            <div className="relative pb-10 border-b border-gray-200">
                                <h4 className="text-[20px] font-bold text-secondary-blue mb-3.5">Solve Complex Inefficiency</h4>
                                <p className="text-[16px] text-text-gray/70 leading-relaxed font-medium max-w-md"> Move past minor task automations and build full end-to-end intelligent agent workflows.</p>
                            </div>

                            {/* Point 2 */}
                            <div className="relative pb-10 border-b border-gray-200">
                                <h4 className="text-[20px] font-bold text-secondary-blue mb-3.5">Boost Domain Impact</h4>
                                <p className="text-[16px] text-text-gray/70 leading-relaxed font-medium max-w-md">Leverage industry specific data to align AI output directly to high-value outcomes.</p>
                            </div>

                            {/* Point 3 */}
                            <div className="relative pb-10 border-gray-200">
                                <h4 className="text-[20px] font-bold text-secondary-blue mb-3.5">Practical Business Logic</h4>
                                <p className="text-[16px] text-text-gray/70 leading-relaxed font-medium max-w-md">Focus on implementation over theory. Connect agents, APIs, and databases seamlessly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

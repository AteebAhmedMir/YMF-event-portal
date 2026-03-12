import { motion } from 'framer-motion';

const BrandsSection = () => {
    const brands = [
        { name: 'n8n', icon: `${import.meta.env.BASE_URL}brand-icons/n8n.svg` },
        { name: 'ChatGPT', icon: `${import.meta.env.BASE_URL}brand-icons/chatgpt.svg` },
        { name: 'Make', icon: `${import.meta.env.BASE_URL}brand-icons/make.svg` },
        { name: 'Python', icon: `${import.meta.env.BASE_URL}brand-icons/python.svg` },
        { name: 'Javascript', icon: `${import.meta.env.BASE_URL}brand-icons/javascript.svg` },
        { name: 'Upwork', icon: `${import.meta.env.BASE_URL}brand-icons/upwork.svg` },
        { name: 'Google Workspace 365', icon: `${import.meta.env.BASE_URL}brand-icons/google.svg` },
        { name: 'Microsoft 365', icon: `${import.meta.env.BASE_URL}brand-icons/microsoft.svg` },
    ];

    // Duplicate brands to create seamless loop
    const duplicatedBrands = [...brands, ...brands];

    return (
        <section className="bg-white py-14 lg:py-20 border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <p className="text-[10px] font-black text-[#828b9a] uppercase tracking-[0.4em] text-center">Powering Workflows With</p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <motion.div
                    className="flex whitespace-nowrap gap-x-12 lg:gap-x-20 items-center py-4"
                    animate={{ x: [0, "-50%"] }}
                    transition={{
                        duration: 30, // Slightly faster for better "continuous" feel
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {duplicatedBrands.map((brand, index) => (
                        <div key={`${brand.name}-${index}`} className="flex items-center gap-4 group cursor-default shrink-0">
                            <div className="w-6 h-6 lg:w-7 lg:h-7 flex items-center justify-center grayscale brightness-[0.6] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                                <img
                                    src={brand.icon}
                                    alt={`${brand.name} icon`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <span className="text-sm lg:text-[15px] font-black text-[#4b5563] tracking-normal">{brand.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Fade overlays for smooth edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default BrandsSection;

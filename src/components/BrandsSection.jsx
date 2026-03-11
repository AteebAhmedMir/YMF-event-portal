import { motion } from 'framer-motion';

const BrandsSection = () => {
    const brands = [
        { name: 'n8n', icon: '∞' },
        { name: 'ChatGPT', icon: '●' },
        { name: 'Make', icon: '◆' },
        { name: 'Python', icon: 'ρ' },
        { name: 'Javascript', icon: 'JS' },
        { name: 'Upwork', icon: 'Up' },
        { name: 'Google Workspace', icon: 'G' },
        { name: 'Microsoft 365', icon: 'M' },
    ];

    // Duplicate brands to create seamless loop
    const duplicatedBrands = [...brands, ...brands];

    return (
        <section className="bg-white py-10 lg:py-16 border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-8">
                <p className="text-[10px] font-black text-text-gray/40 uppercase tracking-[0.4em] text-center">Powering Workflows With</p>
            </div>
            
            <div className="relative flex overflow-x-hidden">
                <motion.div 
                    className="flex whitespace-nowrap gap-x-12 lg:gap-x-20 items-center py-2"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {duplicatedBrands.map((brand, index) => (
                        <div key={`${brand.name}-${index}`} className="flex items-center gap-2 group cursor-default shrink-0">
                            <span className="text-lg lg:text-xl font-black text-secondary-blue/20 group-hover:text-teal-accent transition-colors">{brand.icon}</span>
                            <span className="text-sm lg:text-base font-bold text-secondary-blue tracking-tight">{brand.name}</span>
                        </div>
                    ))}
                </motion.div>
                
                {/* Fade overlays for smooth edges */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default BrandsSection;

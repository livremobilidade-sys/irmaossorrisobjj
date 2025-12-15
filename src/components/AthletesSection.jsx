import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Trophy, Target, Award, ChevronRight, ChevronsRight } from 'lucide-react'
import { useContent } from '../context/ContentContext'

export default function AthletesSection() {
    const [selectedAthlete, setSelectedAthlete] = useState(null)
    const containerRef = useRef(null)
    const { content } = useContent()
    const { athletes } = content

    // Mobile Auto-Scroll Loop
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let interval;
        const startAutoScroll = () => {
            interval = setInterval(() => {
                // Only scroll if window is mobile size (optional, but good for UX)
                if (window.innerWidth >= 768) return;

                if (container) {
                    const maxScroll = container.scrollWidth - container.clientWidth;
                    const cardWidth = 300; // approx card width + gap

                    if (container.scrollLeft >= maxScroll - 10) {
                        // Reset to start
                        container.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        // Scroll next
                        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
                    }
                }
            }, 3000); // 3 seconds per slide
        };

        startAutoScroll();

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="athletes" className="py-24 bg-black relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen -translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">
                        Nossos Atletas
                    </h2>
                    <p className="text-xl text-gray-400">Os heróis do tatame</p>
                </div>

                {/* Container Wrapper for Indicator Positioning */}
                <div className="relative">

                    {/* Cards Container - Mobile Scroll / Desktop Grid */}
                    <div
                        ref={containerRef}
                        className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 scrollbar-hide pt-16"
                    >
                        {athletes.map((athlete, index) => (
                            <div key={index} onClick={() => setSelectedAthlete(athlete)} className="min-w-[280px] md:min-w-0 snap-center relative group cursor-pointer pl-1">

                                {/* The Card Base (Glass) */}
                                <div className={`
                                    relative mt-12 bg-[#111]/40 backdrop-blur-xl rounded-3xl p-6 pt-16
                                    border border-white/10 ${athlete.color} border-t-4
                                    shadow-lg shadow-black/50
                                    transition-all duration-300 
                                    group-hover:bg-[#1a1a1a]/80 group-hover:border-opacity-100 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]
                                `}>
                                    {/* Pop-out Image Area */}
                                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-40 h-48 z-20">
                                        <div className="relative w-full h-full">
                                            {/* Glow behind head */}
                                            <div className="absolute inset-0 bg-neon-green/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Masked Image */}
                                            <img
                                                src={athlete.img}
                                                alt={athlete.name}
                                                className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10"
                                                style={{
                                                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                                                }}
                                            />

                                            {/* Floating Holographic Icons */}
                                            <div className="absolute -right-4 top-10 animate-float-slow bg-black/80 p-2 rounded-full border border-white/20 shadow-lg">
                                                <span className="text-lg">🥋</span>
                                            </div>
                                            <div className="absolute -left-4 top-20 animate-float-delayed bg-black/80 p-2 rounded-full border border-white/20 shadow-lg">
                                                <span className="text-lg">⚡</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center mt-6">
                                        <h3 className="text-2xl font-black text-white uppercase italic tracking-wider mb-1">
                                            {athlete.name}
                                        </h3>
                                        <p className={`text-sm font-bold uppercase tracking-widest mb-6 ${athlete.color.replace('border-', 'text-')}`}>
                                            "{athlete.nickname}"
                                        </p>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-3 text-left bg-black/20 rounded-xl p-4 border border-white/5">
                                            <div>
                                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Idade</p>
                                                <p className="text-white font-bold text-sm">{athlete.age}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Faixa</p>
                                                <p className="text-white font-bold text-sm">{athlete.belt}</p>
                                            </div>
                                            <div className="col-span-2 mt-1">
                                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Categoria</p>
                                                <p className="text-white font-bold text-sm">{athlete.category}</p>
                                            </div>
                                            <div className="col-span-2 mt-2 pt-2 border-t border-white/5">
                                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Superpoder</p>
                                                <p className="text-neon-green font-bold text-sm animate-pulse">{athlete.power}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Scroll Indicator - Floating Arrow */}
                    <div className="md:hidden flex justify-end pr-4 mt-2 pointer-events-none">
                        <motion.div
                            animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="flex items-center gap-1 text-neon-green text-xs font-bold uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md"
                        >
                            <span>Deslize</span>
                            <ChevronsRight size={16} />
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* ATHLETE DETAILS MODAL */}
            <AnimatePresence>
                {selectedAthlete && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                            onClick={() => setSelectedAthlete(null)}
                        ></div>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111] border border-white/10 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
                            onClick={(e) => e.stopPropagation()} // Prevent close on modal click
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedAthlete(null)}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full border border-white/10 text-white hover:bg-neon-green hover:text-black transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Left: Image Panel */}
                            <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden bg-black">
                                <img
                                    src={selectedAthlete.modalImg || selectedAthlete.img}
                                    alt={selectedAthlete.name}
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>

                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-3xl font-black text-white uppercase italic leading-none mb-1">
                                        {selectedAthlete.name}
                                    </h3>
                                    <p className={`text-lg font-bold uppercase tracking-widest ${selectedAthlete.color.replace('border-', 'text-')}`}>
                                        "{selectedAthlete.nickname}"
                                    </p>
                                </div>
                            </div>

                            {/* Right: Info Panel */}
                            <div className="w-full md:w-3/5 p-8 md:p-10 space-y-8 bg-[#111]">

                                {/* Resume */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3 text-neon-green">
                                        <Award size={20} />
                                        <h4 className="font-bold uppercase tracking-wider text-sm">Resumo Profissional</h4>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed text-sm md:text-base border-l-2 border-white/10 pl-4">
                                        {selectedAthlete.resume}
                                    </p>
                                </div>

                                {/* Titles */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3 text-neon-green">
                                        <Trophy size={20} />
                                        <h4 className="font-bold uppercase tracking-wider text-sm">Principais Títulos</h4>
                                    </div>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {selectedAthlete.titles.map((title, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-neon-green"></div>
                                                {title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Goals */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3 text-neon-green">
                                        <Target size={20} />
                                        <h4 className="font-bold uppercase tracking-wider text-sm">Objetivos de Carreira</h4>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed text-sm italic">
                                        "{selectedAthlete.goals}"
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .mask-gradient {
                    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
                    -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .animate-float-slow {
                    animation: float-slow 3s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-slow 4s ease-in-out infinite 1.5s;
                }
            `}</style>
        </section>
    )
}

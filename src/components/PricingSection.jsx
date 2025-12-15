import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Star, ArrowRight, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'

import { useContent } from '../context/ContentContext'

export default function PricingSection({ isOpen, onClose, onOpen }) {
    const { content } = useContent()
    const { pricing } = content
    const { tiers } = pricing
    const [isPaused, setIsPaused] = useState(false)
    const containerRef = useRef(null)

    // Mobile Auto-Scroll Loop
    useEffect(() => {
        if (isPaused) return;

        const container = containerRef.current;
        if (!container) return;

        let interval;
        const startAutoScroll = () => {
            interval = setInterval(() => {
                // Only scroll if window is mobile size
                if (window.innerWidth >= 768) return;

                if (container) {
                    const maxScroll = container.scrollWidth - container.clientWidth;
                    const cardWidth = container.clientWidth * 0.85; // approx 85vw

                    if (container.scrollLeft >= maxScroll - 10) {
                        // Reset to start
                        container.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        // Scroll next
                        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
                    }
                }
            }, 5000); // 5 seconds per slide
        };

        startAutoScroll();

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section id="pricing" className="py-24 bg-[#080808] relative overflow-hidden border-t border-neon-green/5">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-neon-green/5 to-transparent pointer-events-none z-0"></div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-white text-black p-8 rounded-2xl w-full max-w-md relative overflow-hidden text-center shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                            >
                                <span className="sr-only">Fechar</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            <div className="flex flex-col items-center justify-center gap-6">
                                <img
                                    src={`${import.meta.env.BASE_URL} apoia - logo.png`}
                                    alt="Apoia.se Logo"
                                    className="h-12 object-contain"
                                />

                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-[#eb4a4d]">Apoie os Irmãos Sorriso</h3>
                                    <p className="text-gray-600 text-sm max-w-xs mx-auto">
                                        Sua contribuição ajuda a custear inscrições, viagens e treinamentos para que continuemos levando o Jiu-Jitsu para o mundo.
                                    </p>
                                </div>

                                <div className="w-full space-y-3 pt-2">
                                    <a
                                        href="https://novo.apoia.se/support/irmaossorrisobjj/new?step=new-support"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={onClose}
                                        className="block w-full bg-[#eb4a4d] text-white py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#d93d40] transition-colors shadow-lg shadow-[#eb4a4d]/20"
                                    >
                                        Quero Apoiar Agora
                                    </a>
                                    <button
                                        onClick={onClose}
                                        className="text-gray-400 hover:text-gray-600 font-semibold text-xs uppercase tracking-widest transition-colors"
                                    >
                                        Talvez depois
                                    </button>
                                </div>

                                <div className="text-[10px] text-gray-400 font-medium">
                                    Ambiente seguro e transparente pela Apoia.se
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        {pricing.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        {pricing.subtitle}
                    </p>
                </div>

                {/* Cards Container - Horizontal Scroll on Mobile, Grid on Desktop */}
                <div
                    ref={containerRef}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-12 md:pb-0 snap-x snap-mandatory px-2 md:px-0 -mx-4 md:mx-0 scrollbar-hide"
                >
                    {tiers.map((tier, index) => {
                        const isPremium = index >= 4; // Brown/Black belts
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className={`
                                    min-w-[85vw] md:min-w-0 snap-center
                                    relative flex flex-col justify-between group
                                    rounded-2xl p-8 
                                    bg-[#111]/40 backdrop-blur-sm
                                    border hover:border-neon-green/50 transition-all duration-500
                                    ${tier.highlight
                                        ? 'border-neon-green/30 shadow-[0_0_30px_rgba(204,255,0,0.1)]'
                                        : 'border-white/5 shadow-lg shadow-black/50'}
                                    hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)]
                                `}
                            >
                                {/* Floating Background Elements visual check */}
                                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-neon-green/10 transition-colors duration-500"></div>
                                </div>

                                <div>
                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-6 relative z-10">
                                        <div>
                                            <h3 className={`text - 2xl font - black uppercase tracking - tighter mb - 1 ${tier.highlight ? 'text-neon-green drop-shadow-[0_0_8px_rgba(204,255,0,0.5)]' : 'text-white'} `}>
                                                {tier.name}
                                            </h3>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{tier.subtitle}</p>
                                        </div>
                                        {/* Optional Belt/Rank Indicator could go here */}
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-4 mb-8 relative z-10 min-h-[180px]">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 group/item">
                                                <div className="mt-1 w-4 h-4 rounded-full bg-neon-green/10 flex items-center justify-center group-hover/item:bg-neon-green group-hover/item:shadow-[0_0_10px_rgba(204,255,0,0.4)] transition-all">
                                                    <Check size={10} className="text-neon-green group-hover/item:text-black" />
                                                </div>
                                                <span className="text-sm text-gray-300 font-medium leading-tight group-hover/item:text-white transition-colors">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom Pricing & Action */}
                                <div className="relative z-10 pt-6 border-t border-white/5">
                                    {tier.highlight && (
                                        <p className="text-[10px] text-gray-500 mb-3 italic text-center">* Aplicação após 6 meses de apoio contínuo.</p>
                                    )}

                                    <div className="flex justify-between items-end mb-4">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Apoio Mensal</span>
                                            <div className="flex items-baseline text-white">
                                                <span className="text-sm font-light mr-1">R$</span>
                                                <span className={`text - 3xl font - black ${isPremium ? 'text-neon-green' : ''} `}>{tier.price}</span>
                                                <span className="text-sm text-gray-400 ml-1">/mês</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={onOpen}
                                        className={`
                                            w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-300
                                            flex items-center justify-center gap-2 group-hover:gap-3
                                            ${tier.highlight
                                                ? 'bg-neon-green text-black hover:bg-white shadow-[0_0_20px_rgba(204,255,0,0.4)]'
                                                : 'bg-white/10 text-white border border-white/10 hover:bg-neon-green hover:text-black hover:border-transparent'}
                                        `}
                                    >
                                        Apoiar <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile Scroll Indicator - Floating Arrow */}
                <div className="md:hidden flex justify-end pr-4 mt-2 pointer-events-auto">
                    <motion.button
                        onClick={() => {
                            const container = containerRef.current;
                            if (container) {
                                const maxScroll = container.scrollWidth - container.clientWidth;
                                const cardWidth = container.clientWidth * 0.85;
                                if (container.scrollLeft >= maxScroll - 10) {
                                    container.scrollTo({ left: 0, behavior: 'smooth' });
                                } else {
                                    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
                                }
                            }
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex items-center gap-1 text-neon-green text-xs font-bold uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md"
                    >
                        <span>Deslize</span>
                        <ChevronsRight size={16} />
                    </motion.button>
                </div>

            </div>
        </section>
    )
}

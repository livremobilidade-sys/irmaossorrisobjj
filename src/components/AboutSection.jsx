import { motion } from 'framer-motion'
import { Medal, Trophy, Crown, ArrowUpRight } from 'lucide-react'

import { useContent } from '../context/ContentContext'

export default function AboutSection() {
    const { content } = useContent()
    const { about } = content

    return (
        <section className="relative py-32 bg-[#050505] overflow-hidden">
            {/* Background Texture & Ambient Light */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content - Typography (Span 5) */}
                    <div className="lg:col-span-5 relative z-20 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Trophy className="text-neon-green drop-shadow-[0_0_15px_rgba(204,255,0,0.6)]" size={40} />
                                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                                    {about.title}
                                </h2>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed font-light mb-8 max-w-md">
                                {about.text1}
                            </p>

                            <div className="relative pl-6 border-l-2 border-neon-green/30">
                                <p className="text-gray-500 text-base leading-relaxed italic">
                                    "{about.quote}"
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Floating Image (Span 7) */}
                    <div className="lg:col-span-7 relative z-10 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="relative z-10 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src={about.image}
                                    alt="Irmãos Sorriso"
                                    className="w-full h-auto object-cover rounded-sm shadow-2xl shadow-black/50"
                                />

                                {/* Neon Border/Glow roughly around image */}
                            </div>

                            {/* Logos Overlays - Positioned on the borders (Floating) */}
                            {/* Mario Leitao Logo (Bottom Left) */}
                            <div className="absolute -bottom-8 -left-8 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#050505] shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 hover:scale-110 transition-transform duration-300 animate-float-delayed">
                                <img src={`${import.meta.env.BASE_URL}logo-mario.jpg`} alt="Mario Leitao" className="w-full h-full object-cover" />
                            </div>

                            {/* CIA Paulista Logo (Right Edge) */}
                            <div className="absolute top-1/2 -right-8 md:-right-12 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#050505] shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 hover:scale-110 transition-transform duration-300 animate-float-slow">
                                <img src={`${import.meta.env.BASE_URL}logo-cia.jpg`} alt="CIA Paulista" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            <style>{`
                .mask-rough-edges {
                    /* Placeholder for specific mask if needed, simplified with CSS mask above */
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-slow 8s ease-in-out infinite 2s;
                }
            `}</style>
        </section>
    )
}

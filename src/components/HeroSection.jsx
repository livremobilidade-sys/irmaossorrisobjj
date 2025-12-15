import { motion } from 'framer-motion'
import { ArrowRight, Medal, Disc, Award, ChevronDown } from 'lucide-react'

import { useContent } from '../context/ContentContext'

export default function HeroSection({ onOpenPricing }) {
    const { content } = useContent()
    const { hero } = content

    return (
        <section id="hero" className="relative flex flex-col items-center justify-center pt-20 pb-32 min-h-[90vh] md:min-h-screen overflow-visible z-10">

            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                {/* Image Removed as per request */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
                <div className="absolute inset-0 bg-brand-dark/30 mix-blend-multiply"></div>
            </div>

            {/* Ambient Lights Overlay */}
            <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-neon-green/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-10" />

            {/* Content Container */}
            <div className="container mx-auto px-6 max-w-7xl relative z-20 flex flex-col justify-center h-full">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    {/* Floating Element Small */}
                    <div className="mb-4 flex items-center gap-2 text-neon-green/80 font-bold uppercase tracking-widest text-xs">
                        <Award size={16} />
                        <span>Patrocínio Oficial</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-4 tracking-tighter mix-blend-overlay lg:mix-blend-normal">
                        {hero.titleLine1}<br />
                        <span className="text-neon-green drop-shadow-[0_0_20px_rgba(204,255,0,0.4)]">
                            {hero.titleLine2}
                        </span>
                    </h1>

                    <p className="text-gray-300 text-sm md:text-base font-medium max-w-md leading-relaxed mb-6 border-l-2 border-neon-green pl-4">
                        {hero.subtitle}
                    </p>

                    <motion.button
                        onClick={onOpenPricing}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
                            px-8 py-4 rounded-xl 
                            bg-neon-green text-black font-black uppercase tracking-widest text-sm
                            shadow-[0_0_20px_rgba(204,255,0,0.4)]
                            hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]
                            transition-all duration-300
                            flex items-center gap-2 group
                        "
                    >
                        <span>Quero Apoiar</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>


                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    )
}

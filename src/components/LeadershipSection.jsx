import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Medal, ChevronRight, ChevronLeft } from 'lucide-react'

const slides = [
    "/team-1.jpg",
    "/team-2.jpg"
]

export default function LeadershipSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute right-0 top-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Identity & History (5 cols) */}
                    <div className="lg:col-span-5 relative order-2 lg:order-1">

                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-12 -right-24 w-24 h-[2px] bg-gradient-to-r from-neon-green/50 to-transparent"></div>



                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                                A Força da <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-500">Nossa Bandeira</span>
                            </h2>

                            <div className="border-l-2 border-neon-green/50 pl-6 mb-8">
                                <p className="text-lg text-gray-300 italic font-light">
                                    "Ninguém vence sozinho. Por trás de cada medalha dos Irmãos Sorriso, existe a sabedoria do Mestre Mario Leitão, a energia da equipe CIA Paulista e nossa academia JAction."
                                </p>
                            </div>

                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                Mais do que atletas, formamos cidadãos. No nosso tatame, aprendemos que a disciplina supera o talento e que a lealdade é a maior vitória. Essa é a família que nos prepara para as batalhas da vida.
                            </p>
                        </motion.div>
                    </div>


                    {/* Right Column: Media Portal (7 cols) */}
                    <div className="lg:col-span-7 relative order-1 lg:order-2">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* The Frame Container (Rounded, Green Shadow, Semi-transparent) */}
                            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/20 bg-[#111] group shadow-[0_0_50px_-10px_rgba(164,214,94,0.3)]">

                                {/* Neon Edges Highlights */}
                                <div className="absolute inset-0 border border-neon-green/30 rounded-[2rem] z-20 pointer-events-none"></div>

                                {/* Slideshow Image with Fade Effect */}
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentSlide}
                                        src={slides[currentSlide]}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1.5, ease: "circOut" }}
                                        alt="Equipe reunida"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </AnimatePresence>

                                {/* Glass Overlay / Vignette */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>

                                {/* Floating UI Controls */}
                                <div className="absolute bottom-6 right-6 z-30 flex gap-2">
                                    <button
                                        onClick={prevSlide}
                                        className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-neon-green hover:text-black transition-all"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-neon-green hover:text-black transition-all"
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                </div>



                            </div>

                            {/* Decorative Floating Elements around the frame */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-green/5 rounded-full blur-2xl"></div>

                        </motion.div>

                        {/* Floating Logos - Moved to Bottom Right */}
                        <div className="flex justify-center gap-8 mt-12 relative z-20">
                            {/* Professor Logo (Mario) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-32 h-32 rounded-full bg-black/50 border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.15)] relative group overflow-hidden"
                            >
                                <img src="/logo-mario.jpg" alt="Mestre Mario Leitão" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                            </motion.div>

                            {/* Team Logo (CIA Paulista) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                                className="w-32 h-32 rounded-full bg-black/50 border border-neon-green/30 flex items-center justify-center shadow-[0_0_30px_rgba(164,214,94,0.3)] relative group overflow-hidden"
                            >
                                <img src="/logo-cia.jpg" alt="CIA Paulista" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                            </motion.div>

                            {/* Action Fitness Logo */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-32 h-32 rounded-full bg-black/50 border border-orange-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.3)] relative group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white p-2"> {/* Added white background as logo has transparency/black text */}
                                    <img src="/logo-action.png" alt="Academia Action Fitness" className="w-full h-full object-contain" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

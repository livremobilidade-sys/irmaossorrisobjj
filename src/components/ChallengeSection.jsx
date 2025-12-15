import { motion } from 'framer-motion'
import { Plane, ClipboardCheck, Dumbbell, ArrowRight, HeartPulse, CreditCard, Bus } from 'lucide-react'

import { useContent } from '../context/ContentContext'

const iconMap = {
    "Viagens & Transporte": Plane,
    "Inscrições": ClipboardCheck,
    "Equipamentos & Nutrição": Dumbbell,
    "Saúde & Recuperação": HeartPulse,
    "Taxas & Filiações": CreditCard,
    "Logística Diária": Bus
}

export default function ChallengeSection() {
    const { content } = useContent()
    const { challenges } = content

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Main Card - Source of Light (Left Column) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-neon-green text-brand-dark rounded-3xl p-8 h-full min-h-[500px] relative overflow-hidden group flex flex-col justify-between shadow-[0_0_40px_rgba(204,255,0,0.3)]">
                            {/* Techno Texture */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent pointer-events-none"></div>

                            {/* Inner Glow/Highlight */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-[80px] rounded-full pointer-events-none mix-blend-overlay"></div>

                            <div className="relative z-10">
                                <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
                                    O<br />De<br />Sa<br />Fio
                                </h2>
                                <p className="font-bold text-lg leading-tight uppercase tracking-tight opacity-90 max-w-[200px]">
                                    Para onde vai seu apoio e como ele impulsiona nossa vitória.
                                </p>
                            </div>

                            <div className="relative z-10 mt-12">
                                <span className="block text-xs font-black uppercase tracking-widest mb-2 opacity-60">Impacto Real</span>
                                <ArrowRight size={48} className="text-black transform group-hover:translate-x-2 transition-transform duration-300" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Glass Content Grid (Right Columns) */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {challenges.map((challenge, index) => {
                            const IconComponent = iconMap[challenge.title] || Plane; // Fallback icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="group relative bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:bg-[#111111]/80 transition-all duration-300 hover:border-neon-green/30"
                                >
                                    {/* Top Edge Shine */}
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="flex flex-col h-full justify-between">
                                        <div className="mb-4">
                                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-neon-green group-hover:scale-110 group-hover:bg-neon-green group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                                <IconComponent size={22} />
                                            </div>
                                            <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2 group-hover:text-neon-green transition-colors">{challenge.title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{challenge.description}</p>
                                        </div>

                                        {/* Subtle line at bottom to anchor */}
                                        <div className="w-8 h-[2px] bg-white/10 group-hover:bg-neon-green/50 transition-colors mt-2" />
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

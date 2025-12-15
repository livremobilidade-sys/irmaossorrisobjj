import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { useContent } from '../context/ContentContext'

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null)
    const { content } = useContent()
    const { faq } = content

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Atmosphere - Fade to absolute black */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-black pointer-events-none"></div>

            {/* Subtle ambient light from bottom (preparation for footer) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-neon-green/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center items-center gap-3 mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Perguntas Frequentes
                    </h2>
                    <div className="w-2 h-2 rounded-full bg-neon-green shadow-[0_0_10px_#ccff00] animate-pulse"></div>
                </motion.div>

                {/* FAQ List - Floating Glass Bars */}
                <div className="flex flex-col gap-6">
                    {faq.map((faqItem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <motion.div
                                onClick={() => toggleFAQ(index)}
                                className={`
                                    relative overflow-hidden rounded-2xl cursor-pointer border group transition-all duration-300
                                    ${activeIndex === index
                                        ? 'bg-[#111] border-neon-green/50 shadow-[0_10px_30px_-5px_rgba(164,214,94,0.15)] scale-[1.02] z-10'
                                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                    }
                                `}
                            >
                                {/* Active State Neon Glow Line (Left) */}
                                {activeIndex === index && (
                                    <motion.div
                                        layoutId="active-glow"
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-neon-green shadow-[0_0_15px_#ccff00]"
                                    />
                                )}

                                <div className="p-6 flex items-center justify-between gap-4">
                                    <h3 className={`font-semibold text-lg transition-colors ${activeIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                                        {faqItem.question}
                                    </h3>
                                    <div className={`
                                        w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300
                                        ${activeIndex === index ? 'bg-neon-green text-black border-neon-green rotate-180' : 'bg-transparent text-gray-400 border-white/20 group-hover:border-white/50'}
                                    `}>
                                        {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 pt-0">
                                                <p className="text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                                    {faqItem.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

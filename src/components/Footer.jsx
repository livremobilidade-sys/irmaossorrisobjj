import { motion } from 'framer-motion'
import { Instagram, FileText, Home, Users, Heart, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

// WhatsApp Icon
const WhatsAppIcon = ({ size = 20, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

export default function Footer({ onOpenPricing }) {
    return (
        <footer className="relative pt-32 pb-12 overflow-hidden flex flex-col items-center justify-end">

            {/* Ambient Lighting at Page Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black via-[#050505] to-transparent pointer-events-none z-0"></div>
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-neon-green/20 blur-[80px] rounded-full pointer-events-none z-0"></div>

            {/* THE DOCK */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="relative z-10 mx-6"
            >
                <div className="
                    flex flex-col md:flex-row items-center gap-6 md:gap-12
                    px-8 py-4 
                    bg-[#0a0a0a]/80 backdrop-blur-xl 
                    border border-white/10 rounded-3xl 
                    shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]
                    ring-1 ring-white/5
                ">

                    {/* Left: Quick Nav */}
                    <nav className="flex items-center gap-6">
                        <ScrollLink
                            to="hero"
                            smooth={true}
                            duration={800}
                            className="flex flex-col items-center gap-1 group cursor-pointer"
                        >
                            <div className="p-2 rounded-xl bg-white/5 group-hover:bg-neon-green/10 group-hover:text-neon-green transition-all duration-300">
                                <Home size={20} />
                            </div>
                            <span className="text-[10px] font-medium text-gray-500 group-hover:text-white transition-colors">Home</span>
                        </ScrollLink>

                        <ScrollLink
                            to="athletes"
                            smooth={true}
                            duration={800}
                            className="flex flex-col items-center gap-1 group cursor-pointer"
                        >
                            <div className="p-2 rounded-xl bg-white/5 group-hover:bg-neon-green/10 group-hover:text-neon-green transition-all duration-300">
                                <Users size={20} />
                            </div>
                            <span className="text-[10px] font-medium text-gray-500 group-hover:text-white transition-colors">Atletas</span>
                        </ScrollLink>

                        <ScrollLink
                            to="pricing"
                            smooth={true}
                            duration={800}
                            className="flex flex-col items-center gap-1 group cursor-pointer"
                        >
                            <div className="p-2 rounded-xl bg-white/5 group-hover:bg-neon-green/10 group-hover:text-neon-green transition-all duration-300">
                                <Heart size={20} />
                            </div>
                            <span className="text-[10px] font-medium text-gray-500 group-hover:text-white transition-colors">Apoio</span>
                        </ScrollLink>
                    </nav>

                    {/* Divider */}
                    <div className="hidden md:block w-[1px] h-10 bg-white/10"></div>

                    {/* Center: Holographic Socials */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href="https://instagram.com/irmaossorrisobjj"
                            target="_blank"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#222] to-[#111] border border-white/10 flex items-center justify-center relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Instagram size={22} className="text-gray-300 group-hover:text-white relative z-10 transition-colors" />
                        </motion.a>

                        <motion.a
                            href="https://wa.me/5511945901632"
                            target="_blank"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#222] to-[#111] border border-white/10 flex items-center justify-center relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <WhatsAppIcon size={22} className="text-gray-300 group-hover:text-neon-green relative z-10 transition-colors" />
                        </motion.a>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-[1px] h-10 bg-white/10"></div>

                    {/* Right: Restricted Access */}
                    <Link to="/admin">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="
                                flex items-center gap-3 pl-1 pr-4 py-1.5 rounded-full 
                                bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-green/30 
                                transition-all duration-300 group
                            "
                        >
                            <div className="w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green">
                                <Lock size={16} />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold group-hover:text-neon-green transition-colors">Área Administrativa</span>
                                <span className="text-xs font-bold text-white">Acesso Restrito</span>
                            </div>
                        </motion.button>
                    </Link>

                </div>

                {/* Copyright - Floating below dock */}
                <div className="text-center mt-6">
                    <p className="text-[10px] text-gray-600 font-mono tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity cursor-default">
                        Designed by Evaristo SORRISO © 2025
                    </p>
                </div>
            </motion.div>

        </footer>
    )
}

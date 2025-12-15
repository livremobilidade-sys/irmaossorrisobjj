import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import AthletesSection from '../components/AthletesSection'
import ChallengeSection from '../components/ChallengeSection'
import PricingSection from '../components/PricingSection'
import LeadershipSection from '../components/LeadershipSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import TopNav from '../components/TopNav'

export default function Home() {
    const [pricingModalOpen, setPricingModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-0 md:p-8">
            <TopNav onOpenPricing={() => setPricingModalOpen(true)} />
            <main className="w-full max-w-5xl bg-brand-dark text-white selection:bg-neon-green selection:text-brand-dark md:rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10 relative">
                <HeroSection />
                <AboutSection />
                <AthletesSection />
                <LeadershipSection />
                <ChallengeSection />
                <PricingSection isOpen={pricingModalOpen} onClose={() => setPricingModalOpen(false)} onOpen={() => setPricingModalOpen(true)} />
                <FAQSection />
                <Footer onOpenPricing={() => setPricingModalOpen(true)} />
            </main>
        </div>
    )
}

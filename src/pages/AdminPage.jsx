import { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { motion } from 'framer-motion';
import { Lock, Save, RotateCcw } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function AdminPage() {
    const { content, updateContent, resetContent } = useContent();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('athletes');

    // Simple local state for editing before saving
    const [editData, setEditData] = useState(content);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'Eva$orriso1245') {
            setIsAuthenticated(true);
            setEditData(content); // Initialize edit form with current content
        } else {
            setError('Senha incorreta');
        }
    };

    const handleSave = () => {
        updateContent(editData);
        alert('Alterações salvas com sucesso!');
    };

    const handleReset = () => {
        if (window.confirm('Tem certeza que deseja restaurar o conteúdo original? Todas as alterações serão perdidas.')) {
            resetContent();
            setEditData(content); // Reload default content
            alert('Conteúdo restaurado.');
        }
    };

    const updateAthlete = (index, field, value) => {
        const newAthletes = [...editData.athletes];
        newAthletes[index] = { ...newAthletes[index], [field]: value };
        setEditData({ ...editData, athletes: newAthletes });
    };

    const updateTitle = (athleteIndex, titleIndex, value) => {
        const newAthletes = [...editData.athletes];
        const newTitles = [...newAthletes[athleteIndex].titles];
        newTitles[titleIndex] = value;
        newAthletes[athleteIndex].titles = newTitles;
        setEditData({ ...editData, athletes: newAthletes });
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Lock className="text-neon-green" size={32} />
                    </div>
                    <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-wider">Acesso Restrito</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha de Acesso"
                            className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:border-neon-green outline-none transition-colors"
                        />
                        {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-neon-green text-black font-black uppercase tracking-wider py-3 rounded-lg hover:bg-[#8bc34a] transition-colors"
                        >
                            Entrar
                        </button>
                    </form>
                    <div className="mt-6">
                        <Link to="/" className="text-gray-500 hover:text-white text-sm">Voltar para Home</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <header className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-white/10 pb-6 gap-4">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                            <span className="text-xl">←</span>
                        </Link>
                        <h1 className="text-3xl font-black uppercase tracking-tighter">Painel Administrativo</h1>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-2 px-4 py-2 border border-red-500/50 text-red-500 rounded-lg hover:bg-red-500/10 transition-colors uppercase font-bold text-sm"
                        >
                            <RotateCcw size={16} /> Restaurar Padrão
                        </button>
                        <button
                            onClick={handleSave}
                            className="flex items-center gap-2 px-6 py-2 bg-neon-green text-black rounded-lg hover:bg-[#8bc34a] transition-colors uppercase font-black tracking-wider"
                        >
                            <Save size={18} /> Salvar Alterações
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <nav className="space-y-2">
                        <button onClick={() => setActiveTab('hero')} className={`w-full text-left px-4 py-3 rounded-lg font-bold uppercase tracking-wider transition-colors ${activeTab === 'hero' ? 'bg-neon-green text-black' : 'hover:bg-white/5 text-gray-400'}`}>Hero (Início)</button>
                        <button onClick={() => setActiveTab('about')} className={`w-full text-left px-4 py-3 rounded-lg font-bold uppercase tracking-wider transition-colors ${activeTab === 'about' ? 'bg-neon-green text-black' : 'hover:bg-white/5 text-gray-400'}`}>Quem Somos</button>
                        <button onClick={() => setActiveTab('athletes')} className={`w-full text-left px-4 py-3 rounded-lg font-bold uppercase tracking-wider transition-colors ${activeTab === 'athletes' ? 'bg-neon-green text-black' : 'hover:bg-white/5 text-gray-400'}`}>Atletas</button>
                        <button onClick={() => setActiveTab('challenges')} className={`w-full text-left px-4 py-3 rounded-lg font-bold uppercase tracking-wider transition-colors ${activeTab === 'challenges' ? 'bg-neon-green text-black' : 'hover:bg-white/5 text-gray-400'}`}>Desafios</button>
                        <button onClick={() => setActiveTab('pricing')} className={`w-full text-left px-4 py-3 rounded-lg font-bold uppercase tracking-wider transition-colors ${activeTab === 'pricing' ? 'bg-neon-green text-black' : 'hover:bg-white/5 text-gray-400'}`}>Apoie (Preços)</button>
                        <button onClick={() => setActiveTab('faq')} className={`w-full text-left px-4 py-3 rounded-lg font-bold uppercase tracking-wider transition-colors ${activeTab === 'faq' ? 'bg-neon-green text-black' : 'hover:bg-white/5 text-gray-400'}`}>FAQ (Perguntas)</button>
                    </nav>

                    {/* Content Area */}
                    <div className="md:col-span-3 space-y-8">
                        {/* HERO SECTION */}
                        {activeTab === 'hero' && (
                            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 space-y-6">
                                <h3 className="text-xl font-bold text-neon-green mb-6 border-b border-white/10 pb-2">Seção Hero</h3>
                                <div>
                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Título Linha 1</label>
                                    <input type="text" value={editData.hero.titleLine1} onChange={(e) => setEditData({ ...editData, hero: { ...editData.hero, titleLine1: e.target.value } })} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Título Linha 2 (Destaque)</label>
                                    <input type="text" value={editData.hero.titleLine2} onChange={(e) => setEditData({ ...editData, hero: { ...editData.hero, titleLine2: e.target.value } })} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Subtítulo</label>
                                    <textarea rows={3} value={editData.hero.subtitle} onChange={(e) => setEditData({ ...editData, hero: { ...editData.hero, subtitle: e.target.value } })} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Texto Botão CTA</label>
                                    <input type="text" value={editData.hero.ctaText} onChange={(e) => setEditData({ ...editData, hero: { ...editData.hero, ctaText: e.target.value } })} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Link Botão CTA</label>
                                    <input type="text" value={editData.hero.ctaLink} onChange={(e) => setEditData({ ...editData, hero: { ...editData.hero, ctaLink: e.target.value } })} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                </div>
                            </div>
                        )}

                        {/* ABOUT SECTION */}
                        {activeTab === 'about' && (
                            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 space-y-6">
                                <h3 className="text-xl font-bold text-neon-green mb-6 border-b border-white/10 pb-2">Quem Somos</h3>
                                <div>
                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Título</label>
                                    <input type="text" value={editData.about.title} onChange={(e) => setEditData({ ...editData, about: { ...editData.about, title: e.target.value } })} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Texto Principal</label>
                                    <textarea rows={4} value={editData.about.text1} onChange={(e) => setEditData({ ...editData, about: { ...editData.about, text1: e.target.value } })} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Citação (Quote)</label>
                                    <textarea rows={3} value={editData.about.quote} onChange={(e) => setEditData({ ...editData, about: { ...editData.about, quote: e.target.value } })} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Caminho da Imagem</label>
                                    <input type="text" value={editData.about.image} onChange={(e) => setEditData({ ...editData, about: { ...editData.about, image: e.target.value } })} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                </div>
                            </div>
                        )}

                        {/* ATHLETES SECTION */}
                        {activeTab === 'athletes' && (
                            <div className="space-y-12">
                                {editData.athletes.map((athlete, index) => (
                                    <div key={athlete.id} className="bg-[#111] border border-white/10 rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-neon-green mb-6 border-b border-white/10 pb-2 flex items-center gap-3">
                                            <span className="text-2xl">🥋</span> {athlete.name}
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Basic Info */}
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Nome Completo</label>
                                                    <input type="text" value={athlete.name} onChange={(e) => updateAthlete(index, 'name', e.target.value)} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Apelido</label>
                                                    <input type="text" value={athlete.nickname} onChange={(e) => updateAthlete(index, 'nickname', e.target.value)} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Idade</label>
                                                        <input type="text" value={athlete.age} onChange={(e) => updateAthlete(index, 'age', e.target.value)} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Faixa</label>
                                                        <input type="text" value={athlete.belt} onChange={(e) => updateAthlete(index, 'belt', e.target.value)} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Superpoder</label>
                                                    <input type="text" value={athlete.power} onChange={(e) => updateAthlete(index, 'power', e.target.value)} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                                </div>
                                            </div>

                                            {/* Detailed Info */}
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Resumo (Popup)</label>
                                                    <textarea value={athlete.resume} onChange={(e) => updateAthlete(index, 'resume', e.target.value)} rows={4} className="w-full bg-black border border-white/20 rounded p-2 text-white text-sm" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Objetivos</label>
                                                    <textarea value={athlete.goals} onChange={(e) => updateAthlete(index, 'goals', e.target.value)} rows={3} className="w-full bg-black border border-white/20 rounded p-2 text-white text-sm" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Titles List */}
                                        <div className="mt-6">
                                            <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Títulos (Um por linha)</label>
                                            {athlete.titles.map((title, tIndex) => (
                                                <div key={tIndex} className="mb-2">
                                                    <input type="text" value={title} onChange={(e) => updateTitle(index, tIndex, e.target.value)} className="w-full bg-black border border-white/10 rounded p-2 text-gray-300 text-sm focus:border-neon-green" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* CHALLENGES */}
                        {activeTab === 'challenges' && (
                            <div className="space-y-6">
                                {editData.challenges.map((challenge, index) => (
                                    <div key={challenge.id} className="bg-[#111] border border-white/10 rounded-2xl p-6">
                                        <h3 className="text-lg font-bold text-white mb-4">Card {index + 1}</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Título</label>
                                                <input type="text" value={challenge.title} onChange={(e) => {
                                                    const newChallenges = [...editData.challenges];
                                                    newChallenges[index] = { ...newChallenges[index], title: e.target.value };
                                                    setEditData({ ...editData, challenges: newChallenges });
                                                }} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                            </div>
                                            <div>
                                                <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Descrição</label>
                                                <textarea rows={2} value={challenge.description} onChange={(e) => {
                                                    const newChallenges = [...editData.challenges];
                                                    newChallenges[index] = { ...newChallenges[index], description: e.target.value };
                                                    setEditData({ ...editData, challenges: newChallenges });
                                                }} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* PRICING */}
                        {activeTab === 'pricing' && (
                            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 space-y-6">
                                <h3 className="text-xl font-bold text-neon-green mb-6 border-b border-white/10 pb-2">Seção Apoie (Preços)</h3>
                                <div>
                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Título</label>
                                    <input type="text" value={editData.pricing.title} onChange={(e) => setEditData({ ...editData, pricing: { ...editData.pricing, title: e.target.value } })} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Subtítulo</label>
                                    <textarea rows={3} value={editData.pricing.subtitle} onChange={(e) => setEditData({ ...editData, pricing: { ...editData.pricing, subtitle: e.target.value } })} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                </div>

                                <h4 className="text-lg font-bold text-white mt-8 mb-4 border-t border-white/5 pt-6">Planos (Faixas)</h4>
                                <div className="space-y-6">
                                    {editData.pricing.tiers && editData.pricing.tiers.map((tier, index) => (
                                        <div key={index} className="bg-black/50 border border-white/10 rounded-xl p-4">
                                            <h5 className="font-bold text-neon-green mb-3">{tier.name}</h5>
                                            <div className="grid grid-cols-1 gap-4">
                                                <div>
                                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Nome do Plano</label>
                                                    <input type="text" value={tier.name} onChange={(e) => {
                                                        const newTiers = [...editData.pricing.tiers];
                                                        newTiers[index] = { ...newTiers[index], name: e.target.value };
                                                        setEditData({ ...editData, pricing: { ...editData.pricing, tiers: newTiers } });
                                                    }} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Preço</label>
                                                    <input type="text" value={tier.price} onChange={(e) => {
                                                        const newTiers = [...editData.pricing.tiers];
                                                        newTiers[index] = { ...newTiers[index], price: e.target.value };
                                                        setEditData({ ...editData, pricing: { ...editData.pricing, tiers: newTiers } });
                                                    }} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Subtítulo</label>
                                                    <input type="text" value={tier.subtitle} onChange={(e) => {
                                                        const newTiers = [...editData.pricing.tiers];
                                                        newTiers[index] = { ...newTiers[index], subtitle: e.target.value };
                                                        setEditData({ ...editData, pricing: { ...editData.pricing, tiers: newTiers } });
                                                    }} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* FAQ */}
                        {activeTab === 'faq' && (
                            <div className="space-y-6">
                                {editData.faq.map((item, index) => (
                                    <div key={item.id} className="bg-[#111] border border-white/10 rounded-2xl p-6">
                                        <h3 className="text-lg font-bold text-white mb-4">Pergunta {index + 1}</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Pergunta</label>
                                                <input type="text" value={item.question} onChange={(e) => {
                                                    const newFaq = [...editData.faq];
                                                    newFaq[index] = { ...newFaq[index], question: e.target.value };
                                                    setEditData({ ...editData, faq: newFaq });
                                                }} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                            </div>
                                            <div>
                                                <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Resposta</label>
                                                <textarea rows={3} value={item.answer} onChange={(e) => {
                                                    const newFaq = [...editData.faq];
                                                    newFaq[index] = { ...newFaq[index], answer: e.target.value };
                                                    setEditData({ ...editData, faq: newFaq });
                                                }} className="w-full bg-black border border-white/20 rounded p-2 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

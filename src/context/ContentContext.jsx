import { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

const defaultContent = {
    hero: {
        titleLine1: "MAIS QUE MEDALHAS:",
        titleLine2: "FUTUROS CAMPEÕES.",
        subtitle: "Acompanhe a jornada dos Irmãos Sorriso. Do tatame local para o pódio mundial.",
        ctaText: "Fazer Parte",
        ctaLink: "https://apoia.se/irmaossorrisobjj"
    },
    about: {
        title: "Quem Somos",
        text1: "Treinamos para vencer, mas lutamos para evoluir. Uma irmandade moldada no tatame, onde cada gota de suor constrói o caminho para o topo.",
        quote: "Cada medalha no peito carrega a esperança de um futuro brilhante. O Jiu-Jitsu é mais que um esporte, é nossa ferramenta de transformação.",
        image: "/about-overlay.png"
    },
    athletes: [
        {
            id: 1,
            name: "João Pedro",
            nickname: "JP",
            age: "18 anos",
            belt: "Faixa Azul",
            category: "Adulto - Pena",
            power: "Guardeiro",
            dream: "Lutar Com o Mica Galvão",
            color: "border-blue-500",
            img: "/athlete-jp.jpg",
            modalImg: "/athlete-jp-modal.jpg",
            resume: "Atleta de alto rendimento de Brazilian Jiu-Jitsu, competindo na classe Adulto, Faixa Azul. Reconhecido pela excelência técnica como especialista em jogo de guarda ('guardeiro'). João Pedro combina juventude (18 anos) com uma maturidade competitiva comprovada por um extenso quadro de medalhas.",
            titles: [
                "Vice-Campeão Mundial CBJJE (2025)",
                "19x Medalhista de Ouro",
                "7x Medalhista de Prata",
                "4x Medalhista de Bronze",
                "3 Troféus de Destaque (2 Ouros, 1 Prata)"
            ],
            goals: "Estabelecer-se na elite do Jiu-Jitsu mundial e enfrentar os maiores nomes da modalidade, com foco no confronto contra referências como Mica Galvão. João Pedro representa dedicação, técnica e a busca incessante pela superação."
        },
        {
            id: 2,
            name: "Marcos Francisco",
            nickname: "El Chico",
            age: "12 anos",
            belt: "Faixa Laranja",
            category: "Infanto-Juvenil B",
            power: "Armlock",
            dream: "Conquistar o Grand Slam",
            color: "border-orange-500",
            img: "/athlete-chico.jpg",
            modalImg: "/athlete-chico-modal.jpg",
            resume: "Jovem talento do Brazilian Jiu-Jitsu, competindo na classe Juvenil A, Faixa Laranja. Conhecido nos tatames pela precisão técnica, Marcos é um finalizador nato, destacando-se como especialista na chave de braço (Armlock). Aos 12 anos, 'El Chico' já demonstra uma consistência competitiva impressionante.",
            titles: [
                "26x Medalhista de Ouro",
                "5x Medalhista de Prata",
                "2x Medalhista de Bronze",
                "1 Troféu de Destaque (Ouro)"
            ],
            goals: "Dominar as categorias de base e alcançar o topo do cenário competitivo, com foco principal na conquista do Grand Slam. Marcos Francisco representa o futuro do esporte, aliando determinação e técnica refinada em busca dos maiores títulos."
        },
        {
            id: 3,
            name: "Paulo Felipe",
            nickname: "Pato",
            age: "11 anos",
            belt: "Faixa Amarela",
            category: "Infantil B",
            power: "Triângulo",
            dream: "Conquistar o Mundial",
            color: "border-yellow-400",
            img: "/athlete-pato-card.jpg",
            modalImg: "/athlete-pato-modal.jpg",
            resume: "Atleta promissor das categorias de base do Brazilian Jiu-Jitsu, competindo na classe Juvenil A, Faixa Amarela. Paulo Felipe, o 'Pato', destaca-se pela inteligência tática e guarda ofensiva, sendo reconhecido como especialista na finalização por triângulo. Aos 11 anos, já apresenta um currículo vitorioso.",
            titles: [
                "Campeão de Cinturão (2025)",
                "18x Medalhista de Ouro",
                "7x Medalhista de Prata",
                "1x Medalhista de Bronze",
                "1 Troféu de Destaque (Ouro)"
            ],
            goals: "Seguir evoluindo tecnicamente e se consagrar no cenário internacional, com o objetivo principal de conquistar o título de Campeão Mundial. Paulo Felipe representa a nova força do esporte, combinando talento precoce com a vontade de vencer."
        },
        {
            id: 4,
            name: "Jorge Lucas",
            nickname: "Jorginho",
            age: "7 anos",
            belt: "Faixa Cinza",
            category: "Mirim - Pluma",
            power: "Estrangulamento",
            dream: "Chegar a Faixa Vermelha",
            color: "border-gray-200",
            img: "/athlete-jorginho-card.jpg",
            modalImg: "/athlete-jorginho-modal.jpg",
            resume: "Talento precoce do Brazilian Jiu-Jitsu, competindo na classe Mirim, Faixa Cinza. Aos 7 anos, 'Jorginho' já demonstra postura de atleta e técnica apurada, destacando-se pela eficiência nos estrangulamentos. Sua trajetória inicial nas categorias de base revela um potencial imenso.",
            titles: [
                "7x Medalhista de Ouro",
                "6x Medalhista de Prata",
                "3x Medalhista de Bronze",
                "1 Troféu de Destaque (Ouro)"
            ],
            goals: "Construir um legado duradouro na arte suave. Seu objetivo reflete um compromisso vitalício com o esporte: evoluir através de todas as graduações com excelência até alcançar o nível máximo de Grande Mestre, conquistando a sonhada Faixa Vermelha."
        }
    ],
    challenges: [
        {
            id: 1,
            title: "Viagens & Transporte",
            description: "Ajude a custear passagens e hospedagem para competições estaduais e nacionais."
        },
        {
            id: 2,
            title: "Inscrições",
            description: "Cada campeonato tem um custo. Seu apoio garante nossa presença nas chaves."
        },
        {
            id: 3,
            title: "Equipamentos & Nutrição",
            description: "Kimonos, suplementos e preparação física de alto rendimento."
        },
        {
            id: 4,
            title: "Saúde & Recuperação",
            description: "O corpo é nossa ferramenta. Investimento em fisioterapia, exames e prevenção."
        },
        {
            id: 5,
            title: "Taxas & Filiações",
            description: "Burocracia necessária. Anuidades das federações (CBJJ/IBJJF) e renovação de carteirinhas."
        },
        {
            id: 6,
            title: "Logística Diária",
            description: "Custos com transporte diário para a academia, preparação física e escola. A rotina não para."
        }
    ],
    pricing: {
        title: "Níveis de Apoio",
        subtitle: "Escolha sua graduação. Cada nível desbloqueia benefícios exclusivos na nossa jornada.",
        tiers: [
            {
                name: "Torcedor",
                subtitle: "O Primeiro Passo",
                price: "1 até 9",
                features: [
                    "Nome na Lista Pública",
                    "Newsletter do Projeto"
                ],
                highlight: false
            },
            {
                name: "Faixa Branca",
                subtitle: "Apoio Inicial",
                price: "10 até 29",
                features: [
                    "Agradecimento nos Stories",
                    "Nome na Lista Pública",
                    "Newsletter do Projeto"
                ],
                highlight: false
            },
            {
                name: "Faixa Azul",
                subtitle: "Acesso à Comunidade",
                price: "30 até 59",
                features: [
                    "Grupo Fechado Exclusivo",
                    "Chat com Atletas",
                    "Relatório de Transparência",
                    "Agradecimento nos Stories",
                    "Nome na Lista Pública",
                    "Newsletter do Projeto"
                ],
                highlight: false
            },
            {
                name: "Faixa Roxa",
                subtitle: "Conteúdo VIP",
                price: "60 até 99",
                features: [
                    "Instagram Close Friends (Melhores Amigos)",
                    "Conteúdo Técnico e Rotina",
                    "Grupo Fechado Exclusivo",
                    "Relatório de Transparência",
                    "Agradecimento nos Stories",
                    "Nome na Lista Pública"
                ],
                highlight: false
            },
            {
                name: "Faixa Marrom",
                subtitle: "Apoiador Premium",
                price: "100 até 249",
                features: [
                    "Brinde Exclusivo (após 3º mês)",
                    "Vídeo Personalizado",
                    "Live Fechada Trimestral",
                    "Instagram Close Friends",
                    "Grupo Fechado Exclusivo",
                    "Relatório de Transparência",
                    "Agradecimento nos Stories",
                    "Nome na Lista Pública"
                ],
                highlight: false
            },
            {
                name: "Faixa Preta",
                subtitle: "Patrocinador Oficial",
                price: "250 ou +",
                features: [
                    "Patrocínio no Kimono (Patch)*",
                    "Live Fechada Trimestral",
                    "Brinde Exclusivo",
                    "Vídeo Personalizado",
                    "Instagram Close Friends",
                    "Grupo Fechado Exclusivo",
                    "Relatório de Transparência",
                    "Agradecimento nos Stories",
                    "Nome na Lista Pública"
                ],
                highlight: true
            }
        ]
    },
    faq: [
        {
            id: 1,
            question: "Como faço para me tornar um apoiador?",
            answer: "É muito simples! Escolha um dos níveis de apoio acima (Faixa Branca, Azul, etc.) e clique em \"Apoiar\". O processo é 100% online e seguro. Você pode contribuir mensalmente como uma assinatura (cartão de crédito) ou fazer doações pontuais via PIX."
        },
        {
            id: 2,
            question: "Para onde vai o meu dinheiro?",
            answer: "Transparência é nossa regra nº 1. Cada centavo arrecadado vai integralmente para o \"Fundo do Atleta\". Isso custeia inscrições (CBJJ/IBJJF), passagens aéreas, hospedagem, alimentação e equipamentos. Todo mês, enviamos um relatório detalhado de prestação de contas para os apoiadores."
        },
        {
            id: 3,
            question: "Sou empresa, como posso patrocinar?",
            answer: "Sua marca será muito bem-vinda no nosso tatame! Temos cotas especiais (Nível Faixa Preta) que incluem a aplicação da sua logomarca no kimono de competição, banners em eventos e ativações colaborativas no Instagram. Clique no botão de WhatsApp no rodapé e vamos montar uma proposta personalizada."
        },
        {
            id: 4,
            question: "Como acompanho a evolução dos atletas?",
            answer: "Você estará conosco em cada luta! Além das postagens no Instagram @irmaossorrisobjj, nossos apoiadores têm acesso a conteúdos exclusivos (Close Friends e Grupo VIP), onde mostramos os bastidores, a preparação física e os resultados em primeira mão."
        },
        {
            id: 5,
            question: "É uma assinatura? Posso cancelar quando quiser?",
            answer: "Sim! Funciona como uma assinatura de streaming (tipo Netflix). A cobrança é automática no seu cartão para garantir a continuidade dos treinos, mas não há fidelidade. Você tem total liberdade para cancelar ou alterar o valor do seu apoio a qualquer momento pelo seu painel de usuário."
        },
        {
            id: 6,
            question: "O pagamento é seguro?",
            answer: "Totalmente. Utilizamos um gateway de pagamento criptografado (o mesmo usado por grandes e-commerces), garantindo que seus dados financeiros estejam protegidos e nunca sejam compartilhados."
        },
        {
            id: 7,
            question: "Gostaria de apoiar com um valor diferente ou doar materiais. Como faço?",
            answer: "Toda ajuda fortalece nossa armadura! Se você deseja doar kimonos, suplementos, milhas aéreas ou um valor específico fora dos planos, chame nossa equipe no botão de WhatsApp abaixo."
        }
    ],
    version: 1.4 // Increment this to force update checks
};

export function ContentProvider({ children }) {
    const [content, setContent] = useState(defaultContent);

    // Load from LocalStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('site_content');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);

                // Force reset if version doesn't align or is missing
                // In this case, since we just added versioning, any old data won't have it (undefined).
                // We want to force an update to the new FAQ.

                // If the saved content has no version, or a version lower than current, we should merge carefully or reset specific sections.
                // For this specific FAQ update, let's enforce the new FAQ if the version is different.

                let merged = { ...defaultContent, ...parsed };

                // 1. If saved version is missing or old, force update vital sections like FAQ
                if (!parsed.version || parsed.version < defaultContent.version) {
                    console.log("Migration: Updating stale content...", parsed.version, "to", defaultContent.version);
                    // Force update FAQ, Pricing Tiers, and Athletes to current default
                    merged.faq = defaultContent.faq;
                    merged.pricing.tiers = defaultContent.pricing.tiers;
                    merged.athletes = defaultContent.athletes;
                    merged.version = defaultContent.version;
                }

                // 2. Specific fix for pricing tiers if they are missing in saved data (legacy check)
                if (parsed.pricing && !parsed.pricing.tiers) {
                    merged.pricing = { ...defaultContent.pricing, ...parsed.pricing, tiers: defaultContent.pricing.tiers };
                }

                // 3. Ensure deep merging for nested objects if needed, preventing "undefined" errors
                // (Already handled by spreading defaultContent first, then parsed)

                setContent(merged);

            } catch (e) {
                console.error("Failed to parse saved content", e);
            }
        }
    }, []);

    const updateContent = (newContent) => {
        setContent(newContent);
        localStorage.setItem('site_content', JSON.stringify(newContent));
    };

    const resetContent = () => {
        setContent(defaultContent);
        localStorage.removeItem('site_content');
    };

    return (
        <ContentContext.Provider value={{ content, updateContent, resetContent }}>
            {children}
        </ContentContext.Provider>
    );
}

export function useContent() {
    return useContext(ContentContext);
}

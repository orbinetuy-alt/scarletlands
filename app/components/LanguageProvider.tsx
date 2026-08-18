"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "es" | "en";

const copy = {
  es: {
    nav: ["Empresa", "Soluciones", "Cómo trabajamos"],
    navLabel: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    changeLanguage: "Cambiar idioma a inglés",
    talk: "Hablemos",
    heroKicker: "Operaciones internacionales",
    heroTitle: "Movemos negocios",
    heroAccent: "entre mercados.",
    heroSupport: "Trading internacional, logística y desarrollo de negocios B2B.",
    heroCta: "Iniciar una conversación",
    origin: "Origen",
    product: "Producto",
    destination: "Destino",
    market: "Mercado",
    companyLabel: "La empresa",
    companyTitle: "Hacemos que los negocios",
    companyAccent: "avancen.",
    companyText: "Comercializamos commodities, materias primas e insumos agrícolas e industriales, integrando cada etapa de la operación.",
    activityLabel: "Áreas de actividad",
    activities: ["Desarrollo de negocios", "Trading internacional", "Soluciones logísticas"],
    solutionsLabel: "Soluciones",
    solutionsTitle: "De la oportunidad",
    solutionsAccent: "a la operación.",
    solutions: [
      ["Desarrollo de negocios", "Desarrollamos oportunidades y alianzas B2B."],
      ["Trading internacional", "Comercializamos commodities, materias primas e insumos."],
      ["Logística integral", "Gestionamos transporte, documentación y entrega."],
    ],
    processLabel: "Cómo trabajamos",
    processTitle: "Un proceso.",
    processAccent: "Un objetivo.",
    steps: [
      ["Analizamos", "Evaluamos el mercado, el producto y la oportunidad."],
      ["Estructuramos", "Integramos la estructura comercial y financiera."],
      ["Coordinamos", "Articulamos logística, documentación y entrega."],
      ["Acompañamos", "Seguimos cada etapa desde el origen hasta el destino."],
    ],
    networkLabel: "Nuestra red",
    networkTitle: "Sudamérica es nuestro",
    networkAccent: "punto de partida.",
    networkText: "Presencia regional y vínculos comerciales con Estados Unidos, Europa y otros mercados.",
    countries: ["Paraguay", "Uruguay", "Argentina", "Bolivia", "Brasil"],
    contactPrompt: "¿Tiene una oportunidad en mente?",
    contactTitle: "Hablemos.",
    phone: "Teléfono",
    location: "Ubicación",
    slogan: ["Conectamos mercados.", "Desarrollamos negocios."],
    footerNav: "Navegación",
    services: "Servicios",
    contact: "Contacto",
    backToTop: "Volver arriba ↑",
  },
  en: {
    nav: ["Company", "Solutions", "How we work"],
    navLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    changeLanguage: "Change language to Spanish",
    talk: "Let's talk",
    heroKicker: "International operations",
    heroTitle: "Moving business",
    heroAccent: "across markets.",
    heroSupport: "International trading, logistics and B2B business development.",
    heroCta: "Start a conversation",
    origin: "Origin",
    product: "Product",
    destination: "Destination",
    market: "Market",
    companyLabel: "The company",
    companyTitle: "We move business",
    companyAccent: "forward.",
    companyText: "We trade commodities, raw materials, and agricultural and industrial inputs, integrating every stage of the operation.",
    activityLabel: "Business areas",
    activities: ["Business development", "International trading", "Logistics solutions"],
    solutionsLabel: "Solutions",
    solutionsTitle: "From opportunity",
    solutionsAccent: "to operation.",
    solutions: [
      ["Business development", "We develop B2B opportunities and strategic partnerships."],
      ["International trading", "We trade commodities, raw materials and inputs."],
      ["Integrated logistics", "We manage transportation, documentation and delivery."],
    ],
    processLabel: "How we work",
    processTitle: "One process.",
    processAccent: "One objective.",
    steps: [
      ["We analyze", "We assess the market, the product and the opportunity."],
      ["We structure", "We integrate the commercial and financial structure."],
      ["We coordinate", "We connect logistics, documentation and delivery."],
      ["We support", "We follow every stage from origin to destination."],
    ],
    networkLabel: "Our network",
    networkTitle: "South America is our",
    networkAccent: "starting point.",
    networkText: "Regional presence and commercial relationships across the United States, Europe and other markets.",
    countries: ["Paraguay", "Uruguay", "Argentina", "Bolivia", "Brazil"],
    contactPrompt: "Have an opportunity in mind?",
    contactTitle: "Let's talk.",
    phone: "Phone",
    location: "Location",
    slogan: ["Connecting markets.", "Moving business forward."],
    footerNav: "Navigation",
    services: "Services",
    contact: "Contact",
    backToTop: "Back to top ↑",
  },
} as const;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof copy)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem("scarlet-language");
    if (saved === "es" || saved === "en") setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("scarlet-language", language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t: copy[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}


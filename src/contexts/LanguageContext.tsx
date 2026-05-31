import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.services": "Services",
    "nav.education": "Education",
    "nav.contact": "Contact",
    
    // Hero
    "hero.subtitle": "Performance Marketing Leader",
    "hero.description": "Growth-focused digital marketing leader with 14+ years' experience driving measurable results across the DACH region",
    "hero.cta": "Get in Touch",
    "hero.secondary": "View Experience",
    
    // About
    "about.label": "About Me",
    "about.title": "Driving Growth Through Data & Strategy",
    "about.description": "With over 14 years of experience in performance marketing, I lead the growth of e-commerce platforms and build high-performing teams.",
    "about.competency.leadership": "Leadership & People Management",
    "about.competency.leadership.desc": "Team Lead since 2017, building and leading teams of up to 17 direct reports, fostering an agile and data-driven work culture.",
    "about.competency.strategy": "Performance Marketing Strategy",
    "about.competency.strategy.desc": "Holistic strategy, budgeting, and execution of campaigns across SEA, Social Ads, Display, Affiliate, and Retargeting.",
    "about.competency.analytics": "Data & Analytics",
    "about.competency.analytics.desc": "Ensuring precise data for informed decision-making using Google Analytics and Google Tag Manager.",
    "about.competency.expertise": "Sector Expertise",
    "about.competency.expertise.desc": "Extensive experience in e-commerce (B2B and B2C), travel sector, and gaming industry.",
    "about.competency.agile": "Agile Methodologies",
    "about.competency.agile.desc": "Experienced in implementing agile methods and coordinating with international teams.",
    "about.competency.personality": "Personality Profile",
    "about.competency.personality.desc": "Adventurer (ISFP-A) — View my 16 Personalities profile →",
    "about.cta": "Let's connect",
    
    // Experience
    "experience.label": "Career",
    "experience.title": "14+ Years of Experience",
    "experience.akku.desc": "Orchestrating end-to-end performance marketing strategy, boosting multi-channel growth for B2C/B2B e-commerce platforms in DACH. Increased qualified leads by 32% within 6 months. Managing €1M+ marketing budget and leading a team of 5 specialists.",
    "experience.visable.desc": "Spearheaded a 17-member team delivering Google Ads, PLA, and retargeting services for B2B SMEs across DACH. Achieved 22% increase in ROAS and reduced time-to-launch by 25% through standardized processes.",
    "experience.frischepost.desc": "Built and scaled digital marketing channels from the ground up, driving 40% YoY growth for a fast-scaling e-commerce startup. Managed six-figure budgets optimizing for LTV/CAC and rapid market penetration.",
    "experience.fitreisen.desc": "Directed integrated marketing across digital and offline channels. Oversaw SEA, retargeting, affiliation, CRM, and print, maintaining customer engagement during pandemic disruptions.",
    "experience.toolport.desc": "Owned strategic planning and optimization of SEA, retargeting, PLA, and Amazon Ads for B2C/B2B shops in DACH. Increased campaign ROI by 27% through CRO and A/B testing.",
    "experience.philips.desc": "Coordinated SEM for DACH, launching Amazon Sponsored Search pilots and supporting RTB/programmatic campaigns. Leveraged web analytics to optimize performance and inform growth initiatives.",
    "experience.edreams.desc": "Managed paid search campaigns for flight search and dynamic packaging, optimizing for ROAS in a competitive travel market.",
    "experience.innogames.desc": "Launched marketing for a new free-to-play game, coordinating CRM, SEO, performance, and TV/social campaigns.",
    "experience.casamundo.desc": "Planned and managed international SEA campaigns, implementing tracking and tag management with Google Tag Manager. Ran display and retargeting campaigns.",
    
    // Skills
    "skills.label": "Expertise",
    "skills.title": "Skills & Competencies",
    "skills.marketing": "Marketing & Strategy",
    "skills.channels": "Channels & Platforms",
    "skills.analytics": "Analytics & Optimization",
    "skills.leadership": "Leadership",
    
    // Education
    "education.label": "Background",
    "education.title": "Education",
    "education.bachelor": "Bachelor's Degree",
    "education.bachelor.field": "Business Administration, Marketing focus",
    "education.bachelor.desc": "Specialized in digital marketing, analytics, and business strategy. Developed strong foundations in market research and data-driven decision-making.",
    "education.bbs": "Business Studies",
    "education.bbs.desc": "Completed foundational coursework in business and economics.",
    "education.apprenticeship": "Apprenticeship",
    "education.apprenticeship.field": "Kaufmann im Groß- und Außenhandel",
    "education.apprenticeship.desc": "Completed apprenticeship in wholesale and foreign trade, developing commercial acumen and client relationship skills.",
    
    // Contact
    "contact.label": "Get in Touch",
    "contact.title": "Let's Connect",
    "contact.description": "Interested in discussing growth strategies, performance marketing, or new opportunities? I'd love to hear from you.",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.xing": "Xing",
    "contact.profile": "Profile",
    "contact.podcast": "Podcast (DE)",
    "contact.podcast.value": "My CV as Podcast",
    "contact.location": "Location",
    "contact.cta": "Send me an email",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.crafted": "Crafted with care",
    "footer.impressum": "Imprint",

    // Impressum
    "impressum.title": "Imprint",
    "impressum.back": "Back to Home",

    // Services
    "services.label": "Freelance",
    "services.title": "Work With Me",
    "services.intro": "Independent performance marketing expertise — from hands-on campaign management to fractional leadership and pro-bono support for non-profits.",
    "services.explore": "Explore all services",
    "services.page.title": "Freelance Services",
    "services.page.intro": "14+ years of growth marketing across e-commerce, travel, and gaming. I work with founders, marketing leads, and agencies who want measurable results and an honest second pair of eyes.",
    "services.cta.text": "Curious if we'd be a good fit? Let's talk.",
    "services.cta.button": "Get in touch",

    "services.ads.title": "Google Ads Management",
    "services.ads.short": "Hands-on campaign management for SMEs and e-commerce brands in DACH.",
    "services.ads.long": "End-to-end management of Search, Shopping, PMax, and YouTube campaigns. I run accounts the way I'd run my own — tight feedback loops, clean tracking, and ROAS-focused budget allocation.",
    "services.ads.b1": "Search, Shopping & Performance Max",
    "services.ads.b2": "Feed optimization & PLA strategy",
    "services.ads.b3": "Conversion tracking & GTM setup",
    "services.ads.b4": "Monthly reporting & optimization",

    "services.audit.title": "Performance Audits",
    "services.audit.short": "Deep-dive audits of accounts, tracking, and agency work.",
    "services.audit.long": "A thorough review of your paid media setup: account structure, bidding, creatives, tracking, attribution, and reporting. You get a prioritized action plan — no fluff.",
    "services.audit.b1": "Account & campaign structure review",
    "services.audit.b2": "Tracking & data quality check",
    "services.audit.b3": "Wasted-spend & quick-win analysis",
    "services.audit.b4": "Prioritized roadmap with impact estimates",

    "services.challenger.title": "Agency Challenger",
    "services.challenger.short": "Independent second opinion on your current agency setup.",
    "services.challenger.long": "Working with an agency and unsure if you're getting value? I provide an unbiased review of strategy, execution, and reporting — so you can hold partners accountable or make a confident change.",
    "services.challenger.b1": "Agency performance benchmark",
    "services.challenger.b2": "Contract & fee structure review",
    "services.challenger.b3": "Reporting & KPI sanity check",
    "services.challenger.b4": "Stay, switch, or in-house recommendation",

    "services.fractional.title": "Fractional Head of Performance",
    "services.fractional.short": "Part-time strategic leadership for scaling companies.",
    "services.fractional.long": "Senior performance marketing leadership without a full-time hire. I plug into your team, set strategy, manage budgets, hire & coach specialists, and drive growth — typically 1–2 days per week.",
    "services.fractional.b1": "Channel strategy & budget planning",
    "services.fractional.b2": "Team hiring, coaching & enablement",
    "services.fractional.b3": "Agency & vendor management",
    "services.fractional.b4": "Board & leadership reporting",

    "services.ngo.title": "Google Ad Grants for NGOs",
    "services.ngo.short": "Pro-bono and discounted support to help non-profits get the most out of their Ad Grant.",
    "services.ngo.long": "Non-profits qualify for up to $10,000/month in free Google Ads. I help NGOs set up, activate, and optimize their Ad Grant accounts to reach more donors, volunteers, and beneficiaries.",
    "services.ngo.b1": "Ad Grant application & activation",
    "services.ngo.b2": "Compliance & policy management",
    "services.ngo.b3": "Campaign setup & conversion tracking",
    "services.ngo.b4": "Ongoing optimization at reduced rates",
  },
  de: {
    // Nav
    "nav.about": "Über mich",
    "nav.experience": "Erfahrung",
    "nav.skills": "Fähigkeiten",
    "nav.services": "Leistungen",
    "nav.education": "Ausbildung",
    "nav.contact": "Kontakt",
    
    // Hero
    "hero.subtitle": "Performance Marketing Leader",
    "hero.description": "Wachstumsorientierter Digital Marketing Leader mit über 14 Jahren Erfahrung in der DACH-Region",
    "hero.cta": "Kontakt aufnehmen",
    "hero.secondary": "Erfahrung ansehen",
    
    // About
    "about.label": "Über mich",
    "about.title": "Wachstum durch Daten & Strategie",
    "about.description": "Mit über 14 Jahren Erfahrung im Performance Marketing leite ich das Wachstum von E-Commerce-Plattformen und baue leistungsstarke Teams auf.",
    "about.competency.leadership": "Führung & People Management",
    "about.competency.leadership.desc": "Team Lead seit 2017, Aufbau und Führung von Teams mit bis zu 17 direkten Mitarbeitern, Förderung einer agilen und datengetriebenen Arbeitskultur.",
    "about.competency.strategy": "Performance Marketing Strategie",
    "about.competency.strategy.desc": "Ganzheitliche Strategie, Budgetierung und Durchführung von Kampagnen über SEA, Social Ads, Display, Affiliate und Retargeting.",
    "about.competency.analytics": "Daten & Analytics",
    "about.competency.analytics.desc": "Sicherstellung präziser Daten für fundierte Entscheidungen mit Google Analytics und Google Tag Manager.",
    "about.competency.expertise": "Branchenexpertise",
    "about.competency.expertise.desc": "Umfangreiche Erfahrung in E-Commerce (B2B und B2C), Reisebranche und Gaming-Industrie.",
    "about.competency.agile": "Agile Methoden",
    "about.competency.agile.desc": "Erfahren in der Implementierung agiler Methoden und Koordination mit internationalen Teams.",
    "about.competency.personality": "Persönlichkeitsprofil",
    "about.competency.personality.desc": "Abenteurer (ISFP-A) — Mein 16 Personalities Profil ansehen →",
    "about.cta": "Kontakt aufnehmen",
    
    // Experience
    "experience.label": "Karriere",
    "experience.title": "14+ Jahre Erfahrung",
    "experience.akku.desc": "Orchestrierung der End-to-End Performance Marketing Strategie, Steigerung des Multi-Channel-Wachstums für B2C/B2B E-Commerce-Plattformen in DACH. Qualifizierte Leads um 32% innerhalb von 6 Monaten gesteigert. Verwaltung eines Marketingbudgets von über €1M und Führung eines Teams von 5 Spezialisten.",
    "experience.visable.desc": "Führung eines 17-köpfigen Teams für Google Ads, PLA und Retargeting-Services für B2B KMUs in DACH. 22% Steigerung des ROAS und 25% Reduzierung der Time-to-Launch durch standardisierte Prozesse.",
    "experience.frischepost.desc": "Aufbau und Skalierung digitaler Marketingkanäle von Grund auf, 40% YoY-Wachstum für ein schnell wachsendes E-Commerce-Startup. Verwaltung sechsstelliger Budgets mit Optimierung auf LTV/CAC.",
    "experience.fitreisen.desc": "Leitung des integrierten Marketings über digitale und Offline-Kanäle. Verantwortung für SEA, Retargeting, Affiliation, CRM und Print während der Pandemie.",
    "experience.toolport.desc": "Strategische Planung und Optimierung von SEA, Retargeting, PLA und Amazon Ads für B2C/B2B-Shops in DACH. Steigerung des Kampagnen-ROI um 27% durch CRO und A/B-Tests.",
    "experience.philips.desc": "Koordination von SEM für DACH, Einführung von Amazon Sponsored Search Piloten und Unterstützung von RTB/Programmatic-Kampagnen.",
    "experience.edreams.desc": "Verwaltung von Paid Search Kampagnen für Flugsuche und Dynamic Packaging, Optimierung auf ROAS im wettbewerbsintensiven Reisemarkt.",
    "experience.innogames.desc": "Marketing-Launch für ein neues Free-to-Play-Spiel, Koordination von CRM, SEO, Performance und TV/Social-Kampagnen.",
    "experience.casamundo.desc": "Planung und Verwaltung internationaler SEA-Kampagnen, Implementierung von Tracking und Tag Management mit Google Tag Manager.",
    
    // Skills
    "skills.label": "Expertise",
    "skills.title": "Fähigkeiten & Kompetenzen",
    "skills.marketing": "Marketing & Strategie",
    "skills.channels": "Kanäle & Plattformen",
    "skills.analytics": "Analytics & Optimierung",
    "skills.leadership": "Führung",
    
    // Education
    "education.label": "Hintergrund",
    "education.title": "Ausbildung",
    "education.bachelor": "Bachelor-Abschluss",
    "education.bachelor.field": "Betriebswirtschaft, Schwerpunkt Marketing",
    "education.bachelor.desc": "Spezialisierung auf digitales Marketing, Analytics und Unternehmensstrategie. Starke Grundlagen in Marktforschung und datengestützter Entscheidungsfindung.",
    "education.bbs": "Wirtschaftsschule",
    "education.bbs.desc": "Grundkurse in Betriebswirtschaft und Volkswirtschaft.",
    "education.apprenticeship": "Ausbildung",
    "education.apprenticeship.field": "Kaufmann im Groß- und Außenhandel",
    "education.apprenticeship.desc": "Abgeschlossene Ausbildung im Groß- und Außenhandel, Entwicklung kaufmännischer Kompetenz und Kundenbeziehungsfähigkeiten.",
    
    // Contact
    "contact.label": "Kontakt",
    "contact.title": "Lassen Sie uns vernetzen",
    "contact.description": "Interesse an Wachstumsstrategien, Performance Marketing oder neuen Möglichkeiten? Ich freue mich von Ihnen zu hören.",
    "contact.email": "E-Mail",
    "contact.linkedin": "LinkedIn",
    "contact.xing": "Xing",
    "contact.profile": "Profil",
    "contact.podcast": "Podcast (DE)",
    "contact.podcast.value": "Mein Lebenslauf als Podcast",
    "contact.location": "Standort",
    "contact.cta": "E-Mail senden",
    
    // Footer
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.crafted": "Mit Sorgfalt erstellt",
    "footer.impressum": "Impressum",

    // Impressum
    "impressum.title": "Impressum",
    "impressum.back": "Zurück zur Startseite",

    // Services
    "services.label": "Freelance",
    "services.title": "Zusammenarbeit",
    "services.intro": "Unabhängige Performance-Marketing-Expertise — von operativem Kampagnen-Management bis hin zu fraktionaler Führung und Pro-Bono-Unterstützung für Non-Profits.",
    "services.explore": "Alle Leistungen ansehen",
    "services.page.title": "Freelance Leistungen",
    "services.page.intro": "Über 14 Jahre Growth Marketing in E-Commerce, Reise und Gaming. Ich arbeite mit Gründer:innen, Marketing-Leads und Agenturen, die messbare Ergebnisse und einen ehrlichen Blick von außen suchen.",
    "services.cta.text": "Neugierig, ob wir zusammenpassen? Lass uns sprechen.",
    "services.cta.button": "Kontakt aufnehmen",

    "services.ads.title": "Google Ads Management",
    "services.ads.short": "Operatives Kampagnen-Management für KMU und E-Commerce-Marken in DACH.",
    "services.ads.long": "End-to-End-Management von Search, Shopping, PMax und YouTube-Kampagnen. Ich führe Accounts wie meine eigenen — enge Feedback-Schleifen, sauberes Tracking und ROAS-fokussierte Budgetallokation.",
    "services.ads.b1": "Search, Shopping & Performance Max",
    "services.ads.b2": "Feed-Optimierung & PLA-Strategie",
    "services.ads.b3": "Conversion-Tracking & GTM-Setup",
    "services.ads.b4": "Monatliches Reporting & Optimierung",

    "services.audit.title": "Performance Audits",
    "services.audit.short": "Tiefgehende Audits von Accounts, Tracking und Agenturarbeit.",
    "services.audit.long": "Eine gründliche Analyse deines Paid-Media-Setups: Account-Struktur, Gebotsstrategie, Creatives, Tracking, Attribution und Reporting. Du erhältst einen priorisierten Aktionsplan — ohne Floskeln.",
    "services.audit.b1": "Account- & Kampagnenstruktur-Review",
    "services.audit.b2": "Tracking- & Datenqualitäts-Check",
    "services.audit.b3": "Streuverluste & Quick-Win-Analyse",
    "services.audit.b4": "Priorisierte Roadmap mit Impact-Schätzung",

    "services.challenger.title": "Agentur-Challenger",
    "services.challenger.short": "Unabhängige Zweitmeinung zu deinem aktuellen Agentur-Setup.",
    "services.challenger.long": "Du arbeitest mit einer Agentur und bist unsicher, ob du den vollen Gegenwert bekommst? Ich liefere eine unvoreingenommene Bewertung von Strategie, Umsetzung und Reporting — damit du Partner in die Verantwortung nehmen oder selbstbewusst wechseln kannst.",
    "services.challenger.b1": "Benchmark der Agenturleistung",
    "services.challenger.b2": "Vertrags- & Honorarstruktur-Review",
    "services.challenger.b3": "Reporting- & KPI-Plausibilitätscheck",
    "services.challenger.b4": "Empfehlung: Bleiben, wechseln oder inhouse",

    "services.fractional.title": "Fractional Head of Performance",
    "services.fractional.short": "Strategische Teilzeit-Führung für wachsende Unternehmen.",
    "services.fractional.long": "Senior Performance Marketing Leadership ohne Vollzeit-Einstellung. Ich integriere mich in dein Team, setze Strategie, verwalte Budgets, hire & coache Spezialist:innen und treibe Wachstum — typischerweise 1–2 Tage pro Woche.",
    "services.fractional.b1": "Kanalstrategie & Budgetplanung",
    "services.fractional.b2": "Recruiting, Coaching & Enablement",
    "services.fractional.b3": "Agentur- & Vendor-Management",
    "services.fractional.b4": "Board- & Geschäftsführungs-Reporting",

    "services.ngo.title": "Google Ad Grants für NGOs",
    "services.ngo.short": "Pro-Bono und vergünstigte Unterstützung, damit Non-Profits ihren Ad Grant optimal nutzen.",
    "services.ngo.long": "Gemeinnützige Organisationen qualifizieren sich für bis zu 10.000 USD pro Monat an kostenlosen Google Ads. Ich helfe NGOs, ihre Ad-Grant-Konten einzurichten, zu aktivieren und zu optimieren — für mehr Spender:innen, Freiwillige und Begünstigte.",
    "services.ngo.b1": "Ad-Grant-Antrag & Aktivierung",
    "services.ngo.b2": "Compliance- & Policy-Management",
    "services.ngo.b3": "Kampagnen-Setup & Conversion-Tracking",
    "services.ngo.b4": "Laufende Optimierung zu reduzierten Konditionen",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback prevents crashes during Fast Refresh when the provider
    // module is hot-reloaded before consumers re-mount.
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: (key: string) => key,
    };
  }
  return context;
};
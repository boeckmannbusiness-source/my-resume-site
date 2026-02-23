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

    // Imprint
    "imprint.title": "Legal Notice (Impressum)",
    "imprint.tmg": "Information according to § 5 TMG",
    "imprint.name": "Julian Böckmann",
    "imprint.address": "Zum Ausspann 2a, 22419 Hamburg, Germany",
    "imprint.contact.label": "Contact Info",
    "imprint.contact.email": "E-Mail:",
    "imprint.contact.email.value": "moin@julianboeckmann.de",
    "imprint.vat.label": "VAT Identification",
    "imprint.vat.text": "Exempt from VAT according to Section 19 of the German Value Added Tax Act (Kleinunternehmerregelung / small business regulation).",
    "imprint.dispute.label": "Dispute Resolution",
    "imprint.dispute.text": "We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.",
    "imprint.lastUpdated": "Last Updated: February 23, 2026",
    "imprint.back": "Back to Home",
  },
  de: {
    // Nav
    "nav.about": "Über mich",
    "nav.experience": "Erfahrung",
    "nav.skills": "Fähigkeiten",
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

    // Imprint
    "imprint.title": "Impressum",
    "imprint.tmg": "Angaben gemäß § 5 TMG",
    "imprint.name": "Julian Böckmann",
    "imprint.address": "Zum Ausspann 2a, 22419 Hamburg, Deutschland",
    "imprint.contact.label": "Kontaktinfo",
    "imprint.contact.email": "E-Mail:",
    "imprint.contact.email.value": "moin@julianboeckmann.de",
    "imprint.vat.label": "Umsatzsteuer-Identifikationsnummer",
    "imprint.vat.text": "Freistellung von der Umsatzsteuer gemäß § 19 der deutschen Umsatzsteuerordnung (Kleinunternehmerregelung / Kleinunternehmerregelung).",
    "imprint.dispute.label": "Streitbeilegung",
    "imprint.dispute.text": "Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einem Verbraucherschlichtungsgericht teilzunehmen.",
    "imprint.lastUpdated": "Zuletzt aktualisiert: 23. Februar 2026",
    "imprint.back": "Zurück zur Startseite",
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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "de" : "en")}
      className="px-3 py-1.5 text-sm font-medium border border-border rounded-full hover:bg-secondary transition-colors"
      aria-label="Toggle language"
    >
      {language === "en" ? "DE" : "EN"}
    </button>
  );
};

export default LanguageToggle;
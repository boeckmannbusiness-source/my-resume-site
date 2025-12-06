import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 opacity-0 animate-fade-up">
          {t("hero.subtitle")}
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 opacity-0 animate-fade-up animation-delay-100">
          Julian Böckmann
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up animation-delay-200">
          {t("hero.description")}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-300">
          <a
            href="#contact"
            className="px-8 py-3 bg-foreground text-background font-medium text-sm rounded-full hover:bg-foreground/90 transition-colors"
          >
            {t("hero.cta")}
          </a>
          <a
            href="#experience"
            className="px-8 py-3 border border-border text-foreground font-medium text-sm rounded-full hover:bg-secondary transition-colors"
          >
            {t("hero.secondary")}
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;

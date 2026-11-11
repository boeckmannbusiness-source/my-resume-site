import { ArrowRight, Target, Search, Shield, Briefcase, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Target, titleKey: "services.ads.title", descKey: "services.ads.short" },
    { icon: Search, titleKey: "services.audit.title", descKey: "services.audit.short" },
    { icon: Shield, titleKey: "services.challenger.title", descKey: "services.challenger.short" },
    { icon: Briefcase, titleKey: "services.fractional.title", descKey: "services.fractional.short" },
    { icon: Heart, titleKey: "services.ngo.title", descKey: "services.ngo.short" },
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            {t("services.label")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.intro")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map(({ icon: Icon, titleKey, descKey }) => (
            <div
              key={titleKey}
              className="p-6 rounded-lg border border-border bg-background hover:border-accent/50 transition-colors"
            >
              <Icon className="text-accent mb-4" size={28} />
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                {t(titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity link-underline"
          >
            {t("services.cta")}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

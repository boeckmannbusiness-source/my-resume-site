import { Users, Target, BarChart3, Briefcase, RefreshCw, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const competencies = [
    {
      icon: Users,
      titleKey: "about.competency.leadership",
      descKey: "about.competency.leadership.desc",
    },
    {
      icon: Target,
      titleKey: "about.competency.strategy",
      descKey: "about.competency.strategy.desc",
    },
    {
      icon: BarChart3,
      titleKey: "about.competency.analytics",
      descKey: "about.competency.analytics.desc",
    },
    {
      icon: Briefcase,
      titleKey: "about.competency.expertise",
      descKey: "about.competency.expertise.desc",
    },
    {
      icon: RefreshCw,
      titleKey: "about.competency.agile",
      descKey: "about.competency.agile.desc",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            {t("about.label")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            {t("about.title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg">
            {t("about.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className="group p-6 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-background mb-4 group-hover:bg-accent/10 transition-colors">
                <competency.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-medium text-foreground mb-2">{t(competency.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(competency.descKey)}
              </p>
            </div>
          ))}
          
          {/* Personality Profile Card */}
          <a
            href="https://www.16personalities.com/profiles/d7cd45c32632a"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-background mb-4 group-hover:bg-accent/10 transition-colors">
              <Sparkles className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <h3 className="font-medium text-foreground mb-2">{t("about.competency.personality")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("about.competency.personality.desc")}
            </p>
          </a>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center text-foreground font-medium link-underline"
          >
            {t("about.cta")}
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

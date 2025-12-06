import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: "Head of Performance Marketing",
      company: "AKKU SYS",
      period: "Jan 2024 — Present",
      descKey: "experience.akku.desc",
    },
    {
      title: "Team Lead Online Marketing",
      company: "VISABLE",
      period: "Oct 2021 — Dec 2023",
      descKey: "experience.visable.desc",
    },
    {
      title: "Head of Performance Marketing",
      company: "FRISCHEPOST",
      period: "Sep 2020 — Sep 2021",
      descKey: "experience.frischepost.desc",
    },
    {
      title: "Head of Marketing",
      company: "FIT REISEN GmbH",
      period: "Jan 2020 — Aug 2020",
      descKey: "experience.fitreisen.desc",
    },
    {
      title: "Head of SEA",
      company: "TOOLPORT",
      period: "Aug 2017 — Jul 2019",
      descKey: "experience.toolport.desc",
    },
    {
      title: "Digital Marketing Manager",
      company: "PHILIPS LIGHTING",
      period: "Jan 2015 — Jan 2017",
      descKey: "experience.philips.desc",
    },
    {
      title: "SEM Executive",
      company: "eDreams ODIGEO",
      period: "Jan 2014 — Jan 2015",
      descKey: "experience.edreams.desc",
    },
    {
      title: "Product Marketing Manager",
      company: "InnoGames",
      period: "Jan 2013 — Jan 2014",
      descKey: "experience.innogames.desc",
    },
    {
      title: "SEM Manager",
      company: "CASAMUNDO",
      period: "Jan 2011 — Jan 2013",
      descKey: "experience.casamundo.desc",
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            {t("experience.label")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            {t("experience.title")}
          </h2>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative pl-8 border-l-2 border-border hover:border-accent transition-colors"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-accent transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {t(exp.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

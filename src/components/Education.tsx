import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      degreeKey: "education.bachelor",
      fieldKey: "education.bachelor.field",
      institution: "Fachhochschule Westküste",
      period: "2008 — 2011",
      descKey: "education.bachelor.desc",
    },
    {
      degreeKey: "education.bbs",
      fieldKey: "",
      institution: "BBS Verden",
      period: "2007 — 2008",
      descKey: "education.bbs.desc",
    },
    {
      degreeKey: "education.apprenticeship",
      fieldKey: "education.apprenticeship.field",
      institution: "DOYMA GmbH & Co",
      period: "2004 — 2007",
      descKey: "education.apprenticeship.desc",
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            {t("education.label")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            {t("education.title")}
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    {t(edu.degreeKey)}
                    {edu.fieldKey && <span className="text-muted-foreground font-normal"> — {t(edu.fieldKey)}</span>}
                  </h3>
                  <p className="text-accent font-medium">{edu.institution}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t(edu.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

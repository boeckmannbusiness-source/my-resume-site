const education = [
  {
    degree: "Bachelor's Degree",
    field: "Business Administration, Marketing focus",
    institution: "Fachhochschule Westküste",
    period: "2008 — 2011",
    description: "Specialized in digital marketing, analytics, and business strategy. Developed strong foundations in market research and data-driven decision-making.",
  },
  {
    degree: "Business Studies",
    field: "",
    institution: "BBS Verden",
    period: "2007 — 2008",
    description: "Completed foundational coursework in business and economics.",
  },
  {
    degree: "Apprenticeship",
    field: "Kaufmann im Groß- und Außenhandel",
    institution: "DOYMA GmbH & Co",
    period: "2004 — 2007",
    description: "Completed apprenticeship in wholesale and foreign trade, developing commercial acumen and client relationship skills.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Background
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Education
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
                    {edu.degree}
                    {edu.field && <span className="text-muted-foreground font-normal"> — {edu.field}</span>}
                  </h3>
                  <p className="text-accent font-medium">{edu.institution}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Tech Company",
    period: "2022 — Present",
    description: "Leading development of scalable web applications and mentoring junior developers. Focused on performance optimization and best practices.",
  },
  {
    title: "Software Developer",
    company: "Digital Agency",
    period: "2020 — 2022",
    description: "Built custom web solutions for diverse clients. Collaborated with designers and stakeholders to deliver high-quality products.",
  },
  {
    title: "Junior Developer",
    company: "Startup",
    period: "2018 — 2020",
    description: "Developed features for the core product, participated in code reviews, and contributed to architectural decisions.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Career
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Experience
          </h2>
        </div>

        <div className="space-y-12">
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
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

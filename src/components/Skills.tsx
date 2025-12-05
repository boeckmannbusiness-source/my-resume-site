const skillCategories = [
  {
    title: "Marketing & Strategy",
    skills: ["Growth Strategy", "Performance Marketing", "Digital Marketing", "DACH Market Expertise", "Customer Acquisition"],
  },
  {
    title: "Channels & Platforms",
    skills: ["Google Ads", "Meta Ads", "SEA", "SEO", "Affiliate Marketing", "Amazon Ads", "Retargeting", "PLA"],
  },
  {
    title: "Analytics & Optimization",
    skills: ["Google Analytics", "Google Tag Manager", "Web Analytics", "CRO", "A/B Testing", "ROAS Optimization", "LTV/CAC Analysis"],
  },
  {
    title: "Leadership",
    skills: ["Team Leadership", "Budget Management", "Project Management", "Cross-functional Collaboration", "Market Research"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Expertise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Skills & Competencies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="font-serif text-xl font-medium text-foreground mb-6 pb-2 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Figma", "Agile/Scrum"],
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
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

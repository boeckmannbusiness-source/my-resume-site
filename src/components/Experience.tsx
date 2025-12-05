const experiences = [
  {
    title: "Head of Performance Marketing",
    company: "AKKU SYS",
    period: "Jan 2024 — Present",
    description: "Orchestrating end-to-end performance marketing strategy, boosting multi-channel growth for B2C/B2B e-commerce platforms in DACH. Increased qualified leads by 32% within 6 months. Managing €1M+ marketing budget and leading a team of 5 specialists.",
  },
  {
    title: "Team Lead Online Marketing",
    company: "VISABLE",
    period: "Oct 2021 — Dec 2023",
    description: "Spearheaded a 17-member team delivering Google Ads, PLA, and retargeting services for B2B SMEs across DACH. Achieved 22% increase in ROAS and reduced time-to-launch by 25% through standardized processes.",
  },
  {
    title: "Head of Performance Marketing",
    company: "FRISCHEPOST",
    period: "Sep 2020 — Sep 2021",
    description: "Built and scaled digital marketing channels from the ground up, driving 40% YoY growth for a fast-scaling e-commerce startup. Managed six-figure budgets optimizing for LTV/CAC and rapid market penetration.",
  },
  {
    title: "Head of Marketing",
    company: "FIT REISEN GmbH",
    period: "Jan 2020 — Aug 2020",
    description: "Directed integrated marketing across digital and offline channels. Oversaw SEA, retargeting, affiliation, CRM, and print, maintaining customer engagement during pandemic disruptions.",
  },
  {
    title: "Head of SEA",
    company: "TOOLPORT",
    period: "Aug 2017 — Jul 2019",
    description: "Owned strategic planning and optimization of SEA, retargeting, PLA, and Amazon Ads for B2C/B2B shops in DACH. Increased campaign ROI by 27% through CRO and A/B testing.",
  },
  {
    title: "Digital Marketing Manager",
    company: "PHILIPS LIGHTING",
    period: "Jan 2015 — Jan 2017",
    description: "Coordinated SEM for DACH, launching Amazon Sponsored Search pilots and supporting RTB/programmatic campaigns. Leveraged web analytics to optimize performance and inform growth initiatives.",
  },
  {
    title: "SEM Executive",
    company: "eDreams ODIGEO",
    period: "Jan 2014 — Jan 2015",
    description: "Managed paid search campaigns for flight search and dynamic packaging, optimizing for ROAS in a competitive travel market.",
  },
  {
    title: "Product Marketing Manager",
    company: "InnoGames",
    period: "Jan 2013 — Jan 2014",
    description: "Launched marketing for a new free-to-play game, coordinating CRM, SEO, performance, and TV/social campaigns.",
  },
  {
    title: "SEM Manager",
    company: "CASAMUNDO",
    period: "Jan 2011 — Jan 2013",
    description: "Planned and managed international SEA campaigns, implementing tracking and tag management with Google Tag Manager. Ran display and retargeting campaigns.",
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
            10+ Years of Experience
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

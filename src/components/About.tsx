import { Users, Target, BarChart3, Briefcase, RefreshCw, Sparkles } from "lucide-react";

const competencies = [
  {
    icon: Users,
    title: "Leadership & People Management",
    description: "Team Lead since 2017, building and leading teams of up to 17 direct reports, fostering an agile and data-driven work culture.",
  },
  {
    icon: Target,
    title: "Performance Marketing Strategy",
    description: "Holistic strategy, budgeting, and execution of campaigns across SEA, Social Ads, Display, Affiliate, and Retargeting.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Ensuring precise data for informed decision-making using Google Analytics and Google Tag Manager.",
  },
  {
    icon: Briefcase,
    title: "Sector Expertise",
    description: "Extensive experience in e-commerce (B2B and B2C), travel sector, and gaming industry.",
  },
  {
    icon: RefreshCw,
    title: "Agile Methodologies",
    description: "Experienced in implementing agile methods and coordinating with international teams.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            About Me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Driving Growth Through Data & Strategy
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg">
            With over 14 years of experience in performance marketing, I lead the growth 
            of e-commerce platforms and build high-performing teams.
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
              <h3 className="font-medium text-foreground mb-2">{competency.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {competency.description}
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
            <h3 className="font-medium text-foreground mb-2">Personality Profile</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Adventurer (ISFP-A) — View my 16 Personalities profile →
            </p>
          </a>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center text-foreground font-medium link-underline"
          >
            Let's connect
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

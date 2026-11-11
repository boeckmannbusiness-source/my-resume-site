import { ExternalLink, Rss, Search, Gamepad2, ShoppingBag, Sparkles, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      titleKey: "projects.42feeds.title",
      descKey: "projects.42feeds.desc",
      url: "https://www.42feeds.com",
      icon: Rss,
      tag: "AI & E-Commerce",
    },
    {
      titleKey: "projects.42crawl.title",
      descKey: "projects.42crawl.desc",
      url: "https://www.42crawl.fyi",
      icon: Search,
      tag: "AI & SEO",
    },
    {
      titleKey: "projects.goalrush.title",
      descKey: "projects.goalrush.desc",
      url: "https://goal-rush-idle.lovable.app/",
      icon: Gamepad2,
      badgeKey: "projects.goalrush.badge",
      tag: "Gaming App",
    },
    {
      titleKey: "projects.quatschkind.title",
      descKey: "projects.quatschkind.desc",
      url: "https://www.quatschkind.de",
      icon: ShoppingBag,
      tag: "AI & Open Source",
    },
    {
      titleKey: "projects.googlead.title",
      descKey: "projects.googlead.desc",
      url: "https://developers.google.com/ads",
      icon: Sparkles,
      tag: "Google Ad Grants",
    },
    {
      titleKey: "projects.agency.title",
      descKey: "projects.agency.desc",
      url: "https://agency-challenging.example.com",
      icon: ShoppingBag,
      tag: "Agency Challenging",
    },
    {
      titleKey: "projects.interim.title",
      descKey: "projects.interim.desc",
      url: "https://interim-head.example.com",
      icon: Users,
      tag: "Interim Head of Performance Marketing",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            {t("projects.label")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("projects.intro")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-lg border border-border bg-background hover:border-accent/50 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary group-hover:bg-accent/10 transition-colors">
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-secondary text-muted-foreground font-medium">
                      {project.tag}
                    </span>
                    {project.badgeKey && (
                      <span className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent font-medium">
                        {t(project.badgeKey)}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(project.descKey)}
                  </p>
                </div>
              </a>
            );
          })}

          {/* More to come card */}
          <div className="p-6 rounded-lg border border-dashed border-border bg-secondary/30 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary mb-4">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                {t("projects.more.title")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("projects.more.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

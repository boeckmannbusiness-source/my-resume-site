import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/20 mb-4">
              <svg
                className="w-6 h-6 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-3">
              {t("services.akku")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("services.akku.desc")}
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/20 mb-4">
              <svg
                className="w-6 h-6 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="3" y="3" width="7" height="7" rx="1" ry="1" />
                <circle cx="21" cy="21" radius="1" />
                <path d="M13 2L3 14h6l-1 1H8l-1 1h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-3">
              {t("services.visable")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("services.visable.desc")}
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/20 mb-4">
              <svg
                className="w-6 h-6 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-.52-.12l-.08-.05a2 2 0 0 1-2.83-2.16 2 2 0 0 1 0-3.32 2 2 0 0 1 2.16-.06l.05-.08zM15 19a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-3">
              {t("services.frischepost")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("services.frischepost.desc")}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/20 mb-4">
              <svg
                className="w-6 h-6 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22s8-4 8-10V5l-8-5-8 5v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-3">
              {t("services.fitreisen")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("services.fitreisen.desc")}
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/20 mb-4">
              <svg
                className="w-6 h-6 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="2" x2="22" y2="22" />
                <line x1="2" y1="22" x2="22" y1="2" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-3">
              {t("services.toolport")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("services.toolport.desc")}
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border hover:border-accent/50 transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/20 mb-4">
              <svg
                className="w-6 h-6 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 9l9 6 9-6h-3a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1h-3m3-3l3 8h-5l-3-8H6z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-3">
              {t("services.philips")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("services.philips.desc")}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {t("services.innogames.desc").split(".")[0]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
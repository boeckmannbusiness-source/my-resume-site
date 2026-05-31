import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Target, Search, Shield, Briefcase, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Target,
      titleKey: "services.ads.title",
      descKey: "services.ads.long",
      bullets: ["services.ads.b1", "services.ads.b2", "services.ads.b3", "services.ads.b4"],
    },
    {
      icon: Search,
      titleKey: "services.audit.title",
      descKey: "services.audit.long",
      bullets: ["services.audit.b1", "services.audit.b2", "services.audit.b3", "services.audit.b4"],
    },
    {
      icon: Shield,
      titleKey: "services.challenger.title",
      descKey: "services.challenger.long",
      bullets: [
        "services.challenger.b1",
        "services.challenger.b2",
        "services.challenger.b3",
        "services.challenger.b4",
      ],
    },
    {
      icon: Briefcase,
      titleKey: "services.fractional.title",
      descKey: "services.fractional.long",
      bullets: [
        "services.fractional.b1",
        "services.fractional.b2",
        "services.fractional.b3",
        "services.fractional.b4",
      ],
    },
    {
      icon: Heart,
      titleKey: "services.ngo.title",
      descKey: "services.ngo.long",
      bullets: ["services.ngo.b1", "services.ngo.b2", "services.ngo.b3", "services.ngo.b4"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl font-semibold text-foreground">
            JB
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              {t("impressum.back")}
            </Link>
            <LanguageToggle />
          </div>
        </nav>
      </header>

      <main className="container mx-auto max-w-5xl px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            {t("services.label")}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
            {t("services.page.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("services.page.intro")}
          </p>
        </div>

        <div className="space-y-8">
          {services.map(({ icon: Icon, titleKey, descKey, bullets }) => (
            <article
              key={titleKey}
              className="p-8 md:p-10 rounded-lg border border-border bg-card"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon className="text-accent" size={22} />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-3">
                    {t(titleKey)}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {t(descKey)}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm text-foreground/80 flex items-start gap-2 before:content-['→'] before:text-accent before:shrink-0"
                      >
                        <span>{t(b)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">{t("services.cta.text")}</p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity text-sm font-medium"
          >
            {t("services.cta.button")}
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity link-underline"
          >
            <ArrowLeft size={16} />
            {t("impressum.back")}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;

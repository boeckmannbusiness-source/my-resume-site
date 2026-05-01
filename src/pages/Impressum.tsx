import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const Impressum = () => {
  const { t, language } = useLanguage();

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

      <main className="container mx-auto max-w-3xl px-6 pt-32 pb-20">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-8">
          {t("impressum.title")}
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-foreground font-semibold mb-2">
              {language === "de" ? "Angaben gemäß § 5 TMG" : "Information according to § 5 TMG"}
            </h2>
            <p>
              Julian Böckmann
              <br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold mb-2">
              {language === "de" ? "Kontakt" : "Contact"}
            </h2>
            <p>
              {language === "de" ? "E-Mail" : "Email"}:{" "}
              <a
                href="mailto:julian.boeckmann@googlemail.com"
                className="text-foreground hover:underline"
              >
                julian.boeckmann@googlemail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold mb-2">
              {language === "de"
                ? "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV"
                : "Responsible for content according to § 55 Abs. 2 RStV"}
            </h2>
            <p>
              Julian Böckmann
              <br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold mb-2">
              {language === "de" ? "Haftungsausschluss" : "Disclaimer"}
            </h2>
            <p>
              {language === "de"
                ? "Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden."
                : "The content of this website has been compiled with the greatest possible care. However, no guarantee can be given for the accuracy, completeness or timeliness of the content."}
            </p>
          </section>
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
    </div>
  );
};

export default Impressum;

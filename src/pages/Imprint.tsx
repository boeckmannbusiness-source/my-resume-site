import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Imprint = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-24 max-w-3xl">
        <div className="space-y-8">
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8">
            {t("imprint.title")}
          </h1>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("imprint.tmg")}
            </h2>
            <div className="space-y-2 text-muted-foreground">
              <p>{t("imprint.name")}</p>
              <p>{t("imprint.address")}</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("imprint.contact.label")}
            </h2>
            <div className="space-y-2 text-muted-foreground">
              <p className="text-foreground font-medium">
                {t("imprint.contact.email")} {t("imprint.contact.email.value")}
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("imprint.vat.label")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("imprint.vat.text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {t("imprint.dispute.label")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("imprint.dispute.text")}
            </p>
          </section>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              {t("imprint.lastUpdated")}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Imprint;

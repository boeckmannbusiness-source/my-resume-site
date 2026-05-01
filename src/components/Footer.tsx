import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Julian Böckmann. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/impressum"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              {t("footer.impressum")}
            </Link>
            <p className="text-sm text-muted-foreground">{t("footer.crafted")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

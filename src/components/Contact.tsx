import { Mail, Globe, MapPin, Linkedin, Headphones, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const contactLinks = [
    {
      icon: Mail,
      labelKey: "contact.email",
      value: "julian.boeckmann@googlemail.com",
      href: "mailto:julian.boeckmann@googlemail.com",
    },
    {
      icon: Linkedin,
      labelKey: "contact.linkedin",
      value: "linkedin.com/in/julian-boeckmann",
      href: "https://www.linkedin.com/in/julian-boeckmann",
    },
    {
      icon: Users,
      labelKey: "contact.xing",
      value: "xing.com/profile/Julian_Boeckmann",
      href: "https://www.xing.com/profile/Julian_Boeckmann",
    },
    {
      icon: Globe,
      labelKey: "contact.profile",
      value: "himalayas.app/@julianbckmann",
      href: "https://himalayas.app/@julianbckmann",
    },
    {
      icon: Headphones,
      labelKey: "contact.podcast",
      valueKey: "contact.podcast.value",
      href: "https://on.soundcloud.com/VVZViQPX4BhYjX3GuE",
    },
    {
      icon: MapPin,
      labelKey: "contact.location",
      value: "Germany",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            {t("contact.label")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((contact, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-background mb-4 group-hover:bg-accent/10 transition-colors">
                <contact.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{t(contact.labelKey)}</p>
              {contact.href ? (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium hover:text-accent transition-colors text-sm break-all"
                >
                  {contact.valueKey ? t(contact.valueKey) : contact.value}
                </a>
              ) : (
                <span className="text-foreground font-medium text-sm">{contact.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="mailto:julian.boeckmann@googlemail.com"
            className="inline-flex items-center px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors"
          >
            {t("contact.cta")}
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

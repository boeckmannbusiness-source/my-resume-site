import { Mail, Globe, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "julian.boeckmann@googlemail.com",
    href: "mailto:julian.boeckmann@googlemail.com",
  },
  {
    icon: Globe,
    label: "Profile",
    value: "himalayas.app/@julianbckmann",
    href: "https://himalayas.app/@julianbckmann",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Germany",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Interested in discussing growth strategies, performance marketing, 
            or new opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactLinks.map((contact, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-background mb-4 group-hover:bg-accent/10 transition-colors">
                <contact.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{contact.label}</p>
              {contact.href ? (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium hover:text-accent transition-colors text-sm break-all"
                >
                  {contact.value}
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
            Send me an email
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "julian@example.com",
    href: "mailto:julian@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/julian",
    href: "https://linkedin.com/in/julian",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/julian",
    href: "https://github.com/julian",
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
    <section id="contact" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm always interested in hearing about new opportunities, 
            collaborations, or just having a chat about technology and design.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contactLinks.map((contact, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 p-6 bg-background rounded-lg border border-border hover:border-accent/50 transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-secondary group-hover:bg-accent/10 transition-colors">
                <contact.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-accent transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-foreground font-medium">{contact.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
              Driving Growth Through Data & Strategy
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a growth-focused digital marketing leader based in Germany with over 
              a decade of experience driving measurable results across the DACH region. 
              I specialize in performance marketing, rapid experimentation, and 
              cross-functional collaboration.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a proven track record of optimizing ROAS and scaling new growth 
              channels for B2C and B2B brands, I leverage analytics to inform strategy 
              and uncover untapped market opportunities. I've managed multi-million 
              euro budgets and led teams of up to 17 specialists.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center text-foreground font-medium link-underline"
              >
                Let's connect
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
              Passionate about Creative Problem Solving
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a Design Engineer based in Munich, Germany, currently working at 
              Brainlab R&D where I develop innovative medical technology solutions. 
              I combine engineering expertise with creative thinking to solve complex problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At Brainlab, I work on cutting-edge technologies that make a real 
              difference in healthcare. I'm driven by the challenge of turning 
              complex requirements into elegant, functional designs.
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

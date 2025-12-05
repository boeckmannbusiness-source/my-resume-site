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
              Passionate about creating meaningful experiences
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a software developer based in Germany with a passion for building 
              elegant, user-centric applications. With expertise in modern web technologies, 
              I bring ideas to life through clean code and thoughtful design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or enjoying the outdoors.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center text-foreground font-medium link-underline"
              >
                Let's work together
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

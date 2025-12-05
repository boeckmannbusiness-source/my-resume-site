const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Julian Böckmann. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

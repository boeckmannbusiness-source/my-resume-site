import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import {
  fallbackPrivacyLanguage,
  privacyDocuments,
  privacyLanguages,
  type PrivacyBlock,
  type PrivacyLanguageCode,
} from "@/content/refomaPrivacy";

const renderBlock = (block: PrivacyBlock, index: number) => {
  switch (block.type) {
    case "p":
      return (
        <p
          key={index}
          className={
            block.emphasis
              ? "leading-relaxed text-foreground font-medium"
              : "leading-relaxed text-muted-foreground"
          }
        >
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3
          key={index}
          className="font-serif text-lg md:text-xl font-semibold text-foreground pt-2"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul
          key={index}
          className="list-disc pl-5 space-y-1.5 leading-relaxed text-muted-foreground marker:text-accent"
        >
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "address":
      return (
        <address key={index} className="not-italic leading-relaxed text-muted-foreground">
          {block.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      );
    case "email":
      return (
        <p key={index} className="leading-relaxed text-muted-foreground">
          {block.label ? `${block.label}: ` : ""}
          <a
            href={`mailto:${block.text}`}
            className="text-foreground underline underline-offset-4 decoration-accent/50 hover:decoration-accent transition-colors"
          >
            {block.text}
          </a>
        </p>
      );
    case "link":
      return (
        <p key={index}>
          <a
            href={block.href}
            target="_blank"
            rel="noreferrer noopener"
            className="break-words text-foreground underline underline-offset-4 decoration-accent/50 hover:decoration-accent transition-colors"
          >
            {block.label}
          </a>
        </p>
      );
    case "hr":
      return <hr key={index} className="border-border" />;
    default:
      return null;
  }
};

const RefomaPrivacy = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<PrivacyLanguageCode>("de");

  const policy =
    privacyDocuments[selectedLanguage] ?? privacyDocuments[fallbackPrivacyLanguage]!;
  const language = privacyLanguages.find((entry) => entry.code === selectedLanguage)!;
  const isFallback = !privacyDocuments[selectedLanguage];

  useEffect(() => {
    const previousTitle = document.title;
    document.title = policy.title;
    document.documentElement.lang = privacyDocuments[selectedLanguage]
      ? selectedLanguage
      : fallbackPrivacyLanguage;

    return () => {
      document.title = previousTitle;
    };
  }, [policy, selectedLanguage]);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl font-semibold text-foreground">
            JB
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            {language.backLabel}
          </Link>
        </nav>
      </header>

      <main className="container mx-auto max-w-3xl px-6 pt-32 pb-20">
        <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">REFOMA Pro</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-3">
          {policy.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {policy.updatedLabel}: {policy.updated}
        </p>

        <nav
          aria-label="Language / Sprache"
          className="flex flex-wrap items-center gap-2 mt-8 pb-8 border-b border-border"
        >
          {privacyLanguages.map((entry) => {
            const isActive = entry.code === selectedLanguage;
            const isAvailable = Boolean(privacyDocuments[entry.code]);

            return (
              <button
                key={entry.code}
                type="button"
                onClick={() => setSelectedLanguage(entry.code)}
                aria-pressed={isActive}
                className={[
                  "inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full border transition-colors",
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary",
                ].join(" ")}
              >
                {entry.label}
                {!isAvailable && (
                  <span className="text-[10px] uppercase tracking-wider opacity-70">
                    {entry.inProgressLabel}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {isFallback && (
          <p className="mt-8 rounded-lg border border-border bg-secondary/60 p-4 text-sm leading-relaxed text-foreground">
            {language.pendingNotice}
          </p>
        )}

        <div className="mt-10 space-y-10">
          {policy.sections.map((section) => (
            <section key={section.slug} id={section.slug} className="scroll-mt-28">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                <span className="text-accent">{section.number}.</span> {section.title}
              </h2>
              <div className="space-y-4">{section.blocks.map(renderBlock)}</div>
            </section>
          ))}
        </div>

        <hr className="my-12 border-border" />

        <p className="text-sm leading-relaxed text-muted-foreground">{policy.closingNote}</p>

        <div className="mt-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity link-underline"
          >
            <ArrowLeft size={16} />
            {language.backLabel}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefomaPrivacy;

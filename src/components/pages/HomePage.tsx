import Link from "next/link";
import { AdSlot } from "@/components/ads/AdSlot";
import { FAQBlock } from "@/components/content/FAQBlock";
import { KeyFacts } from "@/components/content/KeyFacts";
import { ModuleRenderer } from "@/components/content/ModuleRenderer";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLocaleUiLabels } from "@/lib/localization";
import { getFaqsForPage } from "@/lib/content";
import { collectionPageSchema, faqSchema, websiteSchema } from "@/lib/schema";
import type { PageContent } from "@/types/content";

export function HomePage({ page }: { page: PageContent }) {
  const faqs = getFaqsForPage(page);
  const labels = getLocaleUiLabels(page.locale);
  const startModule = page.modules.find((guideModule) => guideModule.id === "start-here");
  const startItems = startModule?.type === "entity-grid" ? startModule.items : [];
  const remainingModules = page.modules.filter((guideModule) => guideModule.id !== "start-here");

  return (
    <article className="home-page oil-home-page">
      <JsonLd data={websiteSchema()} />
      <JsonLd data={collectionPageSchema(page)} />
      <JsonLd data={faqSchema(faqs)} />

      <header className="oil-home-hero">
        <div className="oil-home-lede">
          <p className="home-kicker">{page.hero.eyebrow}</p>
          <h1>{page.h1}</h1>
          <p className="home-subtitle">{page.hero.subtitle}</p>

          <div className="cta-row">
            {page.hero.ctas.map((cta, index) => (
              <Link
                key={cta.href}
                className={index === 0 ? "btn" : "btn home-secondary-btn"}
                href={cta.href}
              >
                {cta.label}
              </Link>
            ))}
          </div>

          <div className="home-meta-line" aria-label="Guide details">
            <span>Roblox</span>
            <span>jitmoney inc</span>
            <span>
              {labels.lastReviewed} <time dateTime={page.lastReviewed}>{page.lastReviewed}</time>
            </span>
          </div>
        </div>

        <nav className="home-entry-panel" aria-label="Oil Tycoon guide shortcuts">
          <div className="home-entry-heading">
            <p>Start here</p>
            <h2>Pick the answer you need.</h2>
          </div>
          <div className="home-entry-list">
            {startItems.map((item) =>
              item.href ? (
                <Link key={item.href} href={item.href} className="home-entry-link">
                  <strong>{item.title}</strong>
                  <span>{item.summary}</span>
                </Link>
              ) : null,
            )}
          </div>
        </nav>
      </header>

      <section className="home-answer-block" aria-labelledby="home-answer-title">
        <div className="home-answer-copy">
          <p className="home-kicker">Quick answer</p>
          <h2 id="home-answer-title">One game, focused guides instead of one giant wiki page.</h2>
          <p>{page.quickAnswer}</p>
        </div>
        <KeyFacts facts={page.keyFacts} />
      </section>

      <AdSlot placement="responsive-banner" />

      <ModuleRenderer modules={remainingModules} />
      <FAQBlock faqs={faqs} />
    </article>
  );
}

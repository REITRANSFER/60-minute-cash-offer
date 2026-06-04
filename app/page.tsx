import { Header } from "@/components/v2/header";
import { HeroSection } from "@/components/v2/hero-section";
import { PhilosophySection } from "@/components/v2/philosophy-section";
import { VslSection } from "@/components/v2/vsl-section";
import { TrustSection } from "@/components/v2/trust-section";
import { SalesLetterSection } from "@/components/v2/sales-letter-section";
import { FaqSection } from "@/components/v2/faq-section";
import { FooterSection } from "@/components/v2/footer-section";
import { HEADLINE_OVERRIDES, DEFAULT_HEADLINE } from "@/lib/headline-overrides";

// Next 16: searchParams is async — MUST await. Sync access silently returns
// undefined and breaks UTM-driven features without errors.
type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function V2Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const raw = params?.utm_content;
  const utmContent = Array.isArray(raw) ? raw[0] : (raw ?? "");

  // First-match-wins lookup against the scent table. Override or default.
  const override = HEADLINE_OVERRIDES.find((o) => o.match.test(utmContent));
  const dynamicH1 = override?.h1 ?? DEFAULT_HEADLINE.h1;
  const dynamicSub = override?.sub ?? DEFAULT_HEADLINE.sub;

  return (
    <main className="v2-light min-h-screen">
      <Header />
      <HeroSection dynamicH1={dynamicH1} dynamicSub={dynamicSub} />
      <PhilosophySection />
      <VslSection />
      <TrustSection />
      <SalesLetterSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}

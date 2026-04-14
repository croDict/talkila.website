import type { Metadata } from "next";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "./dictionaries";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DownloadCta from "@/components/DownloadCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.hero.tagline,
    description: dict.hero.subtitle,
    alternates: {
      languages: { de: "/de", en: "/en" },
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Hero lang={lang} dict={dict} />
      <Features dict={dict} />
      <HowItWorks dict={dict} />
      <DownloadCta lang={lang} dict={dict} />
    </>
  );
}

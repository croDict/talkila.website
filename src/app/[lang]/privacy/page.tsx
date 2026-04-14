import type { Metadata } from "next";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.privacy.title };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-900">
        {dict.privacy.title}
      </h1>
      <p className="mt-2 text-sm text-zinc-400">{dict.privacy.lastUpdated}</p>

      <div className="mt-12 space-y-10">
        {dict.privacy.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold text-zinc-900">
              {section.title}
            </h2>
            <div className="mt-3 text-zinc-600 leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

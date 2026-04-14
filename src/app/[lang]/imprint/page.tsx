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
  return { title: dict.imprint.title };
}

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-900">
        {dict.imprint.title}
      </h1>
      <div className="mt-8 text-zinc-600 leading-relaxed whitespace-pre-line">
        {dict.imprint.content}
      </div>
    </article>
  );
}

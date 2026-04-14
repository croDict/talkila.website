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
  return { title: dict.support.title };
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-900">
        {dict.support.title}
      </h1>
      <p className="mt-2 text-lg text-zinc-500">{dict.support.subtitle}</p>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-6">
          {dict.support.faq.title}
        </h2>
        <div className="space-y-3">
          {dict.support.faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-zinc-200 overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-zinc-900 font-medium hover:bg-zinc-50 transition-colors">
                {item.question}
                <span className="ml-4 text-zinc-400 group-open:rotate-45 transition-transform text-xl leading-none">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-zinc-600 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl bg-brand-light p-8 text-center">
        <h2 className="text-xl font-semibold text-zinc-900">
          {dict.support.contact.title}
        </h2>
        <p className="mt-2 text-zinc-600">{dict.support.contact.text}</p>
        <a
          href={`mailto:${dict.support.contact.email}`}
          className="mt-4 inline-block bg-brand text-white font-medium px-6 py-3 rounded-xl hover:bg-brand-dark transition-colors"
        >
          {dict.support.contact.email}
        </a>
      </section>
    </article>
  );
}

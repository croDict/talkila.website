import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { APP_STORE_URL } from "@/lib/i18n";

export default function Hero({
  lang,
  dict,
}: {
  lang: string;
  dict: Dictionary;
}) {
  return (
    <section className="px-6 pt-20 pb-24 md:pt-32 md:pb-36">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
          {dict.hero.tagline}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          {dict.hero.subtitle}
        </p>
        <div className="mt-10">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Image
              src={`/badges/app-store-badge-${lang}.svg`}
              alt={dict.hero.cta}
              width={180}
              height={60}
              className="mx-auto hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

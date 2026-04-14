import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { APP_STORE_URL } from "@/lib/i18n";

export default function DownloadCta({
  lang,
  dict,
}: {
  lang: string;
  dict: Dictionary;
}) {
  return (
    <section className="px-6 py-20 md:py-28 bg-brand">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {dict.download.title}
        </h2>
        <p className="mt-4 text-lg text-white/80">
          {dict.download.subtitle}
        </p>
        <div className="mt-10">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Image
              src={`/badges/app-store-badge-${lang}.svg`}
              alt={dict.download.cta}
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

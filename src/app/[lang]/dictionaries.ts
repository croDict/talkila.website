import "server-only";
import { type Locale, locales } from "@/lib/i18n";

const dictionaries = {
  de: () => import("@/app/dictionaries/de.json").then((m) => m.default),
  en: () => import("@/app/dictionaries/en.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

export function hasLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

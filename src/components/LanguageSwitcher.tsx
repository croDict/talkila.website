"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname();
  const otherLang = lang === "de" ? "en" : "de";
  const otherPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  return (
    <Link
      href={otherPath}
      className="text-sm font-medium px-3 py-1.5 rounded-lg border border-zinc-200 hover:bg-zinc-50 transition-colors"
    >
      {otherLang.toUpperCase()}
    </Link>
  );
}

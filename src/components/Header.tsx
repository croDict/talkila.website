import Link from "next/link";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({
  lang,
  dict,
}: {
  lang: string;
  dict: Dictionary;
}) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href={`/${lang}`}
          className="text-xl font-bold tracking-tight text-brand"
        >
          Talkila
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href={`/${lang}/privacy`}
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors hidden sm:block"
          >
            {dict.nav.privacy}
          </Link>
          <Link
            href={`/${lang}/support`}
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors hidden sm:block"
          >
            {dict.nav.support}
          </Link>
          <LanguageSwitcher lang={lang} />
        </div>
      </nav>
    </header>
  );
}

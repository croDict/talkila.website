import Link from "next/link";
import type { Dictionary } from "@/app/[lang]/dictionaries";

export default function Footer({
  lang,
  dict,
}: {
  lang: string;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">
          {dict.footer.copyright.replace("{year}", String(year))}
        </p>
        <div className="flex items-center gap-6">
          <Link
            href={`/${lang}/privacy`}
            className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
          >
            {dict.footer.privacy}
          </Link>
          <Link
            href={`/${lang}/support`}
            className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
          >
            {dict.footer.support}
          </Link>
          <Link
            href={`/${lang}/imprint`}
            className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
          >
            {dict.footer.imprint}
          </Link>
        </div>
      </div>
    </footer>
  );
}

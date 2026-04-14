import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-6xl font-bold text-brand">404</h1>
      <p className="mt-4 text-xl text-zinc-600">Page not found</p>
      <p className="mt-2 text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/de"
        className="mt-8 bg-brand text-white font-medium px-6 py-3 rounded-xl hover:bg-brand-dark transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}

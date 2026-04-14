export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-zinc-950">
      <main className="flex flex-col items-center gap-8 px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Talkila
        </h1>
        <p className="max-w-md text-lg text-zinc-500 dark:text-zinc-400">
          Speak in your language, type in theirs.
        </p>
        <p className="text-sm text-zinc-400 dark:text-zinc-600">
          Coming soon
        </p>
      </main>
    </div>
  );
}

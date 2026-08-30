'use client';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-slate-50">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <button onClick={() => reset()} className="mt-4 rounded bg-slate-800 px-4 py-2">
        Try again
      </button>
    </main>
  );
}

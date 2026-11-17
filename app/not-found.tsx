import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h2 className="font-serif italic text-4xl mb-2 text-neutral-900 dark:text-neutral-100">
        404 · Page Not Found
      </h2>
      <p className="text-sm text-neutral-500 mb-6 max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-neutral-900 dark:bg-neutral-100 px-5 py-2 text-sm font-medium text-white dark:text-neutral-900 transition-opacity hover:opacity-90"
      >
        Return to Home
      </Link>
    </div>
  );
}

"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-6 text-center">
      <h2 className="font-serif italic text-3xl mb-2 text-neutral-900 dark:text-neutral-100">
        Something went wrong
      </h2>
      <p className="text-sm text-neutral-500 mb-6 max-w-sm">
        An error occurred while rendering this page.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-xl bg-neutral-900 dark:bg-neutral-100 px-5 py-2 text-sm font-medium text-white dark:text-neutral-900 transition-opacity hover:opacity-90 cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}

"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-red-600 mb-4">
            Oops! Something went wrong.
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            We&apos;re sorry for the inconvenience. Please try again later.
          </p>
          <Link
            href={"/"}
            className="w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            Go To Home
          </Link>
        </div>
      </body>
    </html>
  );
}

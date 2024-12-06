import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-semibold text-red-600 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

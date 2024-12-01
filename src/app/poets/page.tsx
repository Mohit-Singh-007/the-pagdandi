import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Coming Soon....</h1>
        <p className="text-lg mb-8">Meanwhile you can read our blogs.</p>
        <Link
          href="/blogs"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go to Blogs
        </Link>
      </div>
    </div>
  );
}

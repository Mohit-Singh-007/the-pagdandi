import Image from "next/image";

export default function MyProfile() {
  return (
    <div className="flex-1 hidden md:flex justify-center items-start">
      <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/profile.jpg"
          alt="Travel"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          quality={70}
        />
        <blockquote className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-80 rounded-lg shadow-md">
          <p className="text-lg italic text-gray-700">
            &ldquo;The journey is the destination.&rdquo;
          </p>
          <footer className="mt-2 text-sm text-gray-500">
            &mdash; Mohit Singh
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function MyProfile() {
  return (
    <div className="flex justify-center items-center w-full mt-5">
      <div className="relative w-full max-w-md h-72 sm:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/profile-min.jpg"
          alt="Profile Image"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          quality={70}
        />

        <blockquote className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-80 backdrop-blur-sm rounded-t-lg">
          <p className="text-lg italic text-gray-700">
            &ldquo;The journey is the destination.&rdquo;
          </p>
          <footer className="mt-2 text-sm text-gray-500">
            &mdash; Deepanshu Kuwar
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

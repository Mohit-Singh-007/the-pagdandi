import { Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="flex flex-col md:flex-row items-start p-10 md:p-24 space-y-10 md:space-y-0">
        <div className="flex-1 space-y-6">
          <h1 className="text-6xl font-bold text-gray-800">
            Exploring Life’s
            <span className="text-[#E9C46A]"> Unbeaten Paths</span>
          </h1>
          <div className="flex flex-col md:flex-row items-start space-x-8">
            <div className="flex-1">
              <p className="text-xl font-semibold text-gray-700">Mohit Singh</p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Hi, I’m a curious traveler, tech enthusiast, and storyteller at
                heart. Life is all about journeys, and Pagdandi is my space to
                share mine. Whether it’s about coding challenges, personal
                growth, or finding joy in small moments, I believe each step
                leads to something new. I started this blog to inspire those
                who, like me, are carving their own paths and finding meaning
                along the way.
              </p>
              <div className="flex space-x-6 pt-5">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-500 transition"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-red-600 hover:text-red-500 transition"
                >
                  <Youtube className="w-5 h-5" />
                  <span>YouTube</span>
                </Link>
              </div>
            </div>
            {/* Right Side: Image */}
            <div className="flex-1 hidden md:flex justify-center items-start">
              <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/profile.jpg" // Replace with your image path
                  alt="Travel"
                  fill
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <blockquote className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-80 rounded-lg shadow-md">
                  <p className="text-lg italic text-gray-700">
                    &ldquo;The journey is the destination.&rdquo;
                  </p>
                  <footer className="mt-2 text-sm text-gray-500">
                    – Mohit Singh
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="pt-4 md:pt-10">
            <h3 className="text-2xl font-semibold text-gray-800">
              What sets me apart?
            </h3>
            <p className="text-gray-600 leading-relaxed mt-2">
              Authenticity matters: I believe in staying real, no filters, and
              no shortcuts.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              Growth mindset: Every failure is just another step forward.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              Community-focused: Life is better when we learn from each other.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Let’s walk this path together! If you enjoy reading my posts,
              connect with me on Instagram or YouTube, where I share even more
              insights from my daily adventures. Got a question or just want to
              say hello? Reach out! I’d love to hear from you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import MyProfile from "@/components/pages/About/MyProfile";
import { Instagram, Youtube } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Pagdandi, our mission to inspire and support personal growth, productivity, and self-improvement through insightful articles and resources.",
  // ... other metadata fields
};

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="flex flex-col md:flex-row items-start p-6 md:p-24 space-y-10 md:space-y-0">
        <article className="flex-1 space-y-6">
          <header>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Exploring Life&apos;s{" "}
              <span className="text-[#E9C46A]">Unbeaten Paths</span>
            </h1>
          </header>

          <div className="flex flex-col md:flex-row items-start md:space-x-8">
            {/* Left Section */}
            <section className="flex-1">
              <p className="text-xl font-semibold text-gray-700">
                Deepanshu Kuwar
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Hi, I&apos;m a curious traveler, tech enthusiast, and
                storyteller at heart. Life is all about journeys, and Pagdandi
                is my space to share mine. I believe each step leads to
                something new, inspiring those carving their own paths.
              </p>
              <nav className="flex space-x-6 pt-5">
                <Link
                  href="https://instagram.com"
                  aria-label="Follow on Instagram"
                  className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-500 transition"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </Link>
                <Link
                  href="https://youtube.com"
                  aria-label="Subscribe on YouTube"
                  className="flex items-center space-x-2 text-red-600 hover:text-red-500 transition"
                >
                  <Youtube className="w-5 h-5" />
                  <span>YouTube</span>
                </Link>
              </nav>
            </section>

            {/* Profile Section */}
            <section className="w-full md:w-auto flex justify-center">
              <MyProfile />
            </section>
          </div>

          <section className="pt-4 md:pt-10">
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
              Let&apos;s walk this path together! If you enjoy reading my posts,
              connect with me on Instagram or YouTube. Got a question or just
              want to say hello? Reach out! I&apos;d love to hear from you.
            </p>
          </section>
        </article>
      </section>
    </div>
  );
}

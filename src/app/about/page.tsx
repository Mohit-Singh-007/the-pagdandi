import MyProfile from "@/components/pages/About/MyProfile";
import { Instagram, Youtube } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Pagdandi, our mission to inspire and support personal growth, productivity, and self-improvement through insightful articles and resources.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About Pagdandi | Your Path to Growth and Learning",
    description:
      "Discover the story behind Pagdandi and how we're helping individuals improve their productivity, learning, and self-development with valuable insights and practical tips.",
    url: "https://yourdomain.com/about",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/about-image.jpg", // Add a relevant image URL
        width: 1200,
        height: 630,
        alt: "About Pagdandi - Growth and Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    title: "About Pagdandi | Your Path to Growth and Learning",
    description:
      "Learn more about Pagdandi and our mission to inspire personal growth, productivity, and self-improvement.",
    images: "https://yourdomain.com/about-image.jpg",
  },
  keywords:
    "about Pagdandi, personal growth, productivity, self-improvement, learning, blog platform",
};

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="flex flex-col md:flex-row items-start p-10 md:p-24 space-y-10 md:space-y-0">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold text-gray-800">
            Exploring Life&apos;s{" "}
            <span className="text-[#E9C46A]">Unbeaten Paths</span>
          </h1>
          <div className="flex flex-col md:flex-row items-start space-x-8">
            <div className="flex-1">
              <p className="text-xl font-semibold text-gray-700">Mohit Singh</p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Hi, I&apos;m a curious traveler, tech enthusiast, and
                storyteller at heart. Life is all about journeys, and Pagdandi
                is my space to share mine. I believe each step leads to
                something new, inspiring those carving their own paths.
              </p>
              <div className="flex space-x-6 pt-5">
                <Link
                  href="https://instagram.com"
                  className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-500 transition"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </Link>
                <Link
                  href="https://youtube.com"
                  className="flex items-center space-x-2 text-red-600 hover:text-red-500 transition"
                >
                  <Youtube className="w-5 h-5" />
                  <span>YouTube</span>
                </Link>
              </div>
            </div>
            <MyProfile />
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
              Let&apos;s walk this path together! If you enjoy reading my posts,
              connect with me on Instagram or YouTube. Got a question or just
              want to say hello? Reach out! I&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

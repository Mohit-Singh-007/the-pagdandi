import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "Pagdandi",
    template: "%s | Pagdandi",
  },
  description:
    "Pagdandi is a dynamic blog platform tailored for Indian readers passionate about productivity, learning, and self-improvement. The platform offers insightful articles and practical advice on topics like personalized learning paths, career growth strategies, and enhancing daily routines. With a focus on the Indian context, Pagdandi helps readers discover actionable knowledge to support personal and professional development. Accessible on both desktop and mobile, Pagdandi is your go-to resource for meaningful ideas and tools for growth in the fast-paced world of India.",

  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Pagdandi | Your Path to Growth and Learning in India",
    description:
      "Discover productivity tips, self-improvement strategies, and learning insights tailored for India with Pagdandi.",
    url: "https://www.thepagdandi.com",
    images: [
      {
        url: "https://www.thepagdandi.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Pagdandi Blog Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "thepagdandi.com",
    title: "Pagdandi | Your Path to Growth and Learning in India",
    description:
      "Explore productivity and self-improvement tips focused on India with Pagdandi.",
    images: [
      {
        url: "https://www.thepagdandi.com/twitter-image.png",
        width: 1200,
        height: 630,
        alt: "Pagdandi Blog Twitter Preview",
      },
    ],
  },

  keywords:
    "productivity tips, self-improvement strategies, personal growth, career development, learning resources, Indian bloggers, motivation for Indians, India growth mindset, professional success in India, life coaching India, habits for success, growth hacks, digital learning India, success stories India, mindset transformation, work-life balance India, personal development blog, Indian self-help blog, productivity tools, self-help for students, goal setting India, sustainable growth in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={montserrat.className}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

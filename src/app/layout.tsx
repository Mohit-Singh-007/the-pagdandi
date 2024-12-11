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
    "Pagdandi is a dynamic blog platform crafted for those passionate about productivity, learning, and self-improvement. It offers an engaging experience with a range of insightful articles on topics such as personalized learning paths, growth strategies, and practical tips for enhancing daily routines. With an intuitive, user-friendly interface, Pagdandi allows readers to explore curated content designed to inspire and guide them on their journey of personal and professional development. Accessible on both desktop and mobile, Pagdandi is your go-to resource for discovering valuable ideas and actionable knowledge tailored to support growth and productivity.",

  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Pagdandi | Your Path to Growth and Learning",
    description:
      "Explore insightful articles on productivity, learning, and self-improvement with Pagdandi.",
    url: "https://www.thepagdandi.com",
    type: "website",
    images: [
      {
        url: "https://www.thepagdandi.com",
        width: 800,
        height: 600,
        alt: "Pagdandi Blog Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    title: "Pagdandi | Your Path to Growth and Learning",
    description:
      "Explore tips on productivity, self-improvement, and learning on Pagdandi.",
    images: "https://www.thepagdandi.com",
  },
  keywords: "productivity, learning, self-improvement, personal growth, blog",
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

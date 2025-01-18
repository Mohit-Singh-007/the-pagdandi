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
    "Pagdandi is a vibrant blog platform rooted in the spirit of the Pahad, offering Indian readers a journey into productivity, learning, and self-improvement. Discover insightful blogs tailored for those seeking to enhance their daily routines, explore personalized growth paths, and embrace the simplicity of Pahadi life. With engaging content on career strategies, life hacks, and practical advice, Pagdandi connects readers to meaningful ideas inspired by the hills. Whether you're in the heart of the city or the serene mountains, Pagdandi is your trusted companion for personal and professional growth, blending the charm of Pahadi wisdom with modern insights.",
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

  keywords: "blog , pagdandi , The Pagdandi , website , Blogs",
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

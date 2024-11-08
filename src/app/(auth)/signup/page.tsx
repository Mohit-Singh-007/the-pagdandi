import SignUpForm from "@/components/pages/Login/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Create a new account on Pagdandi to begin your journey of learning, personal growth, and productivity. Sign up for free to get started.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sign Up | Pagdandi",
    description:
      "Create a new account on Pagdandi to begin your journey of learning, personal growth, and productivity. Sign up for free to get started.",
    url: "https://yourdomain.com/signup",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/signup-image.jpg", // Add relevant sign-up page image
        width: 1200,
        height: 630,
        alt: "Sign Up Pagdandi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    title: "Sign Up | Pagdandi",
    description:
      "Create a new account on Pagdandi to begin your journey of learning, personal growth, and productivity. Sign up for free to get started.",
    images: "https://yourdomain.com/signup-image.jpg",
  },
  keywords:
    "sign up, Pagdandi sign up, create account, join Pagdandi, learning platform, productivity, self-improvement",
};

export default function page() {
  return (
    <div>
      <SignUpForm />
    </div>
  );
}

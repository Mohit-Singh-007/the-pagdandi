import LoginForm from "@/components/pages/Login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Login | Pagdandi",
    description:
      "Log in to Pagdandi to access your personalized learning path and stay updated on productivity and self-improvement content.",
    url: "https://www.thepagdandi.com/login",
    type: "website",
    images: [
      {
        url: "https://www.thepagdandi/mainLogo.svg",
        width: 1200,
        height: 630,
        alt: "Login Pagdandi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    title: "Login | Pagdandi",
    description:
      "Log in to Pagdandi to access your personalized learning path and stay updated on productivity and self-improvement content.",
    images: "https://www.thepagdandi.com/mainLogo.svg",
  },
  keywords:
    "login, Pagdandi login, user login, productivity, self-improvement, learning platform",
};

export default function Page() {
  return <LoginForm />;
}

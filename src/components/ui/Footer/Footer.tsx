import { FooterLinks } from "@/util/Links";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000] text-white">
      {/* Background Section */}
      <div className="relative w-full h-40 flex items-center justify-center px-6 py-8">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4 text-white">
            Journeys Begin with Words – Start Yours Here.
          </h2>
          <Link
            href="/login"
            className="bg-[#FDCF09] text-black px-6 py-2 rounded-full hover:bg-[#FFDE4D] transition"
          >
            Join Us
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-start md:items-start">
          <h3 className="text-2xl font-semibold mb-2 text-[#FDCF09]">
            PAGDANDI
          </h3>
          <p className="text-sm">
            © {new Date().getFullYear()} Pagdandi. All rights reserved.
          </p>
          <p className="text-sm">Small steps. Big change.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-start space-y-1 md:items-center">
          {FooterLinks.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="hover:text-[#FFDE4D] transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 justify-center">
          {[
            { href: "https://www.facebook.com", icon: Facebook },
            { href: "https://www.instagram.com", icon: Instagram },
            { href: "https://www.linkedin.com", icon: Linkedin },
            { href: "https://www.twitter.com", icon: Twitter },
          ].map(({ href, icon: Icon }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFDE4D] transition"
            >
              <Icon size={24} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

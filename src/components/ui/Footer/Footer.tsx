import { FooterLinks } from "@/util/Links";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fadd76] text-gray-800 relative">
      {/* Background Section */}
      <div className="relative w-full h-40">
        <div className="absolute inset-0 flex items-start md:items-center justify-center flex-col px-6 py-8">
          <h2 className="text-xl font-bold mb-2 md:text-center">
            Journeys Begin with Words – Start Yours Here.
          </h2>
          <Link
            href="/contact"
            className="bg-[#333333] text-gray-300 px-6 py-2 rounded-full mt-4 hover:bg-[#403d3d] hover:text-gray-300 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid items-center grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-semibold mb-2">PAGDANDI</h3>
          <p className="text-sm text-gray-800">
            Copyright © {new Date().getFullYear()} Pagdandi. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-700">Small steps. Big change.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-1">
          {FooterLinks.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="hover:border-b-2 hover:border-b-black"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 md:justify-center md:gap-6">
          {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center gap-2 text-gray-700 hover:border-b-2 hover:border-b-black"
            >
              <Icon size={24} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

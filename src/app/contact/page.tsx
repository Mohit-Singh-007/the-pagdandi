import ContactForm from "@/components/pages/Contact/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Pagdandi team. Whether you have a question, feedback, or collaboration opportunity, we are here to help and connect with you.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us | Pagdandi",
    description:
      "Reach out to Pagdandi for any inquiries, feedback, or collaboration opportunities. Our team is ready to assist you.",
    url: "https://yourdomain.com/contact",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/contact-image.jpg", // Add a relevant image URL, like a contact form image
        width: 1200,
        height: 630,
        alt: "Contact Pagdandi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    title: "Contact Us | Pagdandi",
    description:
      "Have questions or feedback? Contact Pagdandi's team. We are happy to connect with you.",
    images: "https://yourdomain.com/contact-image.jpg",
  },
  keywords:
    "contact Pagdandi, contact us, feedback, inquiries, customer support, collaboration",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 md:px-20 py-12">
      <h1 className="text-4xl font-bold md:text-center mb-10  uppercase">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold ">
            &mdash; Get in Touch &mdash;
          </h2>
          <p>
            Feel free to reach out to us through the form or by the following
            methods:
          </p>
          <div className="flex items-center gap-4">
            <Phone className="text-2xl" />

            <span>+91 12345 67890</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-2xl" />
            <span>info@pagdandi.com</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-2xl" />
            <span>Bhimtal, Uttarakhand, India</span>
          </div>
        </div>

        <div className="md:w-1/2 bg-gray-50 p-8 shadow-lg rounded-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

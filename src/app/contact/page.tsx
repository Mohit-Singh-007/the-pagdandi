import ContactForm from "@/components/pages/Contact/Component/ContactForm";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineEnvironment,
} from "react-icons/ai";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 md:px-20 py-12">
      <h1 className="text-4xl font-bold text-center mb-10  uppercase">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Static Contact Information */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold ">
            &mdash; Get in Touch &mdash;
          </h2>
          <p>
            Feel free to reach out to us through the form or by the following
            methods:
          </p>
          <div className="flex items-center gap-4">
            <AiOutlinePhone className="text-2xl" />
            <span>+91 12345 67890</span>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineMail className="text-2xl" />
            <span>info@pagdandi.com</span>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineEnvironment className="text-2xl" />
            <span>Bhimtal, Uttarakhand, India</span>
          </div>
        </div>

        {/* Client-side Contact Form */}
        <div className="md:w-1/2 bg-gray-50 p-8 shadow-lg rounded-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

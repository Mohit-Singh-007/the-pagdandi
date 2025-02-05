import MyProfile from "@/components/pages/About/MyProfile";
import { Instagram, Youtube } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Pagdandi, our mission to inspire and support personal growth, productivity, and self-improvement through insightful articles and resources.",
};

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="flex flex-col md:flex-row items-start p-6 md:p-24 space-y-10 md:space-y-0">
        <article className="flex-1 space-y-6">
          <header>
            <h1 className="text-4xl md:text-5xl font-extrabold text-black">
              पहाड़ और <span className="text-[#000000]">पगडंडी</span>
            </h1>
          </header>

          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              पगडंडी सिर्फ़ पहाड़ के छोटे छोटे रास्तों का नाम नहीं, बल्कि यह उन
              कहानियों की आवाज़ है जो पहाड़ की मिट्टी में गूंजती हैं। यह उन
              धुनों का एहसास है जो पहाड़ी संगीत में बजता हैं। यह उन शब्दों की
              अभिव्यक्ति है जो लोक साहित्य और परंपराओं में जीवंत हैं।
            </p>
            <p className="text-gray-600 leading-relaxed">
              हमारा उद्देश्य है कि सोशल मीडिया और डिजिटल मंचों के माध्यम से
              उत्तराखंड की संस्कृति, भाषा, साहित्य और संगीत को जीवंत रखा जाए।
              &quot;पगडंडी&quot; उन भूले-बिसरे लोकगीतों, रीति-रिवाजों और
              जनसंघर्षों की कहानी कहने का प्रयास है, जिन्हें समय की धूल ने ढक
              दिया है।
            </p>
            <p className="text-gray-600 leading-relaxed">
              हमारी यह यात्रा आपको पहाड़ की आत्मा से जोड़ने की कोशिश है—चाहे वह
              यहां की अनसुनी लोककथाएं हों, घाटियों में गूंजती न्योली,जागर
              (पारंपरिक गीत) हों, अथवा पहाड़ी जनजीवन की कठिनाइयां और संवेदनाएं
              हों। आइए, &quot;पगडंडी&quot; के इस सफर में हमारे साथ कदम से कदम
              मिलाइए और पहाड़ की असली पहचान को संजोए रखिए।
            </p>
          </div>

          <nav className="flex space-x-6 pt-5">
            <Link
              href="https://www.instagram.com/the_pagdandi?igsh=dXlmejJxcDJiam56"
              aria-label="Follow on Instagram"
              className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-500 transition"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </Link>
            <Link
              href="https://youtube.com/@pagdandi_official?si=38IxqF7_EqyGXs-N"
              aria-label="Subscribe on YouTube"
              className="flex items-center space-x-2 text-red-600 hover:text-red-500 transition"
            >
              <Youtube className="w-5 h-5" />
              <span>YouTube</span>
            </Link>
          </nav>
        </article>

        <section className="flex justify-center w-full md:w-1/3">
          <MyProfile />
        </section>
      </section>
    </div>
  );
}

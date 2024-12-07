import { MapPinned } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const poets = [
  {
    name: "रोहित भट्ट",
    place: "15 मई 2003, बागेश्वर, तिलसारी गाँव",
    description:
      "हिन्दी साहित्य, राजनीतिक शास्त्र व समाज शास्त्र से बी.ए। 'पगडंडी' में कार्यरत व हिन्दी साहित्य में अध्ययनरत्। आकाशवाणी व अन्य मंचों से कविताओं का प्रसारण। प्रमुख काव्य रचनाएं 'तड़पती न्यौली', 'ईजा की महरूम साड़ी' आदि।",
    image: "/rohit-min.png",
  },
  // {
  //   name: "हिमांशु कुनियाल",
  //   place: "22 अप्रैल 1999, चमोली, सरकोट गाँव",
  //   description:
  //     "कुमाऊँ विश्वविद्यालय से भूगोल में एमए। वर्तमान में अध्ययनरत । आकाशवाणी व अन्य मंचों से कविताओं का प्रसारण।  प्रमुख रचनाएं 'पहाड़ बुलाए तो लौटना पड़ता है', 'कुमर( कांटा)' आदि  ",
  //   image: "/himanshu-min.png",
  // },
];

export default function PoetPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="space-y-6">
        {poets.map((poet, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white md:rounded-l-full shadow-lg overflow-hidden p-6"
          >
            {/* Poet Image Section */}
            <div className="w-28 h-24 md:w-28 md:h-24 mr-6 relative  mb-4 md:mb-0">
              <Image
                src={poet.image as string}
                alt={poet.name}
                width={128}
                height={128}
                quality={70}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Poet Details Section */}
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-xl font-bold mb-2">{poet.name}</h2>

              {/* Place and Logo in Same Line */}
              <div className="flex items-center justify-center md:justify-start text-sm mb-2">
                <MapPinned className="mr-2" />
                <p>{poet.place}</p>
              </div>

              {/* Description */}
              {poet.description && (
                <p className="text-sm mb-4 hidden md:block">
                  {poet.description}
                </p>
              )}

              <Link
                href={`/poets/${encodeURIComponent(poet.name)}`}
                className="px-6 py-3 mt-2  bg-[#FDCF09] text-black rounded-lg hover:bg-[#FFDE4D] transition duration-300"
              >
                View Poems
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { MapPinned } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const poets = [
  {
    name: "रोहित भट्ट",
    place: "15 मई 2003, बागेश्वर, तिलसारी गाँव",
    image: "/rohit-min.png",
  },
  {
    name: "हिमांशु कुनियाल",
    place: "22 अप्रैल 1999, चमोली, सरकोट गाँव",
    image: "/himanshu-min.png",
  },
  {
    name: "अनिल कार्की",
    place: "20 जून 1986, पिधौरागढ़, मुवानी गांव ",
    image: "/anil-main.jpg",
  },
  {
    name: "हेमंत बिष्ट",
    place: "28 जून 1957, नैनीताल ",
    image: "/hemant.jpg",
  },
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
            <div className="w-28 h-28 md:w-24 md:h-24 mr-6 relative  mb-4 md:mb-0">
              <Image
                src={poet.image as string}
                alt={poet.name}
                fill
                quality={75}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Poet Details Section */}
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-xl font-bold mb-2">{poet.name}</h2>

              {/* Place and Logo in Same Line */}
              <div className="flex items-center justify-center md:justify-start text-sm mb-4">
                <MapPinned className="mr-2" />
                <p>{poet.place}</p>
              </div>

              <Link
                href={`/poets/${encodeURIComponent(poet.name)}`}
                className="px-4 py-2 bg-[#FDCF09] text-black rounded-lg hover:bg-[#FFDE4D] transition duration-300"
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

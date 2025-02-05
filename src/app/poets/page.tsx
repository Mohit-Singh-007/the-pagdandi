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
    name: "ध्रुव पांडे",
    place: "14 नवंबर 1988, नैनीताल ,हल्द्वानी",
    image: "/dhruv.jpg",
  },
  {
    name: "हेमंत बिष्ट",
    place: "28 जून 1957, नैनीताल ",
    image: "/hament.jpg",
  },
];

export default function PoetPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {poets.map((poet) => (
          <div
            key={poet.name}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
          >
            {/* Poet Image Section */}
            <Image
              src={poet.image || "/placeholder.jpg"}
              alt={poet.name || "Unknown Poet"}
              width={100}
              height={100}
              className="w-24 h-24 object-cover rounded-full mb-4"
              priority
              quality={75}
            />

            {/* Poet Details Section */}
            <h2 className="text-lg font-bold mb-2">{poet.name}</h2>

            <div className="flex items-center text-sm text-gray-600 mb-4">
              <MapPinned className="mr-2" />
              <p>{poet.place || "Place not available"}</p>
            </div>

            {/* View Poems Link */}
            <Link
              href={`/poets/${encodeURIComponent(poet.name)}`}
              className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
            >
              View Poems
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

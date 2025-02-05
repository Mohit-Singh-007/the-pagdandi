import Image from "next/image";

export default function MyProfile() {
  return (
    <div className="flex justify-center items-center w-full mt-5">
      <div className="relative w-full max-w-md h-72 sm:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/mainLogo.svg"
          alt="Profile Image"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          quality={70}
        />
      </div>
    </div>
  );
}

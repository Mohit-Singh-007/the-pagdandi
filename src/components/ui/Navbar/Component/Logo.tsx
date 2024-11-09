import Image from "next/image";

export default function Logo() {
  return (
    <div className="text-2xl font-semibold md:text-4xl">
      <Image
        src="/mainLogo.png"
        height={30}
        width={30}
        alt="logo | Pagdandi"
        className="rounded-full"
      />
    </div>
  );
}

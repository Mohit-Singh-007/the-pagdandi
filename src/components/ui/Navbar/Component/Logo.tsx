import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="text-2xl font-semibold md:text-4xl">
      <Image
        src="/mainLogo.png"
        height={30}
        width={30}
        alt="logo | Pagdandi"
        className="rounded-full"
        priority
      />
    </Link>
  );
}

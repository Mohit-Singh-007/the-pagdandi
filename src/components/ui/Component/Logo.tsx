import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="text-2xl font-semibold md:text-4xl mt-0 align-middle"
    >
      <Image
        src="/pagdandilog.jpg"
        height={70}
        width={90}
        alt="logo | Pagdandi"
        className="rounded-full"
        priority
      />
    </Link>
  );
}

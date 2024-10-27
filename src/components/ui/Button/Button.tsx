import Link from "next/link";

export default function Button() {
  return (
    <div className="md:flex items-center hidden">
      <Link
        href={"/login"}
        className="px-4 py-2 bg-[#fadd76] text-gray-800 text-lg font-medium tracking-tighter rounded-lg "
      >
        Sign In
      </Link>
    </div>
  );
}

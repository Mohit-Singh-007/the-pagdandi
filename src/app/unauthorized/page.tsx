import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unauthorized",
};

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-yellow-300">
      <h1 className="text-4xl font-bold mb-4">Access Denied!</h1>
      <p className="text-lg mb-8">You do not have access to this page.</p>
      <Link href={"/"}>
        <span className="text-yellow-500 hover:text-yellow-400 transition duration-150 ease-in-out underline">
          Go Back Home
        </span>
      </Link>
    </div>
  );
}

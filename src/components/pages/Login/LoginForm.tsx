import React from "react";
import Image from "next/image";
import { signInAction } from "@/lib/action";

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form action={signInAction}>
          <button className="flex items-center justify-center space-x-3 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition duration-300 w-full">
            <Image src="/google.svg" alt="Google Logo" height={50} width={50} />
            <span>Sign in with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
}

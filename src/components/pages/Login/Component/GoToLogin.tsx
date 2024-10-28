import Link from "next/link";
import React from "react";

export default function GoToLogin() {
  return (
    <div className="mt-6 text-center">
      <span className="text-gray-600">Already have an account? </span>
      <Link href="/login">
        <span className="text-blue-500 hover:underline cursor-pointer">
          Log In
        </span>
      </Link>
    </div>
  );
}

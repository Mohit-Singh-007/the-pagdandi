"use client";
import dynamic from "next/dynamic";
import GoogleLogin from "./Component/GoogleLogin";
import GoToLogin from "./Component/GoToLogin";
const DynamicForm = dynamic(() => import("./Component/Form"));

export default function SignUpForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Sign Up for Pagdandi
        </h2>

        <DynamicForm />

        <div className="mt-6 flex items-center justify-between">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-gray-500 text-sm">or</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        <GoogleLogin />
        {/* Link to Login Page */}
        <GoToLogin />
      </div>
    </div>
  );
}

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormProps, SignUpSchema } from "@/util/SignupSchema";
import Link from "next/link";
import { Github } from "lucide-react";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormProps>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: SignUpFormProps) => {
    console.log(data);
    // Add your sign-up logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Sign Up for Pagdandi
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-5"
        >
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              autoComplete="email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              autoComplete="new-password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              autoComplete="new-password"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-gray-500 text-sm">or</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        <div className="mt-4 space-y-3">
          <button className="flex items-center justify-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition duration-300 w-full">
            <Github size={20} />
            <span>Sign up with GitHub</span>
          </button>

          <button className="flex items-center justify-center bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300 w-full">
            <span>Sign up with Google</span>
          </button>
        </div>

        {/* Link to Login Page */}
        <div className="mt-6 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <Link href="/login">
            <span className="text-blue-500 hover:underline cursor-pointer">
              Log In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

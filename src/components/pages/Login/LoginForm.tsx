"use client";

import { LoginFormProps, LoginSchema } from "@/util/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Github } from "lucide-react";

export default function LoginForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<LoginFormProps>({
    resolver: zodResolver(LoginSchema),
  });

  function onSubmit(data: LoginFormProps) {
    console.log(data);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Login to Pagdandi
        </h2>

        {/* Email & Password Login Form */}
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
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="email"
              name="email"
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
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="current-password"
              name="password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isSubmitting ? "Signing in..." : "Sign in with Email"}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-gray-500 text-sm">or</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="mt-4 space-y-3">
          <button className="flex items-center justify-center space-x-3 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition duration-300 w-full">
            <Github />
            <span>Sign in with GitHub</span>
          </button>

          <button className="flex items-center justify-center space-x-3 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300 w-full">
            <span>Sign in with Google</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <span className="text-gray-600">Don&apos;t have an account? </span>
          <Link href={"/signup"}>
            <span className="text-blue-500 hover:underline cursor-pointer">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

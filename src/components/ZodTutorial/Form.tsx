"use client";

import { useForm } from "react-hook-form";
import { ContactFormProps, ContactFormSchema } from "./Schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Form() {
  // 3 => resolve kro types ko
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormProps>({
    resolver: zodResolver(ContactFormSchema),
  });

  function onSubmit(data: ContactFormProps) {
    console.log(data);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-lg mx-auto p-6 bg-white rounded-md shadow-md"
    >
      <input
        type="text"
        placeholder="First Name"
        {...register("firstName")}
        id="firstName"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <input
        type="text"
        placeholder="Last Name"
        {...register("lastName")}
        id="lastName"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}
      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        id="email"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input
        type="text"
        placeholder="Your Phone Number"
        id="phoneNumber"
        {...register("phoneNumber")}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      <textarea
        placeholder="Your Address"
        {...register("address")}
        id="address"
        rows={4}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.address && <p>{errors.address.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded-md transition duration-300"
      >
        {isSubmitting ? "Submitting" : "Submit"}
      </button>
    </form>
  );
}

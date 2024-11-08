"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormData = {
  title: string;
  imageFile: FileList;
  description: string;
  slug: string;
};

export default function BlogForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [selectedSlug, setSelectedSlug] = useState("");
  const availableSlugs = ["Kumaon", "Uttarakhand", "Garhwal"];

  const onSubmit = (data: FormData) => {
    toast.info("Form submitted! (No backend logic attached yet)");
    console.log("Form data:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Create a New Blog Post
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          {...register("title", { required: "Title is required" })}
          className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm transition ease-in-out duration-150"
        />
        {errors.title && (
          <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <input
          type="file"
          accept="image/*"
          {...register("imageFile", { required: "Image is required" })}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {errors.imageFile && (
          <p className="text-red-500 text-xs mt-1">
            {errors.imageFile.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          {...register("description", { required: "Description is required" })}
          className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm transition ease-in-out duration-150"
          rows={4}
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-xs mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          value={selectedSlug}
          onChange={(e) => setSelectedSlug(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm transition ease-in-out duration-150"
        >
          <option value="" disabled>
            Select or type a category...
          </option>
          {availableSlugs.map((slug) => (
            <option key={slug} value={slug}>
              {slug}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={selectedSlug}
          onChange={(e) => setSelectedSlug(e.target.value)}
          placeholder="Or type a custom slug"
          className="mt-2 block w-full px-3 py-2 border rounded-lg shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm transition ease-in-out duration-150"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}

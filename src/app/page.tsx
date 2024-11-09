import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <section className="py-6 w-full text-center">
        <h1 className="text-2xl font-bold md:text-4xl whitespace-nowrap">
          &mdash;Welcome to{" "}
          <span className="text-[#FDCF09]  bg-image">Pagdandi</span>
          &mdash;
        </h1>

        <p className="mt-3 text-sm text-gray-700 w-3/4 mx-auto md:text-lg">
          Discover stories, experiences, and insights one step at a time.
        </p>
      </section>

      {/* component later */}
      <section className="py-6 w-full flex items-center justify-center ">
        <Image src={"/profile.jpg"} alt="slider" height={500} width={500} />
      </section>
    </div>
  );
}

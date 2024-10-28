export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 ">
      <section className="py-6 w-full text-center">
        <h1 className="text-2xl font-bold md:text-4xl whitespace-nowrap">
          &mdash;Welcome to <span className="text-[#E9C46A]">Pagdandi</span>
          &mdash;
        </h1>
        <p className="mt-3 text-sm text-gray-700 w-3/4 mx-auto md:text-lg">
          Discover stories, experiences, and insights one step at a time.
        </p>
      </section>

      {/* component later */}
      <section className="py-6 w-full">
        This will be team and owner small section
      </section>
      <section>some latest blogs will come here</section>
    </div>
  );
}

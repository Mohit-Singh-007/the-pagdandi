const blogsData = [
  {
    id: 1,
    title: "Exploring the Untouched Villages of Himachal Pradesh",
    author: "Riya Sharma",
    date: "2024-10-15",
    category: "Adventure Travel",
    summary:
      "Discover hidden gems in Himachal Pradesh, from scenic trails to lesser-known cultural experiences.",
    content: `
      Himachal Pradesh is known for its beautiful landscapes and rich culture. In this blog, we explore some of the 
      untouched villages where you can experience authentic local traditions, breathtaking views, and unique 
      rural tourism opportunities.
    `,
    images: [
      {
        url: "https://example.com/images/himachal-village.jpg",
        alt: "Village landscape in Himachal Pradesh",
      },
    ],
    tags: ["Himachal Pradesh", "Village Tourism", "Adventure"],
  },
  {
    id: 2,
    title: "A Guide to Responsible Travel in Rural Areas",
    author: "Sunil Gupta",
    date: "2024-10-20",
    category: "Eco-Tourism",
    summary:
      "Tips and guidelines for minimizing your environmental footprint while exploring rural destinations.",
    content: `
      Responsible travel is key to preserving the beauty and culture of rural areas. This guide covers essential 
      tips on reducing your environmental impact, respecting local customs, and supporting small businesses.
    `,
    images: [
      {
        url: "https://example.com/images/responsible-travel.jpg",
        alt: "Eco-friendly travel in rural areas",
      },
    ],
    tags: ["Eco-Tourism", "Responsible Travel", "Sustainability"],
  },
  {
    id: 3,
    title: "Top Trekking Routes in Uttarakhand",
    author: "Vikram Singh",
    date: "2024-11-02",
    category: "Adventure Travel",
    summary:
      "Explore the most scenic trekking routes in Uttarakhand for a thrilling adventure.",
    content: `
      Uttarakhand is home to some of India's best trekking routes. Whether you're a beginner or an experienced 
      trekker, there are trails for everyone. Here are the top trekking routes in Uttarakhand that you shouldn't miss.
    `,
    images: [
      {
        url: "https://example.com/images/uttarakhand-trekking.jpg",
        alt: "Trekking route in Uttarakhand",
      },
    ],
    tags: ["Uttarakhand", "Trekking", "Adventure"],
  },
];

export default function BlogCard() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-4">
      {blogsData.map((blog) => (
        <div
          key={blog.id}
          className="max-w-sm w-60 rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
        >
          <img
            src={blog.images[0].url}
            alt={blog.images[0].alt}
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h2 className="text-md md:text-lg font-semibold text-gray-800 truncate">
              {blog.title}
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              By {blog.author} • {new Date(blog.date).toLocaleDateString()}
            </p>
            <p className="text-sm md:text-xs text-gray-700 mt-2">
              {blog.summary.length > 100
                ? `${blog.summary.substring(0, 100)}...`
                : blog.summary}
            </p>
            <div className="mt-2 flex justify-between items-center text-xs md:text-sm text-gray-500">
              <span className="px-2 py-1 bg-gray-200 rounded">
                {blog.category}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

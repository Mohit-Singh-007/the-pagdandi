import { BlogPageType } from "@/types/db";
import BlogRow from "./BlogRow";

const BlogTable = ({ posts }: BlogPageType) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full bg-white border border-gray-200 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-3 border-b border-r text-left">Title</th>
            <th className="py-2 px-3 border-b border-r text-left">Author</th>
            <th className="py-2 px-3 border-b border-r text-left">Date</th>
            <th className="py-2 px-3 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <BlogRow key={post.id} post={post} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;

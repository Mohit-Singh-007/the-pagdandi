import { toast } from "react-toastify";
//import { addPosts } from "@/db/data-service"; // Import addPost function
import { auth } from "@/lib/auth";
import BlogForm from "./BlogForm";

const BlogPostForm = async () => {
  const session = await auth();

  const onSubmit = async (data: any) => {
    if (!session) {
      toast.error("You must be logged in to create a post.");
      return;
    }

    // const response = await addPosts({
    //   ...data,
    //   author_id: session.user.id, // Assuming session user has an id
    //   author_name: session.user.name, // Assuming session user has a name
    // });
  };

  return <BlogForm />;
};

export default BlogPostForm;

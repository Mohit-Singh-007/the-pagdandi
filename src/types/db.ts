export interface UserType {
  email: string;
  role?: string;
  password?: string;
}

export type Blogs = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageURL?: string;
  author_id: number;
  created_at: Date;
};

export interface BlogPageType {
  posts: Blogs[];
  onEdit: (postId: number) => void;
  onDelete: (postId: number) => void;
}

export interface BlogPageSingleProp {
  posts: Blogs[];
}

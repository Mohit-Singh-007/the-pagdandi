export type Blogs = {
  id: number;
  title: string;
  category: string;
  description: string;
  image?: string;
  author_name: number;
  created_at: Date;
};

export interface BlogPageType {
  posts: Blogs[];
}

export interface BlogPageSingleProp {
  posts: Blogs[];
}

import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://www.thepagdandi.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.thepagdandi.com/blogs",
      lastModified: new Date(),
    },
    {
      url: "https://www.thepagdandi.com/poets",
      lastModified: new Date(),
    },
    {
      url: "https://www.thepagdandi.com/recommended",
      lastModified: new Date(),
    },
    {
      url: "https://www.thepagdandi.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.thepagdandi.com/contact",
      lastModified: new Date(),
    },
  ];
}

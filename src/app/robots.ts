import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/create-blogs", "/admin/all-blogs"],
      },
    ],

    sitemap: `localhost:3000/sitemap.xml`,
  };
}

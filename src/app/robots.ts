import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/privacy", "/recommended", "/user"],
      },
    ],
    sitemap: "https://www.thepagdandi.com/sitemap.xml",
  };
}

import { MetadataRoute } from "next";
import robotsMetadata from "@/configs/robotsMetadata";

export default function robots(): MetadataRoute.Robots {
  const { siteUrl } = robotsMetadata;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

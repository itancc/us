import { MetadataRoute } from "next";

const robotsMetadata = {
  siteUrl: "https://nosgr8.top",
};

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

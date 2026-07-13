import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${site.domain}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.domain}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.domain}/terms-and-conditions`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}

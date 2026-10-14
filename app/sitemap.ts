import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/` },
    ...projects.map(({ slug }) => ({ url: `${site.url}/projects/${slug}/` })),
  ];
}

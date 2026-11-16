import type { MetadataRoute } from "next";
import { allRoutes } from "@/data/navigation";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return allRoutes.map(({ href }) => ({
    url: `${siteUrl}${href === "/" ? "/" : `${href}/`}`,
  }));
}

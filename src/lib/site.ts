import type { Metadata } from "next";
import { profile } from "@/data/profile";

function configuredOrigin(): string | undefined {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!value) return undefined;
  const url = new URL(value);
  if (!["https:", "http:"].includes(url.protocol) || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an http(s) origin without a path, credentials, query, or fragment.");
  }
  return url.origin;
}

export const siteUrl = configuredOrigin();
export const siteDescription = `${profile.name} · Theoretical and computational chemistry at POSTECH. Ultrafast dynamics, nonadiabatic processes, excited-state proton transfer, and molecular machine learning.`;

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = siteUrl ? `${siteUrl}${path === "/" ? "/" : `${path}/`}` : undefined;
  return {
    title,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: `${title} | ${profile.name}`,
      description,
      siteName: `${profile.name} · Academic portfolio`,
      type: "website",
      locale: "en_US",
      ...(url ? { url } : {}),
      ...(siteUrl ? { images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: `${profile.name} · ${profile.discipline}` }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${profile.name}`,
      description,
      ...(siteUrl ? { images: [`${siteUrl}/opengraph-image`] } : {}),
    },
  };
}

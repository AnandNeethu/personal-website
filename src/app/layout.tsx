import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/profile";
import { siteDescription, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: `${profile.name} | ${profile.discipline}`, template: `%s | ${profile.name}` },
  description: siteDescription,
  applicationName: `${profile.name} · Academic portfolio`,
  authors: [{ name: profile.name }],
  keywords: ["Neethu Anand", "POSTECH", "computational chemistry", "MCTDH", "ESIPT", "nonadiabatic dynamics", "molecular photophysics"],
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7f3" },
    { media: "(prefers-color-scheme: dark)", color: "#101c29" },
  ],
};

const themeScript = `(function(){var t;try{t=localStorage.getItem('academic-theme');}catch(e){}document.documentElement.dataset.theme=t==='light'||t==='dark'?t:window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.designation,
    description: profile.introduction,
    ...(siteUrl ? { url: siteUrl } : {}),
    worksFor: { "@type": "Organization", name: profile.affiliation },
    knowsAbout: profile.interests,
  };
  return <html lang="en" suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
    <body id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
    </body>
  </html>;
}

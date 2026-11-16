import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { moreNavigation } from "@/data/navigation";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div><Link className="footer-name" href="/">{profile.name}<span>.</span></Link><p>Theoretical & computational chemistry.<br />Understanding molecules in motion.</p></div>
      <nav aria-label="Academic information"><span className="eyebrow">Academic profile</span>{moreNavigation.slice(0, 4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <nav aria-label="Further information"><span className="eyebrow">Elsewhere & more</span><Link href="/publications">Publications</Link><Link href="/awards">Awards & recognition</Link><Link href="/cv">Curriculum vitae</Link><Link href="/contact">Contact<ArrowUpRight size={13} aria-hidden="true" /></Link></nav>
    </div>
    <div className="container footer-bottom"><p>© {profile.name}</p><p>Academic record · {profile.contentDate}</p><a href="#top">Back to top ↑</a></div>
  </footer>;
}

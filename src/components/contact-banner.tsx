import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ContactBanner() {
  return <aside className="contact-banner"><div><p className="eyebrow">Scientific exchange</p><h2>Good questions connect us.</h2><p>Explore shared interests in molecular photophysics,<br className="desktop-break" /> quantum dynamics, and computational chemistry.</p></div><Link href="/contact" className="button button-light">Get in touch<ArrowUpRight size={18} aria-hidden="true" /></Link></aside>;
}

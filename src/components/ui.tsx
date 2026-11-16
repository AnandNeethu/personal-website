import Link from "next/link";
import { ArrowDown, ArrowUpRight, Info } from "lucide-react";
import type { ReactNode } from "react";

export function PageHeading({ eyebrow, title, description, children }: {
  eyebrow: string; title: string; description: string; children?: ReactNode;
}) {
  return (
    <header className="page-heading">
      <p className="eyebrow"><span />{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-description">{description}</p>
      {children}
    </header>
  );
}

export function SectionHeading({ number, title, description, href, linkLabel }: {
  number?: string; title: string; description?: string; href?: string; linkLabel?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        {number && <p className="eyebrow">{number} / Explore</p>}
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {href && <TextLink href={href}>{linkLabel ?? "Explore"}</TextLink>}
    </div>
  );
}

export function TextLink({ href, children, className = "" }: {
  href: string; children: ReactNode; className?: string;
}) {
  return <Link className={`text-link ${className}`} href={href}>{children}<ArrowUpRight size={16} aria-hidden="true" /></Link>;
}

export function ButtonLink({ href, children, secondary = false }: {
  href: string; children: ReactNode; secondary?: boolean;
}) {
  return <Link className={`button ${secondary ? "button-secondary" : "button-primary"}`} href={href}>{children}<ArrowUpRight size={17} aria-hidden="true" /></Link>;
}

export function Tags({ items }: { items: readonly string[] }) {
  return <ul className="tags" aria-label="Topics and methods">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function ReviewNote({ children }: { children: ReactNode }) {
  return <aside className="review-note"><Info size={18} aria-hidden="true" /><div><strong>For review</strong><p>{children}</p></div></aside>;
}

export function SectionJump({ items }: { items: readonly { id: string; label: string }[] }) {
  return <nav className="section-jump" aria-label="On this page">{items.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}<ArrowDown size={13} aria-hidden="true" /></a>)}</nav>;
}

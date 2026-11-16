"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { navigation, moreNavigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const more = useRef<HTMLDetailsElement>(null);
  const header = useRef<HTMLElement>(null);
  const moreActive = moreNavigation.some((item) => item.href === pathname);

  function closeNavigation() {
    setOpen(false);
    if (more.current) more.current.open = false;
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (more.current?.open) {
          more.current.open = false;
          more.current.querySelector("summary")?.focus();
        } else if (open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) {
        setOpen(false);
        if (more.current) more.current.open = false;
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return <header className="site-header" ref={header}>
    <div className="container header-inner">
      <Link href="/" className="brand" onClick={closeNavigation} aria-label={`${profile.name}, home`}>
        <span className="brand-mark" aria-hidden="true">n<span>.</span>a</span>
        <span className="brand-name">{profile.name}<span>Research & discovery</span></span>
      </Link>
      <div className="mobile-controls">
        <ThemeToggle />
        <button ref={toggle} type="button" className="icon-button menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
      </div>
      <nav id="primary-navigation" aria-label="Main navigation" className={`primary-navigation ${open ? "is-open" : ""}`}>
        {navigation.map((item) => <Link key={item.href} href={item.href} onClick={closeNavigation} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
        <details className="more-navigation" ref={more}>
          <summary data-active={moreActive}>Explore<ChevronDown size={13} aria-hidden="true" /></summary>
          <div className="more-panel">{moreNavigation.map((item) => <Link key={item.href} href={item.href} onClick={closeNavigation} aria-current={pathname === item.href ? "page" : undefined}>{item.label}<ArrowUpRight size={14} aria-hidden="true" /></Link>)}</div>
        </details>
        <Link href="/contact" className="nav-contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={closeNavigation}>Let’s connect<ArrowUpRight size={14} aria-hidden="true" /></Link>
      </nav>
    </div>
  </header>;
}

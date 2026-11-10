"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Destinations", href: "/#destinations" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Our stories", href: "/#stories" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Explore India home" onClick={() => setOpen(false)}>
          <span className="brand-mark">EI</span>
          <span className="brand-copy"><strong>EXPLORE INDIA</strong><em>travelled, discovered, experienced</em></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="text-link" href="/login">Log in</Link>
          <Link className="button button-dark header-book" href="/booking">Plan a trip <ArrowUpRight size={15} /></Link>
        </div>
        <button className="menu-button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="mobile-menu shell">
        {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link href="/login" onClick={() => setOpen(false)}>Log in</Link>
        <Link className="button button-dark" href="/booking" onClick={() => setOpen(false)}>Plan a trip <ArrowUpRight size={15} /></Link>
      </div>}
      {pathname !== "/" && <div className="header-rule" />}
    </header>
  );
}

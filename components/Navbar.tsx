"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Top navigation bar for the GreenDials site.  It uses a simple mobile menu toggle
 * for small screens and displays all links horizontally on larger screens.  The
 * navigation links correspond to the core sections of the website.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/rare-watches", label: "Rare Watches" },
    { href: "/limited-editions", label: "Limited Editions" },
    { href: "/celebrity-collections", label: "Celebrity Collections" },
    { href: "/journal", label: "Journal" },
    { href: "/about", label: "About" },
    { href: "/app-vision", label: "Vision" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="bg-greenSurface text-ivory border-b border-greenDark">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-serif font-bold text-gold">
          GreenDials
        </Link>
        <button
          className="sm:hidden p-2 rounded-md border border-greenDark text-ivory"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {/* Simple hamburger icon using three lines */}
          <span className="block w-5 h-0.5 bg-ivory my-1"></span>
          <span className="block w-5 h-0.5 bg-ivory my-1"></span>
          <span className="block w-5 h-0.5 bg-ivory my-1"></span>
        </button>
        <nav
          className={
            (open ? "block" : "hidden") +
            " sm:flex sm:items-center sm:space-x-6 text-sm font-medium"
          }
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-2 px-2 hover:text-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
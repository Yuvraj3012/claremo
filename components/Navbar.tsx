"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Agents", href: "#agents" },
  { label: "Brain", href: "#brain" },
  { label: "Features", href: "#features" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900 text-sm">
          <span className="text-violet-600 text-base">◆</span>
          <span>Claremo</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 text-sm text-gray-600">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="hover:text-gray-900 transition-colors">
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#early-access"
            className="text-sm bg-violet-600 text-white px-4 py-1.5 rounded-full font-medium hover:bg-violet-700 transition-colors"
          >
            Get early access ›
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-1.5 text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm text-gray-600">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="border-t border-gray-100 pt-4">
            <a
              href="#early-access"
              className="block bg-violet-600 text-white px-4 py-2 rounded-full font-medium text-center hover:bg-violet-700"
              onClick={() => setMobileOpen(false)}
            >
              Get early access ›
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

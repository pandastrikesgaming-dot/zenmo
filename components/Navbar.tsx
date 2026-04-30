"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Install Guide", href: "/how-to-download" },
  { label: "Download", href: "/#download" },
  { label: "Support", href: "/support" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Zenmo home"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/logo.png"
            alt=""
            width={34}
            height={34}
            className="border border-white/15 bg-white/5"
          />
          <span className="text-base font-semibold tracking-wide text-white transition duration-300 group-hover:text-solar">
            Zenmo
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-stone-300 transition duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/how-to-download"
          className="hidden border border-ember/50 bg-ember/10 px-4 py-2 text-sm font-semibold text-orange-100 transition duration-300 hover:-translate-y-0.5 hover:bg-ember hover:text-black md:inline-flex"
        >
          Download APK
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center border border-white/12 bg-white/[0.04] text-white transition duration-300 hover:border-ember/60 hover:bg-ember/10 md:hidden"
        >
          <span className="relative h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-5 bg-current transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-5 bg-current transition duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`absolute inset-x-0 top-16 border-t border-white/10 bg-black/80 px-5 pb-5 pt-3 backdrop-blur-xl transition duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-stone-200 transition duration-300 hover:border-ember/50 hover:bg-ember/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

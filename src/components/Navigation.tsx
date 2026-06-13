"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang, t } from "@/lib/i18n";

export default function Navigation() {
  const { lang, setLang } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const pathname = usePathname();
  const s = t[lang];

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const showTransparent = isHome && !navScrolled;

  const navLinks = [
    { href: "/", label: s.nav.home },
    { href: "/about", label: s.nav.about },
    { href: "/services", label: s.nav.services },
    { href: "/rental", label: s.nav.rental },
    { href: "/contact", label: s.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showTransparent ? "nav-transparent" : "nav-solid"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Music Corner"
              className={`h-10 w-auto transition-all duration-500 ${
                showTransparent ? "invert" : ""
              }`}
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.8rem] font-medium uppercase tracking-[0.1em] transition-colors duration-300 ${
                  pathname === link.href
                    ? showTransparent
                      ? "text-white"
                      : "text-[var(--color-terracotta)]"
                    : showTransparent
                      ? "text-white/80 hover:text-white"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-terracotta)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className={`ml-2 px-3 py-1.5 border rounded-sm text-[0.7rem] font-semibold uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer ${
                showTransparent
                  ? "border-white/40 text-white/80 hover:border-white hover:text-white"
                  : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)]"
              }`}
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className={`px-2.5 py-1 border rounded-sm text-[0.7rem] font-semibold uppercase tracking-[0.15em] cursor-pointer ${
                showTransparent
                  ? "border-white/40 text-white/80"
                  : "border-[var(--color-border)] text-[var(--color-text-muted)]"
              }`}
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`cursor-pointer transition-colors ${
                showTransparent ? "text-white" : "text-[var(--color-text)]"
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-warm-white)] border-t border-[var(--color-border)]">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 transition-colors text-[0.85rem] uppercase tracking-[0.08em] font-medium ${
                  pathname === link.href
                    ? "text-[var(--color-terracotta)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-terracotta)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

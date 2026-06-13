"use client";

import Link from "next/link";
import { useLang, t, authorizedBrands } from "@/lib/i18n";

export default function AboutPage() {
  const { lang } = useLang();
  const s = t[lang];

  return (
    <>
      {/* -- HERO --------------------------------------------------- */}
      <section className="relative pt-[72px]">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src="/images/counter.jpeg"
            alt="Inside Music Corner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/70 via-[var(--color-dark)]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
            <div className="max-w-[1200px] mx-auto">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-light)] mb-4 block">
                {s.about.label}
              </span>
              <h1 className="text-[2.5rem] sm:text-[3.5rem] font-normal leading-[1.1] text-white">
                {s.about.heroTitle}
              </h1>
              <p className="text-[1.1rem] text-white/70 mt-3 max-w-lg">
                {s.about.heroSubtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- GALLERY (photos before text) ---------------------------- */}
      <section className="py-28 sm:py-36 px-6 bg-[var(--color-dark)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 reveal-stagger">
            {[
              { src: "/images/shop-guitars.jpeg", alt: "Guitars at Music Corner", span: "md:col-span-2 md:row-span-2" },
              { src: "/images/vinyl-collection.jpeg", alt: "Vinyl records", span: "" },
              { src: "/images/hero1.jpeg", alt: "Atelier and Marshall amps", span: "" },
              { src: "/images/books-closeup.jpeg", alt: "Music books", span: "" },
              { src: "/images/guitar-straps.jpeg", alt: "Guitar straps and accessories", span: "" },
            ].map((img) => (
              <div
                key={img.src}
                className={`reveal img-hover aspect-square overflow-hidden ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- STORY --------------------------------------------------- */}
      <section className="py-28 sm:py-36 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="reveal text-[2rem] sm:text-[2.5rem] font-normal leading-[1.15] mb-10">
              {s.about.storyTitle}
            </h2>
            <div className="reveal space-y-6 text-[1.05rem] leading-[1.85] text-[var(--color-text-muted)]">
              <p>{s.about.storyP1}</p>
              <p>{s.about.storyP2}</p>
              <p>{s.about.storyP3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* -- VALUES -------------------------------------------------- */}
      <section className="py-28 sm:py-36 px-6 bg-[var(--color-sand)]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="reveal text-[2rem] sm:text-[2.5rem] font-normal leading-[1.15] mb-16 text-center">
            {s.about.valuesTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal-stagger">
            {s.about.values.map((value) => (
              <div
                key={value.title}
                className="reveal p-8 bg-[var(--color-warm-white)] border border-[var(--color-border)]"
              >
                <h3 className="text-[1.2rem] font-normal mb-3">
                  {value.title}
                </h3>
                <p className="text-[0.9rem] text-[var(--color-text-muted)] leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- BRANDS -------------------------------------------------- */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-8 reveal">
            {lang === "fr" ? "Revendeur agr\u00e9\u00e9" : "Authorized dealer"}
          </p>
          <div className="reveal flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {authorizedBrands.map((brand) => (
              <span
                key={brand}
                className="text-[0.85rem] sm:text-[0.95rem] font-semibold tracking-[0.05em] text-[var(--color-text-muted)] uppercase"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA ----------------------------------------------------- */}
      <section className="py-28 sm:py-36 px-6">
        <div className="max-w-[1200px] mx-auto text-center reveal">
          <h2 className="text-[2rem] sm:text-[2.5rem] font-normal leading-[1.15] mb-6">
            {lang === "fr" ? "Venez nous rencontrer" : "Come meet us"}
          </h2>
          <p className="text-[1.05rem] text-[var(--color-text-muted)] leading-relaxed max-w-lg mx-auto mb-10">
            {lang === "fr"
              ? "Poussez la porte, essayez un instrument, feuilletez un vinyle. Music Corner est ouvert du mardi au samedi."
              : "Walk through the door, try an instrument, flip through vinyl. Music Corner is open Tuesday to Saturday."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[var(--color-terracotta)] text-white text-[0.8rem] font-semibold uppercase tracking-[0.1em] hover:bg-[var(--color-terracotta-dark)] transition-colors"
            >
              {lang === "fr" ? "Nous trouver" : "Find us"}
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 border border-[var(--color-terracotta)] text-[var(--color-terracotta)] text-[0.8rem] font-semibold uppercase tracking-[0.1em] hover:bg-[var(--color-terracotta)] hover:text-white transition-colors"
            >
              {lang === "fr" ? "Notre atelier" : "Our workshop"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

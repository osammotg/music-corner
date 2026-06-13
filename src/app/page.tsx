"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang, t, reviews, galleryImages, authorizedBrands } from "@/lib/i18n";
import Stars from "@/components/Stars";

const heroOptions = [
  { src: "/images/guitar-hero.jpg", label: "Original" },
  { src: "/images/hero1.jpeg", label: "Atelier" },
  { src: "/images/hero2.jpeg", label: "Boutique" },
];

export default function Home() {
  const { lang } = useLang();
  const s = t[lang];
  const [heroIndex, setHeroIndex] = useState(0);

  return (
    <>
      {/* -- HERO --------------------------------------------------- */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroOptions[heroIndex].src}
            alt="Music Corner"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/80 via-[var(--color-dark)]/30 to-[var(--color-dark)]/20" />
        </div>
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pb-20 sm:pb-28">
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-light)] mb-5">
            {s.hero.tagline}
          </p>
          <h1 className="text-[2.8rem] sm:text-[3.8rem] lg:text-[4.5rem] font-normal leading-[1.05] text-white mb-6 whitespace-pre-line">
            {s.hero.title}
          </h1>
          <p className="text-[1.05rem] sm:text-[1.15rem] text-white/75 max-w-lg mb-10 leading-relaxed">
            {s.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="px-8 py-3.5 bg-[var(--color-terracotta)] text-white text-[0.8rem] font-semibold uppercase tracking-[0.1em] hover:bg-[var(--color-terracotta-dark)] transition-colors cursor-pointer"
            >
              {s.hero.cta}
            </Link>
            <a
              href="mailto:contact@music-corner.fr"
              className="px-8 py-3.5 border border-white/40 text-white text-[0.8rem] font-semibold uppercase tracking-[0.1em] hover:bg-white/10 transition-colors cursor-pointer"
            >
              {s.hero.ctaContact}
            </a>
          </div>
          <div className="mt-10 flex items-center gap-2 text-[0.85rem] text-white/60">
            <Stars count={5} />
            <span className="ml-1">5.0 / 5</span>
            <span className="mx-1">&middot;</span>
            <span>37+ {s.reviews.googleRating}</span>
          </div>

          {/* Hero image selector – remove after choosing */}
          <div className="mt-8 flex items-center gap-3">
            {heroOptions.map((opt, i) => (
              <button
                key={opt.label}
                onClick={() => setHeroIndex(i)}
                className={`px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.1em] rounded-sm cursor-pointer transition-all ${
                  heroIndex === i
                    ? "bg-[var(--color-terracotta)] text-white"
                    : "bg-white/20 text-white/80 hover:bg-white/30"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* -- ABOUT PREVIEW ------------------------------------------ */}
      <section className="py-28 sm:py-36 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-4 block">
                {s.about.label}
              </span>
              <h2 className="text-[2.2rem] sm:text-[2.8rem] font-normal leading-[1.15] mb-8">
                {s.about.title}
              </h2>
              <div className="space-y-5 text-[1.05rem] leading-[1.75] text-[var(--color-text-muted)]">
                <p>{s.about.p1}</p>
                <p>{s.about.p2}</p>
              </div>
              <Link
                href="/about"
                className="inline-block mt-10 text-[0.85rem] font-medium text-[var(--color-terracotta)] hover:underline underline-offset-4"
              >
                {lang === "fr" ? "En savoir plus" : "Learn more"} &rarr;
              </Link>
            </div>
            <div className="reveal img-hover">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/reading-corner.jpeg"
                  alt="Inside Music Corner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- SHOP PHOTO MOSAIC -------------------------------------- */}
      <section className="py-28 sm:py-36 px-6 bg-[var(--color-dark)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="text-[2.2rem] sm:text-[2.8rem] font-normal leading-[1.15] text-white">
              {lang === "fr" ? "Explorez la boutique" : "Explore the shop"}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 reveal-stagger">
            {[
              { src: "/images/counter.jpeg", alt: "Music Corner counter with neon sign", span: "md:col-span-2 md:row-span-2" },
              { src: "/images/vinyl-collection.jpeg", alt: "Vinyl records section", span: "" },
              { src: "/images/marshall-speakers.jpeg", alt: "Marshall speakers", span: "" },
              { src: "/images/shop-merch.jpeg", alt: "T-shirts and music merch", span: "" },
              { src: "/images/guitar-straps.jpeg", alt: "Guitar straps and accessories", span: "" },
              { src: "/images/books-wide.jpeg", alt: "Music books library", span: "md:col-span-2" },
              { src: "/images/shop-guitars.jpeg", alt: "Guitars and amps", span: "" },
              { src: "/images/kids-section.jpeg", alt: "Baby and kids music section", span: "" },
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

      {/* -- AUTHORIZED BRANDS -------------------------------------- */}
      <section className="py-16 px-6 bg-[var(--color-warm-white)] border-y border-[var(--color-border)]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-8">
            {lang === "fr" ? "Revendeur agr\u00e9\u00e9" : "Authorized dealer"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
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

      {/* -- SERVICES PREVIEW ---------------------------------------- */}
      <section className="py-28 sm:py-36 px-6 bg-[var(--color-sand)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-2xl mb-16 reveal">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-4 block">
              {s.services.label}
            </span>
            <h2 className="text-[2.2rem] sm:text-[2.8rem] font-normal leading-[1.15] mb-5">
              {s.services.title}
            </h2>
            <p className="text-[1.05rem] text-[var(--color-text-muted)] leading-relaxed">
              {s.services.subtitle}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center reveal">
            <div>
              <h3 className="text-[1.3rem] font-normal mb-4">
                {s.services.repair.title}
              </h3>
              <p className="text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed mb-6">
                {s.services.repair.desc}
              </p>
              <ul className="space-y-2.5">
                {s.services.repair.details.slice(0, 4).map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2.5 text-[0.85rem] text-[var(--color-text-muted)]"
                  >
                    <span className="text-[var(--color-gold)] mt-0.5 shrink-0">
                      &mdash;
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="img-hover">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/hero1.jpeg"
                  alt="Guitar repair workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-12 reveal">
            <Link
              href="/services"
              className="inline-block px-8 py-3.5 border border-[var(--color-terracotta)] text-[var(--color-terracotta)] text-[0.8rem] font-semibold uppercase tracking-[0.1em] hover:bg-[var(--color-terracotta)] hover:text-white transition-colors"
            >
              {lang === "fr" ? "En savoir plus" : "Learn more"} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* -- REVIEWS (dark section) ---------------------------------- */}
      <section className="py-28 sm:py-36 px-6 bg-[var(--color-dark)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-light)] mb-4 block">
              {s.reviews.label}
            </span>
            <h2 className="text-[2.2rem] sm:text-[2.8rem] font-normal leading-[1.15] text-white mb-4">
              {s.reviews.title}
            </h2>
            <div className="flex items-center justify-center gap-3">
              <Stars count={5} />
              <span className="text-white/60 text-[0.9rem]">
                5.0 / 5 &middot; 37+ {s.reviews.googleRating}
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {reviews.slice(0, 3).map((review) => (
              <div
                key={review.name}
                className="reveal p-8 border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                <svg
                  className="w-8 h-8 text-[var(--color-gold)]/40 mb-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="text-[0.95rem] leading-[1.7] text-white/70 mb-6">
                  {review.text[lang]}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[0.7rem] font-semibold bg-[var(--color-terracotta)] text-white">
                    {review.name[0]}
                  </div>
                  <span className="text-[0.85rem] text-white/50 font-medium">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <a
              href="https://www.google.com/maps/place/Music+Corner/@43.6724709,-1.3894752,17z/data=!4m8!3m7!1s0xd5151b0d1a4384d:0x65ade1c84f4f665a!8m2!3d43.6724709!4d-1.3894752!9m1!1b1!16s%2Fg%2F11y7c9j00p"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-white/25 text-white/70 text-[0.8rem] font-medium uppercase tracking-[0.1em] hover:border-white/50 hover:text-white transition-colors"
            >
              {s.reviews.viewAll} &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* -- INSTAGRAM GALLERY --------------------------------------- */}
      <section className="py-28 sm:py-36 px-6 bg-[var(--color-sand)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4 reveal">
            <div>
              <h2 className="text-[2.2rem] sm:text-[2.8rem] font-normal leading-[1.15]">
                {s.instagram.title}
              </h2>
            </div>
            <a
              href="https://www.instagram.com/musiccorner_hossegor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-terracotta)] text-[0.85rem] font-medium hover:underline underline-offset-4"
            >
              {s.instagram.subtitle} &rarr;
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 reveal-stagger">
            {galleryImages.map((img) => (
              <a
                key={img.src}
                href="https://www.instagram.com/musiccorner_hossegor/"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group relative aspect-square overflow-hidden img-hover"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[var(--color-dark)]/0 group-hover:bg-[var(--color-dark)]/40 transition-colors duration-400 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* -- CONTACT CTA --------------------------------------------- */}
      <section className="py-28 sm:py-36 px-6">
        <div className="max-w-[1200px] mx-auto text-center reveal">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-4 block">
            {s.rental.label}
          </span>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-normal leading-[1.15] mb-5">
            {s.rental.title}
          </h2>
          <p className="text-[1.05rem] text-[var(--color-text-muted)] leading-relaxed max-w-xl mx-auto mb-10">
            {s.rental.subtitle}
          </p>
          <a
            href="mailto:contact@music-corner.fr"
            className="inline-block px-10 py-4 bg-[var(--color-terracotta)] text-white text-[0.8rem] font-semibold uppercase tracking-[0.1em] hover:bg-[var(--color-terracotta-dark)] transition-colors"
          >
            {s.rental.cta} &rarr;
          </a>
        </div>
      </section>
    </>
  );
}

"use client";

import { useLang, t } from "@/lib/i18n";

export default function RentalPage() {
  const { lang } = useLang();
  const s = t[lang];

  return (
    <>
      {/* -- HERO --------------------------------------------------- */}
      <section className="relative pt-[72px]">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src="/images/festival.jpg"
            alt="Instruments for rent"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/70 via-[var(--color-dark)]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
            <div className="max-w-[1200px] mx-auto">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-light)] mb-4 block">
                {s.rental.label}
              </span>
              <h1 className="text-[2.5rem] sm:text-[3.5rem] font-normal leading-[1.1] text-white whitespace-pre-line">
                {s.rental.heroTitle}
              </h1>
              <p className="text-[1.1rem] text-white/70 mt-3 max-w-lg">
                {s.rental.heroSubtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- RENTAL LIST -------------------------------------------- */}
      <section className="py-28 sm:py-36 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-[2rem] sm:text-[2.5rem] font-normal leading-[1.15] mb-5">
              {s.rental.title}
            </h2>
            <p className="text-[1.05rem] text-[var(--color-text-muted)] leading-relaxed">
              {s.rental.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 reveal-stagger">
            {s.rental.items.map((item) => (
              <div
                key={item}
                className="reveal py-5 px-6 border border-[var(--color-border)] hover:border-[var(--color-terracotta)]/30 transition-colors duration-300 bg-[var(--color-warm-white)]"
              >
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)] shrink-0" />
                  <span className="text-[0.95rem] text-[var(--color-text-muted)]">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[0.85rem] text-[var(--color-text-muted)] mb-10 reveal">
            {s.rental.note}
          </p>

          <div className="text-center reveal">
            <a
              href="mailto:contact@music-corner.fr"
              className="inline-block px-10 py-4 bg-[var(--color-terracotta)] text-white text-[0.8rem] font-semibold uppercase tracking-[0.1em] hover:bg-[var(--color-terracotta-dark)] transition-colors"
            >
              {s.rental.cta} &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

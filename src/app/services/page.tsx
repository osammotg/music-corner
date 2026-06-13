"use client";

import Link from "next/link";
import { useLang, t } from "@/lib/i18n";

export default function ServicesPage() {
  const { lang } = useLang();
  const s = t[lang];

  return (
    <>
      {/* -- HERO --------------------------------------------------- */}
      <section className="relative pt-[72px]">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src="/images/guitar-hero.jpg"
            alt="Atelier Music Corner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/70 via-[var(--color-dark)]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
            <div className="max-w-[1200px] mx-auto">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-light)] mb-4 block">
                {s.services.label}
              </span>
              <h1 className="text-[2.5rem] sm:text-[3.5rem] font-normal leading-[1.1] text-white">
                {s.services.heroTitle}
              </h1>
              <p className="text-[1.1rem] text-white/70 mt-3 max-w-lg">
                {s.services.heroSubtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- ATELIER / REPAIR --------------------------------------- */}
      <section className="py-28 sm:py-36 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal">
              <h2 className="text-[2rem] sm:text-[2.5rem] font-normal leading-[1.15] mb-6">
                {s.services.repair.title}
              </h2>
              <p className="text-[1.05rem] text-[var(--color-text-muted)] leading-[1.75] mb-4">
                {s.services.repair.desc}
              </p>
              <p className="text-[1.05rem] text-[var(--color-text-muted)] leading-[1.75] mb-10">
                {s.services.repair.longDesc}
              </p>
              <ul className="space-y-3">
                {s.services.repair.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 text-[0.95rem] text-[var(--color-text-muted)]"
                  >
                    <span className="text-[var(--color-gold)] mt-0.5 shrink-0">
                      &mdash;
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal img-hover">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/guitar-hero.jpg"
                  alt="Guitar repair workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- CTA ----------------------------------------------------- */}
      <section className="py-28 sm:py-36 px-6 bg-[var(--color-sand)]">
        <div className="max-w-[1200px] mx-auto text-center reveal">
          <h2 className="text-[2rem] sm:text-[2.5rem] font-normal leading-[1.15] mb-6">
            {lang === "fr"
              ? "Un projet\u00a0? Une r\u00e9paration\u00a0?"
              : "A project? A repair?"}
          </h2>
          <p className="text-[1.05rem] text-[var(--color-text-muted)] leading-relaxed max-w-lg mx-auto mb-10">
            {lang === "fr"
              ? "Passez nous voir en magasin ou contactez-nous par e-mail. On discute, on vous conseille, et on prend soin de vos instruments."
              : "Visit us in store or send us an email. We'll chat, advise you, and take care of your instruments."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@music-corner.fr"
              className="px-8 py-3.5 bg-[var(--color-terracotta)] text-white text-[0.8rem] font-semibold uppercase tracking-[0.1em] hover:bg-[var(--color-terracotta-dark)] transition-colors"
            >
              {s.services.cta}
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-[var(--color-terracotta)] text-[var(--color-terracotta)] text-[0.8rem] font-semibold uppercase tracking-[0.1em] hover:bg-[var(--color-terracotta)] hover:text-white transition-colors"
            >
              {lang === "fr" ? "Nous trouver" : "Find us"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

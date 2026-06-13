"use client";

import { useLang, t } from "@/lib/i18n";

export default function ContactPage() {
  const { lang } = useLang();
  const s = t[lang];

  const hours = [
    { day: s.contact.monday, time: s.contact.closed },
    { day: s.contact.tuesday, time: "10:00 - 13:00, 14:00 - 19:00" },
    { day: s.contact.wednesday, time: "10:00 - 13:00, 14:00 - 19:00" },
    { day: s.contact.thursday, time: "10:00 - 13:00, 14:00 - 19:00" },
    { day: s.contact.friday, time: "10:00 - 13:00, 14:00 - 19:00" },
    { day: s.contact.saturday, time: "10:00 - 13:00, 14:00 - 19:00" },
    { day: s.contact.sunday, time: s.contact.closed },
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-[72px]">
        <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
          <img
            src="/images/storefront.jpg"
            alt="Music Corner storefront"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/70 via-[var(--color-dark)]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
            <div className="max-w-[1200px] mx-auto">
              <h1 className="text-[2.5rem] sm:text-[3.5rem] font-normal leading-[1.1] text-white">
                {s.contact.heroTitle}
              </h1>
              <p className="text-[1.1rem] text-white/70 mt-3">
                {s.contact.heroSubtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO + MAP ───────────────────────────────── */}
      <section className="py-28 sm:py-36 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="space-y-12 reveal">
              {/* Quick actions */}
              <div className="grid sm:grid-cols-2 gap-6">
                <a
                  href="tel:+33558438734"
                  className="group p-6 border border-[var(--color-border)] hover:border-[var(--color-terracotta)]/30 transition-colors"
                >
                  <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-3">
                    {s.contact.callUs}
                  </h3>
                  <p className="text-[1.3rem] text-[var(--color-text)] group-hover:text-[var(--color-terracotta)] transition-colors">
                    05 58 43 87 34
                  </p>
                </a>
                <a
                  href="https://www.google.com/maps/dir//Music+Corner,+33+Av.+des+Tisserands,+40150+Soorts-Hossegor,+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 border border-[var(--color-border)] hover:border-[var(--color-terracotta)]/30 transition-colors"
                >
                  <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-3">
                    {s.contact.visitUs}
                  </h3>
                  <p className="text-[1rem] text-[var(--color-text)] group-hover:text-[var(--color-terracotta)] transition-colors">
                    33 Av. des Tisserands
                    <br />
                    40150 Soorts-Hossegor
                  </p>
                </a>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-5">
                  {s.contact.hours}
                </h3>
                <p className="text-[0.9rem] text-[var(--color-text-muted)] mb-6">
                  {s.contact.openingInfo}
                </p>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between gap-8 text-[0.9rem] max-w-sm py-2 border-b border-[var(--color-border)]"
                    >
                      <span className="text-[var(--color-text-muted)]">
                        {h.day}
                      </span>
                      <span
                        className={
                          h.time === s.contact.closed
                            ? "text-[var(--color-terracotta)] font-medium"
                            : "text-[var(--color-text)]"
                        }
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-4">
                  {s.contact.follow}
                </h3>
                <div className="flex gap-5">
                  <a
                    href="https://www.instagram.com/musiccorner_hossegor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[0.9rem] text-[var(--color-text)] hover:text-[var(--color-terracotta)] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61566539067498"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[0.9rem] text-[var(--color-text)] hover:text-[var(--color-terracotta)] transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="reveal">
              <div className="overflow-hidden h-[500px] lg:h-full min-h-[450px] border border-[var(--color-border)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.123!2d-1.3894752!3d43.6724709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5151b0d1a4384d%3A0x65ade1c84f4f665a!2sMusic%20Corner!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 450 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Music Corner location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

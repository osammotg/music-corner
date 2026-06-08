"use client";

import { useState } from "react";

const t = {
  fr: {
    nav: {
      about: "A propos",
      services: "Services",
      products: "Produits",
      rental: "Location",
      reviews: "Avis",
      contact: "Contact",
    },
    hero: {
      tagline: "Repair, Merch & More",
      subtitle:
        "Magasin de musique, atelier de reparations et tout sur l'univers musical. Livres, vinyles, deco, tshirts, jouets...",
      cta: "Decouvrir",
      ctaContact: "Nous contacter",
    },
    about: {
      title: "A propos",
      p1: "Decouvrez Music Corner, le concept store incontournable dedie a la musique a Hossegor. Pedro et Tom y ont cree un espace ou se melent passion et expertise pour offrir aux melomanes une selection d'instruments de musique, de materiel, et bien plus encore. Que vous soyez debutant, musicien confirme ou simple amateur de musique, vous y trouverez des instruments, des accessoires, ainsi qu'une large gamme de vinyles, tee-shirts, objets de decoration et beaux livres.",
      p2: "L'ambiance chaleureuse du lieu invite a l'exploration de differents genres musicaux, chacun pouvant y trouver son bonheur. Music Corner est un veritable temple pour tous les passionnes de musique, ou qualite et convivialite sont les maitres mots.",
      marshall: "Revendeur agree",
      dsdrum: "Revendeur agree",
    },
    services: {
      title: "Nos Services",
      repair: {
        title: "Atelier de reparation",
        desc: "Tom, forme comme guitar-tech et drum-tech, propose un service de reparation de guitares, basses et batteries. Un service sur mesure pour redonner vie a vos instruments.",
        details: [
          "Reglage et ajustement de manche",
          "Changement de cordes et mecaniques",
          "Electronique et soudure",
          "Restauration complete",
        ],
      },
      sell: {
        title: "Vente d'instruments",
        desc: "Instruments neufs et d'occasion : guitares, basses, ukuleles, batteries, percussions et accessoires.",
        details: [
          "Guitares acoustiques et electriques",
          "Amplis Marshall et plus",
          "Batteries DS Drum",
          "Accessoires et consommables",
        ],
      },
      advice: {
        title: "Conseil expert",
        desc: "Notre equipe de passionnes vous guide dans le choix de votre instrument, que vous soyez debutant ou professionnel.",
        details: [
          "Essai en magasin",
          "Accompagnement personnalise",
          "Recommandations sur mesure",
          "Suivi apres-vente",
        ],
      },
    },
    products: {
      title: "Nos Produits",
      guitars: "Guitares & Basses",
      drums: "Batteries & Percussions",
      ukuleles: "Ukuleles",
      amps: "Amplis & Enceintes",
      vinyl: "Vinyles",
      books: "Livres & BD",
      accessories: "Accessoires",
      merch: "Merch & T-shirts",
      decor: "Deco musicale",
      headphones: "Casques",
      earprotection: "Protections auditives",
      strings: "Cordes & Mediators",
    },
    instagram: {
      title: "Suivez-nous sur Instagram",
      subtitle: "@musiccorner_hossegor",
    },
    rental: {
      title: "Location d'instruments",
      subtitle:
        "Decouvrez nos instruments disponibles a la location. Contactez-nous pour reserver.",
      items: [
        {
          name: "Guitare acoustique",
          price: "A partir de 15EUR/semaine",
          desc: "Parfait pour debuter ou pour un evenement",
        },
        {
          name: "Guitare electrique + Ampli",
          price: "A partir de 25EUR/semaine",
          desc: "Pack complet pour jouer chez vous",
        },
        {
          name: "Ukulele",
          price: "A partir de 10EUR/semaine",
          desc: "Ideal pour les vacances ou pour debuter",
        },
        {
          name: "Batterie complete",
          price: "A partir de 40EUR/semaine",
          desc: "Pour repeter ou pour un concert",
        },
        {
          name: "Sonorisation",
          price: "Sur devis",
          desc: "Systeme son pour evenements et concerts",
        },
      ],
      cta: "Contactez-nous pour reserver",
      note: "Les tarifs sont indicatifs. Contactez-nous pour un devis personnalise.",
    },
    reviews: {
      title: "Avis Clients",
      subtitle: "Ce que nos clients disent de nous",
      googleRating: "sur Google",
      viewAll: "Voir tous les avis sur Google",
    },
    contact: {
      title: "Nous trouver",
      hours: "Horaires",
      address: "Adresse",
      phone: "Telephone",
      closed: "Ferme",
      monday: "Lundi",
      tuesday: "Mardi",
      wednesday: "Mercredi",
      thursday: "Jeudi",
      friday: "Vendredi",
      saturday: "Samedi",
      sunday: "Dimanche",
      follow: "Suivez-nous",
      directions: "Itineraire",
    },
    footer: {
      rights: "Tous droits reserves.",
      tagline: "Repair, Merch & More - Soorts-Hossegor, France",
    },
    designPicker: {
      label: "Choisissez un design",
      d1: "Classique",
      d2: "Vinyle",
      d3: "Scene",
      d4: "Boutique",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      products: "Products",
      rental: "Rental",
      reviews: "Reviews",
      contact: "Contact",
    },
    hero: {
      tagline: "Repair, Merch & More",
      subtitle:
        "Music shop, repair workshop and everything about the musical universe. Books, vinyl, decor, t-shirts, toys...",
      cta: "Discover",
      ctaContact: "Contact us",
    },
    about: {
      title: "About us",
      p1: "Discover Music Corner, the must-visit concept store dedicated to music in Hossegor. Pedro and Tom have created a space where passion meets expertise, offering music lovers a curated selection of instruments, gear, and much more. Whether you're a beginner, an experienced musician, or simply a music enthusiast, you'll find instruments, accessories, as well as a wide range of vinyl records, t-shirts, decorative items, and beautiful books.",
      p2: "The warm atmosphere of the shop invites you to explore different musical genres, with something for everyone. Music Corner is a true temple for all music lovers, where quality and friendliness are the guiding principles.",
      marshall: "Authorized dealer",
      dsdrum: "Authorized dealer",
    },
    services: {
      title: "Our Services",
      repair: {
        title: "Repair Workshop",
        desc: "Tom, trained as a guitar-tech and drum-tech, offers a repair service for guitars, basses, and drums. A bespoke service to bring your instruments back to life.",
        details: [
          "Neck adjustment and setup",
          "String and tuner replacement",
          "Electronics and soldering",
          "Full restoration",
        ],
      },
      sell: {
        title: "Instrument Sales",
        desc: "New and second-hand instruments: guitars, basses, ukuleles, drums, percussion and accessories.",
        details: [
          "Acoustic and electric guitars",
          "Marshall amps and more",
          "DS Drum kits",
          "Accessories and consumables",
        ],
      },
      advice: {
        title: "Expert Advice",
        desc: "Our team of enthusiasts guides you in choosing your instrument, whether you are a beginner or a professional.",
        details: [
          "Try in store",
          "Personalized guidance",
          "Tailored recommendations",
          "After-sales support",
        ],
      },
    },
    products: {
      title: "Our Products",
      guitars: "Guitars & Basses",
      drums: "Drums & Percussion",
      ukuleles: "Ukuleles",
      amps: "Amps & Speakers",
      vinyl: "Vinyl Records",
      books: "Books & Comics",
      accessories: "Accessories",
      merch: "Merch & T-shirts",
      decor: "Musical Decor",
      headphones: "Headphones",
      earprotection: "Ear Protection",
      strings: "Strings & Picks",
    },
    instagram: {
      title: "Follow us on Instagram",
      subtitle: "@musiccorner_hossegor",
    },
    rental: {
      title: "Instrument Rental",
      subtitle:
        "Discover our instruments available for rent. Contact us to book.",
      items: [
        {
          name: "Acoustic Guitar",
          price: "From 15EUR/week",
          desc: "Perfect for beginners or events",
        },
        {
          name: "Electric Guitar + Amp",
          price: "From 25EUR/week",
          desc: "Complete pack to play at home",
        },
        {
          name: "Ukulele",
          price: "From 10EUR/week",
          desc: "Ideal for holidays or beginners",
        },
        {
          name: "Full Drum Kit",
          price: "From 40EUR/week",
          desc: "For rehearsals or live shows",
        },
        {
          name: "PA System",
          price: "Quote on request",
          desc: "Sound system for events and concerts",
        },
      ],
      cta: "Contact us to book",
      note: "Prices are indicative. Contact us for a custom quote.",
    },
    reviews: {
      title: "Customer Reviews",
      subtitle: "What our customers say about us",
      googleRating: "on Google",
      viewAll: "See all reviews on Google",
    },
    contact: {
      title: "Find Us",
      hours: "Opening Hours",
      address: "Address",
      phone: "Phone",
      closed: "Closed",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      follow: "Follow us",
      directions: "Get directions",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Repair, Merch & More - Soorts-Hossegor, France",
    },
    designPicker: {
      label: "Choose a design",
      d1: "Classic",
      d2: "Vinyl",
      d3: "Stage",
      d4: "Boutique",
    },
  },
};

const reviews = [
  {
    name: "Celine A.N.",
    rating: 5,
    date: { fr: "Il y a 6 mois", en: "6 months ago" },
    text: {
      fr: "Music Corner est une vraie pepite ! J'y ai trouve un ukulele magnifique et je suis vraiment ravie de mon achat. L'equipe est passionnee, super accueillante et de tres bon conseil. Un endroit unique ou l'on se sent tout de suite bien. Je recommande a 100% !",
      en: "Music Corner is a real gem! I found a beautiful ukulele and I'm really delighted with my purchase. The team is passionate, super welcoming and gives great advice. A unique place where you feel at home right away. 100% recommended!",
    },
  },
  {
    name: "Audrey D.",
    rating: 5,
    date: { fr: "Il y a 3 mois", en: "3 months ago" },
    text: {
      fr: "Vraiment un magasin et atelier au top ! Sans oublier la sympathie des gars. Je recommande pour tous, pro comme amateur, vous y trouverez forcement votre bonheur. Service de reparation impeccable !",
      en: "Truly a top-notch shop and workshop! Not to mention how friendly the guys are. I recommend it for everyone, pros and amateurs alike, you'll definitely find what you're looking for. Impeccable repair service!",
    },
  },
  {
    name: "Nathalie T.",
    rating: 5,
    date: { fr: "Il y a 6 mois", en: "6 months ago" },
    text: {
      fr: "Magnifique boutique avec instruments de qualite. Tres bon conseil lors de l'achat du premier ukulele de ma fille. Je recommande vivement cette adresse pour tous les amoureux de musique.",
      en: "Beautiful shop with quality instruments. Great advice when buying my daughter's first ukulele. I highly recommend this place for all music lovers.",
    },
  },
  {
    name: "Pierre L.",
    rating: 5,
    date: { fr: "Il y a 2 mois", en: "2 months ago" },
    text: {
      fr: "Super accueil et un choix impressionnant de vinyles ! Le coin librairie est aussi tres sympa. On sent la passion et le professionnalisme. J'y retourne des que possible.",
      en: "Great welcome and an impressive selection of vinyl records! The bookshop corner is also really nice. You can feel the passion and professionalism. I'll be back as soon as possible.",
    },
  },
  {
    name: "Maika S.",
    rating: 5,
    date: { fr: "Il y a 4 mois", en: "4 months ago" },
    text: {
      fr: "J'ai fait reparer ma guitare ici, travail excellent et rapide. Les prix sont tres corrects. L'equipe prend le temps d'expliquer ce qui a ete fait. Un vrai artisan de la musique !",
      en: "Had my guitar repaired here, excellent and quick work. Prices are very fair. The team takes time to explain what was done. A true music craftsman!",
    },
  },
  {
    name: "Thomas B.",
    rating: 5,
    date: { fr: "Il y a 1 mois", en: "1 month ago" },
    text: {
      fr: "Le meilleur magasin de musique du coin ! Ambiance geniale, equipe au top et un vrai concept store ou l'on trouve de tout : instruments, vinyles, livres, deco. Un incontournable a Hossegor.",
      en: "The best music shop in the area! Amazing atmosphere, great team and a true concept store where you can find everything: instruments, vinyl, books, decor. A must-visit in Hossegor.",
    },
  },
];

const productIcons: Record<string, string> = {
  guitars: "guitar",
  drums: "drums",
  ukuleles: "ukulele",
  amps: "amp",
  vinyl: "vinyl",
  books: "books",
  accessories: "accessories",
  merch: "merch",
  decor: "decor",
  headphones: "headphones",
  earprotection: "earprotection",
  strings: "strings",
};

function ProductIcon({ type, className = "w-8 h-8" }: { type: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    guitar: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-10.5M18.5.5l5 5M12 12a3 3 0 11-6 0 3 3 0 016 0zM3.5 20.5a3 3 0 004.243 0l2.121-2.121a3 3 0 000-4.243L7.743 12.01a3 3 0 00-4.243 0L1.379 14.13a3 3 0 000 4.243L3.5 20.5z" />
      </svg>
    ),
    drums: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <ellipse cx="12" cy="14" rx="9" ry="4" />
        <path d="M3 14V8c0-2.21 4.03-4 9-4s9 1.79 9 4v6" />
        <ellipse cx="12" cy="8" rx="9" ry="4" />
      </svg>
    ),
    default: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-10.5M18.5.5l5 5M12 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  };
  return <>{icons[type] || icons.default}</>;
}

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-[var(--color-gold)]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function WrenchIcon() {
  return (
    <svg className="w-10 h-10 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
    </svg>
  );
}

function ShoppingIcon() {
  return (
    <svg className="w-10 h-10 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="w-10 h-10 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

// ── Design-specific configs ──────────────────────────────────────────
const designConfigs = {
  1: {
    heroImage: "/images/shop-interior.webp",
    heroOpacity: "opacity-20",
    aboutImage: "/images/storefront.jpg",
    accentGradient: "from-[#e63946]/12 via-[#0a0a0a]/97 to-[#d4a853]/8",
    serviceBg: "bg-[#1a1a1a]",
    serviceStyle: "simple" as const,
  },
  2: {
    heroImage: "/images/storefront.jpg",
    heroOpacity: "opacity-15",
    aboutImage: "/images/shop-interior.webp",
    accentGradient: "from-[#d4a853]/15 via-[#0a0a0a]/95 to-[#e63946]/10",
    serviceBg: "bg-gradient-to-b from-[#1a1a1a] to-[#111]",
    serviceStyle: "detailed" as const,
  },
  3: {
    heroImage: "/images/guitar-hero.jpg",
    heroOpacity: "opacity-30",
    aboutImage: "/images/shop-interior.webp",
    accentGradient: "from-[#e63946]/20 via-[#0a0a0a]/90 to-[#1a1a1a]/80",
    serviceBg: "bg-[#1a1a1a]",
    serviceStyle: "detailed" as const,
  },
  4: {
    heroImage: "/images/storefront.jpg",
    heroOpacity: "opacity-100",
    aboutImage: "/images/shop-interior.webp",
    accentGradient: "",
    serviceBg: "bg-white",
    serviceStyle: "detailed" as const,
  },
};

export default function Home() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [design, setDesign] = useState<1 | 2 | 3 | 4>(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const s = t[lang];
  const dc = designConfigs[design];

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
      {/* Design Picker - fixed bar */}
      <div className={`fixed top-0 left-0 right-0 z-[60] border-b ${design === 4 ? "bg-[#FFFBEB] border-[#9A3412]/20" : "bg-[#0a0a0a] border-[var(--color-accent)]/30"}`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3">
          <span className={`text-xs hidden sm:inline ${design === 4 ? "text-[#5C3A1E]" : "text-gray-400"}`}>{s.designPicker.label}:</span>
          {([1, 2, 3, 4] as const).map((d) => (
            <button
              key={d}
              onClick={() => setDesign(d)}
              className={`px-4 py-1.5 text-sm font-semibold rounded transition-all cursor-pointer ${
                design === d
                  ? design === 4 ? "bg-[#9A3412] text-[#FFFBEB]" : "bg-[var(--color-accent)] text-white"
                  : design === 4 ? "bg-white text-[#5C3A1E] border border-[#9A3412]/20 hover:border-[#9A3412] hover:text-[#9A3412]" : "bg-[#1a1a1a] text-gray-400 border border-white/10 hover:border-[var(--color-accent)] hover:text-white"
              }`}
            >
              {d === 1 ? s.designPicker.d1 : d === 2 ? s.designPicker.d2 : d === 3 ? s.designPicker.d3 : s.designPicker.d4}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation - offset for design picker */}
      <nav className={`fixed top-[44px] left-0 right-0 z-50 border-b ${design === 4 ? "bg-[#FFFBEB]/90 backdrop-blur-md border-[#9A3412]/10" : "nav-blur bg-black/80 border-white/5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center">
              <img src="/images/logo.png" alt="Music Corner" className={`h-10 w-auto ${design === 4 ? "" : "drop-shadow-[0_0_1px_rgba(255,255,255,0.3)]"}`} />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {Object.entries(s.nav).map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className={`text-sm transition-colors font-medium ${design === 4 ? "text-[#5C3A1E] hover:text-[#9A3412]" : "text-gray-300 hover:text-white"}`}
                >
                  {label}
                </a>
              ))}
              <button
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                className={`ml-2 px-3 py-1 border rounded text-xs font-semibold transition-colors ${design === 4 ? "border-[#9A3412]/30 text-[#5C3A1E] hover:border-[#9A3412] hover:text-[#9A3412]" : "border-white/20 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"}`}
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                className={`px-3 py-1 border rounded text-xs font-semibold ${design === 4 ? "border-[#9A3412]/30 text-[#5C3A1E]" : "border-white/20"}`}
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={design === 4 ? "text-[#3B1F0B]" : "text-white"}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t ${design === 4 ? "bg-[#FFFBEB]/95 border-[#9A3412]/10" : "bg-black/95 border-white/5"}`}>
            <div className="px-4 py-3 space-y-2">
              {Object.entries(s.nav).map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 transition-colors ${design === 4 ? "text-[#5C3A1E] hover:text-[#9A3412]" : "text-gray-300 hover:text-white"}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      {design === 1 && (
        <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
          <div className={`absolute inset-0 bg-[url('/images/shop-interior.webp')] bg-cover bg-center ${dc.heroOpacity}`} />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-6xl sm:text-8xl font-bold tracking-wider mb-2">
              MUSIC
              <span className="text-[var(--color-accent)]"> CORNER</span>
            </h1>
            <p className="text-xl sm:text-2xl font-[family-name:var(--font-heading)] text-[var(--color-gold)] tracking-widest mb-6">
              {s.hero.tagline}
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              {s.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-3 bg-[var(--color-accent)] text-white font-semibold rounded hover:bg-[var(--color-accent-hover)] transition-colors text-center">
                {s.hero.cta}
              </a>
              <a href="#contact" className="px-8 py-3 border border-white/30 text-white font-semibold rounded hover:border-white hover:bg-white/5 transition-colors text-center">
                {s.hero.ctaContact}
              </a>
            </div>
            <div className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-400">
              <Stars count={5} />
              <span className="ml-1">5.0 / 5</span>
              <span>-</span>
              <span>37 {s.reviews.googleRating}</span>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>
      )}

      {design === 2 && (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4a853]/15 via-[#0a0a0a]/95 to-[#e63946]/10" />
          <div className={`absolute inset-0 bg-[url('/images/storefront.jpg')] bg-cover bg-center opacity-15`} />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-40" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-1 border border-[var(--color-gold)]/30 rounded-full">
              <span className="text-sm text-[var(--color-gold)] tracking-widest uppercase">Soorts-Hossegor</span>
            </div>
            <h1 className="text-7xl sm:text-9xl font-bold tracking-wider mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              MUSIC
              <br />
              <span className="text-[var(--color-accent)]">CORNER</span>
            </h1>
            <div className="w-24 h-[2px] bg-[var(--color-gold)] mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-[var(--color-gold)] tracking-[0.3em] mb-6 uppercase" style={{ fontFamily: "var(--font-heading)" }}>
              {s.hero.tagline}
            </p>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed">
              {s.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="px-10 py-4 bg-[var(--color-accent)] text-white font-semibold rounded-none border-2 border-[var(--color-accent)] hover:bg-transparent hover:text-[var(--color-accent)] transition-all text-center tracking-wider uppercase text-sm">
                {s.hero.cta}
              </a>
              <a href="#contact" className="px-10 py-4 border-2 border-[var(--color-gold)]/40 text-[var(--color-gold)] font-semibold rounded-none hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition-all text-center tracking-wider uppercase text-sm">
                {s.hero.ctaContact}
              </a>
            </div>
            <div className="mt-16 flex items-center justify-center gap-3 text-sm text-gray-500">
              <Stars count={5} />
              <span>5.0 / 5</span>
              <span className="text-gray-600">|</span>
              <span>37 {s.reviews.googleRating}</span>
            </div>
          </div>
        </section>
      )}

      {design === 3 && (
        <section className="relative min-h-screen flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/guitar-hero.jpg" alt="Guitar" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 to-transparent" />
          </div>
          <div className="relative z-10 px-4 sm:px-12 pb-20 pt-40 max-w-3xl">
            <h1 className="text-6xl sm:text-8xl font-bold tracking-wider mb-2 leading-[0.9]">
              MUSIC
              <br />
              <span className="text-[var(--color-accent)]">CORNER</span>
            </h1>
            <div className="w-16 h-1 bg-[var(--color-accent)] mt-4 mb-6" />
            <p className="text-xl sm:text-2xl font-[family-name:var(--font-heading)] text-[var(--color-gold)] tracking-widest mb-4">
              {s.hero.tagline}
            </p>
            <p className="text-lg text-gray-300 max-w-lg mb-10 leading-relaxed">
              {s.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="px-8 py-3.5 bg-[var(--color-accent)] text-white font-bold rounded-sm hover:bg-[var(--color-accent-hover)] transition-colors text-center uppercase tracking-wider text-sm">
                {s.hero.cta}
              </a>
              <a href="#contact" className="px-8 py-3.5 border-2 border-white/30 text-white font-bold rounded-sm hover:border-white hover:bg-white/10 transition-colors text-center uppercase tracking-wider text-sm">
                {s.hero.ctaContact}
              </a>
            </div>
            <div className="mt-10 flex items-center gap-2 text-sm text-gray-400">
              <Stars count={5} />
              <span className="ml-1">5.0 / 5</span>
              <span>-</span>
              <span>37 {s.reviews.googleRating}</span>
            </div>
          </div>
        </section>
      )}

      {design === 4 && (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFFBEB]">
          <div className="absolute inset-0">
            <img src="/images/storefront.jpg" alt="Music Corner storefront" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBEB]/60 via-transparent to-[#FFFBEB]" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
            <img src="/images/logo.png" alt="Music Corner" className="h-28 sm:h-36 w-auto mx-auto mb-8" />
            <div className="w-20 h-[2px] bg-[#9A3412] mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-[#3B1F0B] mb-4 tracking-wide" style={{ fontFamily: "'Abril Fatface', serif" }}>
              {s.hero.tagline}
            </p>
            <p className="text-lg text-[#5C3A1E] max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
              {s.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-3.5 bg-[#9A3412] text-[#FFFBEB] font-semibold rounded-full hover:bg-[#7C2D12] transition-colors text-center cursor-pointer" style={{ fontFamily: "'Merriweather', serif" }}>
                {s.hero.cta}
              </a>
              <a href="#contact" className="px-8 py-3.5 border-2 border-[#9A3412] text-[#9A3412] font-semibold rounded-full hover:bg-[#9A3412]/10 transition-colors text-center cursor-pointer" style={{ fontFamily: "'Merriweather', serif" }}>
                {s.hero.ctaContact}
              </a>
            </div>
            <div className="mt-12 flex items-center justify-center gap-2 text-sm text-[#5C3A1E]">
              <Stars count={5} />
              <span className="ml-1">5.0 / 5</span>
              <span>-</span>
              <span>37 {s.reviews.googleRating}</span>
            </div>
          </div>
        </section>
      )}

      {/* Theme wrapper for Design 4 (light mode) */}
      <div className={design === 4 ? "bg-[#FFFBEB] text-[#3B1F0B] [&_.section-divider]:bg-gradient-to-r [&_.section-divider]:from-transparent [&_.section-divider]:via-[#9A3412] [&_.section-divider]:to-transparent" : ""} style={design === 4 ? { fontFamily: "'Merriweather', serif" } : undefined}>

      {/* ── ABOUT ── */}
      <section id="about" className={`py-20 px-4 ${design === 4 ? "bg-[#FFFBEB]" : ""}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            {s.about.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg leading-relaxed mb-6 ${design === 4 ? "text-[#5C3A1E]" : "text-gray-300"}`}>
                {s.about.p1}
              </p>
              <p className={`text-lg leading-relaxed mb-8 ${design === 4 ? "text-[#5C3A1E]" : "text-gray-300"}`}>
                {s.about.p2}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${design === 4 ? "bg-white border-[#9A3412]/20" : "bg-[#1a1a1a] border-white/10"}`}>
                  <span className={`text-2xl font-bold ${design === 4 ? "text-[#9A3412]" : "text-[var(--color-accent)]"}`}>MARSHALL</span>
                  <span className={`text-xs ${design === 4 ? "text-[#5C3A1E]" : "text-gray-400"}`}>{s.about.marshall}</span>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${design === 4 ? "bg-white border-[#D97706]/20" : "bg-[#1a1a1a] border-white/10"}`}>
                  <span className={`text-lg font-bold ${design === 4 ? "text-[#D97706]" : "text-[var(--color-gold)]"}`}>DS DRUM</span>
                  <span className={`text-xs ${design === 4 ? "text-[#5C3A1E]" : "text-gray-400"}`}>{s.about.dsdrum}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className={`aspect-[4/3] overflow-hidden ${design === 4 ? "rounded-xl bg-[#F5ECD7] border border-[#9A3412]/10" : design === 2 ? "rounded-none bg-[#1a1a1a] border border-white/10" : "rounded-lg bg-[#1a1a1a] border border-white/10"}`}>
                <img
                  src={dc.aboutImage}
                  alt="Music Corner shop"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className={`absolute -bottom-4 -right-4 px-6 py-3 font-bold text-sm ${design === 4 ? "bg-[#9A3412] text-[#FFFBEB] rounded-full" : design === 2 ? "bg-[var(--color-accent)] text-white rounded-none" : "bg-[var(--color-accent)] text-white rounded-lg"}`}>
                SOORTS-HOSSEGOR
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ── SERVICES ── */}
      <section id="services" className={`py-20 px-4 ${design === 4 ? "bg-[#F5ECD7]" : ""}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            {s.services.title}
          </h2>
          {(design === 2 || design === 3) && (
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              {lang === "fr"
                ? "Un savoir-faire artisanal au service de votre passion musicale"
                : "Craftsmanship at the service of your musical passion"}
            </p>
          )}
          {design === 4 && (
            <p className="text-center text-[#5C3A1E] mb-12 max-w-2xl mx-auto">
              {lang === "fr"
                ? "Un savoir-faire artisanal au service de votre passion musicale"
                : "Craftsmanship at the service of your musical passion"}
            </p>
          )}
          {design === 1 && <div className="mb-12" />}

          {design === 1 ? (
            /* Design 1: Simple cards */
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <WrenchIcon />, ...s.services.repair },
                { icon: <ShoppingIcon />, ...s.services.sell },
                { icon: <ChatIcon />, ...s.services.advice },
              ].map((service) => (
                <div
                  key={service.title}
                  className="card-hover bg-[#1a1a1a] border border-white/10 rounded-lg p-8 text-center"
                >
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          ) : design === 2 ? (
            /* Design 2: Vinyl - horizontal cards with details + gold accents */
            <div className="space-y-6">
              {[
                { icon: <WrenchIcon />, ...s.services.repair, num: "01" },
                { icon: <ShoppingIcon />, ...s.services.sell, num: "02" },
                { icon: <ChatIcon />, ...s.services.advice, num: "03" },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group bg-gradient-to-r from-[#1a1a1a] to-[#111] border border-white/5 p-8 hover:border-[var(--color-gold)]/30 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center gap-4 md:w-1/3">
                      <span className="text-3xl font-bold text-[var(--color-gold)]/20 font-[family-name:var(--font-heading)]">{service.num}</span>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-2 gap-3">
                      {service.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : design === 4 ? (
            /* Design 4: Boutique - warm cards with terracotta accents */
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <WrenchIcon />, ...s.services.repair },
                { icon: <ShoppingIcon />, ...s.services.sell },
                { icon: <ChatIcon />, ...s.services.advice },
              ].map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-xl p-8 border border-[#9A3412]/10 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[#9A3412]">{service.icon}</div>
                    <h3 className="text-xl font-bold text-[#3B1F0B]">{service.title}</h3>
                  </div>
                  <p className="text-[#5C3A1E] leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-[#5C3A1E]">
                        <svg className="w-4 h-4 text-[#D97706] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            /* Design 3: Stage - large cards with left border accent + details */
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <WrenchIcon />, ...s.services.repair },
                { icon: <ShoppingIcon />, ...s.services.sell },
                { icon: <ChatIcon />, ...s.services.advice },
              ].map((service) => (
                <div
                  key={service.title}
                  className="card-hover bg-[#1a1a1a] border-l-4 border-l-[var(--color-accent)] border border-white/5 rounded-sm p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-[var(--color-accent)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Products */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            {s.products.title}
          </h2>
          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ${design === 2 ? "[&>*]:rounded-none" : ""}`}>
            {Object.entries(s.products)
              .filter(([key]) => key !== "title")
              .map(([key, label]) => (
                <div
                  key={key}
                  className={`p-6 text-center ${design === 4 ? "bg-white rounded-xl border border-[#9A3412]/10 shadow-sm hover:shadow-md transition-shadow" : `card-hover bg-[#1a1a1a] border border-white/10 ${design === 2 ? "rounded-none hover:border-[var(--color-gold)]/40" : "rounded-lg"}`}`}
                >
                  <div className={`mb-3 flex justify-center ${design === 4 ? "text-[#9A3412]" : "text-[var(--color-accent)]"}`}>
                    <ProductIcon type={productIcons[key]} className="w-8 h-8" />
                  </div>
                  <span className={`text-sm font-semibold ${design === 4 ? "text-[#3B1F0B]" : "text-gray-200"}`}>
                    {label}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Instagram Gallery */}
      <section className={`py-20 px-4 ${design === 4 ? "bg-[#FFFBEB]" : "bg-[#111111]"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2">
            {s.instagram.title}
          </h2>
          <a
            href="https://www.instagram.com/musiccorner_hossegor/"
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-center font-semibold mb-10 hover:underline ${design === 4 ? "text-[#9A3412]" : "text-[var(--color-accent)]"}`}
          >
            {s.instagram.subtitle}
          </a>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ${design === 2 ? "[&>*]:rounded-none" : ""}`}>
            {[
              { src: "/images/storefront.jpg", alt: "Music Corner storefront" },
              { src: "/images/shop-interior.webp", alt: "Inside Music Corner" },
              { src: "/images/culture.jpg", alt: "Music culture & history" },
              { src: "/images/vinyl.jpg", alt: "Vinyl records" },
              { src: "/images/merch.jpg", alt: "Music Corner t-shirts & merch" },
              { src: "/images/drums.jpg", alt: "DS Drum at the shop" },
              { src: "/images/earprotection.jpg", alt: "Ear protection for festivals" },
              { src: "/images/festival.jpg", alt: "Music Corner at festivals" },
            ].map((img) => (
              <a
                key={img.src}
                href="https://www.instagram.com/musiccorner_hossegor/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative aspect-square overflow-hidden ${design === 4 ? "rounded-xl bg-[#F5ECD7]" : design === 2 ? "rounded-none bg-[#1a1a1a]" : "rounded-lg bg-[#1a1a1a]"}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
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

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Rental */}
      <section id="rental" className={`py-20 px-4 ${design === 4 ? "bg-[#F5ECD7]" : "bg-[#111111]"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            {s.rental.title}
          </h2>
          <p className={`text-center mb-12 max-w-2xl mx-auto ${design === 4 ? "text-[#5C3A1E]" : "text-gray-400"}`}>
            {s.rental.subtitle}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.rental.items.map((item) => (
              <div
                key={item.name}
                className={`relative overflow-hidden p-6 ${design === 4 ? "bg-white rounded-xl border border-[#9A3412]/10 shadow-sm hover:shadow-md transition-shadow" : `card-hover bg-[#1a1a1a] border border-white/10 ${design === 2 ? "rounded-none" : "rounded-lg"}`}`}
              >
                <div className={`absolute top-0 right-0 text-xs font-bold px-3 py-1 rounded-bl-lg ${design === 4 ? "bg-[#D97706] text-white" : "rental-badge text-white"}`}>
                  {lang === "fr" ? "LOCATION" : "RENTAL"}
                </div>
                <h3 className={`text-lg font-bold mb-2 pr-16 ${design === 4 ? "text-[#3B1F0B]" : ""}`}>{item.name}</h3>
                <p className={`font-semibold text-lg mb-2 ${design === 4 ? "text-[#9A3412]" : "text-[var(--color-gold)]"}`}>
                  {item.price}
                </p>
                <p className={`text-sm ${design === 4 ? "text-[#5C3A1E]" : "text-gray-400"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="tel:+33558438734"
              className={`inline-block px-8 py-3 font-semibold transition-colors ${design === 4 ? "bg-[#9A3412] text-[#FFFBEB] rounded-full hover:bg-[#7C2D12]" : `bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] ${design === 2 ? "rounded-none" : "rounded"}`}`}
            >
              {s.rental.cta}
            </a>
            <p className={`text-xs mt-4 ${design === 4 ? "text-[#5C3A1E]/60" : "text-gray-500"}`}>{s.rental.note}</p>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Reviews */}
      <section id="reviews" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2">
            {s.reviews.title}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Stars count={5} />
            <span className="text-2xl font-bold">5.0</span>
          </div>
          <p className={`text-center mb-12 ${design === 4 ? "text-[#5C3A1E]" : "text-gray-400"}`}>
            {s.reviews.subtitle} - 37+ {s.reviews.googleRating}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className={`p-6 ${design === 4 ? "bg-white rounded-xl border border-[#9A3412]/10 shadow-sm" : `bg-[#1a1a1a] border border-white/10 ${design === 2 ? "rounded-none" : "rounded-lg"}`}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${design === 4 ? "bg-[#9A3412] text-[#FFFBEB]" : "bg-[var(--color-accent)] text-white"}`}>
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className={`text-xs ${design === 4 ? "text-[#5C3A1E]/50" : "text-gray-500"}`}>
                        {review.date[lang]}
                      </p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <Stars count={review.rating} />
                <p className={`text-sm mt-3 leading-relaxed ${design === 4 ? "text-[#5C3A1E]" : "text-gray-300"}`}>
                  &ldquo;{review.text[lang]}&rdquo;
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/Music+Corner/@43.6724709,-1.3894752,17z/data=!4m8!3m7!1s0xd5151b0d1a4384d:0x65ade1c84f4f665a!8m2!3d43.6724709!4d-1.3894752!9m1!1b1!16s%2Fg%2F11y7c9j00p"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-6 py-2 border rounded text-sm transition-colors ${design === 4 ? "border-[#9A3412]/30 text-[#9A3412] hover:border-[#9A3412] hover:bg-[#9A3412]/5" : "border-white/20 text-gray-300 hover:text-white hover:border-white"}`}
            >
              {s.reviews.viewAll} &rarr;
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Contact */}
      <section id="contact" className={`py-20 px-4 ${design === 4 ? "bg-[#F5ECD7]" : "bg-[#111111]"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            {s.contact.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className={`mt-1 ${design === 4 ? "text-[#9A3412]" : "text-[var(--color-accent)]"}`}>
                  <MapPinIcon />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{s.contact.address}</h3>
                  <p className={design === 4 ? "text-[#5C3A1E]" : "text-gray-300"}>33 Av. des Tisserands</p>
                  <p className={design === 4 ? "text-[#5C3A1E]" : "text-gray-300"}>40150 Soorts-Hossegor, France</p>
                  <a
                    href="https://www.google.com/maps/dir//Music+Corner,+33+Av.+des+Tisserands,+40150+Soorts-Hossegor,+France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm mt-1 inline-block hover:underline ${design === 4 ? "text-[#9A3412]" : "text-[var(--color-accent)]"}`}
                  >
                    {s.contact.directions} &rarr;
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className={`mt-1 ${design === 4 ? "text-[#9A3412]" : "text-[var(--color-accent)]"}`}>
                  <PhoneIcon />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{s.contact.phone}</h3>
                  <a
                    href="tel:+33558438734"
                    className={`transition-colors text-lg ${design === 4 ? "text-[#5C3A1E] hover:text-[#9A3412]" : "text-gray-300 hover:text-white"}`}
                  >
                    +33 5 58 43 87 34
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className={`mt-1 ${design === 4 ? "text-[#9A3412]" : "text-[var(--color-accent)]"}`}>
                  <ClockIcon />
                </div>
                <div>
                  <h3 className="font-bold mb-3">{s.contact.hours}</h3>
                  <div className="space-y-1">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between gap-8 text-sm"
                      >
                        <span className={`w-24 ${design === 4 ? "text-[#5C3A1E]/60" : "text-gray-400"}`}>{h.day}</span>
                        <span
                          className={
                            h.time === s.contact.closed
                              ? design === 4 ? "text-[#9A3412]" : "text-[var(--color-accent)]"
                              : design === 4 ? "text-[#5C3A1E]" : "text-gray-300"
                          }
                        >
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-bold mb-3">{s.contact.follow}</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/musiccorner_hossegor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${design === 4 ? "bg-white border-[#9A3412]/10 hover:border-[#9A3412]" : "bg-[#1a1a1a] border-white/10 hover:border-[var(--color-accent)]"}`}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    <span className="text-sm">@musiccorner_hossegor</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61566539067498"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${design === 4 ? "bg-white border-[#9A3412]/10 hover:border-[#9A3412]" : "bg-[#1a1a1a] border-white/10 hover:border-[var(--color-accent)]"}`}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm">Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className={`overflow-hidden h-[400px] md:h-auto ${design === 4 ? "rounded-xl border border-[#9A3412]/10" : "rounded-lg border border-white/10"}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.123!2d-1.3894752!3d43.6724709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5151b0d1a4384d%3A0x65ade1c84f4f665a!2sMusic%20Corner!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Music Corner location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${design === 4 ? "border-[#9A3412]/10 bg-[#FFFBEB]" : "border-white/5"}`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Music Corner" className={`h-8 w-auto ${design === 4 ? "" : "drop-shadow-[0_0_1px_rgba(255,255,255,0.3)]"}`} />
          </div>
          <p className={`text-sm ${design === 4 ? "text-[#5C3A1E]/60" : "text-gray-500"}`}>
            {s.footer.tagline}
          </p>
          <p className={`text-xs ${design === 4 ? "text-[#5C3A1E]/40" : "text-gray-600"}`}>
            &copy; {new Date().getFullYear()} Music Corner. {s.footer.rights}
          </p>
        </div>
      </footer>

      {/* Close Design 4 theme wrapper */}
      </div>
    </>
  );
}

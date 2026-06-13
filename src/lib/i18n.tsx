"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "fr" | "en";

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "fr", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export const authorizedBrands = [
  "Marshall",
  "Laney",
  "Peavey",
  "Mooer",
  "DS Drums",
  "Pro Orca",
  "Promark",
  "Meinl",
  "D'Addario",
  "Hercules",
  "K&M",
  "Sigma",
  "Cort",
  "Tyma",
  "Ortega",
  "RightOn",
  "Levis",
];

export const t = {
  fr: {
    nav: {
      home: "Accueil",
      about: "\u00C0 propos",
      services: "Atelier",
      rental: "Location",
      contact: "Contact",
    },
    hero: {
      tagline: "Repair, Merch & More",
      title: "L'univers musical\n\u00e0 Hossegor",
      subtitle:
        "Instruments, vinyles, r\u00e9paration, et tout ce qui fait vibrer les passionn\u00e9s de musique.",
      cta: "D\u00e9couvrir",
      ctaContact: "Contact",
    },
    about: {
      label: "Notre histoire",
      title: "Un concept store n\u00e9 de la passion",
      p1: "Pedro et Tom ont cr\u00e9\u00e9 Music Corner, un espace o\u00f9 passion et expertise se m\u00ealent pour offrir aux m\u00e9lomanes une s\u00e9lection d'instruments, de mat\u00e9riel et bien plus encore.",
      p2: "Que vous soyez d\u00e9butant ou musicien confirm\u00e9, vous y trouverez instruments, accessoires, vinyles, tee-shirts, objets de d\u00e9coration et beaux livres.",
      p3: "L'ambiance chaleureuse du lieu invite \u00e0 l'exploration. Music Corner est un v\u00e9ritable temple pour tous les passionn\u00e9s de musique, o\u00f9 qualit\u00e9 et convivialit\u00e9 sont les ma\u00eetres mots.",
      marshall: "Revendeur agr\u00e9\u00e9",
      dsdrum: "Revendeur agr\u00e9\u00e9",
      heroTitle: "Pedro & Tom",
      heroSubtitle: "Deux passionn\u00e9s au service de la musique depuis Hossegor",
      storyTitle: "L'histoire de Music Corner",
      storyP1: "Tout a commenc\u00e9 par une passion commune\u00a0: la musique. Pedro et Tom ont d\u00e9cid\u00e9 de cr\u00e9er un lieu qui leur ressemble \u00e0 Soorts-Hossegor.",
      storyP2: "Music Corner n'est pas qu'un simple magasin de musique. C'est un concept store o\u00f9 l'on peut passer des heures \u00e0 explorer\u00a0: vinyles rares, beaux livres, t-shirts, d\u00e9co musicale, et bien s\u00fbr des instruments de qualit\u00e9.",
      storyP3: "Tom, form\u00e9 comme guitar-tech et drum-tech, apporte son savoir-faire artisanal \u00e0 l'atelier de r\u00e9paration. Pedro apporte sa vision cr\u00e9ative et son sens du partage. Ensemble, ils ont cr\u00e9\u00e9 un espace unique dans le sud-ouest de la France.",
      valuesTitle: "Nos valeurs",
      values: [
        { title: "Passion", desc: "Chaque instrument, chaque vinyle, chaque objet est choisi avec soin et passion." },
        { title: "Expertise", desc: "Des conseils personnalis\u00e9s, un atelier de r\u00e9paration professionnel." },
        { title: "Convivialit\u00e9", desc: "Un lieu chaleureux o\u00f9 chaque visiteur se sent chez lui." },
        { title: "Qualit\u00e9", desc: "Revendeur agr\u00e9\u00e9 de nombreuses marques. Que du bon mat\u00e9riel." },
      ],
    },
    services: {
      label: "Savoir-faire",
      title: "L'Atelier",
      subtitle: "Un savoir-faire artisanal au service de votre passion musicale",
      heroTitle: "L'atelier",
      heroSubtitle: "R\u00e9paration et entretien de vos instruments",
      repair: {
        title: "Atelier de r\u00e9paration",
        desc: "Tom, form\u00e9 comme guitar-tech et drum-tech, propose un service de r\u00e9paration de guitares, basses et batteries. Un service sur mesure pour redonner vie \u00e0 vos instruments.",
        longDesc: "Notre atelier est \u00e9quip\u00e9 pour traiter tout type de r\u00e9paration, du simple r\u00e9glage \u00e0 la restauration compl\u00e8te. Chaque instrument est trait\u00e9 avec le plus grand soin, et nous prenons le temps d'expliquer chaque intervention r\u00e9alis\u00e9e.",
        details: [
          "R\u00e9glage et ajustement de manche",
          "Changement de cordes et m\u00e9caniques",
          "\u00c9lectronique et soudure",
          "Restauration compl\u00e8te",
          "R\u00e9glage d'intonation",
          "Changement de frettes",
        ],
      },
      sell: {
        title: "Vente d'instruments",
        desc: "Instruments neufs et d'occasion\u00a0: guitares, basses, ukul\u00e9l\u00e9s, batteries, percussions et accessoires.",
        longDesc: "Nous s\u00e9lectionnons chaque instrument avec soin. Notre catalogue couvre tous les besoins, du d\u00e9butant au professionnel. Essayez en magasin avant d'acheter.",
        details: [
          "Guitares acoustiques et \u00e9lectriques",
          "Amplis Marshall et plus",
          "Batteries DS Drum",
          "Ukul\u00e9l\u00e9s et instruments du monde",
          "Accessoires et consommables",
          "Instruments d'occasion s\u00e9lectionn\u00e9s",
        ],
      },
      advice: {
        title: "Conseil expert",
        desc: "Notre \u00e9quipe de passionn\u00e9s vous guide dans le choix de votre instrument, que vous soyez d\u00e9butant ou professionnel.",
        longDesc: "Pas de pression, pas de vente forc\u00e9e. On discute, on \u00e9coute vos besoins, on vous fait essayer. L'objectif\u00a0: que vous repartiez avec l'instrument qui vous correspond.",
        details: [
          "Essai en magasin",
          "Accompagnement personnalis\u00e9",
          "Recommandations sur mesure",
          "Suivi apr\u00e8s-vente",
        ],
      },
      cta: "Prendre contact",
    },
    products: {
      label: "Collection",
      title: "Ce que vous trouverez chez nous",
      items: [
        "Guitares & Basses",
        "Batteries & Percussions",
        "Ukul\u00e9l\u00e9s",
        "Amplis & Enceintes",
        "Vinyles",
        "Livres & BD",
        "Accessoires",
        "Merch & T-shirts",
        "D\u00e9co musicale",
        "Casques",
        "Protections auditives",
        "Cordes & M\u00e9diators",
      ],
    },
    instagram: {
      title: "Suivez-nous",
      subtitle: "@musiccorner_hossegor",
    },
    rental: {
      label: "Location",
      title: "Louez votre sono ou instrument",
      heroTitle: "Louez votre sono\nou instrument",
      heroSubtitle: "Pour une semaine, un mois, ou le temps d'un festival. Contactez-nous pour plus d'informations.",
      subtitle: "D\u00e9couvrez nos \u00e9quipements disponibles \u00e0 la location. Contactez-nous pour plus d'informations.",
      items: [
        "Guitare acoustique",
        "Guitare \u00e9lectrique + Ampli",
        "Ukul\u00e9l\u00e9",
        "Batterie compl\u00e8te",
        "Sonorisation",
        "Basse",
        "Percussions",
        "Micro et accessoires",
      ],
      cta: "Contactez-nous",
      note: "Nous sommes encore en train de d\u00e9velopper ce service. Contactez-nous pour conna\u00eetre les disponibilit\u00e9s et tarifs.",
    },
    reviews: {
      label: "T\u00e9moignages",
      title: "Ce que disent nos clients",
      googleRating: "sur Google",
      viewAll: "Voir tous les avis sur Google",
    },
    contact: {
      title: "Nous trouver",
      heroTitle: "Venez nous voir",
      heroSubtitle: "33 Av. des Tisserands, Soorts-Hossegor",
      hours: "Horaires",
      address: "Adresse",
      phone: "T\u00e9l\u00e9phone",
      closed: "Ferm\u00e9",
      monday: "Lundi",
      tuesday: "Mardi",
      wednesday: "Mercredi",
      thursday: "Jeudi",
      friday: "Vendredi",
      saturday: "Samedi",
      sunday: "Dimanche",
      follow: "Suivez-nous",
      directions: "Itin\u00e9raire",
      callUs: "Appelez-nous",
      visitUs: "Rendez-nous visite",
      openingInfo: "Ouvert du mardi au samedi, avec une pause d\u00e9jeuner de 13h \u00e0 14h.",
    },
    footer: {
      rights: "Tous droits r\u00e9serv\u00e9s.",
      tagline: "Concept Store Musical - Soorts-Hossegor, France",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Workshop",
      rental: "Rental",
      contact: "Contact",
    },
    hero: {
      tagline: "Repair, Merch & More",
      title: "The musical universe\nin Hossegor",
      subtitle:
        "Instruments, vinyl, repairs, and everything that makes music lovers tick.",
      cta: "Discover",
      ctaContact: "Contact",
    },
    about: {
      label: "Our story",
      title: "A concept store born from passion",
      p1: "Pedro and Tom created Music Corner, a space where passion meets expertise, offering music lovers a curated selection of instruments, gear, and much more.",
      p2: "Whether you're a beginner or experienced musician, you'll find instruments, accessories, vinyl records, t-shirts, decorative items, and beautiful books.",
      p3: "The warm atmosphere invites exploration. Music Corner is a true temple for all music lovers, where quality and friendliness are the guiding principles.",
      marshall: "Authorized dealer",
      dsdrum: "Authorized dealer",
      heroTitle: "Pedro & Tom",
      heroSubtitle: "Two passionate people serving music from Hossegor",
      storyTitle: "The Music Corner story",
      storyP1: "It all started with a shared passion: music. Pedro and Tom decided to create a place that felt like them in Soorts-Hossegor.",
      storyP2: "Music Corner is not just a music shop. It's a concept store where you can spend hours exploring: rare vinyl, beautiful books, t-shirts, musical decor, and of course quality instruments.",
      storyP3: "Tom, trained as a guitar-tech and drum-tech, brings his craftsmanship to the repair workshop. Pedro brings his creative vision and sense of sharing. Together, they've created a unique space in southwest France.",
      valuesTitle: "Our values",
      values: [
        { title: "Passion", desc: "Every instrument, every vinyl, every item is chosen with care and passion." },
        { title: "Expertise", desc: "Personalized advice, a professional repair workshop." },
        { title: "Warmth", desc: "A welcoming place where every visitor feels at home." },
        { title: "Quality", desc: "Authorized dealer for many brands. Only the good stuff." },
      ],
    },
    services: {
      label: "Craftsmanship",
      title: "The Workshop",
      subtitle: "Craftsmanship at the service of your musical passion",
      heroTitle: "The workshop",
      heroSubtitle: "Repair and maintenance for your instruments",
      repair: {
        title: "Repair Workshop",
        desc: "Tom, trained as a guitar-tech and drum-tech, offers a repair service for guitars, basses, and drums. A bespoke service to bring your instruments back to life.",
        longDesc: "Our workshop is equipped to handle any type of repair, from simple adjustments to full restoration. Each instrument is treated with the utmost care, and we take time to explain every intervention.",
        details: [
          "Neck adjustment and setup",
          "String and tuner replacement",
          "Electronics and soldering",
          "Full restoration",
          "Intonation adjustment",
          "Fret replacement",
        ],
      },
      sell: {
        title: "Instrument Sales",
        desc: "New and second-hand instruments: guitars, basses, ukuleles, drums, percussion and accessories.",
        longDesc: "We carefully select each instrument. Our catalog covers all needs, from beginner to professional. Try in store before you buy.",
        details: [
          "Acoustic and electric guitars",
          "Marshall amps and more",
          "DS Drum kits",
          "Ukuleles and world instruments",
          "Accessories and consumables",
          "Selected second-hand instruments",
        ],
      },
      advice: {
        title: "Expert Advice",
        desc: "Our team of enthusiasts guides you in choosing your instrument, whether you are a beginner or a professional.",
        longDesc: "No pressure, no hard sell. We chat, listen to your needs, and let you try. The goal: you leave with the instrument that suits you.",
        details: [
          "Try in store",
          "Personalized guidance",
          "Tailored recommendations",
          "After-sales support",
        ],
      },
      cta: "Get in touch",
    },
    products: {
      label: "Collection",
      title: "What you'll find here",
      items: [
        "Guitars & Basses",
        "Drums & Percussion",
        "Ukuleles",
        "Amps & Speakers",
        "Vinyl Records",
        "Books & Comics",
        "Accessories",
        "Merch & T-shirts",
        "Musical Decor",
        "Headphones",
        "Ear Protection",
        "Strings & Picks",
      ],
    },
    instagram: {
      title: "Follow us",
      subtitle: "@musiccorner_hossegor",
    },
    rental: {
      label: "Rental",
      title: "Rent a PA system or instrument",
      heroTitle: "Rent a PA system\nor instrument",
      heroSubtitle: "For a week, a month, or festival season. Contact us for more information.",
      subtitle: "Discover our equipment available for rent. Contact us for more information.",
      items: [
        "Acoustic Guitar",
        "Electric Guitar + Amp",
        "Ukulele",
        "Full Drum Kit",
        "PA System",
        "Bass Guitar",
        "Percussion",
        "Microphones and accessories",
      ],
      cta: "Contact us",
      note: "We are still developing this service. Contact us to check availability and pricing.",
    },
    reviews: {
      label: "Testimonials",
      title: "What our customers say",
      googleRating: "on Google",
      viewAll: "See all reviews on Google",
    },
    contact: {
      title: "Find Us",
      heroTitle: "Come visit us",
      heroSubtitle: "33 Av. des Tisserands, Soorts-Hossegor",
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
      callUs: "Call us",
      visitUs: "Visit us",
      openingInfo: "Open Tuesday to Saturday, with a lunch break from 1pm to 2pm.",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Musical Concept Store - Soorts-Hossegor, France",
    },
  },
};

export const reviews = [
  {
    name: "C\u00e9line A.N.",
    text: {
      fr: "Music Corner est une vraie p\u00e9pite\u00a0! J'y ai trouv\u00e9 un ukul\u00e9l\u00e9 magnifique et je suis vraiment ravie de mon achat. L'\u00e9quipe est passionn\u00e9e, super accueillante et de tr\u00e8s bon conseil. Un endroit unique o\u00f9 l'on se sent tout de suite bien. Je recommande \u00e0 100\u00a0% !",
      en: "Music Corner is a real gem! I found a beautiful ukulele and I'm really delighted with my purchase. The team is passionate, super welcoming and gives great advice. A unique place where you feel at home right away. 100% recommended!",
    },
  },
  {
    name: "Audrey D.",
    text: {
      fr: "Vraiment un magasin et atelier au top\u00a0! Sans oublier la sympathie des gars. Je recommande pour tous, pro comme amateur, vous y trouverez forc\u00e9ment votre bonheur. Service de r\u00e9paration impeccable\u00a0!",
      en: "Truly a top-notch shop and workshop! Not to mention how friendly the guys are. I recommend it for everyone, pros and amateurs alike, you'll definitely find what you're looking for. Impeccable repair service!",
    },
  },
  {
    name: "Nathalie T.",
    text: {
      fr: "Magnifique boutique avec instruments de qualit\u00e9. Tr\u00e8s bon conseil lors de l'achat du premier ukul\u00e9l\u00e9 de ma fille. Je recommande vivement cette adresse pour tous les amoureux de musique.",
      en: "Beautiful shop with quality instruments. Great advice when buying my daughter's first ukulele. I highly recommend this place for all music lovers.",
    },
  },
  {
    name: "Pierre L.",
    text: {
      fr: "Super accueil et un choix impressionnant de vinyles\u00a0! Le coin librairie est aussi tr\u00e8s sympa. On sent la passion et le professionnalisme. J'y retourne d\u00e8s que possible.",
      en: "Great welcome and an impressive selection of vinyl records! The bookshop corner is also really nice. You can feel the passion and professionalism. I'll be back as soon as possible.",
    },
  },
  {
    name: "Ma\u00efka S.",
    text: {
      fr: "J'ai fait r\u00e9parer ma guitare ici, travail excellent et rapide. Les prix sont tr\u00e8s corrects. L'\u00e9quipe prend le temps d'expliquer ce qui a \u00e9t\u00e9 fait. Un vrai artisan de la musique\u00a0!",
      en: "Had my guitar repaired here, excellent and quick work. Prices are very fair. The team takes time to explain what was done. A true music craftsman!",
    },
  },
  {
    name: "Thomas B.",
    text: {
      fr: "Le meilleur magasin de musique du coin\u00a0! Ambiance g\u00e9niale, \u00e9quipe au top et un vrai concept store o\u00f9 l'on trouve de tout\u00a0: instruments, vinyles, livres, d\u00e9co. Un incontournable \u00e0 Hossegor.",
      en: "The best music shop in the area! Amazing atmosphere, great team and a true concept store where you can find everything: instruments, vinyl, books, decor. A must-visit in Hossegor.",
    },
  },
];

export const galleryImages = [
  { src: "/images/shop-guitars.jpeg", alt: "Guitars and amps at Music Corner" },
  { src: "/images/vinyl-collection.jpeg", alt: "Vinyl records collection" },
  { src: "/images/shop-merch.jpeg", alt: "Music Corner merch and t-shirts" },
  { src: "/images/marshall-speakers.jpeg", alt: "Marshall speakers" },
  { src: "/images/reading-corner.jpeg", alt: "Reading corner with music books" },
  { src: "/images/guitars-wall.jpeg", alt: "Acoustic guitars on wall" },
  { src: "/images/kids-section.jpeg", alt: "Kids musical instruments" },
  { src: "/images/counter.jpeg", alt: "Music Corner counter" },
];

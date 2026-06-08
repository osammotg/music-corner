import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Music Corner | Magasin de musique - Soorts-Hossegor",
  description:
    "Music Corner - Votre magasin de musique a Soorts-Hossegor. Instruments neufs et d'occasion, atelier de reparation, vinyles, livres et accessoires. Revendeur agree Marshall.",
  keywords: [
    "music corner",
    "magasin musique",
    "hossegor",
    "seignosse",
    "instruments musique",
    "reparation instruments",
    "marshall",
    "vinyles",
    "guitare",
    "ukulele",
    "batterie",
  ],
  openGraph: {
    title: "Music Corner | Repair, Merch & More",
    description:
      "Magasin de musique, atelier de reparations et tout sur l'univers musical a Soorts-Hossegor.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

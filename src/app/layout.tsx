import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Music Corner | Concept Store Musical - Soorts-Hossegor",
  description:
    "Music Corner - Votre concept store musical a Soorts-Hossegor. Instruments, vinyles, atelier de reparation, location, et bien plus. Revendeur agree Marshall et DS Drum.",
  keywords: [
    "music corner",
    "magasin musique hossegor",
    "reparation guitare hossegor",
    "instruments musique landes",
    "marshall revendeur agree",
    "ds drum france",
    "vinyles hossegor",
    "location instruments musique",
    "guitar tech hossegor",
    "concept store musique",
  ],
  openGraph: {
    title: "Music Corner | Repair, Merch & More",
    description:
      "Concept store musical a Soorts-Hossegor. Instruments, vinyles, reparation et bien plus.",
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
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollReveal />
        </LanguageProvider>
      </body>
    </html>
  );
}

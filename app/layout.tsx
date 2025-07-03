import type { Metadata } from "next";
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import "./globals.css";
import { Montserrat, Poppins } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '600', '700'], // adapte selon tes besoins
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: "Développeur web full stack freelance – Création d’applications web",
  description: "Freelance experte en développement web. J’aide startups et entreprises à créer des applications utiles, scalables et sur-mesure. Basée au Panama, remote.",
  keywords: [
    "développeuse web freelance",
    "freelance front-end",
    "freelance full stack",
    "développeur front-end",
    "développeur full stack",
    "Vue.js",
    "TypeScript",
    "Node.js",
    "Flutter",
    "intégration maquette",
    "maintenance application",
    "création de site web",
    "Lisa Faci",
    "freelance remote",
  ],
  openGraph: {
    title: "Lisa Faci – Développeuse Web Full Stack Freelance",
    description: "J’aide les entreprises à livrer plus vite des interfaces fiables, maintenables et bien intégrées.",
    url: "https://lisafaci.dev",
    siteName: "Lisa Faci",
    images: [
      {
        url: "/portrait.jpeg",
        width: 1200,
        height: 630,
        alt: "Lisa Faci – Développeuse Web Freelance",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Header from '@/app/ui/header';
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
  viewport: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

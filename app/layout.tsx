import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yokohama.edu.np'),
  title: {
    default: "YOKOHAMA LANGUAGE & TRAINING CONSULTANCY (P) LTD.",
    template: "%s | Yokohama Consultancy",
  },
  description: "Your Gateway to Study & Career Opportunities in Japan. Expert Japanese language class, student visa guidance, NAT/JLPT exam preparation in Nepal.",
  keywords: [
    "Japanese Language Classes Nepal",
    "Study in Japan Consultancy",
    "NAT Test Preparation",
    "JLPT Exam Preparation",
    "Japan Student Visa Nepal",
    "Yokohama Consultancy Pokhara",
  ],
  authors: [{ name: "Yokohama Language & Training Consultancy" }],
  openGraph: {
    title: "YOKOHAMA LANGUAGE & TRAINING CONSULTANCY (P) LTD.",
    description: "Your Gateway to Study & Career Opportunities in Japan",
    url: "https://yokohama.edu.np",
    siteName: "Yokohama Consultancy",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { WhatsAppButton } from "@/components/WhatsAppButton";
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Analytics Scripts */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-C2NE79MLSW" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-C2NE79MLSW');
          `}
        </Script>

        {children}
        <WhatsAppButton />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}

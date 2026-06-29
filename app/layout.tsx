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
  title: "YOKOHAMA LANGUAGE & TRAINING CONSULTANCY (P) LTD.",
  description: "Your Gateway to Study & Career Opportunities in Japan",
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

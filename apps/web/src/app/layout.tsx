import "@ash-therapy/ui/styles.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ash Therapy & Counselling",
  description: "A safe and supportive space for your journey.",
};

import { Navbar } from "../../components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${inter.variable} min-h-screen bg-stone-50 font-sans antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

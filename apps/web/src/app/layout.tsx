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
  metadataBase: new URL("https://ash-therapy.com"),
  title: {
    default: "Ash Therapy & Counselling | Online Therapy UK",
    template: "%s | Ash Therapy"
  },
  description: "Professional online therapy and counselling with Ashmeet Sachdev (MSc, MBACP). A safe, supportive space for depression, anxiety, and personal growth.",
  keywords: ["Online Therapy", "Counselling UK", "Psychotherapy", "Ashmeet Sachdev", "Mental Health", "Depression", "Anxiety", "Trauma", "MBACP"],
  authors: [{ name: "Ashmeet Sachdev" }],
  creator: "Ashmeet Sachdev",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://ash-therapy.com",
    title: "Ash Therapy & Counselling",
    description: "A safe and supportive space for your journey. Online therapy with Ashmeet Sachdev (MSc, MBACP).",
    siteName: "Ash Therapy",
    images: [
      {
        url: "/icon.png", // Using the favicon as the main image for now if no OG image exists
        width: 512,
        height: 512,
        alt: "Ash Therapy Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ash Therapy & Counselling",
    description: "Professional online therapy and counselling.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { JsonLd } from "../../components/JsonLd";
import { Navbar } from "../../components/layout/Navbar";
import { ScrollToTop } from "../../components/layout/ScrollToTop";

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
        <JsonLd />
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

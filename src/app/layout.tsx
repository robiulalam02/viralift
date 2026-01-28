import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@next/third-parties/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ViraLift AI | Rank #1 on YouTube, Instagram & Facebook",
    template: "%s | ViraLift AI"
  },
  description: "The ultimate AI-powered social media engine. Generate high-CTR titles, viral captions, SEO tags, and thumbnail hooks for YouTube, Instagram, and Facebook in seconds.",
  keywords: ["YouTube SEO tool", "AI title generator", "Instagram caption generator", "Viral hashtags", "Social media optimization", "YouTube tags generator", "Facebook engagement tools"],
  authors: [{ name: "ViraLift Team" }],
  creator: "ViraLift AI",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://viralift.vercel.app",
    siteName: "ViraLift AI",
    title: "ViraLift AI | Dominate the Algorithm",
    description: "Generate viral assets for YouTube, Instagram, and Facebook with our custom AI engine.",
    images: [
      {
        url: "/viralift.png",
        width: 1200,
        height: 630,
        alt: "ViraLift AI Dashboard Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ViraLift AI | Rank #1 on Social Media",
    description: "Stop guessing. Start ranking. AI-powered metadata for professional creators.",
    images: ["/viralift.png"],
    creator: "@viralift",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-slate-950 text-white selection:bg-red-500/30 overflow-x-hidden`}
      >
        {/* --- Background Ambient Glow Spots --- */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          {/* Top Left Spot - Red Glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-red-600/10 blur-[120px] animate-pulse" />

          {/* Middle Right Spot - Purple Glow */}
          <div className="absolute top-[20%] right-[-5%] w-[45%] h-[60%] rounded-full bg-purple-600/10 blur-[100px]" />

          {/* Bottom Left Spot - Deep Red Glow */}
          <div className="absolute bottom-[-10%] left-[5%] w-[35%] h-[45%] rounded-full bg-red-500/5 blur-[80px]" />

          {/* Subtle Grain Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
        </div>

        <Navbar />
        <main className="relative z-10 pt-24 min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster theme="dark" position="top-center" richColors />
      </body>
      <GoogleAnalytics gaId="G-7F75RE9HR7" />
    </html>
  );
}
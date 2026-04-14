import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Talkila — Voice Keyboard & Translator",
    template: "%s | Talkila",
  },
  description:
    "Speak in your language, type in theirs. Talkila turns your voice into translated text — right from your keyboard, in any app.",
  metadataBase: new URL("https://talkila.com"),
  openGraph: {
    type: "website",
    siteName: "Talkila",
    title: "Talkila — Voice Keyboard & Translator",
    description:
      "Speak in your language, type in theirs. The iOS keyboard that translates your voice in real time.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-foreground">
        {children}
      </body>
    </html>
  );
}

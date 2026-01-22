import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-geist-mono", // Keeping variable name compatible with defaults or just using it as secondary
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forge | Winnovation",
  description: "A Problem Discovery & Startup Thinking Program",
};

import SelectionHandles from "@/components/ui/SelectionHandles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased font-sans`}>
        <SelectionHandles />
        {children}
      </body>
    </html>
  );
}

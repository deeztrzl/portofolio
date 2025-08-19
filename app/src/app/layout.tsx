import type { Metadata } from "next";
import { Poppins, Inter, Zilla_Slab } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-zilla-slab",
});

export const metadata: Metadata = {
  title: "Zaidan Ahmad's Portfolio",
  description: "A modern portfolio website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable} ${zillaSlab.variable} font-sans bg-white dark:bg-slate-900`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

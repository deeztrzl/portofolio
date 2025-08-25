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
  icons: {
    shortcut: "/favicon/favicon.ico",
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              const savedTheme = localStorage.getItem('portfolio-theme');
              const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              let themeToApply = savedTheme || (systemPrefersDark ? 'dark' : 'light');
              
              if (themeToApply === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (error) {
              console.error('Theme script error:', error);
            }
          `
        }} />
      </head>
      <body className={`${poppins.variable} ${inter.variable} ${zillaSlab.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

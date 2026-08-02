import "./globals.css";
import Script from "next/script";
import LenisProvider from "@/components/LenisProvider";

export const metadata = {
  title: "LemontaKode — Digital Product Studio & Software Engineering",
  description: "We design and engineer digital products people actually enjoy using. Custom mobile apps, web platforms, and enterprise software.",
  keywords: ["software studio", "digital products", "product engineering", "LemontaKode", "Next.js", "Flutter", "custom software"],
  authors: [{ name: "LemontaKode" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&family=Playfair+Display:ital,wght@1,400;1,600;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0b0e] text-[#F4F2ED] antialiased selection:bg-[#ffd400] selection:text-[#0a0b0e]">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}


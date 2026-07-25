import "./globals.css";

export const metadata = {
  title: "LemontaKode | Digital Excellence & Scalable Engineering",
  description: "We build high-performance mobile apps, web platforms, custom business software, and bulletproof cybersecurity for ambitious companies.",
  keywords: ["software engineering", "cybersecurity", "web development", "mobile development", "Next.js", "Flutter", "custom software", "LemontaKode"],
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
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0b0d14] text-white antialiased selection:bg-[#6289ff] selection:text-white">
        {children}
      </body>
    </html>
  );
}


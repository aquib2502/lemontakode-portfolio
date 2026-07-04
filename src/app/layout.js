import "./globals.css";

export const metadata = {
  title: "LemontaKode Tech | Transforming Ideas Into Digital Excellence",
  description: "We build high-performance platforms, enterprise web/mobile applications, and bulletproof cybersecurity for the modern tech era.",
  keywords: ["software engineering", "cybersecurity", "web development", "mobile development", "Next.js", "Flutter", "custom software"],
  authors: [{ name: "LemontaKode Tech" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}

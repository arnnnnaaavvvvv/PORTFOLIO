import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f8f6f2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Arnav Singh — Full-Stack AI Engineer & Systems Architect",
  description:
    "Portfolio of Arnav Singh — Full-Stack AI Engineer, Systems Architect, and B.Tech CSE student at Chandigarh University. Architecting distributed autonomous agent runtimes, cloud IDEs, and high-throughput microservices.",
  keywords: [
    "Arnav Singh",
    "Full-Stack AI Engineer",
    "Systems Architect",
    "Chandigarh University",
    "CLUDE",
    "IGNITE",
    "SIRUS",
    "Distributed Systems",
    "Next.js",
    "PyTorch",
    "Docker",
    "Kubernetes",
  ],
  authors: [{ name: "Arnav Singh", url: "https://github.com/arnnnnaaavvvvv" }],
  icons: {
    icon: "/img/favicon/icon.svg",
    apple: "/img/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Arnav Singh — Full-Stack AI Engineer & Systems Architect",
    description:
      "Architecting intelligent platforms & distributed engines where verifiable correctness meets scale.",
    url: "https://github.com/arnnnnaaavvvvv",
    siteName: "Arnav Singh Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" color-scheme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Oxanium:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&family=Space+Grotesk:wght@400;500;600;700;800&family=Syne:wght@700;800&family=Inter:wght@400;500;600;700;800&family=Bebas+Neue&family=Anton&family=Permanent+Marker&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="/css/loader.css" />
        <link rel="stylesheet" type="text/css" href="/css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="/css/main.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{localStorage.setItem('arnav.theme','light');document.documentElement.setAttribute('color-scheme','light');}catch(e){}`,
          }}
        />
      </head>
      <body>
        {children}
        <Script src="/js/libs.min.js" strategy="afterInteractive" />
        <Script src="/js/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

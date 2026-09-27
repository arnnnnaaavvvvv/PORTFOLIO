import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import PageTransition from "@/components/PageTransition";
import CursorDot from "@/components/CursorDot";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0d1117",
};

export const metadata: Metadata = {
  title: "Arnav Singh — Full-Stack AI Engineer & Systems Architect",
  description:
    "Portfolio of Arnav Singh, Full-Stack AI Engineer. Architecting high-throughput, explainable intelligent platforms & distributed systems end-to-end. Computer Science Undergraduate at Chandigarh University.",
  keywords: [
    "Arnav Singh",
    "Full-Stack AI Engineer",
    "Systems Architect",
    "CLUDE",
    "IGNITE",
    "SIRUS",
    "Chandigarh University",
    "FastAPI",
    "Next.js",
    "PostgreSQL",
    "pgvector",
    "Tree-sitter",
    "Causal AI",
    "Distributed Systems",
  ],
  authors: [{ name: "Arnav Singh", url: "https://github.com/arnnnnaaavvvvv" }],
  openGraph: {
    title: "Arnav Singh — Full-Stack AI Engineer & Systems Architect",
    description:
      "Architecting high-throughput, explainable intelligent platforms & distributed engines where verifiable correctness takes precedence over hallucination.",
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body style={{ backgroundColor: "#0d1117", color: "#f2f0ea" }}>
        <SmoothScrollProvider>
          <PageTransition>
            <CursorDot />
            {children}
          </PageTransition>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

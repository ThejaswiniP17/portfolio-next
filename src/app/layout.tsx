import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Thejaswini P | Premium Developer Portfolio",
  description: "Professional developer portfolio of Thejaswini P, Full Stack Engineer & Machine Learning Developer specializing in Python, Django, React.js, and Observability.",
  keywords: ["Thejaswini P", "Full Stack Developer", "Django Developer", "Python Engineer", "Next.js Portfolio", "Observability", "OpenTelemetry"],
  authors: [{ name: "Thejaswini P" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thejaswinip-portfolio.vercel.app",
    title: "Thejaswini P | Premium Developer Portfolio",
    description: "Results-driven Software Engineer with hands-on experience in Python, Django, REST APIs, React.js, and SQL.",
    siteName: "Thejaswini P Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

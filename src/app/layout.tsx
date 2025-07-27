import type { Metadata } from "next";
import { Poppins, Lato } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Verj Labs - Digital Innovation Studio",
  description: "We build what we believe. We build what you need. A digital innovation studio where bold ideas become real products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lato.variable} antialiased flex flex-col min-h-screen bg-verj-navy text-verj-light overflow-x-hidden`}>
        <Header />

        <main className="pt-20 relative">
          {/* Background decorative elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="floating-shape w-96 h-96 bg-gradient-violet-blue rounded-full top-1/4 right-1/4 opacity-5 animate-float" />
            <div className="floating-shape w-64 h-64 bg-gradient-coral-violet rounded-full bottom-1/4 left-1/4 opacity-5 animate-pulse-slow" />
            <div className="floating-shape w-48 h-48 bg-gradient-blue-green rounded-full top-1/2 left-1/2 opacity-5 animate-bounce-slow" />
          </div>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

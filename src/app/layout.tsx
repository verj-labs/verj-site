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
      <body className={`${poppins.variable} ${lato.variable} antialiased flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Header />

        <main className="pt-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crack the Maths",
  description: "Maîtrisez les mathématiques facilement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
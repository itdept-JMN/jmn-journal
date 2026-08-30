import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "JMN Journal of Medical Sciences | Open Access Peer-Reviewed Journal",
  description:
    "JMN Journal of Medical Sciences is an official biannual, double-blind peer-reviewed open-access medical journal published by JMN Education and Research Foundation, JMN Medical College and Hospital.",
  keywords: [
    "JMN Journal of Medical Sciences",
    "Medical Sciences",
    "JMN Medical College",
    "Peer-Reviewed Medical Journal",
    "Open Access Journal",
    "Clinical Research India",
    "Kalyani Chakdaha Medical Journal"
  ],
  authors: [{ name: "JMN Education and Research Foundation" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FDFBF8] text-stone-900 font-body selection:bg-[#E8D5B5] selection:text-[#5B1E1E]">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

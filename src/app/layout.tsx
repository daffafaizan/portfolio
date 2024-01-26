import type { Metadata } from "next";
import "./global.css";
import { Anonymous_Pro } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daffa M. Faizan - Full-stack Developer",
  description: "A Full-stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-[#101820]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

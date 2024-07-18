import type { Metadata } from "next";
import "./global.css";
import { Anonymous_Pro, JetBrains_Mono } from "next/font/google";
import Interface from "./interface";

const inter = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  subsets: ["cyrillic"],
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
      <Interface terminalFont={mono} normalFont={inter}>
        {children}
      </Interface>
    </html>
  );
}

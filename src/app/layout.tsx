import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google"; // Using a bold, geometric font as requested
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mr Qwindaline | Web3 Ecosystem Architect",
  description: "Solana GameFi & Ecosystem Jobber. Builder, Creator, and Community Lead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        {children}
      </body>
    </html>
  );
}

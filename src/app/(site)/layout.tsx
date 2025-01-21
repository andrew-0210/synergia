import type { Metadata } from "next";
import "../globals.css";
import { syne, manrope } from "../fonts/font";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Synergia",
  description:
    "Synergia is your all-in-one HRM powerhouse! From seamless recruitment to effortless payroll and performance management, Synergia simplifies every aspect of HR for growing teams. Empower your business with a smarter, more efficient HR solution!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${manrope.variable} antialiased selection:bg-[#c6fe4e] selection:text-[#1e1e1e]`}
      >
        <Nav />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

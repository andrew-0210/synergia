import type { Metadata } from "next";
import "../globals.css";
import { manrope } from "../fonts/font";

export const metadata: Metadata = {
  title: "Synergia",
  description: "HRMS for corporate employees",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased selection:bg-[#842ea9] selection:text-[#1e1e1e]`}
      >
        {children}
      </body>
    </html>
  );
}

import "../globals.css";
import { manrope, syne } from "../fonts/font";
import DashNav from "@/components/DashNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synergia-App",
  description: "App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${manrope.variable} antialiased`}>
        {children}
        <DashNav />
      </body>
    </html>
  );
}

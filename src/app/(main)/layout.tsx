import "../globals.css";
import { manrope, denton } from "../fonts/font";
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
      <body className={`${denton.variable} ${manrope.variable} antialiased`}>
        {children}
        <DashNav />
      </body>
    </html>
  );
}

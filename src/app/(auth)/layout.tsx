import "../globals.css";
import type { Metadata } from "next";
import { gilroy, bricolage } from "../fonts/font";

export const metadata: Metadata = {
  title: "Synergia",
  description:
    "Synergia is your all-in-one HRM powerhouse! From seamless recruitment to effortless payroll and performance management, Synergia simplifies every aspect of HR for growing teams. Empower your business with a smarter, more efficient HR solution!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} ${bricolage.variable}`}>
        {children}
      </body>
    </html>
  );
}

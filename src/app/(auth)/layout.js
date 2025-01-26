import "../globals.css";

import { manrope, syne } from "../fonts/font";

export const metadata = {
  title: "Synergia-Login",
  description:
    "Synergia is your all-in-one HRM powerhouse! From seamless recruitment to effortless payroll and performance management, Synergia simplifies every aspect of HR for growing teams. Empower your business with a smarter, more efficient HR solution!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}

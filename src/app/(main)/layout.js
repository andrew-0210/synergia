import "../globals.css";
import { manrope, syne } from "../fonts/font";
import DashNav from "@/components/DashNav";

export const metadata = {
  title: "Synergia-App",
  description: "App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${manrope.variable} antialiased`}>
        {children}
        <DashNav />
      </body>
    </html>
  );
}

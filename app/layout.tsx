import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/UI/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontier",
  description:
    "Frontier is the ultimate destination for food enthusiasts, offering a diverse array of cuisines and flavors from around the world. place your order effortlessly, and have your favorite meals delivered right to your door",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

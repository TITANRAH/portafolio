import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Portafolio",
  description: "de TitanDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

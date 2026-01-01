import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const rubik = Rubik({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EviDenS de Beauté",
  description: "L'Art de la Beauté Scientifique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

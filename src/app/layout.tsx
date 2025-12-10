import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome To Products Filtering Page",
  description:
    "This page offers many products with many filtering functionalities like filtering by category | price | color | mark or recommandation | text input",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type React from "react";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maison de Joëlle | Luxury Jewelry",
  description:
    "Experience exquisite luxury jewelry crafted with precision and passion. Visit our boutiques across Dubai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}

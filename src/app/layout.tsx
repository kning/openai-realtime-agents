import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KEVIN G",
  description: "MATH ENTHUSIAST / BAD-ASS M.C.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

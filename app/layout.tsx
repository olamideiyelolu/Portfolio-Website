import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olamide's Portfolio",
  description: "Design portfolio wireframe implementation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

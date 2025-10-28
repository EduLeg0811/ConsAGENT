import ChatkitScript from "./ChatkitScript";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConsAGENT",
  description: "ConsAGENT - Conscienciologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <ChatkitScript />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

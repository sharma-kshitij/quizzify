import type { Metadata } from "next";
import { Geist, Geist_Mono, Abel } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const abel = Abel({
  weight: "400",
  variable: "--font-abel",
});

export const metadata: Metadata = {
  title: "Quizzify",
  description: "You own quiz management app!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${abel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

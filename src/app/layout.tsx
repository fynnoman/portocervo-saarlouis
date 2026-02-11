import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const storyScript = localFont({
  src: "../../public/fonts/StoryScript-Regular.ttf",
  variable: "--font-storyscript",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portocervo - Restaurant in Saarlouis",
  description: "Italienisches Restaurant Portocervo in Saarlouis - Genießen Sie authentische italienische Küche in elegantem Ambiente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${storyScript.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import TabManager from "@/components/TabManager";

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Hershey | Future of Freshness",
  description: "Premium cold-pressed juice experience.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased min-h-screen`}>
        <TabManager />
        {children}
      </body>
    </html>
  );
}

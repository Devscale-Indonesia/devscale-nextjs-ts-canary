import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Template Next.js TypeScript (Canary Version) | Devscale ID",
  description:
    "Template Project Next.js TypeScript (Canary Version) for Devscale ID",
  icons: {
    icon: "/icon.svg",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${fontSans.className} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dogs fetching | SSR vs CSR",
  description:
    "This is a page where I practiced fetching dog images using server-side vs client-side components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main className="px-5 md:px-20 max-w-[1920px] mx-auto py-5 md:py-20">
          {children}
        </main>
      </body>
    </html>
  );
}

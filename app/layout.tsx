import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
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
      <body
        className={`${inter.className} px-5 md:px-20 max-w-[1920px] mx-auto py-5`}
      >
        <header className="mb-5 lg:mb-10">
          <a href="https://www.ireneborada.com/">
            <Image
              src="logo.svg"
              width={109}
              height={43}
              alt="Irene Borada"
              className="inline-block"
            />
          </a>
        </header>
        <main>{children}</main>
        <footer>
          <hr />
          <p className="my-5 lg:my-10 text-center text-slate-400">
            I created this page while practicing the different ways to fetch
            data. <br />I used Next.js, TypeScript, TailwindCSS, Shadcn/ui and
            the{" "}
            <a
              href="https://dog.ceo/dog-api"
              target="_blank"
              className="underline transition lg:hover:text-indigo-500"
            >
              Dog API
            </a>{" "}
            to fetch random images of dogs.
          </p>
          <p className="text-xs text-slate-400 text-center mt-5">{`©${new Date().getFullYear()} Irene Borada`}</p>
        </footer>
      </body>
    </html>
  );
}

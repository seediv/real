import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GOOD｜意図が消えない世界へ",
  description:
    "TIP（Translation Integrity Principles）— AI時代の「問いの質」を構造化し、意図を守る15原則",
};

function Footer() {
  return (
    <footer className="container-base py-8 border-t border-gray-200 mt-auto">
      <div className="text-center text-gray-500 text-sm">
        <p>GOOD Project — 意図が消えない世界へ</p>
        <p className="mt-2">
          A project by{" "}
          <a
            href="https://seehub.org"
            className="underline hover:text-gray-700"
          >
            SEEHUB
          </a>
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${montserrat.variable} ${notoSansJP.variable}`}>
      <body
        className="antialiased flex flex-col min-h-screen"
        style={{
          fontFamily: 'var(--font-noto-sans-jp), "Noto Sans JP", sans-serif',
        }}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

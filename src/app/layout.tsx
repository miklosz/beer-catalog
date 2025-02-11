import type { Metadata } from "next";
import { Rubik, Sedgwick_Ave } from 'next/font/google';
import '@/style/global.css';

export const metadata: Metadata = {
  title: "Beer Catalog 2.0",
  description: "Next version of homebeer catalog",
};

const rubik = Rubik({
  weight: ['400', '700'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-rubik',
});

const sedgwick = Sedgwick_Ave({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-segwick',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sedgwick.variable} ${rubik.variable}`}>
      <body>
        <div className="root-layout">
          {children}
          <footer>Beer Catalog 2017-{new Date().getFullYear()} &middot; <a href="https://github.com/miklosz/beer-catalog">Github</a></footer>
        </div>
      </body>
    </html>
  );
}

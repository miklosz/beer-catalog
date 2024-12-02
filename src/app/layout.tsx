import Nav from "@/components/Nav/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beer Catalog 2.0",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {metadata.title &&
          <header>
            <h1>{metadata.title.toString()}</h1>
            <Nav />
          </header>
        }
        {children}
      </body>
    </html>
  );
}

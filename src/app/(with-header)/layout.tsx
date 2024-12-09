import Nav from "@/components/Nav/Nav";
import '@/style/header.css';
import Link from "next/link";

export default function WithHeaderLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <header>
        <h2>
          <Link href="/">Piwny katalog</Link>
        </h2>
        <Nav />
      </header>
      <main>{children}</main>
    </>
  );
}

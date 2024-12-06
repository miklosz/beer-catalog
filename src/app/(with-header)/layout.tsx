import Nav from "@/components/Nav/Nav";
import '@/style/header.css';
import Link from "next/link";

export default function WithHeaderLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <header>
        <h1>
          <Link href="/">Piwny katalog</Link>
        </h1>
        <Nav />
      </header>
      <main>{children}</main>
    </>
  );
}

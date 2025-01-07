import Nav from "@/components/Nav/Nav";
import '@/style/header.css';
import Form from "next/form";
import Link from "next/link";

export default function WithHeaderLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <header>
        
        <h2>
          <Link href="/">Piwny katalog</Link>
        </h2>
        <Form action="/list" className="search-top">
          <input
            name="q"
            minLength={2}
            placeholder="Wyszukaj piwo"
          />
        </Form>
        <Nav />
      </header>
      <main>{children}</main>
    </>
  );
}

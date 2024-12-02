import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/list">All</Link>
      <Link href="/styles">Styles</Link>
    </nav>
  );
};

export default Nav;

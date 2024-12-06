import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/list">Lista</Link>
      <Link href="/styles">Style</Link>
    </nav>
  );
};

export default Nav;

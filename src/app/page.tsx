import prisma from "@/lib/prisma";
import Link from "next/link";

const Home = async () => {
  const list = await prisma.beer.findMany();  

  return (
    <div>
      <h1>All beers</h1>
      <ul>
        {list.map((beer) => (
          <li key={beer.id}>
            <Link href={`/b/${beer.symbol}`}>{beer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

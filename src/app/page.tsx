import LinkToBeer from "@/components/LinkToBeer/LinkToBeer";
import prisma from "@/lib/prisma";

const Home = async () => {
  const list = await prisma.beer.findMany();

  return (
    <div>
      <h1>All beers</h1>
      <p>To be replaced with a search start page</p>
      <ul>
        {list.map((beer) => (
          <li key={beer.id}>
            <LinkToBeer beer={beer} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

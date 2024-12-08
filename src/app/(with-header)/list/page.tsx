import { getAllBeers } from "@/api/serverApi";
import LinkToBeer from "@/components/LinkToBeer/LinkToBeer";

const BeersList = async () => {
  const list = await getAllBeers();
  return (
    <div>
      <h1>All beers</h1>
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

export default BeersList;

import { getBeerBySymbol, getSimilarBeers } from "@/api/serverApi";
import LinkToBeer from "@/components/LinkToBeer/LinkToBeer";
import Link from "next/link";
import { notFound } from "next/navigation";

const SingleBeerPage = async ({ params }: { params: Promise<{ symbol: string; }>; }) => {
  const symbol = (await params).symbol;
  const beer = await getBeerBySymbol(symbol);

  if (!beer || !symbol) {
    return notFound();
  }

  const similarBeers = await getSimilarBeers(beer.id);

  return (
    <div>
      <h1>{beer.symbol} {beer.name}</h1>
      <h2>Styl: {beer.styleId}</h2>
      <p>
        {beer.description}
      </p>

      <h2>Similar beers</h2>
      <ul>
        {similarBeers.map((similarBeer) => (
          <li key={similarBeer.id}>
            <LinkToBeer beer={similarBeer} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleBeerPage;

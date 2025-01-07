import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Beer } from "@prisma/client";
import { getBeerBySymbol, getSimilarBeers } from "@/server/dbApi";
import LinkToBeer from "@/components/LinkToBeer/LinkToBeer";
import StatusIcon from "@/components/StatusIcon/StatusIcon";
import { displayDate, normalizeString } from "@/utils";
import '@/style/single.css';

interface Props {
 params: Promise<{ symbol: string }>
}

const getBeerData = async ({ params }: Props): Promise<Beer> => { 
  const symbol = (await params).symbol;
  const beer = await getBeerBySymbol(normalizeString(symbol));

  if (!beer || !symbol) {
    return notFound();
  }

  return beer;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const beer = await getBeerData({ params });

  return {
    title: `${beer.name} [${beer.symbol}]`,
    description: beer.description,
  };
}

const SingleBeerPage = async ({ params }: Props) => {
  const beer = await getBeerData({ params });
  const similarBeers = await getSimilarBeers(beer.id);
  const { symbol, name, styleName, description, brewedAt, bottledAt, abv, og, fg, ibu, srm, statusId } = beer

  return (
    <div id="single-page">
      <div className="name">
        <div className="cap">
          {symbol}
        </div>
        <h1>{name}</h1>
        <h2>Styl: {styleName} <StatusIcon statusId={statusId}/></h2>
      </div>
      
      {description &&
        <p className="description">{description}</p>
      }

      <table className="metrics">
        <tbody>
          {!!abv && (
            <tr>
              <td>Alkohol:</td>
              <td><b>{abv}%</b></td>
            </tr>
          )}
          {!!og && (
            <tr>
              <td>Gęstość startowa:</td>
              <td><b>{Number(og)}</b></td>
            </tr>
          )}
          {!!fg && (
            <tr>
              <td>Gęstość końcowa:</td>
              <td><b>{Number(fg)}</b></td>
            </tr>
          )}
          {!!ibu && (
            <tr>
              <td>IBU:</td>
              <td><b>{ibu}</b></td>
            </tr>
          )}
          {!!srm && (
            <tr>
              <td>SRM:</td>
              <td><b>{srm}</b></td>
            </tr>
          )}
          {!!brewedAt && (
            <tr>
              <td>Uwarzone:</td>
              <td><b>{displayDate(brewedAt)}</b></td>
            </tr>
          )}
          {!!bottledAt && (
            <tr>
              <td>Butelkowane:</td>
              <td><b>{displayDate(bottledAt)}</b></td>
            </tr>
          )}
        </tbody>
      </table>

      
      <aside>
        <h2>Podobne piwa</h2>
        <ul>
          {similarBeers.map((similarBeer) => (
            <li key={similarBeer.id}>
              <LinkToBeer beer={similarBeer} />
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default SingleBeerPage;

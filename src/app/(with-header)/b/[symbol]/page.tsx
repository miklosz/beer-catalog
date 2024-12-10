import { getBeerBySymbol, getSimilarBeers } from "@/server/dbApi";
import LinkToBeer from "@/components/LinkToBeer/LinkToBeer";
import { notFound } from "next/navigation";
import { displayDate, normalizeString } from "@/utils";
import '@/style/single.css';

const SingleBeerPage = async ({ params }: { params: Promise<{ symbol: string; }>; }) => {
  const symbol = (await params).symbol;
  const beer = await getBeerBySymbol(normalizeString(symbol));

  if (!beer || !symbol) {
    return notFound();
  }

  const similarBeers = await getSimilarBeers(beer.id);
  const { name, styleName, description, brewedAt, bottledAt, abv, og, fg, ibu, srm, statusId } = beer

  return (
    <div id="single-page">
      <div className="name">
        <div className="cap">
          {symbol}
        </div>
        <h1>{name}</h1>
        {/* todo - add style label (aka kolorowe mydełko) */}
        <h2>Styl: {styleName} <span className="status">{statusId}</span></h2>
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

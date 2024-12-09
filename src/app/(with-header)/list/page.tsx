import { findBeers, getAllBeers } from "@/server/dbApi";
import LinkToBeer from "@/components/LinkToBeer/LinkToBeer";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined; }>
interface Props { 
  searchParams: SearchParams 
}
 
// TODO: Consider - use this page as separate, or merged with list

export async function generateMetadata(props: Props) {
  const query = (await props.searchParams).q

  return {
    title: `Search results for ${query}`,
    description: `Search results for ${query}`,
  }
}

const BeersList = async ({ searchParams } : { searchParams: SearchParams }) => {
  const query = (await searchParams).q
  const results = query ? await findBeers(Array.isArray(query) ? query.join(' ') : query) : await getAllBeers()

  return (
    <div>
      {query ? <h1>Search results for { query }</h1> : <h1>All beers</h1>}
      <ul>
        {results.map((beer) => (
          <li key={beer.symbol}>
            <LinkToBeer beer={beer} />
          </li>
        ))}
      </ul>

    </div>
  )
}

export default BeersList

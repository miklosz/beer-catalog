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

const SearchPage = async ({ searchParams } : { searchParams: SearchParams }) => {
  const query = (await searchParams).q
  const results = query ? await findBeers(Array.isArray(query) ? query.join(' ') : query) : await getAllBeers()

  return (
    <div>
      <h1>Search results</h1>
      <h2>Filtered list for { query }</h2>
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

export default SearchPage

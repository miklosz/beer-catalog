import { findBeers, getAllBeers } from "@/api/serverApi";
import LinkToBeer from "@/components/LinkToBeer/LinkToBeer";

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
 
// TODO: Consider - use this page as separate, or merged with list
// Example of consuming searchParams and params (part of URL)

export async function generateMetadata(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = await props.params
  const searchParams = await props.searchParams
  const slug = params.slug
  const query = searchParams.query

  return {
    title: `Search results for ${query}`,
    description: `Search results for ${query}`,
  }
}

const SearchPage = async ({ params, searchParams }: { params: Params, searchParams: SearchParams }) => {
  const slug = (await params).slug // not used, not avaliable in this path
  const query = (await searchParams).query
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

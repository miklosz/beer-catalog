import { redirect } from "next/navigation";
import { findBeers, getAllBeers } from "@/server/dbApi";
import LinkToBeer from "@/components/LinkToBeer/LinkToBeer";
import '@/style/list.css'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined; }>
interface Props { 
  searchParams: SearchParams 
}

export async function generateMetadata(props: Props) {
  const query = (await props.searchParams).q

  return {
    title: `Search results for ${query}`,
    description: `Search results for ${query}`,
  }
}

const BeersList = async ({ searchParams } : Props) => {
  const query = (await searchParams).q
  const results = query ? await findBeers(Array.isArray(query) ? query.join(' ') : query) : await getAllBeers()

  if (results.length === 1) { 
    return redirect(`/b/${results[0].symbol}`)
  }

  return (
    <div id="list">
      {query ? <h1>Search results for { query }</h1> : <h1>All beers</h1>}
      
      {results.length === 0 ? <p>No results found</p> :
        <ul>
          {results.map((beer) => (
            <li key={beer.symbol}>
              <LinkToBeer beer={beer} />
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default BeersList

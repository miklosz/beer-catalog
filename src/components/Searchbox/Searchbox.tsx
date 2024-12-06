'use client';
import { Beer } from "@prisma/client";
import { findBeers } from '@/api/serverApi';
import { ChangeEvent, useState } from 'react';
import LinkToBeer from "../LinkToBeer/LinkToBeer";

interface ISearchboxProps { 
  onResult: () => void;
}

// TODO: Instead of listing all beers here, just riderct to list with results
// same for main page and for search from header
// like in picdemia

const Searchbox = () => { 
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Partial<Beer>[]>([]);

  const handleSearch = async (query: string) => {
    const results = await findBeers(query);
    setResults(results);
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search for beers"
          value={searchTerm}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </form>
      <ul>
        {results.map((b) => (
          <li key={b.symbol}>
            <LinkToBeer beer={b} key={b.symbol} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Searchbox;

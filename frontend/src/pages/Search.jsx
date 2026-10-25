import { useState } from 'react';
import { SearchBar } from '../components/search/SearchBar';
import { SearchResults } from '../components/search/SearchResults';
import { SearchFilters } from '../components/search/SearchFilters';
import { useSearch } from '../hooks/useSearch';

export const Search = () => {
  const { query, setQuery, results, loading } = useSearch('');
  const [filter, setFilter] = useState('All');

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-black text-white">Search Music & Artists</h1>
        <SearchBar value={query} onChange={setQuery} onClear={() => setQuery('')} />
        <SearchFilters activeFilter={filter} onSelectFilter={setFilter} />
      </div>

      <SearchResults results={results} loading={loading} />
    </div>
  );
};

export default Search;

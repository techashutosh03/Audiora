import { useState, useEffect } from 'react';
import { musicService } from '../services/musicService';
import { useDebounce } from './useDebounce';

export const useSearch = (initialQuery = '') => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }

    let isMounted = true;
    setLoading(true);

    musicService.search(debouncedQuery).then((res) => {
      if (isMounted) {
        setResults(res);
        setLoading(false);
      }
    });

    return () => { isMounted = false; };
  }, [debouncedQuery]);

  return { query, setQuery, results, loading };
};

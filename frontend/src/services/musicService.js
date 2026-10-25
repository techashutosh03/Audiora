import { fetchApi } from './api';
import { INITIAL_FEATURED_TRACKS } from '../utils/constants';

export const musicService = {
  getTrending: async () => {
    try {
      const data = await fetchApi('/music/trending');
      return data.tracks || INITIAL_FEATURED_TRACKS;
    } catch {
      return INITIAL_FEATURED_TRACKS;
    }
  },

  search: async (query) => {
    try {
      const data = await fetchApi(`/search?q=${encodeURIComponent(query)}`);
      return data.results || INITIAL_FEATURED_TRACKS;
    } catch {
      return INITIAL_FEATURED_TRACKS.filter((t) =>
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.artist.toLowerCase().includes(query.toLowerCase())
      );
    }
  },
};

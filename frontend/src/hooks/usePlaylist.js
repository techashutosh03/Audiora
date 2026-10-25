import { useState, useEffect } from 'react';
import { playlistService } from '../services/playlistService';

export const usePlaylist = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPlaylists = async () => {
    setLoading(true);
    const data = await playlistService.getPlaylists();
    setPlaylists(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const createPlaylist = async (name, description) => {
    const res = await playlistService.createPlaylist(name, description);
    setPlaylists((prev) => [...prev, res.playlist]);
    return res.playlist;
  };

  return { playlists, loading, createPlaylist, refresh: fetchPlaylists };
};

import { create } from 'zustand';

const usePlaylistStore = create((set) => ({
  activePlaylist: null,
  setActivePlaylist: (playlist) => set({ activePlaylist: playlist }),
}));

export default usePlaylistStore;

import { create } from 'zustand';

const useUserStore = create((set) => ({
  likedTrackIds: new Set(['tr_demo_1', 'tr_demo_3']),
  
  toggleLikeTrack: (trackId) =>
    set((state) => {
      const updated = new Set(state.likedTrackIds);
      if (updated.has(trackId)) {
        updated.delete(trackId);
      } else {
        updated.add(trackId);
      }
      return { likedTrackIds: updated };
    }),
}));

export default useUserStore;

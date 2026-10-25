import { create } from 'zustand';
import { DEFAULT_TRACK, INITIAL_FEATURED_TRACKS } from '../utils/constants';

const usePlayerStore = create((set, get) => ({
  currentTrack: DEFAULT_TRACK,
  isPlaying: false,
  volume: 0.8,
  currentTime: 0,
  duration: 240,
  queue: INITIAL_FEATURED_TRACKS,
  queueIndex: 0,
  isShuffle: false,
  isRepeat: false,

  setTrack: (track) => set({ currentTrack: track, isPlaying: true, currentTime: 0 }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setVolume: (volume) => set({ volume }),
  setCurrentTime: (currentTime) => set({ currentTime }),
  setDuration: (duration) => set({ duration }),
  
  playNext: () => {
    const { queue, queueIndex, isShuffle } = get();
    if (!queue.length) return;
    let nextIndex = queueIndex + 1;
    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * queue.length);
    } else if (nextIndex >= queue.length) {
      nextIndex = 0;
    }
    set({ currentTrack: queue[nextIndex], queueIndex: nextIndex, currentTime: 0, isPlaying: true });
  },

  playPrev: () => {
    const { queue, queueIndex } = get();
    if (!queue.length) return;
    let prevIndex = queueIndex - 1;
    if (prevIndex < 0) prevIndex = queue.length - 1;
    set({ currentTrack: queue[prevIndex], queueIndex: prevIndex, currentTime: 0, isPlaying: true });
  },

  toggleShuffle: () => set((state) => ({ isShuffle: !state.isShuffle })),
  toggleRepeat: () => set((state) => ({ isRepeat: !state.isRepeat })),
  addToQueue: (track) => set((state) => ({ queue: [...state.queue, track] })),
}));

export default usePlayerStore;

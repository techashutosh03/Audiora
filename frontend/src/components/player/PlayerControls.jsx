import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react';
import usePlayerStore from '../../store/playerStore';

export const PlayerControls = () => {
  const { isPlaying, togglePlay, playNext, playPrev, isShuffle, toggleShuffle, isRepeat, toggleRepeat } =
    usePlayerStore();

  return (
    <div className="flex items-center gap-6">
      <button
        onClick={toggleShuffle}
        className={`p-1.5 transition-colors ${
          isShuffle ? 'text-indigo-400' : 'text-slate-500 hover:text-slate-300'
        }`}
        title="Shuffle"
      >
        <Shuffle size={16} />
      </button>

      <button
        onClick={playPrev}
        className="text-slate-300 hover:text-white transition-colors"
        title="Previous"
      >
        <SkipBack size={20} />
      </button>

      <button
        onClick={togglePlay}
        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-white/20 hover:scale-105 active:scale-95 transition-all"
        title={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" className="ml-0.5" />}
      </button>

      <button
        onClick={playNext}
        className="text-slate-300 hover:text-white transition-colors"
        title="Next"
      >
        <SkipForward size={20} />
      </button>

      <button
        onClick={toggleRepeat}
        className={`p-1.5 transition-colors ${
          isRepeat ? 'text-indigo-400' : 'text-slate-500 hover:text-slate-300'
        }`}
        title="Repeat"
      >
        <Repeat size={16} />
      </button>
    </div>
  );
};

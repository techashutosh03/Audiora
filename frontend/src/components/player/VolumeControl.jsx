import { Volume2, VolumeX } from 'lucide-react';
import usePlayerStore from '../../store/playerStore';

export const VolumeControl = () => {
  const { volume, setVolume } = usePlayerStore();

  const toggleMute = () => {
    setVolume(volume === 0 ? 0.8 : 0);
  };

  return (
    <div className="flex items-center gap-2.5">
      <button onClick={toggleMute} className="text-slate-400 hover:text-white transition-colors">
        {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="w-20 player-progress-bar"
      />
    </div>
  );
};

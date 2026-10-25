import usePlayerStore from '../../store/playerStore';
import { X, Play } from 'lucide-react';

export const Queue = ({ onClose }) => {
  const { queue, currentTrack, setTrack } = usePlayerStore();

  return (
    <div className="absolute bottom-28 right-8 w-80 max-h-96 bg-[#0f111a]/95 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl z-50 flex flex-col gap-3 animate-fade-in">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <h3 className="text-sm font-bold text-white">Play Queue</h3>
        <button onClick={onClose} className="text-slate-400 hover:text-white">
          <X size={16} />
        </button>
      </div>

      <div className="overflow-y-auto flex flex-col gap-2 pr-1">
        {queue.map((track, idx) => {
          const isCurrent = currentTrack?.id === track.id;
          return (
            <div
              key={`${track.id}_${idx}`}
              onClick={() => setTrack(track)}
              className={`flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-all ${
                isCurrent
                  ? 'bg-indigo-600/20 border border-indigo-500/30'
                  : 'hover:bg-white/5'
              }`}
            >
              <img
                src={track.coverUrl}
                alt={track.title}
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-semibold truncate ${isCurrent ? 'text-indigo-400' : 'text-white'}`}>
                  {track.title}
                </p>
                <p className="text-[10px] text-slate-400 truncate">{track.artist}</p>
              </div>
              {isCurrent && <Play size={14} className="text-indigo-400 fill-indigo-400" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

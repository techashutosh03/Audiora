import { Play, Clock } from 'lucide-react';
import usePlayerStore from '../../store/playerStore';
import { formatTime } from '../../utils/formatters';

export const TrackList = ({ tracks }) => {
  const { setTrack, currentTrack } = usePlayerStore();

  return (
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-12 text-xs font-bold uppercase tracking-wider text-slate-500 px-4 py-2 border-b border-white/5">
        <span className="col-span-1">#</span>
        <span className="col-span-6">Title</span>
        <span className="col-span-3">Album</span>
        <span className="col-span-2 text-right">
          <Clock size={14} className="inline ml-auto" />
        </span>
      </div>

      {tracks.map((track, idx) => {
        const isCurrent = currentTrack?.id === track.id;
        return (
          <div
            key={track.id}
            onClick={() => setTrack(track)}
            className={`grid grid-cols-12 items-center px-4 py-3 rounded-xl cursor-pointer transition-all group ${
              isCurrent ? 'bg-indigo-600/15 text-indigo-400' : 'hover:bg-white/5 text-slate-200'
            }`}
          >
            <span className="col-span-1 text-sm font-semibold text-slate-500 group-hover:hidden">
              {idx + 1}
            </span>
            <span className="col-span-1 text-sm font-semibold text-indigo-400 hidden group-hover:block">
              <Play size={14} fill="currentColor" />
            </span>

            <div className="col-span-6 flex items-center gap-3">
              <img src={track.coverUrl} alt={track.title} className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <p className="text-sm font-bold truncate">{track.title}</p>
                <p className="text-xs text-slate-400 truncate">{track.artist}</p>
              </div>
            </div>

            <span className="col-span-3 text-xs text-slate-400 truncate">{track.album}</span>
            <span className="col-span-2 text-xs text-slate-400 text-right font-medium">
              {formatTime(track.durationSeconds)}
            </span>
          </div>
        );
      })}
    </div>
  );
};

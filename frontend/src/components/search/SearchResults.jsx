import { Play } from 'lucide-react';
import usePlayerStore from '../../store/playerStore';

export const SearchResults = ({ results, loading }) => {
  const { setTrack } = usePlayerStore();

  if (loading) {
    return <div className="text-slate-400 text-sm py-8">Searching Audiora library...</div>;
  }

  if (!results.length) {
    return <div className="text-slate-500 text-sm py-8">No matching tracks or artists found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map((track) => (
        <div
          key={track.id}
          onClick={() => setTrack(track)}
          className="glass-panel glass-panel-hover rounded-xl p-3 flex items-center gap-4 cursor-pointer group"
        >
          <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
            <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <Play size={20} className="fill-white text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-white truncate">{track.title}</h4>
            <p className="text-xs text-slate-400 truncate">{track.artist}</p>
            <span className="text-[10px] uppercase font-semibold text-indigo-400 mt-1 inline-block">
              {track.genre}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

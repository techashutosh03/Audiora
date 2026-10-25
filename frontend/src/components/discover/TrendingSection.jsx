import { Play } from 'lucide-react';
import usePlayerStore from '../../store/playerStore';
import { INITIAL_FEATURED_TRACKS } from '../../utils/constants';

export const TrendingSection = () => {
  const { setTrack } = usePlayerStore();

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Trending Worldwide</h2>
        <span className="text-xs text-indigo-400 font-semibold cursor-pointer hover:underline">
          View All
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {INITIAL_FEATURED_TRACKS.map((track) => (
          <div
            key={track.id}
            onClick={() => setTrack(track)}
            className="glass-panel glass-panel-hover rounded-2xl p-3.5 group cursor-pointer"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
              <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Play size={22} fill="white" className="ml-0.5" />
                </div>
              </div>
            </div>
            <h3 className="text-sm font-bold text-white truncate">{track.title}</h3>
            <p className="text-xs text-slate-400 truncate">{track.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

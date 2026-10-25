import { Play } from 'lucide-react';
import usePlayerStore from '../../store/playerStore';
import { INITIAL_FEATURED_TRACKS } from '../../utils/constants';

export const RecentlyPlayed = () => {
  const { setTrack } = usePlayerStore();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-white">Recently Played</h2>
      <div className="flex flex-col gap-2">
        {INITIAL_FEATURED_TRACKS.slice(0, 3).map((track) => (
          <div
            key={track.id}
            onClick={() => setTrack(track)}
            className="glass-panel glass-panel-hover rounded-xl p-3 flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <img src={track.coverUrl} alt={track.title} className="w-12 h-12 rounded-lg object-cover" />
              <div>
                <h4 className="text-sm font-bold text-white">{track.title}</h4>
                <p className="text-xs text-slate-400">{track.artist}</p>
              </div>
            </div>
            <div className="p-2 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
              <Play size={18} fill="currentColor" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

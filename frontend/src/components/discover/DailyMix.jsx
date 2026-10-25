import { Play } from 'lucide-react';
import usePlayerStore from '../../store/playerStore';
import { INITIAL_FEATURED_TRACKS } from '../../utils/constants';

export const DailyMix = () => {
  const { setTrack } = usePlayerStore();

  const mixes = [
    { id: 1, title: 'Daily Mix 1', genre: 'Ambient & Chillout', bg: 'from-blue-600/30 to-indigo-900/40' },
    { id: 2, title: 'Daily Mix 2', genre: 'Synthwave & Retro', bg: 'from-pink-600/30 to-purple-900/40' },
    { id: 3, title: 'Daily Mix 3', genre: 'Electronic Beats', bg: 'from-emerald-600/30 to-teal-900/40' },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-white">Made For You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mixes.map((mix, idx) => (
          <div
            key={mix.id}
            onClick={() => setTrack(INITIAL_FEATURED_TRACKS[idx % INITIAL_FEATURED_TRACKS.length])}
            className={`glass-panel glass-panel-hover rounded-2xl p-5 bg-gradient-to-br ${mix.bg} flex flex-col justify-between h-40 cursor-pointer group relative overflow-hidden`}
          >
            <div>
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-indigo-300">
                Audiora Mix
              </span>
              <h3 className="text-lg font-bold text-white mt-1">{mix.title}</h3>
              <p className="text-xs text-slate-300 mt-1">{mix.genre}</p>
            </div>
            <div className="flex items-center justify-end">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                <Play size={18} fill="black" className="ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

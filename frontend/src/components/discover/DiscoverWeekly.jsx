import { Play, Sparkles } from 'lucide-react';
import usePlayerStore from '../../store/playerStore';
import { INITIAL_FEATURED_TRACKS } from '../../utils/constants';

export const DiscoverWeekly = () => {
  const { setTrack } = usePlayerStore();

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900/60 border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-xl">
      <div className="glow-ambient w-96 h-96 bg-indigo-600/30 -top-20 -left-20 rounded-full" />
      <div className="flex flex-col gap-3 max-w-lg z-10">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest">
          <Sparkles size={16} />
          Personalized AI Curation
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Discover Weekly
        </h1>
        <p className="text-slate-300 text-sm">
          Your weekly update of fresh music, deep ambient cuts, and rare synthwave tracks tailored specifically to your taste.
        </p>
        <button
          onClick={() => setTrack(INITIAL_FEATURED_TRACKS[0])}
          className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm shadow-xl hover:bg-slate-200 hover:scale-105 active:scale-95 transition-all w-fit"
        >
          <Play size={18} fill="black" />
          Play Weekly Mix
        </button>
      </div>

      <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border border-white/20 z-10 flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60"
          alt="Discover Weekly"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

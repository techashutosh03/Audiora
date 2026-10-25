import { Play, Check } from 'lucide-react';
import { useState } from 'react';
import usePlayerStore from '../../store/playerStore';
import { INITIAL_FEATURED_TRACKS } from '../../utils/constants';

export const ArtistHeader = ({ artistName }) => {
  const [following, setFollowing] = useState(false);
  const { setTrack } = usePlayerStore();

  return (
    <div className="relative overflow-hidden rounded-3xl h-72 bg-gradient-to-r from-indigo-900 via-slate-900 to-purple-950 p-8 flex items-end justify-between border border-white/10 shadow-2xl">
      <div className="flex items-center gap-6 z-10">
        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60"
          alt={artistName}
          className="w-36 h-36 rounded-full object-cover border-4 border-indigo-500/50 shadow-2xl"
        />
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-400">
            VERIFIED ARTIST
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white">{artistName}</h1>
          <p className="text-slate-300 text-xs">1,842,910 Monthly Listeners</p>
        </div>
      </div>

      <div className="flex items-center gap-3 z-10">
        <button
          onClick={() => setTrack(INITIAL_FEATURED_TRACKS[0])}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm shadow-xl hover:bg-slate-200 transition-all"
        >
          <Play size={18} fill="black" />
          Play
        </button>
        <button
          onClick={() => setFollowing(!following)}
          className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border transition-all ${
            following
              ? 'bg-indigo-600/20 text-indigo-400 border-indigo-500/40'
              : 'border-white/20 text-white hover:bg-white/10'
          }`}
        >
          {following ? <Check size={16} /> : null}
          {following ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

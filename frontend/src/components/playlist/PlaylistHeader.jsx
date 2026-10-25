import { Play, Heart, Share2 } from 'lucide-react';
import usePlayerStore from '../../store/playerStore';
import { INITIAL_FEATURED_TRACKS } from '../../utils/constants';

export const PlaylistHeader = ({ playlist }) => {
  const { setTrack } = usePlayerStore();

  return (
    <div className="flex flex-col md:flex-row items-end gap-6 pb-6 border-b border-white/10">
      <img
        src={playlist.coverImage}
        alt={playlist.name}
        className="w-48 h-48 rounded-2xl object-cover shadow-2xl border border-white/10"
      />
      <div className="flex flex-col gap-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-400">
          PLAYLIST
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white">{playlist.name}</h1>
        <p className="text-slate-400 text-sm">{playlist.description}</p>

        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={() => setTrack(INITIAL_FEATURED_TRACKS[0])}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30"
          >
            <Play size={18} fill="white" />
            Play All
          </button>
          <button className="p-3 rounded-full border border-white/10 hover:bg-white/10 text-slate-300 transition-all">
            <Heart size={18} />
          </button>
          <button className="p-3 rounded-full border border-white/10 hover:bg-white/10 text-slate-300 transition-all">
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

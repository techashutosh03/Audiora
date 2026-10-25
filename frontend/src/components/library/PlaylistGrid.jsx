import { usePlaylist } from '../../hooks/usePlaylist';
import { Play } from 'lucide-react';

export const PlaylistGrid = () => {
  const { playlists, loading } = usePlaylist();

  if (loading) {
    return <div className="text-slate-400 text-sm">Loading playlists...</div>;
  }

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-white">Your Playlists</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {playlists.map((pl) => (
          <div
            key={pl.id}
            className="glass-panel glass-panel-hover rounded-2xl p-3.5 group cursor-pointer"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
              <img src={pl.coverImage} alt={pl.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg">
                  <Play size={22} fill="white" className="ml-0.5" />
                </div>
              </div>
            </div>
            <h3 className="text-sm font-bold text-white truncate">{pl.name}</h3>
            <p className="text-xs text-slate-400 truncate">{pl.tracksCount} Tracks</p>
          </div>
        ))}
      </div>
    </section>
  );
};

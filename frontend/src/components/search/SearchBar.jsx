import { Search, X } from 'lucide-react';

export const SearchBar = ({ value, onChange, onClear }) => {
  return (
    <div className="relative w-full max-w-xl">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search tracks, artists, albums, or playlists..."
        className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-11 pr-10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

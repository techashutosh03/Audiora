export const SearchFilters = ({ activeFilter, onSelectFilter }) => {
  const filters = ['All', 'Tracks', 'Artists', 'Albums', 'Playlists'];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelectFilter(filter)}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
            activeFilter === filter
              ? 'bg-white text-black font-bold shadow-md'
              : 'bg-white/5 text-slate-300 hover:bg-white/10'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

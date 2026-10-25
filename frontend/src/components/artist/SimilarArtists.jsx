export const SimilarArtists = () => {
  const similar = [
    { name: 'Solar Fields', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60' },
    { name: 'Tycho', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=60' },
    { name: 'Jon Hopkins', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60' },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-white">Fans Also Like</h2>
      <div className="grid grid-cols-3 gap-4">
        {similar.map((art) => (
          <div
            key={art.name}
            className="glass-panel glass-panel-hover rounded-2xl p-4 flex flex-col items-center text-center cursor-pointer group"
          >
            <img
              src={art.image}
              alt={art.name}
              className="w-24 h-24 rounded-full object-cover mb-3 group-hover:scale-105 transition-transform"
            />
            <h4 className="text-sm font-bold text-white">{art.name}</h4>
            <span className="text-xs text-slate-400">Artist</span>
          </div>
        ))}
      </div>
    </section>
  );
};

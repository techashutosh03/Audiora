const lastfmService = {
  getArtistBio: async (artistName) => {
    return {
      name: artistName,
      bio: `${artistName} is a visionary electronic music project blending ambient soundscapes, dynamic synthwave elements, and deep basslines.`,
      listeners: '1,245,890',
      playcount: '18,920,400',
      tags: ['Ambient', 'Electronic', 'Synthwave', 'Chillout'],
    };
  },
  getSimilarArtists: async (artistName) => {
    return [
      { name: 'Solar Fields', match: '0.94', avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60' },
      { name: 'Tycho', match: '0.89', avatar: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=60' },
      { name: 'Jon Hopkins', match: '0.85', avatar: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60' },
    ];
  },
};

module.exports = lastfmService;

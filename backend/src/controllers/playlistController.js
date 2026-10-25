let mockPlaylists = [
  {
    id: 'pl_1',
    name: 'Midnight Chill',
    description: 'Relaxing ambient & lo-fi beats',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60',
    tracksCount: 12,
  },
  {
    id: 'pl_2',
    name: 'Synthwave Energy',
    description: 'High tempo futuristic synth tracks',
    coverImage: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&auto=format&fit=crop&q=60',
    tracksCount: 18,
  },
];

const playlistController = {
  getUserPlaylists: async (req, res) => {
    res.json({ success: true, playlists: mockPlaylists });
  },

  createPlaylist: async (req, res) => {
    const { name, description } = req.body;
    const newPlaylist = {
      id: `pl_${Date.now()}`,
      name: name || 'Untitled Playlist',
      description: description || '',
      coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60',
      tracksCount: 0,
    };
    mockPlaylists.push(newPlaylist);
    res.status(201).json({ success: true, playlist: newPlaylist });
  },

  addTrackToPlaylist: async (req, res) => {
    const { id } = req.params;
    const { trackId } = req.body;
    const playlist = mockPlaylists.find((p) => p.id === id);
    if (playlist) {
      playlist.tracksCount += 1;
    }
    res.json({ success: true, message: `Added track ${trackId} to playlist ${id}` });
  },
};

module.exports = playlistController;

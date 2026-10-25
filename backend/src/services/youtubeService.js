const youtubeService = {
  searchAudioStream: async (query) => {
    return {
      id: `yt_${Date.now()}`,
      title: `${query} (Official Audio)`,
      artist: 'Featured Artist',
      durationSeconds: 210,
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      provider: 'youtube',
    };
  },
};

module.exports = youtubeService;

module.exports = {
  clientId: process.env.SPOTIFY_CLIENT_ID || 'demo_spotify_client_id',
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET || 'demo_spotify_client_secret',
  tokenUrl: 'https://accounts.spotify.com/api/token',
  apiBaseUrl: 'https://api.spotify.com/v1',
};

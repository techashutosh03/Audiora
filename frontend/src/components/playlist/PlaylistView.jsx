import { PlaylistHeader } from './PlaylistHeader';
import { TrackList } from './TrackList';
import { INITIAL_FEATURED_TRACKS } from '../../utils/constants';

export const PlaylistView = ({ playlist }) => {
  const defaultPlaylist = playlist || {
    name: 'Ambient Electronic Favorites',
    description: 'A handpicked curation of relaxing soundscapes and synthwave beats.',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60',
    tracksCount: INITIAL_FEATURED_TRACKS.length,
  };

  return (
    <div className="flex flex-col gap-8">
      <PlaylistHeader playlist={defaultPlaylist} />
      <TrackList tracks={INITIAL_FEATURED_TRACKS} />
    </div>
  );
};

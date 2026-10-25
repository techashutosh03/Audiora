import { ArtistHeader } from './ArtistHeader';
import { SimilarArtists } from './SimilarArtists';
import { TrackList } from '../playlist/TrackList';
import { INITIAL_FEATURED_TRACKS } from '../../utils/constants';

export const ArtistView = ({ artistName = 'Aetheria' }) => {
  return (
    <div className="flex flex-col gap-10">
      <ArtistHeader artistName={artistName} />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-white">Popular Tracks</h2>
        <TrackList tracks={INITIAL_FEATURED_TRACKS} />
      </div>
      <SimilarArtists />
    </div>
  );
};

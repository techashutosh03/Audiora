import { PlaylistGrid } from './PlaylistGrid';
import { RecentlyPlayed } from './RecentlyPlayed';

export const LibrarySection = () => {
  return (
    <div className="flex flex-col gap-10">
      <PlaylistGrid />
      <RecentlyPlayed />
    </div>
  );
};

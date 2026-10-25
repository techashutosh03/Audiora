import { DiscoverWeekly } from '../components/discover/DiscoverWeekly';
import { TrendingSection } from '../components/discover/TrendingSection';
import { DailyMix } from '../components/discover/DailyMix';

export const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <DiscoverWeekly />
      <DailyMix />
      <TrendingSection />
    </div>
  );
};

export default Home;

import { TrendingSection } from './TrendingSection';
import { DiscoverWeekly } from './DiscoverWeekly';
import { DailyMix } from './DailyMix';

export const DiscoverSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <DiscoverWeekly />
      <DailyMix />
      <TrendingSection />
    </div>
  );
};

import usePlayerStore from '../../store/playerStore';
import { formatTime } from '../../utils/formatters';

export const ProgressBar = ({ onSeek }) => {
  const { currentTime, duration } = usePlayerStore();

  const handleChange = (e) => {
    const newTime = parseFloat(e.target.value);
    onSeek(newTime);
  };

  return (
    <div className="w-full flex items-center gap-3 text-xs font-semibold text-slate-400">
      <span>{formatTime(currentTime)}</span>
      <input
        type="range"
        min="0"
        max={duration || 100}
        value={currentTime}
        onChange={handleChange}
        className="player-progress-bar flex-1"
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
};

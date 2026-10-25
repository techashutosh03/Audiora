import { useRef, useEffect, useState } from 'react';
import usePlayerStore from '../../store/playerStore';
import { PlayerControls } from './PlayerControls';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControl';
import { Queue } from './Queue';
import { ListMusic, Heart } from 'lucide-react';
import useUserStore from '../../store/userStore';

export const Player = () => {
  const audioRef = useRef(null);
  const [showQueue, setShowQueue] = useState(false);

  const {
    currentTrack,
    isPlaying,
    volume,
    currentTime,
    setCurrentTime,
    setDuration,
    playNext,
    togglePlay,
  } = usePlayerStore();

  const { likedTrackIds, toggleLikeTrack } = useUserStore();

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => console.warn('Audio play prevented:', err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (newTime) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  if (!currentTrack) return null;

  const isLiked = likedTrackIds.has(currentTrack.id);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-[#090a10]/95 border-t border-white/10 backdrop-blur-2xl z-40 px-8 flex items-center justify-between shadow-2xl">
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={playNext}
      />

      {/* Currently Playing Track Info */}
      <div className="flex items-center gap-4 w-1/4">
        <div className="relative group overflow-hidden rounded-xl w-14 h-14 shadow-lg shadow-black/50 border border-white/10">
          <img
            src={currentTrack.coverUrl}
            alt={currentTrack.title}
            className="w-full h-full object-cover"
          />
          {isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-0.5">
              <div className="visualizer-bar" />
              <div className="visualizer-bar" />
              <div className="visualizer-bar" />
              <div className="visualizer-bar" />
            </div>
          )}
        </div>

        <div className="flex flex-col min-w-0">
          <h4 className="text-sm font-bold text-white truncate hover:underline cursor-pointer">
            {currentTrack.title}
          </h4>
          <p className="text-xs text-slate-400 truncate hover:text-slate-200 cursor-pointer">
            {currentTrack.artist}
          </p>
        </div>

        <button
          onClick={() => toggleLikeTrack(currentTrack.id)}
          className={`p-2 rounded-full transition-all ${
            isLiked ? 'text-pink-500 scale-110' : 'text-slate-500 hover:text-white'
          }`}
        >
          <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Center Player Controls & Progress Bar */}
      <div className="flex flex-col items-center gap-2 w-2/4 max-w-xl">
        <PlayerControls />
        <ProgressBar onSeek={handleSeek} />
      </div>

      {/* Right Controls & Volume */}
      <div className="flex items-center justify-end gap-5 w-1/4">
        <button
          onClick={() => setShowQueue(!showQueue)}
          className={`p-2 rounded-xl transition-all ${
            showQueue ? 'bg-indigo-600/20 text-indigo-400' : 'text-slate-400 hover:text-white'
          }`}
          title="Queue"
        >
          <ListMusic size={20} />
        </button>
        <VolumeControl />
      </div>

      {showQueue && <Queue onClose={() => setShowQueue(false)} />}
    </div>
  );
};

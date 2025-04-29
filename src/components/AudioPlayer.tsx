
import { useState, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '@/styles/audioPlayer.css';
import { CirclePlay, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudioSampleProps {
  title: string;
  subtitle: string;
  src: string;
  language: string;
  agentName: string;
  className?: string;
}

const AudioSample = ({ title, subtitle, src, language, agentName, className }: AudioSampleProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<any>(null);

  const handlePlayClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.audio.current.pause();
      } else {
        audioRef.current.audio.current.play();
      }
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setError(null);
  };

  const handleError = () => {
    setIsPlaying(false);
    setIsLoading(false);
    setError("Could not load audio file. Please check the URL and try again.");
  };

  return (
    <div className={cn(
      "glass-card rounded-xl p-6 transition-all duration-300",
      "border border-white/5 hover:border-soraaya-indigo/30 group",
      "backdrop-blur-md shadow-xl relative",
      className
    )}>
      <div className="space-y-2 mb-6">
        <h3 className="text-xl font-medium text-soraaya-white tracking-wide">{title}</h3>
        <p className="text-soraaya-white/70 text-sm">{subtitle}</p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={handlePlayClick}
          className={cn(
            "flex items-center justify-center w-14 h-14",
            "bg-soraaya-indigo text-white rounded-full",
            "transition-all duration-300",
            "hover:bg-white hover:text-soraaya-indigo",
            "hover:scale-110 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]",
            isPlaying && "animate-pulse-light scale-110 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
          )}
        >
          {isPlaying ? 
            <Pause className="w-6 h-6" /> : 
            <CirclePlay className="w-6 h-6" />
          }
        </button>
        <span className="text-soraaya-white/70 text-sm px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
          {language}
        </span>
      </div>

      {error && (
        <p className="text-red-400 text-sm mb-3">{error}</p>
      )}

      <div className="absolute opacity-0 pointer-events-none">
        <AudioPlayer
          ref={audioRef}
          src={src}
          onPlay={handlePlay}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          onError={handleError}
          onLoadStart={() => setIsLoading(true)}
          onLoadedData={() => setIsLoading(false)}
          layout="horizontal"
          showJumpControls={false}
          customVolumeControls={[]}
          customAdditionalControls={[]}
          className="audioPlayer customAudioPlayer"
          autoPlayAfterSrcChange={false}
        />
      </div>

      <div className="absolute bottom-6 right-6 flex items-center gap-2">
        <span className="text-soraaya-white/70 text-sm">{agentName}</span>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-soraaya-indigo to-soraaya-indigo/50 flex items-center justify-center text-white text-sm font-medium">
          {agentName[0]}
        </div>
      </div>
    </div>
  );
};

export default AudioSample;

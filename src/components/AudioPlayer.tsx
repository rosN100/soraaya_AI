
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { CirclePlay } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudioSampleProps {
  title: string;
  src: string;
  className?: string;
}

const AudioSample = ({ title, src, className }: AudioSampleProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    <div className={cn("glass-card rounded-lg p-5 transition-all duration-300 hover:border-soraaya-indigo/50", className)}>
      <div className="flex items-center gap-3 mb-3">
        <div className={cn("relative", isPlaying && "animate-pulse-light")}>
          <CirclePlay className={cn("w-8 h-8 text-soraaya-indigo")} />
        </div>
        <h3 className="text-lg font-medium text-soraaya-white">{title}</h3>
      </div>
      {error && (
        <p className="text-red-400 text-sm mb-2">{error}</p>
      )}
      <AudioPlayer
        src={src}
        onPlay={handlePlay}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={handleError}
        onLoadStart={() => setIsLoading(true)}
        onLoadedData={() => setIsLoading(false)}
        layout="horizontal"
        showJumpControls={false}
        className="audioPlayer"
        autoPlayAfterSrcChange={false}
      />
    </div>
  );
};

export default AudioSample;

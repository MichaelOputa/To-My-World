import { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, Music, Volume2, VolumeX } from 'lucide-react';
import Hero from './components/Hero';
import LoveMessage from './components/LoveMessage';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Confetti from './components/Confetti';

function App() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.play().catch(() => {
          console.log('Audio playback failed or was prevented');
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [musicPlaying]);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 relative overflow-hidden">
      <audio
        ref={audioRef}
        loop
        preload="metadata"
      >
        <source
          src="https://cdn.pixabay.com/download/audio/2022/02/15/audio_d5d3ac7bea.mp3"
          type="audio/mpeg"
        />
      </audio>

      {showConfetti && <Confetti />}

      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Toggle music"
      >
        {musicPlaying ? (
          <Volume2 className="w-6 h-6 text-rose-500" />
        ) : (
          <VolumeX className="w-6 h-6 text-gray-400" />
        )}
      </button>

      <div className="sparkles-overlay fixed inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-10 w-8 h-8 text-rose-300 opacity-70 animate-pulse" />
        <Heart className="absolute top-40 right-20 w-6 h-6 text-pink-400 opacity-60 animate-bounce" />
        <Sparkles className="absolute bottom-40 left-20 w-6 h-6 text-rose-400 opacity-50 animate-pulse" />
        <Heart className="absolute bottom-20 right-40 w-8 h-8 text-pink-300 opacity-40 animate-bounce" />
      </div>

      <Hero />
      <LoveMessage />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

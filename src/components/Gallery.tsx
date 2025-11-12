import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const memories = [
  {
    image: 'src/img/2..jpg',
    caption: 'A moment to remember forever'
  },
  {
    image: 'src/img/3..jpg',
    caption: 'My love, my best friend, my everything'
  },
  {
    image: 'src/img/4..jpg',
    caption: 'Your smile lights up my world'
  },
  {
    image: 'src/img/5..jpg',
    caption: 'You are the star that blazes in my sky'
  },
  {
    image: 'src/img/6..jpg',
    caption: 'Every moment with you is a treasure'
  },
  {
    image: 'src/img/7..jpg',
    caption: 'Forever grateful for your love'
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Beautiful Memories Of You
          </h2>
          <p className="text-gray-600 text-lg flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-current" />
            Moments of you I cherish
            <Heart className="w-5 h-5 text-rose-500 fill-current" />
          </p>
        </div>

        <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
            <img
              src={memories[currentIndex].image}
              alt={memories[currentIndex].caption}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          <p className="text-center text-xl md:text-2xl text-gray-700 font-light italic mb-8">
            "{memories[currentIndex].caption}"
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {memories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-rose-500 w-8'
                      : 'bg-rose-200 hover:bg-rose-300'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {memories.map((memory, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-rose-500 scale-105'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={memory.image}
                alt={memory.caption}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

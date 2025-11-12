import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100/50 to-transparent"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-float">
          <div className="relative inline-block">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto bg-gradient-to-br from-rose-200 to-pink-200">
              <img
                src="/img/1..jpg"
                alt="My Beautiful Wife"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-rose-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Heart className="w-8 h-8 fill-current" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent animate-fade-in">
          Happy Birthday, My Love
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6">
          <Heart className="w-6 h-6 text-rose-500 fill-current animate-pulse" />
          <Heart className="w-8 h-8 text-pink-500 fill-current animate-pulse" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-6 h-6 text-rose-500 fill-current animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>

        <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed animate-fade-in-up">
          Celebrating the most amazing woman in my life
          <br />
          <span className="text-rose-600 font-semibold">Born on November 13th</span>
        </p>
      </div>
    </section>
  );
}

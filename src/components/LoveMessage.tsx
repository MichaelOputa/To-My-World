import { Heart, Sparkles } from 'lucide-react';

export default function LoveMessage() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-rose-200/30 to-pink-200/30 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-rose-500" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                My Heartbeat, Nkem
              </h2>
              <Sparkles className="w-6 h-6 text-rose-500" />
            </div>

            <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
              <p className="italic">
                On this special day, as we celebrate the day you came into this world, my heart overflows with gratitude and love beyond words.
              </p>

              <p>
                You are the light that brightens my darkest days, the warmth that fills my heart with joy, and the reason I believe in forever. Every moment with you is a precious gift, and every day I fall in love with you all over again.
              </p>

              <p>
                Your smile lights up my world like the morning sun, your laughter is the melody that makes my heart sing, and your love is the anchor that keeps me grounded. You are not just my wife; you are my best friend, my confidant, and my greatest blessing.
              </p>

              <p className="font-semibold text-rose-700">
                As we celebrate you today, I want you to know that you are cherished beyond measure, loved beyond words, and treasured beyond time.
              </p>

              <p className="italic text-center text-2xl text-rose-600 flex items-center justify-center gap-2">
                <Heart className="w-6 h-6 fill-current" />
                Happy Birthday, My Beautiful Queen
                <Heart className="w-6 h-6 fill-current" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

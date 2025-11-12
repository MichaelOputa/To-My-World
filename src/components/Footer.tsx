import { Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-rose-500 animate-pulse" />
            <Heart className="w-8 h-8 text-rose-500 fill-current animate-bounce" />
            <Sparkles className="w-6 h-6 text-rose-500 animate-pulse" />
          </div>

          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Forever Yours,
          </p>

          <p className="text-2xl md:text-3xl text-gray-700 font-light mb-6">
            Nkem
          </p>

          <div className="flex items-center justify-center gap-2 text-rose-500">
            <Heart className="w-5 h-5 fill-current" />
            <Heart className="w-6 h-6 fill-current" />
            <Heart className="w-5 h-5 fill-current" />
          </div>
        </div>

        <div className="border-t border-rose-200 pt-8">
          <p className="text-gray-500 text-sm">
            Made with endless love {currentYear}
          </p>
          <p className="text-gray-400 text-xs mt-2">
            A digital love letter for the most amazing woman in the world
          </p>
        </div>
      </div>
    </footer>
  );
}

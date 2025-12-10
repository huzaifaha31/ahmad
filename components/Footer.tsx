import React from 'react';
import { Heart, Scroll } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-manuscript-dark text-manuscript-paper py-8 mt-12 border-t-4 border-manuscript-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="font-display text-lg font-bold flex items-center justify-center md:justify-start gap-2">
              <Scroll size={20} className="text-manuscript-gold"/> MMME Archive
            </h3>
            <p className="text-sm opacity-80 mt-2 max-w-xs font-sans">
              Preserving the healing wisdom of the Malay Archipelago for future generations.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm font-sans flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-current" /> and Respect for Tradition
            </p>
            <p className="text-xs opacity-60 mt-1">
              © {new Date().getFullYear()} Malay Medical Manuscript Exploration.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

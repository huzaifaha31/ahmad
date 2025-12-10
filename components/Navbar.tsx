import React from 'react';
import { ViewState } from '../types';
import { BookOpen, Home, Info, Search } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  const getLinkClass = (view: ViewState) => {
    const base = "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-serif tracking-wide";
    if (currentView === view) {
      return `${base} bg-manuscript-gold text-white shadow-lg transform scale-105`;
    }
    return `${base} text-manuscript-brown hover:bg-manuscript-paper/50 hover:text-manuscript-dark`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F5E6CA]/90 backdrop-blur-md shadow-md border-b border-manuscript-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => onChangeView('HOME')}
          >
            <BookOpen className="h-8 w-8 text-manuscript-brown mr-2" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-manuscript-dark tracking-tighter">
                Malay Medical
              </span>
              <span className="font-serif text-xs text-manuscript-gold font-bold uppercase tracking-widest">
                Manuscript Exploration
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-4">
            <button onClick={() => onChangeView('HOME')} className={getLinkClass('HOME')}>
              <Home size={18} /> Home
            </button>
            <button onClick={() => onChangeView('BROWSE')} className={getLinkClass('BROWSE')}>
              <Search size={18} /> Browse Remedies
            </button>
            <button onClick={() => onChangeView('ABOUT')} className={getLinkClass('ABOUT')}>
              <Info size={18} /> About Us
            </button>
          </div>

          {/* Mobile menu button could go here, omitting for brevity in this specific task */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
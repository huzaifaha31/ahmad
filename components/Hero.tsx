import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative overflow-hidden bg-manuscript-paper min-h-[90vh] flex items-center">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4037' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-manuscript-gold/20 text-manuscript-dark px-4 py-2 rounded-full border border-manuscript-gold/50">
              <Leaf size={16} />
              <span className="text-sm font-bold tracking-wider uppercase font-sans">Traditional Healing</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-manuscript-dark leading-tight">
              Unlock the <span className="text-manuscript-gold italic">Wisdom</span> of the Ancients
            </h1>
            
            <p className="text-xl text-manuscript-brown/80 font-serif leading-relaxed">
              Explore a digital archive of Malay Medical Manuscripts. Discover centuries-old remedies, herbal ingredients, and spiritual practices used to treat ailments.
            </p>
            
            <button 
              onClick={onStart}
              className="group bg-manuscript-dark text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-manuscript-gold transition-all duration-300 flex items-center gap-3"
            >
              Explore Collection
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image/Visual */}
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-manuscript-gold/20 rounded-t-full transform rotate-3 scale-105 z-0"></div>
            <img 
              src="https://picsum.photos/id/1053/600/800" 
              alt="Ancient Manuscript" 
              className="relative z-10 rounded-t-full shadow-2xl border-b-8 border-manuscript-gold object-cover h-[600px] w-full"
            />
            <div className="absolute bottom-10 -left-10 bg-white p-4 shadow-lg rounded-lg border-l-4 border-nature-green max-w-xs hidden md:block z-20">
              <p className="font-serif italic text-manuscript-dark">"Every disease has a cure, and when the cure matches the disease, recovery takes place by the permission of Allah."</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;

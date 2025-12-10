import React, { useState } from 'react';
import { Remedy } from '../types';
import { X, Beaker, Leaf, Sparkles, Book, MessageCircle } from 'lucide-react';
import { analyzeRemedyWithAI } from '../services/geminiService';

interface DetailModalProps {
  remedy: Remedy;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ remedy, onClose }) => {
  const [activeTab, setActiveTab] = useState<'ingredients' | 'prep' | 'spiritual'>('ingredients');
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [showAiChat, setShowAiChat] = useState(false);

  const handleAiAsk = async () => {
    if (!aiQuestion.trim()) return;
    setIsLoadingAi(true);
    setAiResponse('');
    const answer = await analyzeRemedyWithAI(remedy, aiQuestion);
    setAiResponse(answer);
    setIsLoadingAi(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-manuscript-dark/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-[#FDF6E3] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl flex flex-col md:flex-row relative">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/50 p-2 rounded-full hover:bg-red-100 hover:text-red-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Left Image Section */}
        <div className="md:w-1/3 relative">
          <img 
            src={remedy.imageUrl} 
            alt={remedy.diseaseName} 
            className="w-full h-64 md:h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-manuscript-dark/80 to-transparent flex items-end p-6">
            <div className="text-white">
              <span className="bg-manuscript-gold px-2 py-1 text-xs font-bold uppercase rounded mb-2 inline-block">
                {remedy.category}
              </span>
              <h2 className="text-2xl font-display font-bold leading-none mb-1">{remedy.diseaseName}</h2>
              <p className="text-sm opacity-90 italic font-serif">{remedy.sourceManuscript || 'Unknown Source'}</p>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
          
          <div className="mb-6">
            <h3 className="text-manuscript-brown font-bold uppercase tracking-wide text-xs mb-2">Symptoms</h3>
            <p className="text-manuscript-dark font-serif text-lg leading-relaxed border-l-4 border-manuscript-gold pl-4">
              {remedy.symptoms}
            </p>
          </div>

          {/* Custom Tabs */}
          <div className="flex border-b border-manuscript-gold/30 mb-6">
            <button 
              onClick={() => setActiveTab('ingredients')}
              className={`flex-1 py-3 text-center font-bold font-sans transition-colors ${activeTab === 'ingredients' ? 'text-manuscript-dark border-b-2 border-manuscript-dark' : 'text-manuscript-brown/50 hover:text-manuscript-brown'}`}
            >
              <div className="flex items-center justify-center gap-2"><Leaf size={16}/> Ingredients</div>
            </button>
            <button 
              onClick={() => setActiveTab('prep')}
              className={`flex-1 py-3 text-center font-bold font-sans transition-colors ${activeTab === 'prep' ? 'text-manuscript-dark border-b-2 border-manuscript-dark' : 'text-manuscript-brown/50 hover:text-manuscript-brown'}`}
            >
              <div className="flex items-center justify-center gap-2"><Beaker size={16}/> Method</div>
            </button>
            <button 
              onClick={() => setActiveTab('spiritual')}
              className={`flex-1 py-3 text-center font-bold font-sans transition-colors ${activeTab === 'spiritual' ? 'text-manuscript-dark border-b-2 border-manuscript-dark' : 'text-manuscript-brown/50 hover:text-manuscript-brown'}`}
            >
              <div className="flex items-center justify-center gap-2"><Sparkles size={16}/> Spiritual</div>
            </button>
          </div>

          <div className="flex-grow">
            {activeTab === 'ingredients' && (
              <ul className="space-y-3">
                {remedy.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border border-manuscript-gold/20">
                    <div className="bg-nature-green/10 p-2 rounded-full text-nature-green">
                      <Leaf size={18} />
                    </div>
                    <span className="font-serif text-manuscript-dark self-center text-lg">{ing}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'prep' && (
              <div className="space-y-6 animate-in fade-in">
                <div>
                  <h4 className="font-bold text-manuscript-brown mb-2 flex items-center gap-2"><Beaker size={18}/> Preparation</h4>
                  <p className="font-serif text-manuscript-dark leading-relaxed">{remedy.preparationMethod}</p>
                </div>
                <div>
                  <h4 className="font-bold text-manuscript-brown mb-2 flex items-center gap-2"><Book size={18}/> Method of Use</h4>
                  <p className="font-serif text-manuscript-dark leading-relaxed">{remedy.methodOfUse}</p>
                </div>
              </div>
            )}

            {activeTab === 'spiritual' && (
              <div className="bg-manuscript-gold/10 p-6 rounded-lg border border-manuscript-gold/30 text-center animate-in zoom-in-95">
                <Sparkles size={32} className="mx-auto text-manuscript-gold mb-4" />
                <h4 className="font-display font-bold text-xl text-manuscript-dark mb-4">Spiritual Component</h4>
                <p className="font-serif italic text-lg leading-relaxed text-manuscript-brown">
                  {remedy.spiritualElements || "No specific spiritual elements listed for this remedy."}
                </p>
                <div className="mt-4 text-xs uppercase tracking-widest text-manuscript-brown/60">
                  Always recite with pure intention (Niat)
                </div>
              </div>
            )}
          </div>

          {/* AI Helper Section */}
          <div className="mt-8 pt-6 border-t border-manuscript-brown/10">
            {!showAiChat ? (
              <button 
                onClick={() => setShowAiChat(true)}
                className="w-full py-3 bg-gradient-to-r from-indigo-900 to-purple-900 text-white rounded-lg shadow hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} /> Ask AI Scholar about this Remedy
              </button>
            ) : (
              <div className="bg-white p-4 rounded-lg shadow-inner border border-gray-200">
                <div className="flex gap-2 mb-3">
                  <input 
                    type="text" 
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    placeholder="E.g., What is 'Daun Setawar' used for?"
                    className="flex-grow p-2 border border-gray-300 rounded font-sans focus:outline-none focus:border-manuscript-gold"
                  />
                  <button 
                    onClick={handleAiAsk}
                    disabled={isLoadingAi}
                    className="bg-manuscript-gold text-white px-4 py-2 rounded font-bold hover:bg-manuscript-brown disabled:opacity-50"
                  >
                    {isLoadingAi ? 'Thinking...' : 'Ask'}
                  </button>
                </div>
                {aiResponse && (
                  <div className="bg-gray-50 p-3 rounded text-sm font-serif text-gray-800 leading-relaxed max-h-40 overflow-y-auto">
                    {aiResponse}
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailModal;
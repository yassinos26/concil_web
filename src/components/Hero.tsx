import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { JoinModal } from './JoinModal';

export function Hero() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const handleLearnMore = () => {
    window.open('https://www.facebook.com/profile.php?id=61558479472966', '_blank');
  };

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-500 to-gray-900 opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} />
            <span>Bienvenue au Youth Council</span>
          </div>
          
          <h1 className="text-gray-900 mb-6 max-w-4xl mx-auto">
            Ensemble, Construisons l'Avenir de Notre Jeunesse
          </h1>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Le Youth Council est une plateforme dédiée à l'engagement des jeunes, 
            favorisant le leadership, l'innovation et l'action collective pour un changement positif.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsJoinModalOpen(true)}
              className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
            >
              Rejoignez-nous
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={handleLearnMore}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow"
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>

      {/* Join Modal */}
      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </div>
  );
}

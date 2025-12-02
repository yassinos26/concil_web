import { useState } from 'react';
import { X, Send, User, Mail, Phone, Calendar } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer le lien mailto avec les données du formulaire
    const emailTo = 'yassine.250mellouli@gmail.com';
    const emailSubject = encodeURIComponent('Nouvelle demande d\'adhésion - Youth Council');
    const emailBody = encodeURIComponent(
      `Nouvelle demande d'adhésion au Youth Council\n\n` +
      `Nom Complet: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Téléphone: ${formData.phone}\n` +
      `Âge: ${formData.age}\n\n` +
      `Motivation:\n${formData.motivation}`
    );
    
    // Ouvrir le client email avec les informations pré-remplies
    window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
    
    // Réinitialiser le formulaire et fermer le modal
    setFormData({ fullName: '', email: '', phone: '', age: '', motivation: '' });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-pink-600 to-gray-900 text-white p-6 rounded-t-2xl flex items-center justify-between">
          <h3 className="text-white">Rejoignez le Youth Council</h3>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Remplissez ce formulaire pour devenir membre du Youth Council et participez à nos activités !
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nom Complet */}
            <div>
              <label htmlFor="fullName" className="block text-gray-700 mb-2 flex items-center gap-2">
                <User size={18} className="text-pink-600" />
                Nom Complet *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                placeholder="Votre nom complet"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2 flex items-center gap-2">
                <Mail size={18} className="text-pink-600" />
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                placeholder="votre@email.com"
              />
            </div>

            {/* Téléphone */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2 flex items-center gap-2">
                <Phone size={18} className="text-pink-600" />
                Téléphone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                placeholder="+216 XX XXX XXX"
              />
            </div>

            {/* Âge */}
            <div>
              <label htmlFor="age" className="block text-gray-700 mb-2 flex items-center gap-2">
                <Calendar size={18} className="text-pink-600" />
                Âge *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="10"
                max="99"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                placeholder="Votre âge"
              />
            </div>

            {/* Motivation */}
            <div>
              <label htmlFor="motivation" className="block text-gray-700 mb-2">
                Pourquoi souhaitez-vous rejoindre le Youth Council ? *
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                placeholder="Parlez-nous de votre motivation et de ce que vous espérez apporter au Youth Council..."
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
              >
                Envoyer ma demande
                <Send size={20} />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

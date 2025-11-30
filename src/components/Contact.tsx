import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer le lien mailto avec les données du formulaire
    const emailTo = 'yassine.250mellouli@gmail.com';
    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Ouvrir le client email avec les informations pré-remplies
    window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
    
    // Réinitialiser le formulaire
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Vous avez des questions ou souhaitez en savoir plus sur le Youth Council? 
            N'hésitez pas à nous contacter!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-900 mb-6">Informations de Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-700">Email</p>
                    <p className="text-gray-900">contact@youthcouncil.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-700">Téléphone</p>
                    <p className="text-gray-900">+123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-700">Adresse</p>
                    <p className="text-gray-900">123 Rue de la Jeunesse<br />Ville, Pays</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl">
              <h4 className="text-gray-900 mb-3">Horaires d'Ouverture</h4>
              <div className="space-y-2 text-gray-600">
                <p>Lundi - Vendredi: 9h00 - 18h00</p>
                <p>Samedi , Dimanche: Fermé</p>
              </div>
            </div>

            {/* Carte & Localisation */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl">
              <h4 className="text-gray-900 mb-3">Carte & Localisation</h4>
              <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-pink-200">
                <iframe
                  src="https://www.google.com/maps?q=35.8029311,10.6051748&hl=fr&z=18&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Youth Council Location"
                />
              </div>
              <p className="text-gray-600 mt-3">
                Cliquez sur la carte pour voir l'itinéraire
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Nom Complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
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

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
              >
                Envoyer le Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

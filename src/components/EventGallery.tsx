import { Calendar, MapPin, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EventGallery() {
  const events = [
    {
      id: 1,
      title: 'Conférence Jeunesse 2024',
      date: '15 Octobre 2024',
      location: 'Centre Communautaire',
      participants: 120,
      image: 'https://images.unsplash.com/photo-1762829373003-3911ee464c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGNvbmZlcmVuY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc2NDQ0NzUxMHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      title: 'Atelier Leadership',
      date: '22 Septembre 2024',
      location: 'Salle de Formation',
      participants: 45,
      image: 'https://images.unsplash.com/photo-1735639013995-086e648eaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzaG9wfGVufDF8fHx8MTc2NDM0NjcyN3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      title: 'Journée Bénévolat',
      date: '5 Août 2024',
      location: 'Parc Municipal',
      participants: 80,
      image: 'https://images.unsplash.com/photo-1761666508658-381c63e409fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXIlMjBldmVudHxlbnwxfHx8fDE3NjQ0NDc1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      title: 'Rencontre Networking',
      date: '10 Juillet 2024',
      location: 'Espace Coworking',
      participants: 60,
      image: 'https://images.unsplash.com/photo-1763328719057-ff6b03c816d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIweW91bmclMjBwZW9wbGV8ZW58MXx8fHwxNzY0NDQ3NTExfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Galerie d'Événements</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Revivez nos événements passés et découvrez l'énergie de notre communauté
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <Users size={16} />
                  <span>{event.participants}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-gray-900 mb-3">{event.title}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} className="text-pink-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} className="text-pink-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow">
            Voir tous les événements
          </button>
        </div>
      </div>
    </section>
  );
}

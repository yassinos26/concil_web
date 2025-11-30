import { Calendar, BookOpen, Megaphone, Trophy } from 'lucide-react';

export function Activities() {
  const activities = [
    {
      icon: Calendar,
      title: 'Événements Communautaires',
      description: 'Organisation d\'événements réguliers pour rassembler les jeunes et promouvoir l\'engagement social.',
      color: 'bg-pink-600'
    },
    {
      icon: BookOpen,
      title: 'Formations & Ateliers',
      description: 'Sessions de formation sur le leadership, la communication et le développement personnel.',
      color: 'bg-gray-900'
    },
    {
      icon: Megaphone,
      title: 'Campagnes de Sensibilisation',
      description: 'Initiatives pour sensibiliser sur les enjeux importants affectant la jeunesse.',
      color: 'bg-pink-600'
    },
    {
      icon: Trophy,
      title: 'Projets d\'Impact',
      description: 'Développement et mise en œuvre de projets concrets pour créer un changement durable.',
      color: 'bg-gray-900'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Nos Activités</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez les différentes activités et programmes que nous proposons pour 
            engager et développer les compétences des jeunes leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className={`${activity.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

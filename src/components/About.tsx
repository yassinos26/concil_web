import { Target, Heart, Lightbulb, Users } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Autonomiser les jeunes à devenir des leaders et des agents de changement dans leurs communautés.'
    },
    {
      icon: Heart,
      title: 'Nos Valeurs',
      description: 'Engagement, diversité, inclusion et excellence dans tout ce que nous faisons.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Encourager la créativité et les nouvelles idées pour résoudre les défis sociaux.'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Créer un réseau fort de jeunes engagés et motivés pour faire la différence.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Notre Concept</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Le Youth Council est une initiative qui rassemble les jeunes leaders pour créer 
            un impact positif à travers des projets innovants, des activités communautaires 
            et un engagement significatif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className={`${index % 2 === 0 ? 'bg-pink-600' : 'bg-gray-900'} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Award, Heart, Users } from 'lucide-react';

export function Testimonials() {
  const partners = [
    {
      id: 1,
      name: 'جمعية أولادنا',
      nameAr: 'Association Ouladna',
      description: 'Partenaire pour le développement de la jeunesse',
      category: 'Association'
    },
    {
      id: 2,
      name: 'Ministère de la Jeunesse',
      description: 'Soutien institutionnel et gouvernemental',
      category: 'Institution'
    },
    {
      id: 3,
      name: 'UNESCO',
      description: 'Partenaire international pour l\'éducation',
      category: 'Organisation Internationale'
    },
    {
      id: 4,
      name: 'UNICEF',
      description: 'Protection et développement des jeunes',
      category: 'Organisation Internationale'
    },
    {
      id: 5,
      name: 'Fédération Tunisienne',
      description: 'Réseau national de la jeunesse',
      category: 'Fédération'
    },
    {
      id: 6,
      name: 'الهلال الأحمر',
      nameAr: 'Croissant Rouge',
      description: 'Partenaire humanitaire et social',
      category: 'Association'
    }
  ];

  const stats = [
    {
      icon: Award,
      value: '15+',
      label: 'Partenariats Actifs',
      color: 'bg-pink-600'
    },
    {
      icon: Heart,
      value: '50+',
      label: 'Projets Réalisés',
      color: 'bg-gray-900'
    },
    {
      icon: Users,
      value: '1000+',
      label: 'Jeunes Impactés',
      color: 'bg-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Nos Partenaires & Impact</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ensemble, nous construisons un avenir meilleur pour la jeunesse grâce à des partenariats solides et durables
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
              >
                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                <p className="text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-pink-200 group"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">{partner.name.charAt(0)}</span>
                </div>
              </div>
              <h4 className="text-gray-900 text-center mb-2">{partner.name}</h4>
              {partner.nameAr && (
                <p className="text-gray-500 text-center mb-3">{partner.nameAr}</p>
              )}
              <p className="text-gray-600 text-center mb-3">{partner.description}</p>
              <div className="flex justify-center">
                <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

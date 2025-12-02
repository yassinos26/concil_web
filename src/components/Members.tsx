import { useState } from 'react';
import { Users, Star, Award, Zap, CheckCircle, Eye } from 'lucide-react';
import { MemberModal } from './MemberModal';

export function Members() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allMembers = [
    {
      id: 1,
      name: 'Sarah Martinez',
      role: 'Président',
      image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDM4MjY5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Membres Actifs'
    },
    {
      id: 2,
      name: 'Alexandre Dubois',
      role: 'Vice-Président',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDM4NDQxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Membres Actifs'
    },
    {
      id: 3,
      name: 'Emma Laurent',
      role: 'Secrétaire',
      image: 'https://images.unsplash.com/photo-1596441248825-45b1f60ce4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGxlYWRlcnxlbnwxfHx8fDE3NjQ0NDc1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Groupe des Relations Générales'
    },
    {
      id: 4,
      name: 'Lucas Bernard',
      role: 'Responsable Projets',
      image: 'https://images.unsplash.com/photo-1551909583-1404a4dd872d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ0NzUxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Groupe des Projets'
    },
    {
      id: 5,
      name: 'Sophie Martin',
      role: 'Coordinatrice Événements',
      image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDM4MjY5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Groupe Logistique & Organisation'
    },
    {
      id: 6,
      name: 'Thomas Petit',
      role: 'Responsable Communication',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDM4NDQxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Groupe des Relations Générales'
    },
    {
      id: 7,
      name: 'Marie Leroy',
      role: 'Membre Actif',
      image: 'https://images.unsplash.com/photo-1596441248825-45b1f60ce4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGxlYWRlcnxlbnwxfHx8fDE3NjQ0NDc1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Membres Actifs'
    },
    {
      id: 8,
      name: 'David Moreau',
      role: 'Responsable Logistique',
      image: 'https://images.unsplash.com/photo-1551909583-1404a4dd872d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ0NzUxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Groupe Logistique & Organisation'
    },
    {
      id: 9,
      name: 'Julie Simon',
      role: 'Assistante Projets',
      image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDM4MjY5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Groupe des Projets'
    },
    {
      id: 10,
      name: 'Antoine Roux',
      role: 'Membre Actif',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDM4NDQxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Membres Actifs'
    }
  ];

  const memberCategories = [
    {
      icon: Star,
      title: 'Membres Actifs',
      count: 7,
      description: 'Membres régulièrement engagés dans les activités du conseil',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      progress: 85
    },
    {
      icon: Award,
      title: 'Groupe des Projets',
      count: 4,
      description: 'Responsables de la planification et exécution des projets',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      progress: 70
    },
    {
      icon: Zap,
      title: 'Groupe Logistique & Organisation',
      count: 3,
      description: 'Gestion de la logistique et coordination des événements',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      progress: 60
    },
    {
      icon: CheckCircle,
      title: 'Groupe des Relations Générales',
      count: 3,
      description: 'Communication externe et relations publiques',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      progress: 55
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-4">
            <Users size={20} />
            <span>Notre Équipe</span>
          </div>
          <h2 className="text-gray-900 mb-4">Catégories de Membres</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Notre conseil est organisé en quatre groupes principaux, chacun avec des 
            responsabilités spécifiques pour assurer le succès de nos initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {memberCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${index % 2 === 0 ? 'bg-pink-600' : 'bg-gray-900'} w-14 h-14 rounded-xl flex items-center justify-center`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`${category.bgColor} px-3 py-1 rounded-full flex items-center gap-2`}>
                      <Users size={16} className="text-gray-600" />
                      <span className="text-gray-700">{category.count}</span>
                    </div>
                    <CheckCircle className="text-green-500" size={20} />
                  </div>
                </div>

                <h3 className="text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Participation</span>
                    <span>{category.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${index % 2 === 0 ? 'bg-pink-600' : 'bg-gray-900'} h-2 rounded-full transition-all`}
                      style={{ width: `${category.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
          >
            <Eye size={20} />
            Voir tous les membres
          </button>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow">
            Rejoindre une Catégorie
          </button>
        </div>
      </div>

      <MemberModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        members={allMembers}
      />
    </section>
  );
}

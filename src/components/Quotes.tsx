import { Quote } from 'lucide-react';

export function Quotes() {
  const Quotes = [
    {
      id: 1,
      name: 'Adem bouthina ',
      role: 'Membre Actif',
      image: 'https://images.unsplash.com/photo-1596441248825-45b1f60ce4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGxlYWRlcnxlbnwxfHx8fDE3NjQ0NDc1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Le Youth Council m\'a permis de développer mes compétences en leadership et de rencontrer des jeunes passionnés. C\'est une expérience transformative!'
    },
    {
      id: 2,
      name: 'Marc Lefebvre',
      role: 'Coordinateur Projets',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDM4NDQxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Grâce à cette plateforme, j\'ai pu mettre en œuvre des projets qui ont un réel impact dans notre communauté. Je recommande vivement!'
    },
    {
      id: 3,
      name: 'Amélie Rousseau',
      role: 'Membre Relations Générales',
      image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDM4MjY5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Une communauté incroyable où chaque voix compte. Les opportunités de croissance personnelle et professionnelle sont infinies.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Témoignages</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que nos membres disent de leur expérience au Youth Council
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Quotes.map((Quotes) => (
            <div 
              key={Quotes.id}
              className="bg-gradient-to-br from-pink-50 to-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow relative"
            >
              <Quote className="text-pink-600 mb-4" size={32} />
              <p className="text-gray-700 mb-6 italic">"{Quotes.text}"</p>
              
              <div className="flex items-center gap-4">
                <img
                  src={Quotes.image}
                  alt={Quotes.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-pink-600"
                />
                <div>
                  <p className="text-gray-900">{Quotes.name}</p>
                  <p className="text-gray-600">{Quotes.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
